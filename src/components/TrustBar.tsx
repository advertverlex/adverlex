"use client"

import * as React from "react"
import { motion } from "framer-motion"

const brands = [
  "LUMINA CORE",
  "NEXUS VANTAGE",
  "HORIZON PEAK",
  "VELOCITY LABS",
  "QUANTUM EDGE",
  "ECLIPSE SOLUTIONS",
  "STRATOS MEDIA",
  "FORGE DIGITAL",
]

export function TrustBar() {
  return (
    <section className="py-12 border-y border-white/5 bg-brand-dark/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center relative z-10">
        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
          Powering performance for industry leaders
        </p>
      </div>
      <div className="flex overflow-hidden relative group z-10">
        <motion.div
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-nowrap shrink-0 gap-24 items-center px-12"
        >
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-heading font-bold text-stone-800 border-x border-white/5 px-8 hover:text-white transition-all duration-500 cursor-default whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

