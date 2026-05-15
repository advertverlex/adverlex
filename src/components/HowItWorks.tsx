"use client"

import * as React from "react"
import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn your business, goals, and current marketing gaps.",
  },
  {
    number: "02",
    title: "Strategy Build",
    description: "Our team crafts a custom digital + affiliate marketing roadmap.",
  },
  {
    number: "03",
    title: "Launch & Recruit",
    description: "We launch your campaigns and recruit high-performing affiliate partners.",
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description: "Continuous data analysis and iteration to maximize your ROI.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 md:py-40 relative overflow-hidden bg-background">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.1] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <span className="text-[10px] font-mono font-black tracking-widest text-brand-primary uppercase mb-6 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full">
            The Process
          </span>

          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl max-w-4xl leading-[0.9] tracking-tighter">
            From Zero to <span className="text-gradient">Full Throttle</span> <br className="hidden md:block" />
            in 4 Steps.
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Number Badge */}
              <div className="w-24 h-24 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center mb-10 relative z-10 group-hover:border-brand-primary transition-all duration-500 overflow-hidden">
                <span className="font-heading font-black text-4xl text-brand-muted/30 group-hover:text-brand-primary transition-colors z-10">
                  {step.number}
                </span>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/5 transition-all" />
              </div>
              
              <h3 className="font-heading font-black text-xl md:text-2xl mb-4 text-foreground tracking-tighter uppercase">
                {step.title}
              </h3>


              
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

