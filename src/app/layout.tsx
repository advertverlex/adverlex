import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Adverlex — Digital & Affiliate Marketing Agency",
    template: "%s | Adverlex",
  },
  description: "Adverlex builds data-driven digital marketing and affiliate programs that turn clicks into revenue. Leading agency for SEO, PPC, and performance marketing worldwide.",
  keywords: [
    "Digital Marketing", "Affiliate Marketing", "SEO Optimization", "PPC Management", "Paid Advertising", 
    "Lead Generation", "Revenue Growth", "Marketing Analytics", "Adverlex", "Affiliate Network", 
    "Performance Marketing", "Search Engine Optimization", "Google Ads", "Meta Ads", "TikTok Marketing", 
    "Content Strategy", "Brand Identity", "SaaS Marketing", "E-commerce Growth", "ROI Focused Marketing", 
    "Digital Strategy", "Growth Engineering", "Conversion Rate Optimization", "CRO", "Online Advertising", 
    "Publisher Network", "Advertiser Platform", "Data-Driven Marketing", "Marketing Agency", "Scale Business", 
    "Traffic Generation", "Digital Sales", "Marketing ROI", "Performance Tracking", "Affiliate Program Management",
    "B2B Marketing", "B2C Marketing", "Customer Acquisition", "Digital Transformation", "Marketing Automation"
  ],
  authors: [{ name: "Adverlex Team" }],
  creator: "Adverlex",
  publisher: "Adverlex",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Adverlex — Forge Unstoppable Traffic & Revenue",
    description: "Scale your brand with data-driven digital marketing and high-performance affiliate programs.",
    url: "https://adverlex.com",
    siteName: "Adverlex",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adverlex — Digital & Affiliate Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adverlex — Digital & Affiliate Marketing Agency",
    description: "Data-driven marketing strategies that turn clicks into revenue.",
    images: ["/og-image.png"],
    creator: "@adverlex",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${outfit.variable} ${inter.variable} ${mono.variable} font-sans min-h-screen flex flex-col bg-brand-dark selection:bg-brand-primary selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="fixed inset-0 bg-noise opacity-[0.02] pointer-events-none z-[100]" />
          <div className="fixed inset-0 bg-dot-grid opacity-[0.1] pointer-events-none z-[0]" />
          {children}
          <Toaster position="bottom-right" theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}

