"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { IllustrationBlock } from "@/components/IllustrationBlock"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  title: React.ReactNode

  subtitle: string
  tag: string
  illustration: string
  className?: string
  reverse?: boolean
}

export function PageHero({
  title,
  subtitle,
  tag,
  illustration,
  className,
  reverse = false,
}: PageHeroProps) {
  return (
    <section className={cn("relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-background", className)}>

      <div className="absolute inset-0 bg-dot-grid opacity-[0.1] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center",
          reverse ? "lg:flex-row-reverse" : ""
        )}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as any }}
          >
            <Badge variant="outline" className="px-3 py-1 rounded-full border-brand-primary/30 bg-brand-primary/10 text-brand-primary font-black tracking-[0.3em] uppercase text-[10px] mb-8 md:mb-10 font-mono">
              {tag}
            </Badge>

            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter mb-8 md:mb-10 text-foreground uppercase">
              {title}
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl font-medium">
              {subtitle}
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: reverse ? 5 : -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" as any, delay: 0.2 }}
            className="relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
          >
            <IllustrationBlock
              src={illustration}
              alt={title}
              animate={true}
              className="max-w-md mx-auto lg:max-w-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

