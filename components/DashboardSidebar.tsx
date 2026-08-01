'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Boxes,
  ShoppingBag,
  RotateCcw,
  Tag,
  BarChart2,
  UserCog,
  ShieldCheck,
  Settings,
  CreditCard,
  ShoppingBasket,
} from 'lucide-react'

const primaryNav = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Orders', href: '/dashboard/orders', icon: ShoppingCart },
  { label: 'Products', href: '/dashboard/products', icon: Package },
  { label: 'Customers', href: '/dashboard/customers', icon: Users },
  { label: 'Stock', href: '/dashboard/stock', icon: Boxes },
  { label: 'Purchase', href: '/dashboard/purchase', icon: ShoppingBag },
  { label: 'Returns', href: '/dashboard/returns', icon: RotateCcw },
  { label: 'Discounts', href: '/dashboard/discounts', icon: Tag },
  { label: 'Reports', href: '/dashboard/reports', icon: BarChart2 },
]

const managementNav = [
  { label: 'Team', href: '/dashboard/team', icon: UserCog },
  { label: 'Roles & Permissions', href: '/dashboard/team/roles', icon: ShieldCheck },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
  { label: 'Billing & Subscription', href: '/dashboard/billing', icon: CreditCard },
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/dashboard' ? pathname === '/dashboard' : pathname?.startsWith(href)

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-gray-100 bg-white">
      <div className="flex items-center gap-2 border-b border-gray-100 px-6 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500 text-white">
          <ShoppingBasket className="h-5 w-5" />
        </div>
        <div>
          <p className="text-base font-bold leading-tight text-gray-900">
            Fashion <span className="text-accent-500">Hub</span>
          </p>
          <p className="text-xs text-gray-400">fashionhub.orderbase.com</p>
        </div>
      </div>

      <nav className="scrollbar-none flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-0.5">
          {primaryNav.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-accent-50 text-accent-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <p className="mb-2 mt-6 px-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
          Management
        </p>
        <ul className="space-y-0.5">
          {managementNav.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-accent-50 text-accent-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="border-t border-gray-100 p-4">
        <div className="rounded-xl bg-gray-50 p-3.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-500">Current Plan</span>
            <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
              Active
            </span>
          </div>
          <p className="mt-1 text-sm font-bold text-gray-900">Growth</p>
          <div className="mt-2">
            <div className="mb-1 flex justify-between text-xs text-gray-500">
              <span>Orders</span>
              <span>450 / 1,000</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-200">
              <div className="h-1.5 w-[45%] rounded-full bg-accent-500" />
            </div>
          </div>
          <Link
            href="/dashboard/billing"
            className="mt-3 block w-full rounded-lg border border-gray-200 bg-white py-1.5 text-center text-xs font-semibold text-gray-700 hover:bg-gray-50"
          >
            Upgrade Plan
          </Link>
        </div>
      </div>
    </aside>
  )
}
