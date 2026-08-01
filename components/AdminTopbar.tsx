import { Search, Bell, Moon, Globe2, ChevronDown } from 'lucide-react'

export default function AdminTopbar({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between border-b border-gray-100 bg-white px-8 py-4">
      <h1 className="text-lg font-bold text-gray-900">{title}</h1>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400 md:flex">
          <Search className="h-4 w-4" />
          <span>Search tenants, users, orders...</span>
          <kbd className="ml-10 rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] text-gray-400">
            ⌘K
          </kbd>
        </div>
        <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600">
          <Moon className="h-5 w-5" />
        </button>
        <button className="flex items-center gap-1 rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-50 hover:text-gray-600">
          <Globe2 className="h-5 w-5" /> EN
        </button>
        <button className="relative rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 text-[9px] font-bold text-white">
            12
          </span>
        </button>
        <div className="flex items-center gap-2">
          <img src="https://i.pravatar.cc/64?img=13" alt="Super Admin" className="h-8 w-8 rounded-full object-cover" />
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </header>
  )
}
