"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight, Zap } from "lucide-react"

export function ContactForm() {
  const recipient = "joel@adverlex.com"
  const subject = encodeURIComponent("Growth Inquiry - [Your Company]")
  const body = encodeURIComponent(
    "Hello Adverlex Team,\n\nI am interested in learning more about your performance marketing and affiliate services.\n\nMy Details:\n- Name:\n- Company:\n- Website:\n- Project Goals:\n\nLooking forward to hearing from you!"
  )

  const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`

  return (
    <div className="glass p-10 md:p-20 rounded-3xl border-white/5 bg-brand-surface/50 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-8">
        <Zap className="w-10 h-10" />
      </div>
      
      <h3 className="font-heading font-black text-4xl md:text-5xl mb-6 tracking-tighter text-foreground uppercase">
        Ready to <span className="text-brand-primary">Forge</span> Your Growth?
      </h3>
      
      <p className="text-brand-muted text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
        Skip the forms. Click the button below to open a direct line to our performance engineering team via email.
      </p>

      <Button 
        asChild
        className="w-full h-16 md:h-20 rounded-2xl bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-xs sm:text-base md:text-2xl uppercase tracking-widest transition-all hover:scale-[1.05] active:scale-95 shadow-2xl shadow-brand-primary/40 group px-4 sm:px-8"
      >
        <a href={mailtoLink} className="flex items-center justify-center gap-2 sm:gap-4">
          <Mail className="w-5 h-5 sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform shrink-0" />
          <span className="whitespace-nowrap">Send Growth Inquiry</span>
          <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0 hidden sm:block" />
        </a>
      </Button>

      <p className="mt-8 text-[10px] text-stone-500 uppercase tracking-widest font-bold">
        Average response time: <span className="text-brand-primary">&lt; 12 hours</span>
      </p>
    </div>
  )
}
