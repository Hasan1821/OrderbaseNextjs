'use client'

import Link from 'next/link'
import {
  Building2,
  Users2,
  ShoppingCart,
  Repeat,
  Wallet,
  CheckCircle2,
  MoreVertical,
  ChevronDown,
  Plus,
  UserCog,
  ListChecks,
  Bell,
  ScrollText,
  AlertTriangle,
  XCircle,
  Puzzle,
} from 'lucide-react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import AdminTopbar from '@/components/AdminTopbar'
import StatCard from '@/components/StatCard'
import StatusBadge from '@/components/StatusBadge'
import { tenants } from '@/lib/data'

const platformOverview = [
  { day: 'May 21', orders: 11500, revenue: 380000 },
  { day: 'May 28', orders: 13800, revenue: 430000 },
  { day: 'Jun 04', orders: 15200, revenue: 500000 },
  { day: 'Jun 11', orders: 17200, revenue: 580000 },
  { day: 'Jun 18', orders: 18600, revenue: 640000 },
]

const planDistribution = [
  { label: 'Business', value: 516, pct: '28%', color: '#a78bfa' },
  { label: 'Growth', value: 774, pct: '42%', color: '#22c55e' },
  { label: 'Starter', value: 461, pct: '25%', color: '#38bdf8' },
  { label: 'Trial', value: 91, pct: '5%', color: '#facc15' },
]

const activities = [
  { icon: Building2, text: 'New tenant "Style Heaven BD" registered', time: '2 min ago', class: 'bg-brand-50 text-brand-600' },
  { icon: CheckCircle2, text: 'Subscription upgraded by "Elegance Boutique"', time: '8 min ago', class: 'bg-emerald-50 text-emerald-600' },
  { icon: XCircle, text: 'Payment failed for tenant "Trendz & Style"', time: '10 min ago', class: 'bg-red-50 text-red-500' },
  { icon: Puzzle, text: 'Facebook integration disconnected', time: '13 min ago', class: 'bg-amber-50 text-amber-600' },
  { icon: AlertTriangle, text: 'High order volume alert for "Fashion House"', time: '18 min ago', class: 'bg-amber-50 text-amber-600' },
]

const alerts = [
  { label: 'Expiring Subscriptions (7 days)', count: 23, class: 'text-amber-500' },
  { label: 'Payment Failed', count: 11, class: 'text-red-500' },
  { label: 'Tenants Over Limit', count: 18, class: 'text-brand-500' },
  { label: 'Integration Errors', count: 6, class: 'text-red-400' },
]

const shortcuts = [
  { icon: Users2, label: 'Create Tenant' },
  { icon: UserCog, label: 'Add Admin' },
  { icon: ListChecks, label: 'Create Plan' },
  { icon: Building2, label: 'Create Feature' },
  { icon: Bell, label: 'Send Notification' },
  { icon: ScrollText, label: 'View All Logs' },
]

export default function AdminDashboardPage() {
  return (
    <>
      <AdminTopbar title="Admin Dashboard" />

      <main className="flex-1 space-y-6 overflow-y-auto p-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          <StatCard icon={Building2} iconClass="bg-brand-50 text-brand-600" label="Total Tenants" value="1,842" change="14.2%" />
          <StatCard icon={Users2} iconClass="bg-sky-50 text-sky-600" label="Active Tenants" value="1,356" change="11.7%" />
          <StatCard icon={ShoppingCart} iconClass="bg-amber-50 text-amber-600" label="Total Orders" value="256,432" change="18.6%" />
          <StatCard icon={Repeat} iconClass="bg-violet-50 text-violet-600" label="MRR" value="৳12,45,620" change="21.3%" />
          <StatCard icon={Wallet} iconClass="bg-emerald-50 text-emerald-600" label="Total Revenue" value="৳2,74,21,300" change="19.8%" />
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <span className="text-sm text-gray-500">System Health</span>
            </div>
            <p className="mt-1 text-lg font-bold text-emerald-600">All Systems OK</p>
            <p className="text-xs text-gray-400">100% Uptime</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card xl:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Platform Overview</h3>
              <div className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-500">
                Last 30 days <ChevronDown className="h-3.5 w-3.5" />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={platformOverview} margin={{ left: -18 }}>
                <defs>
                  <linearGradient id="ordersFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} tickFormatter={(v) => `${v / 1000}K`} />
                <Tooltip />
                <Area type="monotone" dataKey="orders" stroke="#6366f1" strokeWidth={2.5} fill="url(#ordersFill)" />
                <Area type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={2.5} fill="url(#revenueFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card">
            <h3 className="mb-4 font-semibold text-gray-900">Tenant Plan Distribution</h3>
            <div className="relative mx-auto flex h-52 w-52 items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={planDistribution} dataKey="value" nameKey="label" innerRadius={65} outerRadius={95} paddingAngle={2}>
                    {planDistribution.map((entry) => (
                      <Cell key={entry.label} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-xl font-bold text-gray-900">1,842</p>
                <p className="text-xs text-gray-400">Total</p>
              </div>
            </div>
            <ul className="mt-2 space-y-2">
              {planDistribution.map((p) => (
                <li key={p.label} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-gray-600">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                    {p.label}
                  </span>
                  <span className="font-medium text-gray-900">
                    {p.value} <span className="text-gray-400">({p.pct})</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-card xl:col-span-2">
            <div className="flex items-center justify-between border-b border-gray-100 p-5">
              <h3 className="font-semibold text-gray-900">Top Tenants (By Orders)</h3>
              <Link href="/admin/tenants" className="text-xs font-medium text-brand-600 hover:underline">
                View All Tenants
              </Link>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-xs uppercase tracking-wide text-gray-400">
                  <th className="px-5 py-3 font-medium">Tenant / Business</th>
                  <th className="px-5 py-3 font-medium">Plan</th>
                  <th className="px-5 py-3 font-medium">Orders (30d)</th>
                  <th className="px-5 py-3 font-medium">Revenue (30d)</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody>
                {tenants.map((t) => (
                  <tr key={t.name} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60">
                    <td className="px-5 py-3.5">
                      <p className="font-medium text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.domain}</p>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-600">{t.plan}</span>
                    </td>
                    <td className="px-5 py-3.5 text-gray-700">{t.orders.toLocaleString()}</td>
                    <td className="px-5 py-3.5 text-gray-900">{t.revenue}</td>
                    <td className="px-5 py-3.5">
                      <StatusBadge status={t.status} />
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <button className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card">
              <h3 className="mb-4 font-semibold text-gray-900">Recent System Activities</h3>
              <ul className="space-y-3.5">
                {activities.map((a, i) => {
                  const Icon = a.icon
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${a.class}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-gray-700">{a.text}</p>
                        <p className="text-xs text-gray-400">{a.time}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card">
              <h3 className="mb-4 font-semibold text-gray-900">System Alerts</h3>
              <ul className="space-y-3">
                {alerts.map((a) => (
                  <li key={a.label} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-600">
                      <AlertTriangle className={`h-4 w-4 ${a.class}`} /> {a.label}
                    </span>
                    <span className={`font-semibold ${a.class}`}>{a.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card">
          <h3 className="mb-4 font-semibold text-gray-900">Platform Shortcuts</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {shortcuts.map((s) => {
              const Icon = s.icon
              return (
                <button
                  key={s.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 py-5 text-sm font-medium text-gray-600 hover:border-brand-200 hover:bg-brand-50/50 hover:text-brand-700"
                >
                  <Icon className="h-5 w-5" />
                  {s.label}
                </button>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}
