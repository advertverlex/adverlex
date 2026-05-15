"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/PageHero"
import { CTABanner } from "@/components/CTABanner"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ShieldCheck, BarChart3, Rocket, DollarSign, HelpCircle } from "lucide-react"

export function AffiliatesView() {
  return (
    <main className="relative min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      
      <PageHero
        tag="Partner Network"
        title={<>Fuel Your <span className="text-foreground/40 italic font-light">Content</span>. <br /> Earn Commissions.</>}

        subtitle="Join a network of creators and publishers. Connect with leading brands and grow your revenue through performance marketing."
        illustration="/illustrations/team.svg"
      />

      {/* Benefits Grid */}
      <section className="py-24 md:py-32 px-6 border-y border-white/5 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Top Brands", description: "Get direct access to world-class advertisers in diverse high-growth sectors.", icon: Rocket },
              { title: "High Payouts", description: "Earn more with competitive CPA, CPL, and RevShare commission models.", icon: DollarSign },
              { title: "Real-time Metrics", description: "Monitor every click and conversion instantly on your custom dashboard.", icon: BarChart3 },
              { title: "Secure Payments", description: "Reliable, on-time payments through multiple global payment methods.", icon: ShieldCheck },
            ].map((prop) => (
              <div key={prop.title} className="p-10 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 transition-transform">
                  <prop.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-black text-xl mb-4 tracking-tighter text-foreground uppercase">{prop.title}</h3>


                <p className="text-stone-400 text-sm leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-40 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.1] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <div className="w-20 h-20 rounded-xl border border-brand-primary/20 bg-brand-primary/10 flex items-center justify-center text-brand-primary mx-auto mb-8">
              <HelpCircle className="w-10 h-10" />
            </div>
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl mb-6 tracking-tighter text-foreground uppercase leading-[0.9]">Common Questions</h2>


            <p className="text-stone-400 text-lg">Everything you need to know about joining our network.</p>
          </div>
          
          <Accordion className="w-full space-y-6">
            {[
              { q: "How do I join the Adverlex network?", a: "Simply click 'Get Started' and fill out our application. Our team reviews every application within 48 hours to ensure a high-quality environment." },
              { q: "What verticals do you specialize in?", a: "We focus on high-growth sectors including SaaS, E-commerce, Fintech, and Education. We're always expanding into new profitable niches." },
              { q: "Is there a minimum traffic requirement?", a: "While we don't have a strict minimum, we look for partners with established audiences and a track record of quality content and ethical marketing." },
              { q: "How often are affiliates paid?", a: "We offer weekly, bi-weekly, and monthly payout cycles depending on your performance volume and history with us." },
              { q: "Do you provide promotional assets?", a: "Yes! Every approved affiliate gets access to banners, landing page templates, and copy assets provided by our advertisers." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-2xl px-6 md:px-10 bg-white/5 overflow-hidden hover:border-brand-primary/30 transition-all duration-500 mb-6 last:mb-0">
                <AccordionTrigger className="hover:no-underline font-heading font-black text-left py-6 md:py-8 text-foreground tracking-tighter text-sm md:text-xl uppercase">

                  {faq.q}
                </AccordionTrigger>

                <AccordionContent className="text-stone-400 pb-8 md:pb-10 leading-relaxed text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  )
}

