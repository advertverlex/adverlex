import { Metadata } from "next"
import { AffiliatesView } from "@/components/views/AffiliatesView"

export const metadata: Metadata = {
  title: "Join Our Affiliate Network — Monetize Your Audience",
  description: "Join an elite network of creators and publishers. Partner with top brands and earn industry-leading commissions.",
  keywords: ["Affiliate Network", "Monetize Traffic", "Publisher Program", "Creator Commissions", "Marketing Partners"],
}

export default function AffiliatesPage() {
  return <AffiliatesView />
}
