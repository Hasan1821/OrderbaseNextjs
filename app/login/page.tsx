'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'
import { TrendingUp, Mail, Lock, Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react'
import { login, DEMO_CREDENTIALS } from '@/lib/auth'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    // Simulate a brief auth check
    setTimeout(() => {
      const ok = login(email, password)
      if (ok) {
        router.push('/organizations')
      } else {
        setError('Invalid email or password. Please try again.')
        setSubmitting(false)
      }
    }, 300)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10 sm:px-6">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-6 shadow-card sm:p-8">
        <div className="mb-6 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
            <TrendingUp className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold text-gray-900">OrderBase</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900">Sign in to your account</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome back — enter your details to continue.</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Email Address</label>
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-brand-400">
              <Mail className="h-4 w-4 shrink-0 text-gray-400" />
              <input
                required
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full min-w-0 text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <button type="button" className="text-xs font-medium text-brand-600 hover:underline">
                Forgot password?
              </button>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-brand-400">
              <Lock className="h-4 w-4 shrink-0 text-gray-400" />
              <input
                required
                type={showPass ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full min-w-0 text-sm outline-none placeholder:text-gray-400"
              />
              <button type="button" onClick={() => setShowPass((s) => !s)} aria-label="Toggle password visibility">
                {showPass ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className="flex items-start gap-2 rounded-lg bg-red-50 px-3 py-2.5 text-sm text-red-600">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-brand-600 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <p className="mt-6 rounded-lg bg-gray-50 px-3 py-2.5 text-center text-xs text-gray-500">
          Demo credentials:{' '}
          <span className="font-medium text-gray-700">{DEMO_CREDENTIALS.email}</span> /{' '}
          <span className="font-medium text-gray-700">{DEMO_CREDENTIALS.password}</span>
        </p>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-medium text-brand-600 hover:underline">
            Create one
          </Link>
        </p>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-gray-400">
          <ShieldCheck className="h-3.5 w-3.5" /> Your data is 100% secure and encrypted
        </p>
      </div>
    </div>
  )
}
