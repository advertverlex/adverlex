"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { TrendingUp, Users, ArrowRight } from "lucide-react"
import { IllustrationBlock } from "@/components/IllustrationBlock"
import Link from "next/link"
import { cn } from "@/lib/utils"

const audienceCards = [
  {
    title: "For Advertisers",
    description: "Reach new audiences, scale your sales, and track every dollar with our performance-driven digital and affiliate marketing solutions.",
    icon: TrendingUp,
    illustration: "/illustrations/revenue.svg",
    href: "/advertisers",
    cta: "Explore Advertiser Solutions",
    color: "orange",
  },
  {
    title: "For Affiliates",
    description: "Monetize your content and audience. Join our affiliate network and connect with top brands offering industry-leading commissions.",
    icon: Users,
    illustration: "/illustrations/affiliate-network.svg",
    href: "/affiliates",
    cta: "Explore Affiliate Opportunities",
    color: "amber",
  },
]

export function AudienceSplit() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background border-t border-white/5">

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16 md:mb-24">
          <span className="text-[10px] font-mono font-black tracking-widest text-brand-primary uppercase mb-6 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full w-fit">
            Our Ecosystem
          </span>

          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl max-w-3xl leading-[0.9] tracking-tighter">
            Tailored Solutions for <br className="hidden md:block" />
            Every Partner.
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {audienceCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="group glass p-10 lg:p-14 transition-all duration-500 rounded-3xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-6 mb-10">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center border",
                    card.color === "orange" ? "bg-brand-primary/10 border-brand-primary/20 text-brand-primary" : "bg-brand-secondary/10 border-brand-secondary/20 text-brand-secondary"
                  )}>
                    <card.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-black text-3xl lg:text-4xl tracking-tighter text-foreground">{card.title}</h3>


                </div>

                <p className="text-brand-muted text-lg leading-relaxed mb-12 flex-grow">
                  {card.description}
                </p>

                <div className="mb-12 w-full h-56 lg:h-72 transition-all duration-700">
                  <IllustrationBlock
                    src={card.illustration}
                    alt={card.title}
                    className="max-h-full"
                  />
                </div>

                <Link
                  href={card.href}
                  className="flex items-center gap-3 font-black text-brand-primary uppercase tracking-[0.2em] text-[10px] group-hover:gap-6 transition-all"
                >
                  {card.cta} <ArrowRight className="w-5 h-5" />
                </Link>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

