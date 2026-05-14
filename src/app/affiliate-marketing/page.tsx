import { Metadata } from "next"
import { AffiliateMarketingView } from "@/components/views/AffiliateMarketingView"

export const metadata: Metadata = {
  title: "Affiliate Marketing Program Management — Scale via Partnerships",
  description: "We build and manage world-class affiliate programs. From partner recruitment to real-time tracking and automated commissions.",
  keywords: ["Affiliate Program Management", "Partnership Marketing", "Tracking Solutions", "Automated Commissions", "Partner Recruitment"],
}

export default function AffiliateMarketingPage() {
  return <AffiliateMarketingView />
}
