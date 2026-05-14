import { Metadata } from "next"
import { ContactView } from "@/components/views/ContactView"

export const metadata: Metadata = {
  title: "Contact Us — Let's Talk Growth",
  description: "Ready to forge your path to unstoppable growth? Fill out the form below and one of our performance experts will be in touch shortly.",
}

export default function ContactPage() {
  return <ContactView />
}
