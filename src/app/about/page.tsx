import { Metadata } from "next"
import { AboutView } from "@/components/views/AboutView"

export const metadata: Metadata = {
  title: "About Adverlex — The Engineers of Growth",
  description: "Founded on the principle that marketing should be measurable, predictable, and performance-driven. Meet the team behind the agency.",
  keywords: ["Marketing Agency", "Growth Strategy", "Data-Driven Marketing", "Adverlex Team", "Performance Engineers"],
}

export default function AboutPage() {
  return <AboutView />
}
