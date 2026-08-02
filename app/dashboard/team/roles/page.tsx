'use client'

import { useState } from 'react'
import { Search, ChevronUp, Info } from 'lucide-react'
import DashboardTopbar from '@/components/DashboardTopbar'
import { roles, permissionGroups } from '@/lib/data'

export default function RolesPermissionsPage() {
  const [selectedRole, setSelectedRole] = useState('Admin')
  const [checked, setChecked] = useState<Record<string, boolean>>(
    Object.fromEntries(
      permissionGroups.flatMap((g) => [
        [g.group, true],
        ...g.items.map((i) => [i, true]),
      ])
    )
  )

  const toggle = (key: string) => setChecked((c) => ({ ...c, [key]: !c[key] }))

  return (
    <>
      <DashboardTopbar title="Assign Role & Permissions" subtitle="Manage roles and permissions for this team member." />

      <main className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-5 rounded-xl border border-gray-100 bg-white p-5 shadow-card lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-100 text-sm font-bold text-accent-600">
              TA
            </div>
            <div>
              <p className="font-semibold text-gray-900">Taifa Ahmed</p>
              <p className="text-sm text-gray-400">taifa.ahmed@example.com</p>
            </div>
            <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
              Active
            </span>
          </div>
          <div className="hidden gap-8 text-sm text-gray-500 lg:flex">
            <div>
              <p className="text-xs text-gray-400">Phone</p>
              <p className="font-medium text-gray-700">+880 1712 345678</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Joined At</p>
              <p className="font-medium text-gray-700">24 Jan 2024</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Last Login</p>
              <p className="font-medium text-gray-700">23 May 2024</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 lg:flex-none">
              Cancel
            </button>
            <button className="flex-1 rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-600 lg:flex-none">
              Save Changes
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Roles list */}
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card">
            <h3 className="font-semibold text-gray-900">Roles</h3>
            <p className="mb-4 text-sm text-gray-400">Select role(s) for this user</p>
            <div className="mb-3 flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-400">
              <Search className="h-4 w-4" />
              <input placeholder="Search roles..." className="w-full bg-transparent outline-none" />
            </div>
            <ul className="space-y-1">
              {roles.map((r) => (
                <li key={r.name}>
                  <button
                    onClick={() => setSelectedRole(r.name)}
                    className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors ${
                      selectedRole === r.name
                        ? 'border-accent-200 bg-accent-50'
                        : 'border-transparent hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      readOnly
                      checked={selectedRole === r.name}
                      className="h-4 w-4 rounded accent-accent-500"
                    />
                    <span>
                      <span className="block text-sm font-semibold text-gray-900">{r.name}</span>
                      <span className="block text-xs text-gray-400">{r.description}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Permissions */}
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Permissions</h3>
                <p className="text-sm text-gray-400">Set permissions for the selected role(s)</p>
              </div>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-1.5 text-sm text-gray-500">
                  <input type="checkbox" className="h-4 w-4 rounded accent-accent-500" />
                  Select All
                </label>
                <button className="rounded-md border border-gray-200 p-1.5 text-gray-400 hover:bg-gray-50">
                  <ChevronUp className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-5">
              {permissionGroups.map((g) => (
                <div key={g.group} className="rounded-lg border border-gray-100">
                  <div className="flex items-start justify-between gap-3 border-b border-gray-100 bg-gray-50/60 p-3.5">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{g.group}</p>
                      <p className="text-xs text-gray-400">{g.description}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={!!checked[g.group]}
                      onChange={() => toggle(g.group)}
                      className="mt-1 h-4 w-4 rounded accent-accent-500"
                    />
                  </div>
                  <div className="divide-y divide-gray-50">
                    {g.items.map((item) => (
                      <label
                        key={item}
                        className="flex items-center justify-between px-3.5 py-2.5 text-sm text-gray-600"
                      >
                        {item}
                        <input
                          type="checkbox"
                          checked={!!checked[item]}
                          onChange={() => toggle(item)}
                          className="h-4 w-4 rounded accent-accent-500"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 rounded-xl border border-brand-100 bg-brand-50 p-4 text-sm text-brand-700">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          Changes will be applied immediately. The user will need to re-login to see the changes.
        </div>
      </main>
    </>
  )
}
