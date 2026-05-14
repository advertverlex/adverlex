import { Metadata } from "next"
import { DigitalMarketingView } from "@/components/views/DigitalMarketingView"

export const metadata: Metadata = {
  title: "Digital Marketing Services â€” SEO, PPC, Social & Brand Growth",
  description: "Dominating search rankings, ROI-focused paid ads, and brand growth strategies. Adverlex delivers data-driven digital marketing that turns clicks into revenue.",
}

export default function DigitalMarketingPage() {
  return <DigitalMarketingView />
}
