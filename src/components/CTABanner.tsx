"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IllustrationBlock } from "@/components/IllustrationBlock"
import Link from "next/link"

export function CTABanner() {
  return (
    <section className="py-24 md:py-40 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 p-10 md:p-24 shadow-2xl shadow-orange-500/20">
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase mb-6 block">
                Take the Next Step
              </span>
              <h2 className="font-heading font-bold text-4xl md:text-6xl text-white leading-tight mb-8">
                Ready to Forge <br />
                Your Growth?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-12 max-w-md leading-relaxed">
                Let&apos;s build your custom digital marketing or affiliate program. No fluff — just results.
              </p>
              <Button
                asChild
                size="lg"
                className="h-16 px-12 rounded-xl bg-brand-dark hover:bg-brand-dark/90 text-white font-bold text-xl transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-widest"
              >
                <Link href="/contact">
                  Get In Touch <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
              </Button>
            </div>

            <div className="hidden lg:block">
              <div className="relative w-full max-w-[450px] ml-auto opacity-90">
                <IllustrationBlock
                  src="/illustrations/contact.svg"
                  alt="Contact Us"
                  animate={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

