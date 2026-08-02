'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { TrendingUp, HelpCircle, ChevronDown, Plus, UserPlus, ShieldCheck, Store, Footprints, Box, LogOut } from 'lucide-react'
import { organizations } from '@/lib/data'
import { logout } from '@/lib/auth'
import AuthGuard from '@/components/AuthGuard'

const icons = [Store, Footprints, Box]

export default function OrganizationsPage() {
  const router = useRouter()

  return (
    <AuthGuard>
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-4 sm:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            <TrendingUp className="h-4 w-4" />
          </div>
          <span className="text-lg font-bold text-gray-900">OrderBase</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-lg p-2 text-gray-400 hover:bg-gray-50 sm:block">
            <HelpCircle className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <img src="https://i.pravatar.cc/64?img=13" alt="Shovon Ahmed" className="h-8 w-8 rounded-full object-cover" />
            <span className="hidden text-sm font-medium text-gray-900 sm:block">Shovon Ahmed</span>
            <ChevronDown className="hidden h-4 w-4 text-gray-400 sm:block" />
          </div>
          <button
            onClick={() => {
              logout()
              router.push('/login')
            }}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600"
            aria-label="Log out"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-16">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Shovon! 👋</h1>
        <p className="mt-1 text-gray-500">You have access to multiple organizations.</p>
        <h2 className="mt-8 text-lg font-semibold text-gray-900">Choose an organization to continue</h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {organizations.map((org, i) => {
            const Icon = icons[i % icons.length]
            const isOwner = i === 0
            return (
              <div
                key={org.name}
                className={`relative rounded-xl border bg-white p-6 text-left shadow-card ${
                  isOwner ? 'border-accent-300 ring-1 ring-accent-200' : 'border-gray-100'
                }`}
              >
                {isOwner && (
                  <span className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 text-white">
                    ✓
                  </span>
                )}
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${org.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <p className="font-bold text-gray-900">{org.name}</p>
                <p className="text-sm text-accent-600">{org.domain}</p>
                <span className="mt-2 inline-block rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                  {org.role}
                </span>
                <div className="mt-4 space-y-1 text-sm text-gray-400">
                  <p>{org.members} Members</p>
                  <p>Joined on {org.joined}</p>
                </div>
                <Link
                  href="/dashboard"
                  className={`mt-5 block w-full rounded-lg py-2.5 text-center text-sm font-semibold ${
                    isOwner
                      ? 'bg-accent-500 text-white hover:bg-accent-600'
                      : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Go to Dashboard
                </Link>
              </div>
            )
          })}
        </div>

        <div className="mx-auto my-8 flex max-w-md items-center gap-3 text-xs text-gray-400">
          <div className="h-px flex-1 bg-gray-200" /> or <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href="/onboarding"
            className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-5 text-left shadow-card hover:border-accent-200"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-accent-600">
              <Plus className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Create New Organization</p>
              <p className="text-sm text-gray-400">Start a new organization and manage your business</p>
            </div>
          </Link>
          <button className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-5 text-left shadow-card hover:border-brand-200">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              <UserPlus className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Join an Organization</p>
              <p className="text-sm text-gray-400">Join an existing organization using an invite link</p>
            </div>
          </button>
        </div>

        <p className="mx-auto mt-8 flex max-w-md items-center justify-center gap-1.5 text-xs text-gray-400">
          <ShieldCheck className="h-3.5 w-3.5" /> Your data is 100% secure and only visible to your organization members.
        </p>
      </main>
    </div>
    </AuthGuard>
  )
}
