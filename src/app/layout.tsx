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
  title: "Adverlex â€” Digital & Affiliate Marketing Agency",
  description: "Adverlex builds data-driven digital marketing and affiliate programs that turn clicks into revenue. Serving advertisers and affiliates worldwide.",
  openGraph: {
    title: "Adverlex",
    description: "Forge Unstoppable Traffic & Revenue.",
    url: "https://adverlex.com",
    siteName: "Adverlex",
    type: "website",
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

