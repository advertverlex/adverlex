"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/PageHero"
import { CTABanner } from "@/components/CTABanner"
import { ShieldCheck, Heart, Zap, Users } from "lucide-react"

export function AboutView() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">

      <Navbar />
      
      <PageHero
        tag="About Us"
        title={<>We Are The <span className="text-foreground/40 italic font-light">Engineers</span> <br /> Of Growth</>}

        subtitle="Adverlex was founded on a singular principle: marketing must be data-driven, predictable, and performance-focused."
        illustration="/illustrations/team.svg"
      />

      {/* Mission Section */}
      <section className="py-24 md:py-40 px-6 border-y border-border/50 bg-background/50">

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="space-y-8">
              <span className="text-[10px] font-bold tracking-widest text-brand-primary uppercase block">Our Values</span>
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl leading-[0.9] tracking-tighter text-foreground uppercase">Our <span className="text-gradient">Mission.</span></h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                In an era of vanity metrics and changing algorithms, Adverlex provides brands with the infrastructure and expertise to scale with confidence. We bridge the gap between world-class advertisers and high-performing publishers.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Our team is a collective of data analysts, strategists, and performance experts obsessed with one metric: your return on investment.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Precision", icon: ShieldCheck, desc: "Transparent management and clear data reporting." },
                { title: "Performance", icon: Zap, desc: "A results-first mindset in everything we do." },
                { title: "Integrity", icon: Heart, desc: "We succeed only when our partners succeed." },
                { title: "Innovation", icon: Users, desc: "Building the technology that defines the future." },
              ].map((value) => (
                <div key={value.title} className="p-8 rounded-2xl bg-white/5 border border-white/5 group hover:border-brand-primary/30 transition-all duration-500">
                  <value.icon className="w-10 h-10 text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-heading font-black text-xl mb-3 text-foreground tracking-tighter uppercase">{value.title}</h4>

                  <p className="text-stone-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  )
}

