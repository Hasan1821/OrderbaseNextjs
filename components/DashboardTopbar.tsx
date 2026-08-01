import { Search, Bell, HelpCircle, ChevronDown, Plus } from 'lucide-react'
import Link from 'next/link'

export default function DashboardTopbar({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <header className="flex items-center justify-between border-b border-gray-100 bg-white px-8 py-4">
      <div>
        <h1 className="text-lg font-bold text-gray-900">{title}</h1>
        {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400 md:flex">
          <Search className="h-4 w-4" />
          <span>Search anything...</span>
          <kbd className="ml-6 rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] text-gray-400">
            ⌘K
          </kbd>
        </div>

        <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600">
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
          className="flex items-center gap-2 rounded-lg pl-1 pr-2 hover:bg-gray-50"
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
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </Link>
      </div>
    </header>
  )
}
