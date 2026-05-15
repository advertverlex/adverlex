"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/PageHero"
import { FeatureCard } from "@/components/FeatureCard"
import { CTABanner } from "@/components/CTABanner"
import { BarChart3, Search, Share2, FileText, Mail, ShieldCheck, Target, Zap, TrendingUp } from "lucide-react"

const dmServices = [
  {
    title: "SEO Optimization",
    description: "Dominating search rankings with ethical, long-term strategies that drive organic traffic.",
    icon: Search,
    variant: "glass" as const,
  },
  {
    title: "Paid Advertising",
    description: "ROI-focused campaigns across Google, Meta, and TikTok to capture immediate intent.",
    icon: Target,
    variant: "pattern" as const,
  },
  {
    title: "Social Media",
    description: "Building community and brand authority across the most relevant social platforms.",
    icon: Share2,
    variant: "minimal" as const,
  },
  {
    title: "Content Strategy",
    description: "Storytelling that converts. From blog posts to video scripts that resonate with your audience.",
    icon: FileText,
    variant: "minimal" as const,
  },
  {
    title: "Email Marketing",
    description: "Retention-focused campaigns that turn one-time buyers into lifetime customers.",
    icon: Mail,
    variant: "pattern" as const,
  },
  {
    title: "Brand Identity",
    description: "Crafting a visual and verbal identity that stands out in a crowded digital marketplace.",
    icon: ShieldCheck,
    variant: "glass" as const,
  },
]

export function DigitalMarketingView() {
  return (
    <main className="relative min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      
      <PageHero
        tag="Services"
        title={<>Data-Driven <br /> Digital <span className="text-foreground/40 italic font-light">Marketing</span></>}

        subtitle="Adverlex builds digital marketing programs that turn clicks into revenue. Engineering growth for brands worldwide."
        illustration="/illustrations/growth-analytics.svg"
      />

      {/* Services Grid */}
      <section className="py-24 md:py-40 px-6 relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.1] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {dmServices.map((service) => (
              <FeatureCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                variant={service.variant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Adverlex */}
      <section className="py-24 md:py-40 bg-brand-dark/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <span className="text-[10px] font-bold tracking-widest text-brand-primary uppercase mb-6 block">Why Us</span>
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl mb-8 tracking-tighter text-foreground uppercase leading-[0.9]">
              Why Choose <span className="text-gradient">Adverlex?</span>
            </h2>

            <p className="text-stone-400 max-w-2xl text-lg md:text-xl">
              We don't just run ads. We build sustainable growth engines that leverage data to maximize your ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Performance First", description: "Every campaign is tracked and measured for real business impact.", icon: TrendingUp },
              { title: "Proprietary Tech", description: "Access our custom tracking and analytics platforms built for scale.", icon: Zap },
              { title: "Expert Access", description: "Work directly with marketing experts, not junior account handlers.", icon: Target },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 transition-transform">
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-black text-2xl mb-4 text-foreground tracking-tighter uppercase">{item.title}</h3>

                <p className="text-stone-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  )
}

