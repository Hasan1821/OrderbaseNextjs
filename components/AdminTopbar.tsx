'use client'

import { Search, Bell, Moon, Globe2, ChevronDown, Menu } from 'lucide-react'
import { useSidebar } from '@/components/SidebarContext'

export default function AdminTopbar({ title }: { title: string }) {
  const { setOpen } = useSidebar()

  return (
    <header className="flex items-center justify-between gap-3 border-b border-gray-100 bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="truncate text-base font-bold text-gray-900 sm:text-lg">{title}</h1>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
        <button className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400 md:flex">
          <Search className="h-4 w-4" />
          <span>Search tenants, users, orders...</span>
          <kbd className="ml-10 rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] text-gray-400">
            ⌘K
          </kbd>
        </button>
        <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600 md:hidden">
          <Search className="h-5 w-5" />
        </button>
        <button className="hidden rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600 sm:block">
          <Moon className="h-5 w-5" />
        </button>
        <button className="hidden items-center gap-1 rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-50 hover:text-gray-600 sm:flex">
          <Globe2 className="h-5 w-5" /> EN
        </button>
        <button className="relative rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 text-[9px] font-bold text-white">
            12
          </span>
        </button>
        <div className="flex items-center gap-1">
          <img src="https://i.pravatar.cc/64?img=13" alt="Super Admin" className="h-8 w-8 rounded-full object-cover" />
          <ChevronDown className="hidden h-4 w-4 text-gray-400 sm:block" />
        </div>
      </div>
    </header>
  )
}
