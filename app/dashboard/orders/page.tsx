'use client'

import { useState } from 'react'
import { Plus, Search, SlidersHorizontal, MoreVertical } from 'lucide-react'
import DashboardTopbar from '@/components/DashboardTopbar'
import StatusBadge from '@/components/StatusBadge'
import { recentOrders } from '@/lib/data'

const tabs = ['All', 'New', 'Pending', 'Confirmed', 'In Transit', 'Delivered']

export default function OrdersPage() {
  const [tab, setTab] = useState('All')

  const filtered =
    tab === 'All' ? recentOrders : recentOrders.filter((o) => o.status === tab)

  return (
    <>
      <DashboardTopbar title="Orders" subtitle="Manage and track every order in one place." />

      <main className="flex-1 space-y-5 overflow-y-auto p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-500">
            <Search className="h-4 w-4" />
            <input
              placeholder="Search order ID or customer..."
              className="w-64 bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <button className="flex items-center gap-1.5 rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent-600">
              <Plus className="h-4 w-4" /> Create Order
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-card">
          <div className="flex items-center gap-1 overflow-x-auto border-b border-gray-100 px-4">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`whitespace-nowrap border-b-2 px-3 py-3 text-sm font-medium transition-colors ${
                  tab === t
                    ? 'border-accent-500 text-accent-600'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-xs uppercase tracking-wide text-gray-400">
                <th className="px-5 py-3 font-medium">Order ID</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Channel</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((o) => (
                <tr key={o.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60">
                  <td className="px-5 py-3.5 font-medium text-brand-600">{o.id}</td>
                  <td className="px-5 py-3.5 text-gray-700">{o.customer}</td>
                  <td className="px-5 py-3.5 text-gray-400">{o.via ?? '—'}</td>
                  <td className="px-5 py-3.5 text-gray-900">{o.amount}</td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={o.status} />
                  </td>
                  <td className="px-5 py-3.5 text-gray-400">{o.date}</td>
                  <td className="px-5 py-3.5 text-right">
                    <button className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-10 text-center text-sm text-gray-400">
                    No orders in this status yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}
