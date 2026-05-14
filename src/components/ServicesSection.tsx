"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { BarChart3, Network, CheckCircle2, ArrowRight } from "lucide-react"
import { IllustrationBlock } from "@/components/IllustrationBlock"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Digital Marketing",
    tag: "Visibility & Growth",
    description: "Build a brand that commands market share. Our data-driven strategies focus on high-impact channels that drive direct, verifiable growth.",
    icon: BarChart3,
    illustration: "/illustrations/growth-analytics.svg",
    href: "/digital-marketing",
    features: [
      "Search Engine Optimization (SEO)",
      "Paid Advertising (Google, Meta, TikTok Ads)",
      "Social Media Management",
      "Content Marketing & Strategy",
      "Email Marketing Campaigns",
      "Brand Identity & Positioning",
    ],
  },
  {
    title: "Affiliate Marketing",
    tag: "Scalable Partnerships",
    description: "Launch a partner network built for scalability. We manage recruitment and compliance, ensuring every dollar is tied to precision results.",
    icon: Network,
    illustration: "/illustrations/data-driven.svg",
    href: "/affiliate-marketing",
    features: [
      "Affiliate Program Setup & Management",
      "Partner Recruitment & Onboarding",
      "Performance Tracking & Reporting",
      "Commission Automation",
      "Fraud Detection & Compliance",
      "Custom Affiliate Dashboard",
    ],
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 md:py-40 bg-background border-y border-white/5 relative">

      <div className="absolute inset-0 bg-dot-grid opacity-[0.1] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <span className="text-[10px] font-mono font-black tracking-widest text-brand-primary uppercase mb-6 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full">
            What We Do
          </span>

          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl max-w-4xl leading-[0.9] tracking-tighter">
            Two Powerful Services. <br />
            One <span className="text-gradient">Growth Engine.</span>
          </h2>

        </div>

        <div className="space-y-32 md:space-y-48">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-16 lg:gap-32 items-center`}
            >
              {/* Text Area */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono font-black text-[10px] tracking-[0.2em] uppercase text-brand-muted">
                    {service.tag}
                  </span>

                </div>
                
                <h3 className="font-heading font-black text-3xl md:text-5xl mb-8 tracking-tighter">
                  {service.title}
                </h3>

                
                <p className="text-brand-muted text-lg leading-relaxed mb-12 font-medium">
                  {service.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4 text-brand-light/80 text-sm font-medium tracking-wide">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-white/10 hover:border-brand-primary/40 hover:bg-brand-primary/5 text-brand-primary font-black h-14 px-8 uppercase tracking-[0.2em] text-[10px] transition-all"
                >
                  <Link href={service.href}>
                    Learn More <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                </Button>

              </motion.div>

              {/* Illustration Area */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full max-w-md lg:max-w-none grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-primary/10 blur-[100px] rounded-none opacity-50" />
                  <IllustrationBlock
                    src={service.illustration}
                    alt={service.title}
                    className="relative z-10"
                    animate={true}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

