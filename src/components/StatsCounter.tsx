"use client"

import * as React from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface StatsCounterProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  className?: string
}

export function StatsCounter({
  value,
  label,
  suffix = "",
  prefix = "",
  className,
}: StatsCounterProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const spring = useSpring(0, {
    duration: 2000,
    bounce: 0,
  })

  const displayValue = useTransform(spring, (latest) =>
    Math.floor(latest).toLocaleString()
  )

  React.useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return (
    <div ref={ref} className={cn("text-center p-8 border border-white/5 bg-white/2 backdrop-blur-sm transition-all hover:border-brand-primary/20 rounded-2xl", className)}>
      <div className="flex items-center justify-center font-heading font-black text-4xl md:text-5xl lg:text-7xl text-foreground mb-4 leading-none tracking-tighter uppercase">
        {prefix}
        <motion.span className="tabular-nums">{displayValue}</motion.span>
        <span className="text-brand-primary">{suffix}</span>
      </div>

      <p className="text-brand-muted font-bold uppercase tracking-widest text-[10px]">
        {label}
      </p>
    </div>
  )
}
