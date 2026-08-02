import { LucideIcon, Construction } from 'lucide-react'
import AdminTopbar from '@/components/AdminTopbar'

export default function AdminComingSoon({
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
      <AdminTopbar title={title} />
      <main className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="flex w-full max-w-sm flex-col items-center rounded-xl border border-dashed border-gray-200 bg-white px-6 py-10 text-center shadow-card sm:px-10 sm:py-14">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
            <Icon className="h-6 w-6" />
          </div>
          <h2 className="font-semibold text-gray-900">{title}</h2>
          <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
        </div>
      </main>
    </>
  )
}
