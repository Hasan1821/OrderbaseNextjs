import AdminSidebar from '@/components/AdminSidebar'
import { SidebarProvider } from '@/components/SidebarContext'
import MobileOverlay from '@/components/MobileOverlay'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        <AdminSidebar />
        <MobileOverlay />
        <div className="flex min-w-0 flex-1 flex-col">{children}</div>
      </div>
    </SidebarProvider>
  )
}
