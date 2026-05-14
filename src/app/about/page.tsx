import { Metadata } from "next"
import { AboutView } from "@/components/views/AboutView"

export const metadata: Metadata = {
  title: "About Adverlex â€” The Engineers of Growth",
  description: "Founded on the principle that marketing should be measurable, predictable, and performance-driven. Meet the team behind the forge.",
}

export default function AboutPage() {
  return <AboutView />
}
