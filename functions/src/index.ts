import { randomBytes } from 'crypto'
import { initializeApp } from 'firebase-admin/app'
import { Timestamp, getFirestore } from 'firebase-admin/firestore'
import { defineSecret, defineString } from 'firebase-functions/params'
import { onRequest } from 'firebase-functions/v2/https'

initializeApp()

const region = 'asia-east1'
const threadsAppSecret = defineSecret('THREADS_APP_SECRET')
const threadsAppId = defineString('THREADS_APP_ID')
const threadsRedirectUri = defineString('THREADS_REDIRECT_URI')
const scopes = 'threads_basic,threads_read_replies'
const allowedHosts = new Set([
  'localhost',
  '127.0.0.1',
  'thread-5c032.web.app',
  'thread-5c032.firebaseapp.com',
  'peggicl8612.github.io',
])

interface ThreadsPage<T> {
  data?: T[]
  paging?: { cursors?: { after?: string }; next?: string }
}

interface SessionRecord {
  accessToken: string
  userId: string
  username: string
  expiresAt: Timestamp
}

function allowedReturn(value: string) {
  try {
    const url = new URL(value)
    const local = url.protocol === 'http:' && (url.hostname === 'localhost' || url.hostname === '127.0.0.1')
    const hosted = url.protocol === 'https:' && allowedHosts.has(url.hostname)
    return local || hosted
  } catch {
    return false
  }
}

function readJson(body: unknown) {
  if (typeof body === 'string') return JSON.parse(body) as Record<string, unknown>
  if (body && typeof body === 'object') return body as Record<string, unknown>
  return {}
}

async function threadsFetch<T>(path: string, token: string, params: Record<string, string> = {}) {
  const url = new URL(path.startsWith('https://') ? path : `https://graph.threads.net/v1.0/${path}`)
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value)
  url.searchParams.set('access_token', token)
  const response = await fetch(url)
  const payload = (await response.json()) as T & { error?: { message?: string } }
  if (!response.ok) throw new Error(payload.error?.message || 'Threads API 請求失敗')
  return payload
}

async function requireSession(authorization: string | undefined) {
  const sessionId = authorization?.startsWith('Bearer ') ? authorization.slice(7) : ''
  if (!sessionId) return null
  const snapshot = await getFirestore().collection('sessions').doc(sessionId).get()
  if (!snapshot.exists) return null
  const session = snapshot.data() as SessionRecord
  if (session.expiresAt.toMillis() <= Date.now()) return null
  return session
}

export const threadsAuthStart = onRequest({ region, cors: true, invoker: 'public' }, async (req, res) => {
  const returnUrl = typeof req.query.return === 'string' ? req.query.return : 'http://localhost:5173'
  if (!allowedReturn(returnUrl)) {
    res.status(400).send('不允許的返回網址')
    return
  }

  const state = randomBytes(24).toString('hex')
  await getFirestore().collection('oauthStates').doc(state).set({
    returnUrl,
    createdAt: Timestamp.now(),
  })

  const url = new URL('https://threads.net/oauth/authorize')
  url.searchParams.set('client_id', threadsAppId.value())
  url.searchParams.set('redirect_uri', threadsRedirectUri.value())
  url.searchParams.set('scope', scopes)
  url.searchParams.set('response_type', 'code')
  url.searchParams.set('state', state)
  res.redirect(url.toString())
})

export const threadsOAuthCallback = onRequest(
  { region, cors: false, invoker: 'public', secrets: [threadsAppSecret] },
  async (req, res) => {
    const state = typeof req.query.state === 'string' ? req.query.state : ''
    const code = typeof req.query.code === 'string' ? req.query.code : ''
    const stateRef = getFirestore().collection('oauthStates').doc(state)
    const stateSnapshot = state ? await stateRef.get() : null
    const returnUrl = stateSnapshot?.data()?.returnUrl as string | undefined
    const createdAt = stateSnapshot?.data()?.createdAt as Timestamp | undefined
    const stateIsFresh = Boolean(createdAt && Date.now() - createdAt.toMillis() < 10 * 60 * 1000)

    if (!returnUrl || !allowedReturn(returnUrl) || !stateIsFresh) {
      res.status(400).send('授權狀態已失效，請回到網站重新登入')
      return
    }
    await stateRef.delete()

    const destination = new URL(returnUrl)
    if (!code || req.query.error) {
      destination.searchParams.set('error', 'denied')
      res.redirect(destination.toString())
      return
    }

    try {
      const tokenBody = new URLSearchParams({
        client_id: threadsAppId.value(),
        client_secret: threadsAppSecret.value(),
        grant_type: 'authorization_code',
        redirect_uri: threadsRedirectUri.value(),
        code,
      })
      const tokenResponse = await fetch('https://graph.threads.net/oauth/access_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: tokenBody,
      })
      const shortLived = (await tokenResponse.json()) as { access_token?: string; error_message?: string }
      if (!tokenResponse.ok || !shortLived.access_token) throw new Error(shortLived.error_message || '無法取得授權')

      const longLivedUrl = new URL('https://graph.threads.net/access_token')
      longLivedUrl.searchParams.set('grant_type', 'th_exchange_token')
      longLivedUrl.searchParams.set('client_secret', threadsAppSecret.value())
      longLivedUrl.searchParams.set('access_token', shortLived.access_token)
      const longLivedResponse = await fetch(longLivedUrl)
      const longLived = (await longLivedResponse.json()) as { access_token?: string; expires_in?: number }
      if (!longLivedResponse.ok || !longLived.access_token) throw new Error('無法延長授權')

      const profile = await threadsFetch<{ id: string; username?: string }>('me', longLived.access_token, {
        fields: 'id,username',
      })
      const sessionId = randomBytes(32).toString('hex')
      const loginCode = randomBytes(24).toString('hex')
      const expiresAt = Timestamp.fromMillis(Date.now() + (longLived.expires_in ?? 3600) * 1000)
      const batch = getFirestore().batch()
      batch.set(getFirestore().collection('sessions').doc(sessionId), {
        accessToken: longLived.access_token,
        userId: String(profile.id),
        username: profile.username ?? 'threads-user',
        expiresAt,
      })
      batch.set(getFirestore().collection('loginCodes').doc(loginCode), {
        sessionId,
        createdAt: Timestamp.now(),
      })
      await batch.commit()

      destination.searchParams.set('login', loginCode)
      res.redirect(destination.toString())
    } catch {
      destination.searchParams.set('error', 'token')
      res.redirect(destination.toString())
    }
  },
)

export const threadsSession = onRequest({ region, cors: true, invoker: 'public' }, async (req, res) => {
  const code = String(readJson(req.body).code ?? '')
  const codeRef = getFirestore().collection('loginCodes').doc(code)
  const snapshot = code ? await codeRef.get() : null
  const createdAt = snapshot?.data()?.createdAt as Timestamp | undefined
  const sessionId = snapshot?.data()?.sessionId as string | undefined
  if (!sessionId || !createdAt || Date.now() - createdAt.toMillis() > 2 * 60 * 1000) {
    res.status(401).json({ error: '登入代碼已失效' })
    return
  }
  await codeRef.delete()
  const session = await getFirestore().collection('sessions').doc(sessionId).get()
  const data = session.data() as SessionRecord | undefined
  if (!data) {
    res.status(401).json({ error: '找不到登入資料' })
    return
  }
  res.json({ sessionId, username: data.username, userId: data.userId })
})

export const threadsPosts = onRequest({ region, cors: true, invoker: 'public' }, async (req, res) => {
  const session = await requireSession(req.header('authorization'))
  if (!session) {
    res.status(401).json({ error: '尚未登入' })
    return
  }
  try {
    const posts: Array<{ id: string; text: string; timestamp: string }> = []
    let after = ''
    for (let page = 0; page < 10 && posts.length < 50; page += 1) {
      const params: Record<string, string> = { fields: 'id,text,timestamp', limit: '25' }
      if (after) params.after = after
      const result = await threadsFetch<ThreadsPage<{ id: string; text?: string; timestamp?: string }>>(
        'me/threads',
        session.accessToken,
        params,
      )
      for (const post of result.data ?? []) {
        posts.push({
          id: post.id,
          text: post.text?.trim() || '（這則貼文沒有文字）',
          timestamp: post.timestamp || '',
        })
      }
      after = result.paging?.next ? result.paging.cursors?.after || '' : ''
      if (!after) break
    }
    res.json({ posts })
  } catch {
    res.status(502).json({ error: '無法讀取貼文' })
  }
})

export const threadsReplies = onRequest({ region, cors: true, invoker: 'public', timeoutSeconds: 120 }, async (req, res) => {
  const session = await requireSession(req.header('authorization'))
  const mediaId = String(readJson(req.body).mediaId ?? '')
  if (!session) {
    res.status(401).json({ error: '尚未登入' })
    return
  }
  if (!/^\d+$/.test(mediaId)) {
    res.status(400).json({ error: '貼文編號不正確' })
    return
  }

  try {
    const replies: Array<{ id: string; username: string; text: string; timestamp: string }> = []
    let after = ''
    for (let page = 0; page < 40; page += 1) {
      const params: Record<string, string> = { fields: 'id,text,username,timestamp', limit: '100' }
      if (after) params.after = after
      const result = await threadsFetch<ThreadsPage<{ id: string; text?: string; username?: string; timestamp?: string }>>(
        `${mediaId}/replies`,
        session.accessToken,
        params,
      )
      for (const reply of result.data ?? []) {
        if (!reply.username) continue
        replies.push({
          id: reply.id,
          username: reply.username,
          text: reply.text?.trim() || '（沒有文字）',
          timestamp: reply.timestamp || '',
        })
      }
      after = result.paging?.next ? result.paging.cursors?.after || '' : ''
      if (!after) break
    }
    res.json({ replies })
  } catch {
    res.status(502).json({ error: '無法讀取留言' })
  }
})
