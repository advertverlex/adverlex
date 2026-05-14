"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/PageHero"
import { ContactForm } from "@/components/ContactForm"
import { Mail, MapPin, Globe, Share2, MessageSquare } from "lucide-react"
import Link from "next/link"

export function ContactView() {
  return (
    <main className="relative min-h-screen bg-background">

      <Navbar />
      
      <PageHero
        tag="Contact"
        title={<>Get In <span className="text-foreground/40 italic font-light">Touch</span>.</>}

        subtitle="Ready to forge your path to unstoppable growth? Fill out the form below and one of our team members will be in touch shortly."
        illustration="/illustrations/contact.svg"
      />

      <section className="py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 space-y-16">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-brand-primary uppercase mb-6 block">Contact Info</span>
                <h3 className="font-heading font-black text-3xl md:text-4xl mb-10 tracking-tighter text-foreground uppercase">How to Reach Us</h3>

                <div className="space-y-8">
                  <div className="flex gap-6 items-start group">
                    <div className="w-14 h-14 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold mb-2">Email Us</p>
                      <p className="text-xl font-black text-foreground tracking-tighter">joel@adverlex.com</p>

                    </div>
                  </div>
                  <div className="flex gap-6 items-start group">
                    <div className="w-14 h-14 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold mb-2">Location</p>
                      <p className="text-xl font-black text-foreground tracking-tighter">Lagos, Nigeria</p>

                      <p className="text-stone-500 text-xs tracking-widest mt-1">Remote-First Team</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-primary mb-8">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Globe, href: "#" },
                    { icon: Share2, href: "#" },
                    { icon: MessageSquare, href: "#" },
                  ].map((social, i) => (
                    <Link 
                      key={i} 
                      href={social.href}
                      className="w-14 h-14 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-stone-400 hover:text-brand-primary hover:border-brand-primary/30 transition-all duration-500"
                    >
                      <social.icon className="w-6 h-6" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-10 rounded-3xl bg-brand-primary/5 border border-brand-primary/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl group-hover:bg-brand-primary/20 transition-all" />
                <h4 className="font-heading font-black text-xl mb-3 relative z-10 text-foreground tracking-tighter uppercase">Prefer a call?</h4>

                <p className="text-stone-400 mb-6 relative z-10 text-sm leading-relaxed">Our strategists are available for discovery calls MondayÃ¢â‚¬â€Friday.</p>
                <Link href="#" className="text-brand-primary font-bold inline-flex items-center gap-3 group/link relative z-10 uppercase text-xs tracking-widest">
                  Book Discovery Session <div className="w-8 h-[2px] bg-brand-primary transition-all group-hover/link:w-14" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

