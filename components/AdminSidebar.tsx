'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Building2,
  Receipt,
  ListChecks,
  FileText,
  Gauge,
  ShieldCheck,
  KeyRound,
  Users,
  Puzzle,
  Facebook,
  Bot,
  MailPlus,
  Truck,
  CreditCard,
  Globe,
  Settings2,
  Bell,
  Mail,
  ScrollText,
  Activity,
  BarChart3,
  TrendingUp,
  UserCircle2,
  HeartPulse,
  ArrowLeft,
  Package,
} from 'lucide-react'

const groups = [
  {
    label: 'Overview',
    items: [{ label: 'Dashboard', href: '/admin', icon: LayoutDashboard }],
  },
  {
    label: 'Tenants & Billing',
    items: [
      { label: 'Tenants (Businesses)', href: '/admin/tenants', icon: Building2 },
      { label: 'Subscriptions', href: '/admin/subscriptions', icon: Receipt },
      { label: 'Plans & Features', href: '/admin/plans', icon: ListChecks },
      { label: 'Billing & Invoices', href: '/admin/invoices', icon: FileText },
      { label: 'Usage & Limits', href: '/admin/usage', icon: Gauge },
    ],
  },
  {
    label: 'Users & Access',
    items: [
      { label: 'Admins', href: '/admin/admins', icon: Users },
      { label: 'Roles & Permissions', href: '/admin/roles', icon: ShieldCheck },
      { label: 'Staff Management', href: '/admin/staff', icon: KeyRound },
    ],
  },
  {
    label: 'Platform Management',
    items: [
      { label: 'Integrations', href: '/admin/integrations', icon: Puzzle },
      { label: 'Facebook Integration', href: '/admin/integrations/facebook', icon: Facebook },
      { label: 'AI & Automation', href: '/admin/automation', icon: Bot },
      { label: 'Templates (Invoice/Msg)', href: '/admin/templates', icon: MailPlus },
      { label: 'Courier Providers', href: '/admin/couriers', icon: Truck },
      { label: 'Payment Gateways', href: '/admin/payments', icon: CreditCard },
      { label: 'Domains & White-label', href: '/admin/domains', icon: Globe },
    ],
  },
  {
    label: 'Content & Config',
    items: [
      { label: 'System Settings', href: '/admin/system-settings', icon: Settings2 },
      { label: 'Notifications', href: '/admin/notifications', icon: Bell },
      { label: 'Email Templates', href: '/admin/email-templates', icon: Mail },
      { label: 'Audit Logs', href: '/admin/audit-logs', icon: ScrollText },
      { label: 'Activity Logs', href: '/admin/activity-logs', icon: Activity },
    ],
  },
  {
    label: 'Reports & Analytics',
    items: [
      { label: 'Platform Reports', href: '/admin/reports/platform', icon: BarChart3 },
      { label: 'Revenue Reports', href: '/admin/reports/revenue', icon: TrendingUp },
      { label: 'Tenant Activity', href: '/admin/reports/tenant-activity', icon: UserCircle2 },
      { label: 'System Health', href: '/admin/system-health', icon: HeartPulse },
    ],
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex h-screen w-72 shrink-0 flex-col border-r border-gray-100 bg-white">
      <div className="flex items-center gap-2 border-b border-gray-100 px-6 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500 text-white">
          <Package className="h-5 w-5" />
        </div>
        <div>
          <p className="text-base font-bold leading-tight text-gray-900">
            <span className="text-accent-500">F</span>Commerce
          </p>
          <p className="text-xs text-gray-400">Order Management SaaS</p>
        </div>
      </div>

      <nav className="scrollbar-none flex-1 overflow-y-auto px-3 py-4">
        {groups.map((group) => (
          <div key={group.label} className="mb-5">
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const Icon = item.icon
                const active = pathname === item.href
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
          </div>
        ))}
      </nav>

      <div className="border-t border-gray-100 p-4">
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Website
        </Link>
      </div>
    </aside>
  )
}
