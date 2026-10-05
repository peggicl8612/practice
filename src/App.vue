<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import {
  clearSession,
  completeLogin,
  fetchPosts,
  fetchReplies,
  loginWithThreads,
  savedSession,
  type ThreadsProfile,
} from './threads'

type Step = 'posts' | 'rules' | 'result'

interface ThreadPost {
  id: string
  text: string
  date: string
  timestamp: number
  tone: 'coral' | 'violet' | 'mint'
}

interface Entrant {
  id: string
  handle: string
  name: string
  avatar: string
  comment: string
  time: string
}

const tones: ThreadPost['tone'][] = ['coral', 'violet', 'mint']
const theme = ref<'light' | 'dark'>(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
const loggedIn = ref(false)
const currentStep = ref<Step>('posts')
const posts = ref<ThreadPost[]>([])
const replies = ref<Entrant[]>([])
const selectedPostId = ref('')
const isImporting = ref(false)
const postsLoading = ref(false)
const prizeName = ref('')
const winnerCount = ref(1)
const uniqueOnly = ref(true)
const noRepeatWinner = ref(true)
const excludeMe = ref(true)
const winners = ref<Entrant[]>([])
const isDrawing = ref(false)
const authError = ref('')
const profile = ref<ThreadsProfile | null>(null)

const pageSize = 6
const currentPage = ref(1)
const visiblePosts = computed(() => {
  const list = [...posts.value]
  list.sort((a, b) => b.timestamp - a.timestamp)
  return list
})
const totalPages = computed(() => Math.max(1, Math.ceil(visiblePosts.value.length / pageSize)))
const pagedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return visiblePosts.value.slice(start, start + pageSize)
})
const selectedPost = computed(() => visiblePosts.value.find((post) => post.id === selectedPostId.value) ?? null)
const stepNumber = computed(() => currentStep.value === 'posts' ? 1 : currentStep.value === 'rules' ? 2 : 3)
const initials = computed(() => (profile.value?.username ?? 'ME').slice(0, 2).toUpperCase())
const eligible = computed(() => {
  let list = replies.value
  if (excludeMe.value && profile.value) {
    list = list.filter((item) => item.handle.toLowerCase() !== `@${profile.value?.username.toLowerCase()}`)
  }
  if (!uniqueOnly.value) return list
  const seen = new Set<string>()
  return list.filter((item) => {
    const key = item.handle.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
})
const duplicateCount = computed(() => replies.value.length - eligible.value.length)
const previewEntrants = computed(() => eligible.value.slice(0, 4))

function formatDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '日期未知'
  return new Intl.DateTimeFormat('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' }).format(date)
}

function formatTime(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat('zh-TW', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(date)
}

function toEntrant(reply: { id: string; username: string; text: string; timestamp: string }): Entrant {
  return {
    id: reply.id,
    handle: `@${reply.username}`,
    name: reply.username,
    avatar: reply.username.slice(0, 2).toUpperCase(),
    comment: reply.text,
    time: formatTime(reply.timestamp),
  }
}

async function loadPosts() {
  if (!profile.value) return
  postsLoading.value = true
  authError.value = ''
  try {
    const result = await fetchPosts(profile.value.sessionId)
    posts.value = result.posts.map((post, index) => ({
      id: post.id,
      text: post.text,
      date: formatDate(post.timestamp),
      timestamp: new Date(post.timestamp).getTime() || 0,
      tone: tones[index % tones.length],
    }))
    currentPage.value = 1
    selectedPostId.value = posts.value[0]?.id ?? ''
  } catch (error) {
    authError.value = error instanceof Error ? error.message : '無法讀取貼文'
    if (authError.value.includes('重新使用 Threads 登入')) logout()
  } finally {
    postsLoading.value = false
  }
}

function applyTheme(next: 'light' | 'dark') {
  theme.value = next
  document.documentElement.dataset.theme = next
  localStorage.setItem('threadpick.theme', next)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#111111' : '#ffffff')
}

function toggleTheme() {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}

function login() {
  authError.value = ''
  loginWithThreads()
}

function logout() {
  clearSession()
  profile.value = null
  loggedIn.value = false
  currentPage.value = 1
  posts.value = []
  replies.value = []
  winners.value = []
  currentStep.value = 'posts'
}

function selectPost(id: string) {
  selectedPostId.value = id
}

function goToPage(page: number) {
  currentPage.value = Math.min(totalPages.value, Math.max(1, page))
}

async function importReplies() {
  if (!profile.value || !selectedPost.value) return
  isImporting.value = true
  authError.value = ''
  try {
    const result = await fetchReplies(profile.value.sessionId, selectedPost.value.id)
    replies.value = result.replies.map(toEntrant)
    winnerCount.value = Math.min(3, Math.max(1, eligible.value.length))
    currentStep.value = 'rules'
  } catch (error) {
    authError.value = error instanceof Error ? error.message : '無法讀取留言'
  } finally {
    isImporting.value = false
  }
}

function changeWinnerCount(delta: number) {
  const max = Math.max(1, eligible.value.length)
  winnerCount.value = Math.min(max, Math.max(1, winnerCount.value + delta))
}

function drawWinners() {
  isDrawing.value = true
  winners.value = []
  window.setTimeout(() => {
    const pool = [...eligible.value]
    const picked: Entrant[] = []
    const used = new Set<string>()
    while (picked.length < winnerCount.value && pool.length > 0) {
      const index = Math.floor(Math.random() * pool.length)
      const candidate = pool.splice(index, 1)[0]
      if (!candidate) break
      const key = candidate.handle.toLowerCase()
      if (noRepeatWinner.value && used.has(key)) continue
      used.add(key)
      picked.push(candidate)
    }
    winners.value = picked
    isDrawing.value = false
    currentStep.value = 'result'
  }, 900)
}

async function copyHandle(handle: string) {
  await navigator.clipboard.writeText(handle)
}

function restart() {
  winners.value = []
  replies.value = []
  currentPage.value = 1
  currentStep.value = 'posts'
}

onMounted(async () => {
  const saved = localStorage.getItem('threadpick.theme')
  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  applyTheme(saved === 'light' || saved === 'dark' ? saved : preferred)

  const params = new URLSearchParams(window.location.search)
  const loginCode = params.get('login')
  if (params.get('error')) authError.value = 'Threads 授權未完成，請再試一次。'
  if (loginCode) {
    try {
      profile.value = await completeLogin(loginCode)
      loggedIn.value = true
      window.history.replaceState({}, '', window.location.pathname)
      await loadPosts()
    } catch {
      authError.value = '登入交換失敗，請重新授權。'
    }
    return
  }

  const existing = savedSession()
  if (!existing) return
  profile.value = existing
  loggedIn.value = true
  await loadPosts()
})
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <button class="brand" type="button" @click="restart">
        <span class="brand-mark"><Icon icon="solar:gift-bold" /></span>
        <span>ThreadPick</span>
      </button>
      <div class="header-actions">
        <a href="#how-it-works">使用說明</a>
        <button class="icon-button" type="button" :aria-label="theme === 'dark' ? '切換為淺色' : '切換為深色'" @click="toggleTheme">
          <Icon :icon="theme === 'dark' ? 'solar:sun-2-linear' : 'solar:moon-linear'" />
        </button>
        <button v-if="loggedIn" class="account-chip" type="button" @click="logout">
          <span class="mini-avatar">{{ initials }}</span>
          <span>@{{ profile?.username }}</span>
          <Icon icon="solar:logout-2-linear" />
        </button>
      </div>
    </header>

    <main v-if="!loggedIn" class="landing">
      <section class="hero-section">
        <div class="hero-copy">
          <div class="eyebrow"><span></span> 專為 Threads 創作者打造</div>
          <h1>讓每一次抽獎<br /><em>簡單、透明、公平</em></h1>
          <p>快速匯入 Threads 留言，自動排除重複帳號。<br />不用複製貼上，把時間留給更重要的事。</p>
          <button class="primary-button login-button" type="button" @click="login">
            <Icon icon="simple-icons:threads" />
            使用 Threads 登入
            <Icon icon="solar:arrow-right-linear" />
          </button>
          <p v-if="authError" class="auth-error">{{ authError }}</p>
          <div class="security-note">
            <Icon icon="solar:shield-check-linear" />
            僅讀取你的公開貼文與留言，不會代替你發文
          </div>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="decor-star star-one">✦</div>
          <div class="decor-star star-two">✦</div>
          <div class="post-card-demo">
            <div class="demo-user">
              <div class="demo-avatar">P</div>
              <div><b>peggy.daily</b><small>剛剛</small></div>
              <Icon icon="solar:menu-dots-bold" />
            </div>
            <p>秋日小禮物抽獎！<br />留言告訴我你最近最喜歡的一件小事 🍂</p>
            <div class="demo-icons">
              <span><Icon icon="solar:heart-linear" /> 421</span>
              <span><Icon icon="solar:chat-round-line-linear" /> 183</span>
              <span><Icon icon="solar:repeat-linear" /> 12</span>
            </div>
            <div class="comment-float comment-a"><span>CO</span><div><b>@cocoday</b><small>最近最喜歡早起吃早餐！</small></div><Icon icon="solar:check-circle-bold" /></div>
            <div class="comment-float comment-b"><span>MO</span><div><b>@mori.life</b><small>開始喜歡秋天了 🍂</small></div><Icon icon="solar:check-circle-bold" /></div>
          </div>
          <div class="winner-badge"><Icon icon="solar:cup-star-bold" /><div><small>已選出</small><b>3 位幸運得主</b></div></div>
        </div>
      </section>

      <section id="how-it-works" class="trust-row">
        <article><Icon icon="solar:bolt-circle-bold" /><div><b>一鍵匯入</b><span>自動載入所有留言</span></div></article>
        <article><Icon icon="solar:users-group-rounded-bold" /><div><b>智慧去重</b><span>同帳號只保留一次</span></div></article>
        <article><Icon icon="solar:shield-check-bold" /><div><b>公平隨機</b><span>每位參加者機會相同</span></div></article>
      </section>
    </main>

    <main v-else class="dashboard">
      <section class="dashboard-head">
        <div>
          <div class="eyebrow"><span></span> THREADS GIVEAWAY</div>
          <h1 v-if="currentStep === 'posts'">嗨，@{{ profile?.username }}！選一篇貼文開始吧</h1>
          <h1 v-else-if="currentStep === 'rules'">設定你的抽獎規則</h1>
          <h1 v-else>得獎名單出爐了！</h1>
          <p v-if="currentStep === 'posts'">我們會自動載入該篇貼文的所有留言。</p>
          <p v-else-if="currentStep === 'rules'">確認參加名單與條件，一切就緒後開始抽獎。</p>
          <p v-else>恭喜以下幸運得主，別忘了通知他們領獎。</p>
        </div>
        <div class="steps">
          <template v-for="(label, index) in ['選擇貼文', '設定規則', '抽出得主']" :key="label">
            <div :class="['step', { active: stepNumber === index + 1, done: stepNumber > index + 1 }]">
              <span><Icon v-if="stepNumber > index + 1" icon="solar:check-read-linear" />{{ stepNumber > index + 1 ? '' : index + 1 }}</span>
              <b>{{ label }}</b>
            </div>
            <i v-if="index < 2"></i>
          </template>
        </div>
      </section>

      <section v-if="currentStep === 'posts'" class="workspace">
        <div class="section-title">
          <div><h2>我的 Threads 貼文</h2><p>顯示最近 30 天內的公開貼文</p></div>
          <div class="post-select">
            <button type="button" disabled>
              <Icon icon="solar:sort-from-top-to-bottom-linear" /> 最近發布
            </button>
          </div>
        </div>
        <p v-if="postsLoading">正在讀取你的貼文...</p>
        <p v-else-if="authError" class="auth-error">{{ authError }}</p>
        <p v-else-if="posts.length === 0">這個帳號目前沒有可讀取的貼文。</p>
        <div v-else class="post-grid">
          <button v-for="(post, index) in pagedPosts" :key="post.id" :class="['post-option', { selected: selectedPostId === post.id }]" type="button" @click="selectPost(post.id)">
            <span :class="['post-illustration', post.tone]">
              <Icon :icon="index % 3 === 0 ? 'solar:gift-bold-duotone' : index % 3 === 1 ? 'solar:camera-bold-duotone' : 'solar:leaf-bold-duotone'" />
            </span>
            <span class="post-content">
              <small>{{ post.date }}</small>
              <b>{{ post.text }}</b>
            </span>
            <span class="radio-dot"><i></i></span>
          </button>
        </div>
        <nav v-if="visiblePosts.length > pageSize" class="pagination" aria-label="貼文分頁">
          <button type="button" :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">上一頁</button>
          <button v-for="page in totalPages" :key="page" type="button" :aria-current="page === currentPage ? 'page' : undefined" @click="goToPage(page)">{{ page }}</button>
          <button type="button" :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)">下一頁</button>
        </nav>
        <div class="workspace-footer">
          <p><Icon icon="solar:info-circle-linear" /> 留言數會在匯入後計算。Threads 只提供你自己貼文的回覆。</p>
          <button class="primary-button" type="button" :disabled="isImporting || !selectedPost" @click="importReplies">
            <Icon v-if="isImporting" icon="svg-spinners:180-ring-with-bg" />
            <Icon v-else icon="solar:download-minimalistic-linear" />
            {{ isImporting ? '正在匯入留言...' : '匯入留言' }}
            <Icon v-if="!isImporting" icon="solar:arrow-right-linear" />
          </button>
        </div>
      </section>

      <section v-else-if="currentStep === 'rules'" class="rules-layout">
        <div class="rules-card">
          <div class="card-heading"><span><Icon icon="solar:tuning-2-bold" /></span><div><h2>抽獎設定</h2><p>依照你的活動規則調整</p></div></div>
          <label class="field-label">抽獎品項</label>
          <div class="text-field"><Icon icon="solar:gift-linear" /><input v-model="prizeName" /></div>
          <label class="field-label">中獎人數</label>
          <div class="counter-field"><button type="button" @click="changeWinnerCount(-1)">−</button><b>{{ winnerCount }}</b><button type="button" @click="changeWinnerCount(1)">＋</button></div>
          <div class="divider"></div>
          <label class="toggle-row"><div><b>同一帳號只算一次</b><span>自動排除重複留言</span></div><input v-model="uniqueOnly" type="checkbox" /><i></i></label>
          <label class="toggle-row"><div><b>中獎後不再重複中獎</b><span>每個帳號最多獲獎一次</span></div><input v-model="noRepeatWinner" type="checkbox" /><i></i></label>
          <label class="toggle-row"><div><b>排除我的帳號</b><span>不將 @{{ profile?.username }} 列入抽獎</span></div><input v-model="excludeMe" type="checkbox" /><i></i></label>
        </div>

        <div class="summary-card">
          <div class="card-heading"><span class="green"><Icon icon="solar:users-group-rounded-bold" /></span><div><h2>參加名單</h2><p>留言已成功匯入並整理</p></div><button type="button" aria-label="重新匯入" @click="importReplies"><Icon icon="solar:refresh-linear" /></button></div>
          <div class="stats-panel">
            <div><span>原始留言</span><b>{{ replies.length }}</b></div><i></i><div><span>重複排除</span><b class="muted">{{ duplicateCount }}</b></div><i></i><div><span>有效參加</span><b class="green-text">{{ eligible.length }}</b></div>
          </div>
          <div class="entrant-preview">
            <div v-for="person in previewEntrants" :key="person.id">
              <span class="entrant-avatar">{{ person.avatar }}</span>
              <span><b>{{ person.handle }}</b><small>{{ person.comment }}</small></span>
              <em>{{ person.time }}</em>
            </div>
          </div>
          <div class="more-entrants">{{ eligible.length > 4 ? `還有 ${eligible.length - 4} 位參加者` : '已顯示全部參加者' }}</div>
        </div>

        <div class="draw-bar">
          <button class="back-button" type="button" @click="currentStep = 'posts'"><Icon icon="solar:arrow-left-linear" /> 返回選擇貼文</button>
          <div><span>將從 <b>{{ eligible.length }}</b> 位參加者中</span><span>抽出 <b>{{ winnerCount }}</b> 位得主</span></div>
          <button class="primary-button draw-button" type="button" :disabled="isDrawing || eligible.length === 0" @click="drawWinners">
            <Icon :icon="isDrawing ? 'svg-spinners:180-ring-with-bg' : 'solar:magic-stick-3-bold'" />
            {{ isDrawing ? '正在公平抽選...' : '開始抽獎' }}
          </button>
        </div>
      </section>

      <section v-else class="result-section">
        <div class="confetti confetti-a">✦</div><div class="confetti confetti-b">●</div><div class="confetti confetti-c">✦</div>
        <div class="trophy"><Icon icon="solar:cup-star-bold-duotone" /></div>
        <div class="result-meta"><Icon icon="solar:gift-linear" /> {{ prizeName }} · {{ winners.length }} 位得主</div>
        <div class="winner-grid">
          <article v-for="(winner, index) in winners" :key="winner.id" :class="{ champion: index === 0 }">
            <span class="place">{{ index + 1 }}</span>
            <div class="winner-avatar">{{ winner.avatar }}</div>
            <h3>{{ winner.name }}</h3><b>{{ winner.handle }}</b>
            <p>「{{ winner.comment }}」</p>
            <button type="button" @click="copyHandle(winner.handle)"><Icon icon="solar:copy-linear" /> 複製帳號</button>
          </article>
        </div>
        <div class="result-actions">
          <button class="back-button" type="button" @click="currentStep = 'rules'"><Icon icon="solar:restart-linear" /> 重新抽獎</button>
          <button class="primary-button" type="button"><Icon icon="solar:share-linear" /> 分享得獎結果</button>
        </div>
        <button class="new-draw" type="button" @click="restart">建立另一場抽獎 <Icon icon="solar:arrow-right-linear" /></button>
      </section>
    </main>

    <footer>
      <span>© 2026 ThreadPick</span>
      <span>非 Meta 或 Threads 官方服務</span>
      <nav><a href="#">隱私權</a><a href="#">服務條款</a></nav>
    </footer>
  </div>
</template>
