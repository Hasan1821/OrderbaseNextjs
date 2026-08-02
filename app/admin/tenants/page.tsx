'use client'

import { Search, Plus, MoreVertical } from 'lucide-react'
import AdminTopbar from '@/components/AdminTopbar'
import StatusBadge from '@/components/StatusBadge'
import { tenants } from '@/lib/data'

export default function TenantsPage() {
  return (
    <>
      <AdminTopbar title="Tenants (Businesses)" />

      <main className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex w-full items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-500 sm:w-auto">
            <Search className="h-4 w-4 shrink-0" />
            <input placeholder="Search tenants..." className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400 sm:w-64" />
          </div>
          <button className="flex items-center gap-1.5 rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent-600">
            <Plus className="h-4 w-4" /> Create Tenant
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-xs uppercase tracking-wide text-gray-400">
                  <th className="px-5 py-3 font-medium">Tenant / Business</th>
                  <th className="px-5 py-3 font-medium">Plan</th>
                  <th className="px-5 py-3 font-medium">Orders (30d)</th>
                  <th className="px-5 py-3 font-medium">Revenue (30d)</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Created At</th>
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
                    <td className="px-5 py-3.5 text-gray-400">{t.created}</td>
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
          <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 px-5 py-3 text-sm text-gray-500 sm:flex-row">
            <span>Showing 1 to 5 of 1,842 tenants</span>
            <div className="flex items-center gap-1">
              {['1', '2', '3', '...', '369'].map((p) => (
                <button
                  key={p}
                  className={`rounded-md px-2.5 py-1 ${
                    p === '1' ? 'bg-accent-500 text-white' : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
