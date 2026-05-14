"use client"

import * as React from "react"
import Link from "next/link"
import { LucideIcon, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  variant?: "glass" | "inverted" | "pattern" | "minimal"
  className?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  variant = "glass",
  className,
}: FeatureCardProps) {
  const variants = {
    glass: "bg-white/5 backdrop-blur-md border-orange-500/20 hover:border-orange-500/50 hover:shadow-[0_0_24px_rgba(249,115,22,0.1)]",
    inverted: "bg-brand-primary text-white border-transparent hover:bg-brand-primary/90 shadow-2xl shadow-brand-primary/20",
    pattern: "bg-brand-surface border-white/5 bg-dot-grid hover:border-brand-primary/30",
    minimal: "bg-transparent border-white/10 hover:border-brand-primary/40 hover:bg-brand-primary/5",
  }

  const iconColors = {
    glass: "text-brand-primary",
    inverted: "text-white",
    pattern: "text-brand-primary",
    minimal: "text-brand-primary",
  }

  const cardContent = (
    <>
      <div className={cn(
        "w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110",
        variant === "inverted" ? "bg-white/20" : "bg-brand-primary/10 border border-brand-primary/20"
      )}>
        <Icon className={cn("w-7 h-7", iconColors[variant])} />
      </div>
      <h3 className={cn(
        "font-heading font-black text-xl mb-4 tracking-tighter text-foreground uppercase"
      )}>
        {title}
      </h3>
      <p className={cn(
        "text-sm leading-relaxed mb-8 font-medium",
        variant === "inverted" ? "text-white/80" : "text-muted-foreground"
      )}>
        {description}
      </p>
      {href && (
        <div className={cn(
          "flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all group-hover:gap-5",
          variant === "inverted" ? "text-white" : "text-brand-primary"
        )}>
          Learn More <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </>
  )

  const CardWrapper = motion.div

  return (
    <CardWrapper
      whileHover={{ y: -8 }}
      className={cn(
        "group relative p-10 border rounded-2xl transition-all duration-500",
        variants[variant],
        className
      )}
    >
      {href ? (
        <Link href={href} className="block h-full">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </CardWrapper>
  )
}

