"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { IllustrationBlock } from "@/components/IllustrationBlock"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">

      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(249,115,22,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-primary/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <Badge variant="outline" className="px-4 py-1.5 rounded-full border-brand-primary/30 bg-brand-primary/10 text-brand-primary font-bold tracking-widest text-[10px] uppercase">
                🔥 Affiliate & Digital Marketing Agency
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading font-black text-5xl md:text-8xl leading-[0.9] tracking-tighter mb-8"
            >
              Forge <span className="text-foreground/40 italic font-light">Unstoppable</span> <br />

              <span className="text-foreground">Traffic & </span>
              <span className="text-gradient">Revenue.</span>

            </motion.h1>


            <motion.p
              variants={itemVariants}
              className="text-brand-muted text-lg md:text-xl leading-relaxed max-w-xl mb-10"
            >
              Adverlex builds data-driven digital marketing and affiliate programs that turn clicks into customers â€” and customers into long-term revenue.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="h-16 px-10 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white font-bold glow-primary text-lg transition-all hover:scale-[1.02] active:scale-95 tracking-wide"
              >
                <Link href="/advertisers">
                  I&apos;m an Advertiser <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-16 px-10 rounded-xl border-border hover:border-brand-primary/40 hover:bg-brand-primary/5 text-foreground font-bold text-lg tracking-wide transition-all"
              >
                <Link href="/affiliates">I&apos;m an Affiliate</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-16 flex items-center gap-8 border-t border-border pt-8"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-xl border border-white/10 bg-brand-surface flex items-center justify-center text-xs font-bold text-brand-muted uppercase">
                    P{i}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[10px] text-brand-muted uppercase tracking-[0.2em] font-black mb-1">
                  Industrial Strength Scale
                </p>
                <p className="text-sm text-foreground">
                  Trusted by <span className="text-brand-primary font-bold">5,000+</span> Businesses Worldwide
                </p>

              </div>
            </motion.div>
          </motion.div>

          {/* Illustration Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 w-full max-w-[500px] mx-auto lg:max-w-none transition-all duration-700">
              <IllustrationBlock
                src="/illustrations/online-marketing.svg"
                alt="Online Marketing Strategy"
                animate={true}
              />
            </div>
            {/* Industrial Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/10 rounded-none rotate-45 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-secondary/5 rounded-none blur-[100px]" />
            
            {/* Floating Stats UI element */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute top-1/2 -right-4 glass p-6 border-brand-primary/20 hidden md:block"
            >
              <p className="text-[10px] font-mono font-black text-brand-primary uppercase tracking-widest mb-1">Real-time Load</p>
              <p className="text-2xl font-mono font-black text-foreground leading-none">98.4%</p>

            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

