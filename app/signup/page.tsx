'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
  TrendingUp,
  User,
  Phone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react'
import { createSessionFromSignup } from '@/lib/auth'

export default function SignupPage() {
  const router = useRouter()
  const [showPass, setShowPass] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left branding panel */}
      <div className="hidden flex-col justify-center bg-gradient-to-br from-brand-50 via-white to-brand-50 px-16 lg:flex">
        <div className="mb-8 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
            <TrendingUp className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold text-gray-900">OrderBase</span>
        </div>

        <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-600">
          <TrendingUp className="h-3.5 w-3.5" /> Smart Order Management for Facebook Sellers
        </span>

        <h1 className="max-w-md text-4xl font-bold leading-tight text-gray-900">
          Manage Orders. Understand Customers.{' '}
          <span className="text-brand-600">Grow Your Business.</span>
        </h1>
        <p className="mt-4 max-w-sm text-gray-500">
          All your orders, customers, and team in one place. Smarter management. Better growth.
        </p>

        {/* Illustration mock */}
        <div className="relative mt-12 max-w-md">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-900">Dashboard</p>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-white">
                <MessageCircle className="h-4 w-4" />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-4 gap-3 text-center">
              {[
                ['Today', '32'],
                ['Pending', '12'],
                ['Delivered', '18'],
                ['Revenue', '৳24,850'],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[10px] text-gray-400">{label}</p>
                  <p className="text-sm font-bold text-gray-900">{value}</p>
                </div>
              ))}
            </div>
            <svg viewBox="0 0 260 70" className="h-16 w-full text-brand-500">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="0,45 30,35 60,50 90,40 120,55 150,30 180,42 210,15 240,25"
              />
            </svg>
          </div>
          <div className="absolute -left-8 -top-6 w-48 rounded-xl border border-gray-100 bg-white p-3 shadow-lg">
            <p className="text-[11px] font-semibold text-gray-900">New Order</p>
            <p className="text-[10px] text-gray-400">Rahim Hossain</p>
            <div className="mt-1 flex items-center justify-between text-[10px] text-gray-500">
              <span>2 Items · ৳1,350</span>
              <span className="rounded bg-amber-50 px-1.5 py-0.5 font-medium text-amber-600">COD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center justify-between lg:justify-end">
            <div className="flex items-center gap-2 lg:hidden">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
                <TrendingUp className="h-4 w-4" />
              </div>
              <span className="font-bold text-gray-900">OrderBase</span>
            </div>
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-brand-600 hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-1 text-sm text-gray-500">Start your 14-day free trial. No credit card required.</p>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              createSessionFromSignup(email, fullName)
              router.push('/onboarding')
            }}
          >
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-brand-400">
              <User className="h-4 w-4 text-gray-400" />
              <input
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="w-full text-sm outline-none placeholder:text-gray-400"
              />
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-brand-400">
              <Phone className="h-4 w-4 text-gray-400" />
              <input required placeholder="017XXXXXXXX" className="w-full text-sm outline-none placeholder:text-gray-400" />
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-brand-400">
              <Mail className="h-4 w-4 text-gray-400" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address (Optional)"
                className="w-full text-sm outline-none placeholder:text-gray-400"
              />
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-brand-400">
              <Lock className="h-4 w-4 text-gray-400" />
              <input
                required
                type={showPass ? 'text' : 'password'}
                placeholder="Password"
                className="w-full text-sm outline-none placeholder:text-gray-400"
              />
              <button type="button" onClick={() => setShowPass((s) => !s)}>
                {showPass ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-brand-400">
              <Lock className="h-4 w-4 text-gray-400" />
              <input required type="password" placeholder="Confirm Password" className="w-full text-sm outline-none placeholder:text-gray-400" />
            </div>

            <label className="flex items-start gap-2 text-sm text-gray-500">
              <input required type="checkbox" defaultChecked className="mt-0.5 h-4 w-4 rounded accent-brand-600" />
              I agree to the{' '}
              <span className="font-medium text-brand-600">Terms of Service</span> and{' '}
              <span className="font-medium text-brand-600">Privacy Policy</span>
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-brand-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Create Account
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-gray-400">
            <div className="h-px flex-1 bg-gray-200" /> or sign up with <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Facebook
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Google
            </button>
          </div>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-gray-400">
            <ShieldCheck className="h-3.5 w-3.5" /> Your data is 100% secure and encrypted
          </p>
        </div>
      </div>
    </div>
  )
}
