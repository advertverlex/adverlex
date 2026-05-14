import { Metadata } from "next"
import { DigitalMarketingView } from "@/components/views/DigitalMarketingView"

export const metadata: Metadata = {
  title: "Digital Marketing Services — SEO, PPC, Social & Brand Growth",
  description: "Dominating search rankings, ROI-focused paid ads, and brand growth strategies. Adverlex delivers data-driven digital marketing that turns clicks into revenue.",
  keywords: ["SEO", "PPC", "Social Media Marketing", "Content Marketing", "Digital Strategy"],
}

export default function DigitalMarketingPage() {
  return <DigitalMarketingView />
}
