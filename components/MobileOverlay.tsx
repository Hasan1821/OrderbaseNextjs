'use client'

import { useSidebar } from '@/components/SidebarContext'

export default function MobileOverlay() {
  const { open, setOpen } = useSidebar()

  if (!open) return null

  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-30 bg-gray-900/40 backdrop-blur-[1px] lg:hidden"
      aria-hidden="true"
    />
  )
}
