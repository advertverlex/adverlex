"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/PageHero"
import { CTABanner } from "@/components/CTABanner"
import { ShieldCheck, Target, Zap, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IllustrationBlock } from "@/components/IllustrationBlock"


export function AdvertisersView() {
  return (
    <main className="relative min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      
      <PageHero
        tag="Advertisers"
        title={<>Performance <span className="text-foreground/40 italic font-light">Marketing</span> <br /> That Delivers</>}

        subtitle="Stop guessing. Start growing. We build your brand's growth through performance channels that deliver real ROI."
        illustration="/illustrations/revenue.svg"
      />

      {/* Value Props */}
      <section className="py-24 md:py-32 px-6 border-y border-white/5 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Risk-Free Scale", description: "Only pay for verified conversions. Zero waste in your marketing spend.", icon: ShieldCheck },
              { title: "Targeted Precision", description: "Access specialized audiences via our network of vetted partners.", icon: Target },
              { title: "Rapid Setup", description: "Go from strategy to live campaigns in record time. Maximum efficiency.", icon: Zap },
              { title: "Real-time Insights", description: "Actionable analytics to understand every step of your customer journey.", icon: BarChart3 },
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

      {/* How it works for advertisers */}
      <section className="py-24 md:py-40 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.1] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            <div className="flex-1">
              <span className="text-[10px] font-mono font-black tracking-widest text-brand-primary uppercase mb-8 block">Our Methodology</span>
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl mb-12 leading-[0.9] tracking-tighter text-foreground">Scaling Your <br /><span className="text-gradient">Brand Growth.</span></h2>

              <div className="space-y-16">
                {[
                  { step: "01", title: "Strategy & Setup", desc: "We define your ideal customer profile and build the tracking infrastructure." },
                  { step: "02", title: "Partner Selection", desc: "We hand-pick and recruit top affiliates that align with your brand values." },
                  { step: "03", title: "Campaign Management", desc: "We manage the daily operations, optimization, and strict network compliance." },
                  { step: "04", title: "Continuous Scaling", desc: "We double down on high-performance channels and expand into new sectors." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-8 group">
                    <span className="font-heading font-bold text-5xl text-foreground/10 leading-none group-hover:text-brand-primary transition-colors">{item.step}</span>
                    <div>
                      <h4 className="font-heading font-black text-2xl mb-3 text-foreground tracking-tighter uppercase">{item.title}</h4>

                      <p className="text-stone-400 text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full glass rounded-3xl p-12 md:p-16 aspect-square flex flex-col items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-dot-grid opacity-[0.1]" />
               <div className="relative z-10 w-full mb-8 transition-all duration-700">
                  <IllustrationBlock 
                    src="/illustrations/roi-growth.svg"
                    alt="ROI Growth"
                    animate={true}
                  />
               </div>
               <div className="text-center relative z-10">
                  <p className="font-heading font-black text-5xl md:text-7xl text-foreground mb-2 tracking-tighter uppercase">Maximum ROI</p>
                  <p className="text-brand-primary font-mono font-black text-sm uppercase tracking-[0.3em]">Performance Engineered</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 md:py-40 px-6 border-t border-white/5 bg-brand-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl mb-6 tracking-tighter text-foreground uppercase leading-[0.9]">Service Packages</h2>

            <p className="text-stone-400 text-lg max-w-2xl mx-auto">Tailored marketing solutions designed to meet your brand's unique growth goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Starter", features: ["Affiliate Program Setup", "Partner Recruitment", "Performance Tracking", "Monthly Audit"] },
              { name: "Growth", features: ["Everything in Starter", "Active Partner Management", "Paid Media Integration", "Weekly Optimization"] },
              { name: "Enterprise", features: ["Full-service Management", "Custom Tech Integration", "Compliance & Security", "Dedicated Growth Manager"] },
            ].map((tier) => (
              <div key={tier.name} className="p-10 md:p-14 rounded-3xl bg-white/5 border border-white/5 flex flex-col items-center text-center hover:border-brand-primary/30 transition-all duration-500 group">
                <h3 className="font-heading font-black text-2xl mb-6 text-foreground uppercase tracking-tighter">{tier.name}</h3>

                <div className="h-1.5 w-16 bg-brand-primary rounded-full mb-10 group-hover:w-24 transition-all" />
                <ul className="space-y-6 mb-16 text-sm text-stone-400 font-medium tracking-wide flex-grow">
                  {tier.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <p className="font-mono font-black text-xl mb-10 uppercase tracking-[0.2em] text-brand-primary">Custom Quote</p>

                <Button className="w-full rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white font-bold uppercase tracking-widest h-16 transition-all hover:scale-[1.02]">Start Growing</Button>
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

