"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Flame, Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { name: "Advertisers", href: "/advertisers" },
  { name: "Affiliates", href: "/affiliates" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const services = [
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "Affiliate Marketing", href: "/affiliate-marketing" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const logoMark = (
    <div className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-brand-primary bg-brand-primary/10 shadow-lg shadow-brand-primary/20 group-hover:scale-110 transition-all duration-500">
      <Flame className="w-6 h-6 text-brand-primary fill-brand-primary/20" />
    </div>
  )

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 py-6",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-orange-500/10 py-4"

          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {logoMark}
          <span className="font-heading font-black text-xl md:text-2xl tracking-tighter text-foreground group-hover:text-brand-primary transition-colors whitespace-nowrap">
            Adverlex
          </span>


        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 font-black text-[10px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-primary transition-colors outline-none">
              Services <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-none border border-white/10 bg-brand-surface p-2 min-w-[240px] shadow-2xl">
              {services.map((service) => (
                <DropdownMenuItem
                  key={service.href}
                  render={(props) => (
                    <Link
                      {...props}
                      href={service.href}
                      className={cn(
                        props.className,
                        "cursor-pointer rounded-none px-4 py-4 text-[10px] font-black uppercase tracking-[0.15em] transition-all hover:bg-brand-primary/10 hover:text-brand-primary flex items-center justify-between group/item"
                      )}
                    >
                      {service.name}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                    </Link>
                  )}
                />
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[10px] font-black tracking-[0.2em] uppercase transition-colors hover:text-brand-primary",
                pathname === link.href ? "text-brand-primary" : "text-brand-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6">
            <ModeToggle />
            <Button
              asChild
              className="rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-xs tracking-widest uppercase h-11 px-8 glow-primary border-none transition-all hover:scale-[1.05] active:scale-95"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger render={(props) => (
                <Button {...props} variant="ghost" size="icon" className="rounded-xl hover:bg-white/5">
                  <Menu className="w-7 h-7 text-foreground" />

                </Button>
              )} />
              <SheetContent
                side="right"
                className="w-full sm:w-[400px] border-l border-border/50 bg-background/95 backdrop-blur-2xl p-8 overflow-y-auto"

              >
                <SheetHeader className="text-left mb-12">
                  <SheetTitle className="flex items-center gap-3">
                    {logoMark}
                    <span className="font-heading font-black text-2xl uppercase tracking-tighter text-foreground">Adverlex</span>

                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-10">
                  <div className="space-y-6">
                    <p className="text-[10px] font-black tracking-[0.3em] text-brand-primary uppercase opacity-50">Operations</p>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between text-3xl font-heading font-black text-foreground hover:text-brand-primary transition-all group/mob uppercase tracking-tighter"

                      >
                        {service.name}
                        <ArrowRight className="w-8 h-8 opacity-0 -translate-x-6 group-hover/mob:opacity-100 group-hover/mob:translate-x-0 transition-all text-brand-primary" />
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-6">
                    <p className="text-[10px] font-black tracking-[0.3em] text-brand-primary uppercase opacity-50">Company</p>
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between text-3xl font-heading font-black text-foreground hover:text-brand-primary transition-all group/mob uppercase tracking-tighter"

                      >
                        {link.name}
                        <ArrowRight className="w-8 h-8 opacity-0 -translate-x-6 group-hover/mob:opacity-100 group-hover/mob:translate-x-0 transition-all text-brand-primary" />
                      </Link>
                    ))}
                  </div>
                  <div className="pt-12 flex flex-col gap-6">
                    <Button
                      asChild
                      className="rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white h-16 text-lg font-bold uppercase tracking-[0.2em] glow-primary"
                    >
                      <Link href="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
                    </Button>
                    <div className="flex justify-center border-t border-white/5 pt-8">
                      <ModeToggle />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}

