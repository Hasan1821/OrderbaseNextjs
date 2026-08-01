import AdminComingSoon from "@/components/AdminComingSoon"
import { HeartPulse } from "lucide-react"

export default function Page() {
  return <AdminComingSoon title="System Health" subtitle="Monitor uptime and infrastructure health." icon={HeartPulse} />
}
