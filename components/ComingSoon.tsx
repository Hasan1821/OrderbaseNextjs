import { LucideIcon, Construction } from 'lucide-react'
import DashboardTopbar from '@/components/DashboardTopbar'

export default function ComingSoon({
  title,
  subtitle,
  icon: Icon = Construction,
}: {
  title: string
  subtitle: string
  icon?: LucideIcon
}) {
  return (
    <>
      <DashboardTopbar title={title} subtitle={subtitle} />
      <main className="flex flex-1 items-center justify-center p-8">
        <div className="flex max-w-sm flex-col items-center rounded-xl border border-dashed border-gray-200 bg-white px-10 py-14 text-center shadow-card">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
            <Icon className="h-6 w-6" />
          </div>
          <h2 className="font-semibold text-gray-900">{title} is on the way</h2>
          <p className="mt-1 text-sm text-gray-400">
            This section isn&apos;t wired up in the demo yet — plug in your data to bring it to life.
          </p>
        </div>
      </main>
    </>
  )
}
