export interface ThreadsProfile {
  sessionId: string
  username: string
  userId: string
}

export interface ThreadsPost {
  id: string
  text: string
  timestamp: string
}

export interface ThreadsReply {
  id: string
  username: string
  text: string
  timestamp: string
}

const SESSION_KEY = 'threadpick.session'
const base = import.meta.env.VITE_FUNCTIONS_BASE

export function savedSession(): ThreadsProfile | null {
  const raw = sessionStorage.getItem(SESSION_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw) as ThreadsProfile
  } catch {
    return null
  }
}

export function clearSession() {
  sessionStorage.removeItem(SESSION_KEY)
}

export function loginWithThreads() {
  const returnUrl = window.location.origin + window.location.pathname
  window.location.href = `${base}/threadsAuthStart?return=${encodeURIComponent(returnUrl)}`
}

export async function completeLogin(code: string): Promise<ThreadsProfile> {
  const response = await fetch(`${base}/threadsSession`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
  })
  if (!response.ok) throw new Error('登入交換失敗')
  const profile = (await response.json()) as ThreadsProfile
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(profile))
  return profile
}

async function api<T>(path: string, sessionId: string, body?: unknown): Promise<T> {
  const response = await fetch(`${base}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionId}`,
    },
    body: JSON.stringify(body ?? {}),
  })
  if (response.status === 401) throw new Error('登入已逾期，請重新使用 Threads 登入')
  if (!response.ok) throw new Error('Threads 資料讀取失敗')
  return response.json() as Promise<T>
}

export function fetchPosts(sessionId: string) {
  return api<{ posts: ThreadsPost[] }>('threadsPosts', sessionId)
}

export function fetchReplies(sessionId: string, mediaId: string) {
  return api<{ replies: ThreadsReply[] }>('threadsReplies', sessionId, { mediaId })
}
