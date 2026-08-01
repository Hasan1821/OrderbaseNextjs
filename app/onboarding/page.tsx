'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Building2,
  Link2,
  Phone,
  Mail,
  MapPin,
  UploadCloud,
  ArrowRight,
  Lock,
  CheckCircle2,
  Store,
} from 'lucide-react'

export default function OnboardingPage() {
  const router = useRouter()

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="hidden flex-col justify-center bg-gradient-to-br from-accent-50 via-white to-accent-50 px-16 lg:flex">
        <span className="mb-6 inline-flex w-fit items-center rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-600">
          Step 2 of 2
        </span>
        <h1 className="max-w-sm text-4xl font-bold leading-tight text-gray-900">
          Create your organization
        </h1>
        <p className="mt-4 max-w-sm text-gray-500">
          This will be your business workspace. You can invite your team members and start
          managing your orders.
        </p>

        <div className="relative mt-14 flex max-w-xs items-center justify-center">
          <div className="flex h-52 w-64 flex-col items-center justify-end rounded-t-2xl border border-b-0 border-gray-200 bg-white pb-4">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border-4 border-accent-100 bg-white text-accent-500 shadow">
              <Store className="h-5 w-5" />
            </div>
            <div className="flex h-16 w-full items-end justify-center gap-2 border-t border-gray-100 pt-3">
              <div className="h-10 w-8 rounded-t bg-accent-100" />
              <div className="h-10 w-14 rounded-t bg-gray-100" />
              <div className="h-10 w-8 rounded-t bg-accent-100" />
            </div>
          </div>
        </div>

        <ul className="mt-10 space-y-2.5 text-sm text-gray-600">
          {[
            'Dedicated workspace',
            'Team management',
            'Role-based access',
            'Powerful order management',
            'Business growth insights',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Organization Details</h2>
              <p className="text-sm text-gray-400">Tell us about your organization</p>
            </div>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              router.push('/organizations')
            }}
          >
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Organization Name <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-accent-400">
                <Building2 className="h-4 w-4 text-gray-400" />
                <input required placeholder="e.g. Shovon Fashion House" className="w-full text-sm outline-none placeholder:text-gray-400" />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Organization Slug <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center rounded-lg border border-gray-200 focus-within:border-accent-400">
                <span className="flex items-center gap-2 pl-3 text-gray-400">
                  <Link2 className="h-4 w-4" />
                </span>
                <input required placeholder="e.g. shovon-fashion-house" className="w-full px-2 py-2.5 text-sm outline-none placeholder:text-gray-400" />
                <span className="whitespace-nowrap rounded-r-lg bg-gray-50 px-3 py-2.5 text-sm text-gray-400">
                  .orderbase.com
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-400">This will be used in your organization URL</p>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Business Phone (Optional)</label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-accent-400">
                <Phone className="h-4 w-4 text-gray-400" />
                <input placeholder="017XXXXXXXX" className="w-full text-sm outline-none placeholder:text-gray-400" />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Business Email (Optional)</label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-accent-400">
                <Mail className="h-4 w-4 text-gray-400" />
                <input placeholder="info@shovonfashion.com" className="w-full text-sm outline-none placeholder:text-gray-400" />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Business Address (Optional)</label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-accent-400">
                <MapPin className="h-4 w-4 text-gray-400" />
                <input placeholder="e.g. Dhaka, Bangladesh" className="w-full text-sm outline-none placeholder:text-gray-400" />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Organization Logo (Optional)</label>
              <button
                type="button"
                className="flex w-full flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-gray-300 bg-gray-50 py-6 text-sm text-gray-500 hover:bg-gray-100"
              >
                <UploadCloud className="h-5 w-5 text-gray-400" />
                Upload logo
                <span className="text-xs text-gray-400">PNG, JPG or SVG (Max. 2MB)</span>
              </button>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent-500 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-600"
            >
              Create Organization &amp; Continue <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-gray-400">
            <Lock className="h-3.5 w-3.5" /> Your data is 100% secure and encrypted
          </p>
        </div>
      </div>
    </div>
  )
}
