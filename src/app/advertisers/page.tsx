import { Metadata } from "next"
import { AdvertisersView } from "@/components/views/AdvertisersView"

export const metadata: Metadata = {
  title: "Performance Marketing for Advertisers — Risk-Free Scale",
  description: "Stop guessing. Start growing. Connect your brand with high-performing marketing channels that deliver measurable ROI.",
  keywords: ["Advertisers", "Performance Marketing", "ROI Growth", "Brand Scale", "Lead Acquisition", "Marketing Channels"],
}

export default function AdvertisersPage() {
  return <AdvertisersView />
}
