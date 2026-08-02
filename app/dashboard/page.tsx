'use client'

import Link from 'next/link'
import {
  ShoppingCart,
  Wallet,
  Clock,
  FileText,
  CheckCircle2,
  ChevronDown,
  Plus,
  AlertTriangle,
  PackageX,
  Boxes,
  Users2,
} from 'lucide-react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import DashboardTopbar from '@/components/DashboardTopbar'
import StatCard from '@/components/StatCard'
import StatusBadge from '@/components/StatusBadge'
import { recentOrders, topProducts, salesOverview, orderStatusBreakdown } from '@/lib/data'

export default function DashboardPage() {
  return (
    <>
      <DashboardTopbar title="Welcome back, Shovon 👋" subtitle="Here's what's happening with your business today." />

      <main className="min-h-0 flex-1 space-y-5 overflow-y-auto p-4 sm:space-y-6 sm:p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600">
            Jul 20, 2024 – Aug 18, 2024
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
          <Link
            href="/dashboard/orders"
            className="flex items-center gap-1.5 rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent-600"
          >
            <Plus className="h-4 w-4" /> Create Order
          </Link>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard icon={Wallet} iconClass="bg-emerald-50 text-emerald-600" label="Total Sales" value="৳125,430" change="24.5%" />
          <StatCard icon={ShoppingCart} iconClass="bg-brand-50 text-brand-600" label="Total Orders" value="320" change="18.2%" />
          <StatCard icon={Users2} iconClass="bg-sky-50 text-sky-600" label="Total Customers" value="248" change="16.7%" />
          <StatCard icon={Clock} iconClass="bg-amber-50 text-amber-600" label="Pending Orders" value="32" change="5.1%" trend="down" />
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Sales overview */}
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card xl:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Sales Overview</h3>
              <div className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-500">
                This Month <ChevronDown className="h-3.5 w-3.5" />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={salesOverview} margin={{ left: -18 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} tickFormatter={(v) => `${v / 1000}K`} />
                <Tooltip formatter={(v: number) => `৳${v.toLocaleString()}`} />
                <Line type="monotone" dataKey="previous" stroke="#d1d5db" strokeDasharray="5 5" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="period" stroke="#6366f1" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Top selling products */}
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Top Selling Products</h3>
              <Link href="/dashboard/products" className="text-xs font-medium text-brand-600 hover:underline">
                View all
              </Link>
            </div>
            <ul className="space-y-4">
              {topProducts.map((p) => (
                <li key={p.name} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                    <Boxes className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900">{p.name}</p>
                    <p className="text-xs text-gray-400">{p.sold} sold</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{p.revenue}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Recent orders */}
          <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-card xl:col-span-2">
            <div className="flex items-center justify-between border-b border-gray-100 p-5">
              <h3 className="font-semibold text-gray-900">Recent Orders</h3>
              <Link href="/dashboard/orders" className="text-xs font-medium text-brand-600 hover:underline">
                View all
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-xs uppercase tracking-wide text-gray-400">
                    <th className="px-5 py-3 font-medium">Order ID</th>
                    <th className="px-5 py-3 font-medium">Customer</th>
                    <th className="px-5 py-3 font-medium">Amount</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                    <th className="px-5 py-3 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.slice(0, 4).map((o) => (
                    <tr key={o.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60">
                      <td className="px-5 py-3.5 font-medium text-brand-600">{o.id}</td>
                      <td className="px-5 py-3.5 text-gray-700">{o.customer}</td>
                      <td className="px-5 py-3.5 text-gray-900">{o.amount}</td>
                      <td className="px-5 py-3.5">
                        <StatusBadge status={o.status} />
                      </td>
                      <td className="px-5 py-3.5 text-gray-400">{o.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Business summary */}
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card">
            <h3 className="mb-4 font-semibold text-gray-900">Business Summary</h3>
            <ul className="space-y-4">
              {[
                { icon: FileText, label: 'Total Products', value: 128, class: 'bg-brand-50 text-brand-600' },
                { icon: AlertTriangle, label: 'Low Stock Items', value: 18, class: 'bg-amber-50 text-amber-600' },
                { icon: PackageX, label: 'Out of Stock Items', value: 4, class: 'bg-red-50 text-red-500' },
                { icon: Users2, label: 'Total Team Members', value: 6, class: 'bg-emerald-50 text-emerald-600' },
              ].map((row) => {
                const Icon = row.icon
                return (
                  <li key={row.label} className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${row.class}`}>
                      <Icon className="h-[18px] w-[18px]" />
                    </div>
                    <span className="flex-1 text-sm text-gray-600">{row.label}</span>
                    <span className="text-sm font-semibold text-gray-900">{row.value}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Orders by status donut, echoing the FCommerce dashboard view */}
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card">
          <h3 className="mb-4 font-semibold text-gray-900">Orders by Status</h3>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <ResponsiveContainer width={220} height={220}>
              <PieChart>
                <Pie
                  data={orderStatusBreakdown}
                  dataKey="value"
                  nameKey="label"
                  innerRadius={65}
                  outerRadius={100}
                  paddingAngle={2}
                >
                  {orderStatusBreakdown.map((entry) => (
                    <Cell key={entry.label} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <ul className="grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-2">
              {orderStatusBreakdown.map((s) => (
                <li key={s.label} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-gray-600">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                    {s.label}
                  </span>
                  <span className="font-medium text-gray-900">
                    {s.value} <span className="text-gray-400">({s.pct})</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
