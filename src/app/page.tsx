import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { AudienceSplit } from "@/components/AudienceSplit";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsCounter } from "@/components/StatsCounter";
import { HowItWorks } from "@/components/HowItWorks";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Bar */}
      <TrustBar />

      {/* Audience Split */}
      <AudienceSplit />

      {/* Services Section */}
      <ServicesSection />

      {/* Stats Section */}
      <section className="py-24 bg-brand-dark/50 border-t border-brand-primary/20 border-b border-white/5 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <StatsCounter value={2} prefix="$" suffix="M+" label="Managed Affiliate Revenue" />
            <StatsCounter value={5000} suffix="+" label="Active Business Partners" />
            <StatsCounter value={98} suffix="%" label="Client Retention Rate" />
            <StatsCounter value={120} suffix="+" label="Affiliate Programs Launched" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* CTA Banner */}
      <CTABanner />

      <Footer />
    </main>
  );
}
