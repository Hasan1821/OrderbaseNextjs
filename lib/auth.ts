export type Session = {
  email: string
  name: string
}

const STORAGE_KEY = 'orderbase_session'

// Demo credentials — the only combination that unlocks the dashboard.
export const DEMO_CREDENTIALS = {
  email: 'shovon@example.com',
  password: 'password123',
}

function readSession(): Session | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as Session
  } catch {
    return null
  }
}

function writeSession(session: Session) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
}

/** Validates credentials against the demo account. Returns true on success. */
export function login(email: string, password: string): boolean {
  const normalized = email.trim().toLowerCase()
  if (normalized === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
    writeSession({ email: normalized, name: 'Shovon Ahmed' })
    return true
  }
  return false
}

/** Called after a successful signup to start a session without a separate login step. */
export function createSessionFromSignup(email: string, name: string) {
  writeSession({
    email: email.trim().toLowerCase() || DEMO_CREDENTIALS.email,
    name: name.trim() || 'Shovon Ahmed',
  })
}

export function getSession(): Session | null {
  return readSession()
}

export function isAuthenticated(): boolean {
  return readSession() !== null
}

export function logout() {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(STORAGE_KEY)
}
