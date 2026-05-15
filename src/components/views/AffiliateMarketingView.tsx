"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/PageHero"
import { FeatureCard } from "@/components/FeatureCard"
import { CTABanner } from "@/components/CTABanner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatsCounter } from "@/components/StatsCounter"
import { Network, Users, ShieldCheck, BarChart3, Settings, Rocket } from "lucide-react"

const affiliateFeatures = [
  { title: "Program Setup", description: "End-to-end program architecture tailored to your specific business goals.", icon: Settings, variant: "glass" as const },
  { title: "Partner Recruitment", description: "Proactive outreach to high-performing affiliates in your niche.", icon: Users, variant: "pattern" as const },
  { title: "Smart Tracking", description: "Cookie-less and cross-device tracking to ensure every conversion is captured.", icon: BarChart3, variant: "minimal" as const },
  { title: "Auto-Payouts", description: "Automated, transparent commission processing for your entire network.", icon: ShieldCheck, variant: "minimal" as const },
  { title: "Growth Analytics", description: "Deep-dive reports on partner performance and incrementality.", icon: Rocket, variant: "pattern" as const },
  { title: "Global Network", description: "Instantly tap into our existing database of 50,000+ vetted publishers.", icon: Network, variant: "glass" as const },
]

export function AffiliateMarketingView() {
  return (
    <main className="relative min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      
      <PageHero
        tag="Services"
        title={<>Affiliate <span className="text-foreground/40 italic font-light">Marketing</span> <br /> Built for Scale</>}

        subtitle="We build and manage world-class affiliate programs. From partner recruitment to real-time tracking and automated commission management."
        illustration="/illustrations/affiliate-network.svg"
      />

      {/* Stats Row */}
      <section className="py-12 bg-brand-dark/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCounter value={50000} suffix="+" label="Active Publishers" />
            <StatsCounter value={15} prefix="$" suffix="M" label="Annual Commissions" />
            <StatsCounter value={25} suffix="%" label="Avg. Growth Increase" />
            <StatsCounter value={100} suffix="%" label="Network Compliance" />
          </div>
        </div>
      </section>

      {/* Audience Tabs */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="advertisers" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-10 md:mb-16 h-16 md:h-20 bg-brand-surface rounded-xl p-2 border border-white/5">
              <TabsTrigger value="advertisers" className="rounded-lg font-heading font-black text-xs md:text-sm uppercase tracking-widest data-[state=active]:bg-brand-primary data-[state=active]:text-white data-[state=active]:shadow-2xl transition-all">For Advertisers</TabsTrigger>
              <TabsTrigger value="affiliates" className="rounded-lg font-heading font-black text-xs md:text-sm uppercase tracking-widest data-[state=active]:bg-brand-primary data-[state=active]:text-white data-[state=active]:shadow-2xl transition-all">For Affiliates</TabsTrigger>

            </TabsList>
            <TabsContent value="advertisers" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="glass p-8 md:p-16 rounded-3xl">
                <h3 className="font-heading font-black text-3xl md:text-5xl mb-8 leading-[0.9] tracking-tighter text-foreground uppercase">Scale Your Sales, <br />Not Your Overhead.</h3>

                <p className="text-stone-400 text-lg md:text-xl mb-12 leading-relaxed">
                  Launching an affiliate program shouldn&apos;t be a bottleneck. We handle the technical integration, recruitment, and day-to-day operations so you can focus on your business goals.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["Performance-based pricing", "Custom recruitment", "Proactive fraud prevention", "Real-time ROI dashboard"].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-foreground font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">

                      <div className="w-2.5 h-2.5 rounded-full bg-brand-primary glow-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="affiliates" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="glass p-8 md:p-16 rounded-3xl">
                <h3 className="font-heading font-black text-3xl md:text-5xl mb-8 leading-[0.9] tracking-tighter text-foreground uppercase">Partner with <br />Brands You Love.</h3>

                <p className="text-stone-400 text-lg md:text-xl mb-12 leading-relaxed">
                  Join our network of content creators and publishers. Access exclusive offers, high-converting landing pages, and a dedicated partner manager to help you scale.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["Weekly/Bi-weekly payouts", "High-ticket offers", "Custom creative assets", "Dedicated support"].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-foreground font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">

                      <div className="w-2.5 h-2.5 rounded-full bg-brand-primary glow-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-24 md:py-40 bg-brand-dark/50 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.1] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl mb-8 tracking-tighter text-foreground uppercase leading-[0.9]">Program Features</h2>

            <p className="text-stone-400 max-w-2xl mx-auto text-lg md:text-xl">
              Everything you need to launch, manage, and scale a high-performance affiliate program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {affiliateFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                variant={feature.variant}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  )
}

