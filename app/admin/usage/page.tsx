import AdminComingSoon from "@/components/AdminComingSoon"
import { Gauge } from "lucide-react"

export default function Page() {
  return <AdminComingSoon title="Usage & Limits" subtitle="Monitor tenant usage against plan limits." icon={Gauge} />
}
