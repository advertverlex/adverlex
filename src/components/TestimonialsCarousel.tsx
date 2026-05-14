"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote: "Adverlex completely transformed our affiliate program. Within 3 months we saw a 4x increase in partner-driven revenue. Their team is sharp, responsive, and truly results-focused.",
    name: "Sarah M.",
    role: "Head of Growth, E-commerce Brand",
    initials: "SM",
  },
  {
    quote: "As a content creator, Adverlex connected me with brands that actually align with my niche. The commissions are competitive and payments are always on time.",
    name: "James O.",
    role: "Lifestyle Blogger & Affiliate",
    initials: "JO",
  },
  {
    quote: "Their digital marketing team ran our Google and Meta ad campaigns flawlessly. Our cost-per-acquisition dropped 40% in the first month.",
    name: "Linda K.",
    role: "Marketing Director, SaaS Company",
    initials: "LK",
  },
  {
    quote: "The custom dashboard they built for our affiliates made recruitment a breeze. We finally have real-time visibility into our performance metrics.",
    name: "Robert P.",
    role: "CEO, Tech Startup",
    initials: "RP",
  },
]

export function TestimonialsCarousel() {
  const [index, setIndex] = React.useState(0)

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  React.useEffect(() => {
    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden border-y border-white/5">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 md:mb-24">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-primary uppercase mb-6 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full w-fit">
              Testimonials
            </span>
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl mt-6 leading-[0.9] tracking-tighter text-foreground uppercase">
              Real Results. <br />
              Real Stories.
            </h2>

          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-xl border-white/10 hover:border-brand-primary hover:bg-brand-primary/5 transition-all h-12 w-12 md:h-14 md:w-14"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-xl border-white/10 hover:border-brand-primary hover:bg-brand-primary/5 transition-all h-12 w-12 md:h-14 md:w-14"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="relative min-h-[350px] md:min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" as any }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="relative">
                <Quote className="absolute -top-12 -left-8 md:-top-16 md:-left-12 w-20 h-20 md:w-32 md:h-32 text-brand-primary/5 -z-10" />
                <div className="flex gap-1.5 mb-8 md:mb-10">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 md:w-5 md:h-5 fill-brand-primary text-brand-primary" />
                  ))}
                </div>
                <p className="text-xl md:text-3xl font-heading font-black text-foreground leading-none mb-10 tracking-tighter uppercase">
                  "{testimonials[index].quote}"
                </p>

                <div className="flex items-center gap-6">
                  <Avatar className="w-16 h-16 rounded-xl border border-brand-primary/20 bg-brand-surface">
                    <AvatarFallback className="font-bold text-brand-primary uppercase">
                      {testimonials[index].initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-heading font-black text-lg text-foreground tracking-tighter uppercase">
                      {testimonials[index].name}
                    </h4>

                    <p className="text-brand-muted text-xs uppercase font-bold tracking-widest">{testimonials[index].role}</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative aspect-square max-w-sm mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-2xl blur-3xl" />
                  <div className="relative glass h-full w-full flex items-center justify-center p-14 overflow-hidden rounded-2xl border-white/5">
                    <div className="flex flex-col gap-6 w-full">
                      {[0, 1, 2].map((i) => {
                        const tIndex = (index + i) % testimonials.length
                        return (
                          <div
                            key={i}
                            className={cn(
                              "p-5 rounded-xl border transition-all duration-500",
                              i === 0 
                                ? "bg-brand-primary border-transparent text-white shadow-2xl shadow-brand-primary/20 scale-105" 
                                : "bg-white/5 border-white/10 opacity-30"
                            )}
                          >
                            <p className="text-[10px] font-bold uppercase tracking-widest truncate mb-3">{testimonials[tIndex].name}</p>
                            <div className="h-1 w-full bg-black/20 rounded-none overflow-hidden">
                              <div className="h-full bg-white/40 w-3/4 rounded-none" />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

