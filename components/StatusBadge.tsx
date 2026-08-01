const styles: Record<string, string> = {
  Delivered: 'bg-emerald-50 text-emerald-600',
  Processing: 'bg-brand-50 text-brand-600',
  Shipped: 'bg-sky-50 text-sky-600',
  Pending: 'bg-amber-50 text-amber-600',
  Confirmed: 'bg-emerald-50 text-emerald-600',
  'In Transit': 'bg-violet-50 text-violet-600',
  Active: 'bg-emerald-50 text-emerald-600',
  Trial: 'bg-amber-50 text-amber-600',
  Cancelled: 'bg-red-50 text-red-500',
}

export default function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${
        styles[status] ?? 'bg-gray-100 text-gray-600'
      }`}
    >
      {status}
    </span>
  )
}
