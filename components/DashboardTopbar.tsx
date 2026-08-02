'use client'

import { Search, Bell, HelpCircle, ChevronDown, Menu, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSidebar } from '@/components/SidebarContext'
import { logout } from '@/lib/auth'

export default function DashboardTopbar({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  const { setOpen } = useSidebar()
  const router = useRouter()

  return (
    <header className="flex shrink-0 items-center justify-between gap-3 border-b border-gray-100 bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="min-w-0">
          <h1 className="truncate text-base font-bold text-gray-900 sm:text-lg">{title}</h1>
          {subtitle && <p className="hidden truncate text-sm text-gray-400 sm:block">{subtitle}</p>}
        </div>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
        <button className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400 md:flex">
          <Search className="h-4 w-4" />
          <span>Search anything...</span>
          <kbd className="ml-6 rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] text-gray-400">
            ⌘K
          </kbd>
        </button>
        <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600 md:hidden">
          <Search className="h-5 w-5" />
        </button>

        <button className="hidden rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600 sm:block">
          <HelpCircle className="h-5 w-5" />
        </button>

        <button className="relative rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 text-[9px] font-bold text-white">
            5
          </span>
        </button>

        <Link
          href="/organizations"
          className="flex items-center gap-2 rounded-lg pl-1 pr-1 hover:bg-gray-50 sm:pr-2"
        >
          <img
            src="https://i.pravatar.cc/64?img=13"
            alt="Shovon Ahmed"
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="hidden text-left leading-tight sm:block">
            <p className="text-sm font-semibold text-gray-900">Shovon Ahmed</p>
            <p className="text-xs text-gray-400">Owner</p>
          </div>
          <ChevronDown className="hidden h-4 w-4 text-gray-400 sm:block" />
        </Link>

        <button
          onClick={() => {
            logout()
            router.push('/login')
          }}
          className="hidden rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600 sm:block"
          aria-label="Log out"
        >
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
