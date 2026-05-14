"use client"

import Link from "next/link"
import { Flame, Send, Globe, Share2, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Digital Marketing", href: "/digital-marketing" },
      { name: "Affiliate Marketing", href: "/affiliate-marketing" },
    ],
  },
  {
    title: "For You",
    links: [
      { name: "Advertisers", href: "/advertisers" },
      { name: "Affiliates", href: "/affiliates" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-orange-500/20 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 border-b border-white/5 pb-24">
          <div>
            <span className="text-[10px] font-mono font-black tracking-widest text-brand-primary uppercase mb-4 block">
              Market Intelligence
            </span>

            <h3 className="font-heading font-black text-4xl md:text-5xl leading-tight mb-6 text-foreground">
              Stay in the <span className="text-gradient">Growth Loop.</span>
            </h3>


            <p className="text-muted-foreground max-w-md leading-relaxed">

              Get the latest digital marketing insights and affiliate strategies delivered straight to your inbox. No fluff, just results.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-xl bg-muted border-border focus:border-brand-primary h-14 w-full text-xs tracking-widest text-foreground"
            />
            <Button className="rounded-xl bg-brand-primary hover:bg-brand-primary/90 h-14 px-10 w-full sm:w-auto shrink-0 font-bold uppercase tracking-widest text-xs">
              <Send className="w-4 h-4 mr-3" />
              Subscribe
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-20">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-brand-primary bg-brand-primary/10 transition-all duration-500 group-hover:scale-110">

                <Flame className="w-6 h-6 text-brand-primary" />
              </div>
              <span className="font-heading font-black text-2xl tracking-tighter text-foreground">Adverlex</span>


            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">

              Forge Your Path to Unstoppable Growth. Engineering success for the modern digital era.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-3 rounded-xl border border-white/5 bg-white/5 text-stone-400 hover:text-brand-primary hover:border-brand-primary/30 transition-all">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-3 rounded-xl border border-white/5 bg-white/5 text-stone-400 hover:text-brand-primary hover:border-brand-primary/30 transition-all">
                <Share2 className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-3 rounded-xl border border-white/5 bg-white/5 text-stone-400 hover:text-brand-primary hover:border-brand-primary/30 transition-all">
                <MessageSquare className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading font-bold text-foreground mb-8 uppercase tracking-widest text-[10px]">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-brand-primary text-xs transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-border mb-10" />


        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">

            &copy; {new Date().getFullYear()} Adverlex LLC. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-muted-foreground hover:text-brand-primary text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-brand-primary text-[10px] font-bold uppercase tracking-widest transition-colors">Terms of Service</Link>
            <Link href="#" className="text-muted-foreground hover:text-brand-primary text-[10px] font-bold uppercase tracking-widest transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

