import DashboardSidebar from '@/components/DashboardSidebar'
import { SidebarProvider } from '@/components/SidebarContext'
import MobileOverlay from '@/components/MobileOverlay'
import AuthGuard from '@/components/AuthGuard'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="flex h-screen overflow-hidden bg-gray-50">
          <DashboardSidebar />
          <MobileOverlay />
          <div className="flex h-screen min-w-0 flex-1 flex-col overflow-hidden">
            {children}
          </div>
        </div>
      </SidebarProvider>
    </AuthGuard>
  )
}
