import { LucideIcon } from 'lucide-react'

type StatCardProps = {
  icon: LucideIcon
  iconClass?: string
  label: string
  value: string
  change?: string
  trend?: 'up' | 'down'
  sub?: string
}

export default function StatCard({
  icon: Icon,
  iconClass = 'bg-brand-50 text-brand-600',
  label,
  value,
  change,
  trend = 'up',
  sub = 'vs last 7 days',
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card">
      <div className="flex items-start gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconClass}`}>
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm text-gray-500">{label}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
      {change && (
        <div className="mt-3 flex items-center gap-1.5 text-xs">
          <span
            className={`inline-flex items-center gap-0.5 font-medium ${
              trend === 'up' ? 'text-emerald-600' : 'text-red-500'
            }`}
          >
            {trend === 'up' ? '↑' : '↓'} {change}
          </span>
          <span className="text-gray-400">{sub}</span>
        </div>
      )}
    </div>
  )
}
