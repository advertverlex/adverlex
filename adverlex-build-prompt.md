# ðŸš€ AI Agent Build Prompt â€” Adverlex Marketing Website

## Project Overview

Build a **modern, professional marketing website** for **Adverlex** â€” a company that offers two core online services:

1. **Digital Marketing** â€” SEO, social media management, paid ads, content strategy, and brand growth
2. **Affiliate Marketing** â€” Program management, partner recruitment, performance tracking, and commission automation

### Brand Identity
- **Company Name**: Adverlex
- **Tagline**: *"Forge Your Path to Unstoppable Growth"*
- **Brand Voice**: Bold, confident, data-driven, results-obsessed
- **Logo concept**: Wordmark `Adverlex` â€” bold sans-serif, with a small flame or upward arrow icon mark in the brand color

### Target Audiences
- **Advertisers / Businesses** â€” brands looking to grow sales via affiliate & digital channels
- **Affiliates / Publishers** â€” content creators, bloggers, and influencers who want to monetize their audience

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | **Next.js 14+ (App Router)** |
| UI Components | **shadcn/ui** (`npx shadcn@latest init`) |
| Styling | **Tailwind CSS** (bundled with shadcn) |
| Illustrations | **unDraw** (https://undraw.co â€” download SVGs, set primary color to `#f97316`) |
| Icons | **Lucide React** (already included with shadcn) |
| Fonts | Google Fonts â€” **`Sora`** (headings) + **`DM Sans`** (body) |
| Animations | **Framer Motion** (`npm install framer-motion`) |
| Forms | **React Hook Form + Zod** via shadcn `Form` component |
| Theme | `next-themes` for dark/light toggle |

---

## Design System

### Color Palette

Define these in `globals.css` under `:root` and `.dark`:

```css
:root {
  --brand-primary: #f97316;       /* Orange â€” fire/forge energy, primary CTAs */
  --brand-secondary: #facc15;     /* Amber/Yellow â€” accent highlights */
  --brand-dark: #0c0a09;          /* Near-black background (dark mode) */
  --brand-surface: #1c1917;       /* Card backgrounds (dark mode) */
  --brand-muted: #a8a29e;         /* Muted/secondary text */
  --brand-light: #fafaf9;         /* Light mode background */
  --brand-border: rgba(249,115,22,0.2); /* Glowing card borders */
}
```

### Aesthetic Direction â€” "Industrial Fire"
- **Dark-first design** with light mode toggle via `next-themes`
- Hero section: Animated gradient background â€” deep charcoal/near-black with subtle orange ember glow blobs (CSS keyframe animation)
- **Glassmorphism cards**: `bg-white/5 backdrop-blur-md border border-orange-500/20 rounded-2xl`
- **Glowing CTAs**: Primary button with `box-shadow: 0 0 24px rgba(249,115,22,0.5)`
- Bold oversized typography â€” large `text-6xl`+ hero headlines
- unDraw illustrations with primary color set to `#f97316` (Adverlex orange)
- Subtle grain/noise texture overlay on hero for depth (`bg-noise`)
- Section dividers using soft diagonal gradients, not flat lines

### Typography Setup (in `layout.tsx`)

```tsx
import { Sora, DM_Sans } from 'next/font/google'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
```

Apply `font-sora` to all headings (`h1`â€“`h3`) and `font-dm-sans` to body text via Tailwind config.

---

## File & Folder Structure

```
/app
  layout.tsx                  â† Root layout: fonts, ThemeProvider, Navbar, Footer
  page.tsx                    â† Homepage
  /digital-marketing
    page.tsx
  /affiliate-marketing
    page.tsx
  /advertisers
    page.tsx
  /affiliates
    page.tsx
  /about
    page.tsx
  /contact
    page.tsx

/components
  /ui                         â† shadcn auto-generated components
  Navbar.tsx
  Footer.tsx
  HeroSection.tsx
  AudienceSplit.tsx
  ServicesSection.tsx
  HowItWorks.tsx
  StatsCounter.tsx
  TestimonialsCarousel.tsx
  CTABanner.tsx
  FeatureCard.tsx
  IllustrationBlock.tsx       â† Reusable wrapper for unDraw SVGs

/public
  /illustrations              â† All unDraw SVGs go here
    online-marketing.svg
    growth-analytics.svg
    affiliate-network.svg
    revenue.svg
    data-driven.svg
    team.svg
    contact.svg
  logo.svg

/lib
  utils.ts                    â† shadcn cn() utility
```

---

## Pages â€” Full Detailed Specs

---

### 1. Root Layout (`layout.tsx`)

- Wrap everything in `ThemeProvider` from `next-themes` (defaultTheme="dark")
- Load Sora + DM Sans from `next/font/google`
- Render `<Navbar />` at the top and `<Footer />` at the bottom
- Add a subtle grain texture overlay div (fixed, pointer-events-none, z-50, low opacity)

---

### 2. Navbar (`components/Navbar.tsx`)

- **Logo**: Left side â€” flame icon (Lucide `Flame`) + `Adverlex` wordmark in bold Sora font, orange colored
- **Nav links** (desktop): 
  - `Services` with dropdown (Digital Marketing, Affiliate Marketing)
  - `Advertisers`
  - `Affiliates`
  - `About`
  - `Contact`
- **Right side**: Light/dark toggle (`Sun`/`Moon` icon button) + `Get Started` CTA button (orange, glowing)
- **Mobile**: Use shadcn `Sheet` component sliding from right for hamburger menu
- **Behavior**: Sticky. On scroll down add `bg-black/80 backdrop-blur-md border-b border-orange-500/10` class

---

### 3. Homepage (`app/page.tsx`)

Compose these sections in order:

#### 3.1 â€” Hero Section

```
Layout: Two-column on desktop (text left, illustration right). Single column on mobile.
```

- **Badge** (above headline): shadcn `Badge` â€” `ðŸ”¥ Affiliate & Digital Marketing Agency`
- **Headline**: 
  ```
  Forge Unstoppable
  Traffic & Revenue.
  ```
  Style: `text-6xl md:text-7xl font-bold font-sora leading-tight`  
  "Traffic &" in white, "Revenue." in orange gradient text (`bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent`)

- **Subheading**: 
  `Adverlex builds data-driven digital marketing and affiliate programs that turn clicks into customers â€” and customers into long-term revenue.`

- **CTA Buttons** (side by side):
  - `I'm an Advertiser` â†’ `/advertisers` (primary orange button with glow)
  - `I'm an Affiliate` â†’ `/affiliates` (ghost/outline button)

- **Illustration**: unDraw `online-marketing.svg` on the right, with a subtle floating animation (Framer Motion `y: [0, -12, 0]` loop)

- **Background**: Radial gradient â€” `radial-gradient(ellipse at 30% 50%, rgba(249,115,22,0.15), transparent 60%)` animated slowly

#### 3.2 â€” Trust Bar

- Text: `Trusted by 5,000+ businesses worldwide`
- Show 5 dummy brand name placeholders styled as muted logo text (stone-400 color)
- Subtle separator line above and below
- Full-width, centered

#### 3.3 â€” Audience Split Section (`AudienceSplit.tsx`)

Two glassmorphism cards side-by-side (grid-cols-2 on desktop, stacked on mobile):

**Card 1 â€” For Advertisers**
- Icon: Lucide `TrendingUp` in orange circle
- Headline: `For Advertisers`
- Body: `Reach new audiences, scale your sales, and track every dollar with our performance-driven digital and affiliate marketing solutions.`
- CTA link: `Explore Advertiser Solutions â†’`
- unDraw illustration: `revenue.svg` or `investing.svg`

**Card 2 â€” For Affiliates**
- Icon: Lucide `Users` in amber circle
- Headline: `For Affiliates`
- Body: `Monetize your content and audience. Join our affiliate network and connect with top brands offering industry-leading commissions.`
- CTA link: `Explore Affiliate Opportunities â†’`
- unDraw illustration: `affiliate-network.svg`

Card styles: `bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-300`

#### 3.4 â€” Services Section (`ServicesSection.tsx`)

Section header:
- Tag: `What We Do`
- Title: `Two Powerful Services. One Growth Engine.`

**Service 1 â€” Digital Marketing**
- Icon: `BarChart3` (Lucide)
- Features list (with checkmarks):
  - Search Engine Optimization (SEO)
  - Paid Advertising (Google, Meta, TikTok Ads)
  - Social Media Management
  - Content Marketing & Strategy
  - Email Marketing Campaigns
  - Brand Identity & Positioning
- CTA: `Learn More â†’` â†’ `/digital-marketing`
- unDraw illustration: `growth-analytics.svg`

**Service 2 â€” Affiliate Marketing**
- Icon: `Network` (Lucide)
- Features list:
  - Affiliate Program Setup & Management
  - Partner Recruitment & Onboarding
  - Performance Tracking & Reporting
  - Commission Automation
  - Fraud Detection & Compliance
  - Custom Affiliate Dashboard
- CTA: `Learn More â†’` â†’ `/affiliate-marketing`
- unDraw illustration: `data-driven.svg`

Layout: Alternating image-text rows (text left / image right, then image left / text right)

#### 3.5 â€” Stats Counter Section (`StatsCounter.tsx`)

Full-width dark section with orange gradient border top. Four stats in a grid:

| Stat | Label |
|---|---|
| `$2M+` | Managed Affiliate Revenue |
| `5,000+` | Active Business Partners |
| `98%` | Client Retention Rate |
| `120+` | Affiliate Programs Launched |

Add a count-up animation when the section enters the viewport (use Framer Motion `useInView` + a simple counter animation).

#### 3.6 â€” How It Works (`HowItWorks.tsx`)

Section header:
- Tag: `The Process`
- Title: `From Zero to Full Throttle in 4 Steps`

Four steps in a horizontal timeline on desktop (vertical on mobile). Each step has a number badge (orange), title, and short description:

1. **Discovery Call** â€” `We learn your business, goals, and current marketing gaps.`
2. **Strategy Build** â€” `Our team crafts a custom digital + affiliate marketing roadmap.`
3. **Launch & Recruit** â€” `We launch your campaigns and recruit high-performing affiliate partners.`
4. **Optimize & Scale** â€” `Continuous data analysis and iteration to maximize your ROI.`

Use Framer Motion `staggerChildren` to animate steps in on scroll.

#### 3.7 â€” Testimonials (`TestimonialsCarousel.tsx`)

Section header:
- Title: `Real Results. Real Stories.`

Auto-scrolling carousel (Framer Motion or CSS scroll). Three testimonial cards visible at a time (one on mobile):

**Testimonial 1**
- Quote: `"Adverlex completely transformed our affiliate program. Within 3 months we saw a 4x increase in partner-driven revenue. Their team is sharp, responsive, and truly results-focused."`
- Name: `Sarah M.`
- Role: `Head of Growth, E-commerce Brand`
- Avatar: placeholder initials avatar

**Testimonial 2**
- Quote: `"As a content creator, Adverlex connected me with brands that actually align with my niche. The commissions are competitive and payments are always on time."`
- Name: `James O.`
- Role: `Lifestyle Blogger & Affiliate`
- Avatar: placeholder initials avatar

**Testimonial 3**
- Quote: `"Their digital marketing team ran our Google and Meta ad campaigns flawlessly. Our cost-per-acquisition dropped 40% in the first month."`
- Name: `Linda K.`
- Role: `Marketing Director, SaaS Company`
- Avatar: placeholder initials avatar

#### 3.8 â€” CTA Banner (`CTABanner.tsx`)

Full-width banner near the footer:
- Background: Orange to amber gradient with a subtle noise texture overlay
- Headline: `Ready to Forge Your Growth?`
- Subtext: `Let's build your custom digital marketing or affiliate program. No fluff â€” just results.`
- Button: `Get In Touch` â†’ `/contact` (dark button on orange background)
- Right side: unDraw `contact.svg` illustration (semi-transparent, decorative)

---

### 4. Digital Marketing Page (`/digital-marketing`)

- **Hero**: Headline `Data-Driven Digital Marketing That Delivers` + subtext + unDraw `growth-analytics.svg`
- **Services breakdown**: 6 feature cards in a 3-column grid (SEO, Paid Ads, Social Media, Content, Email, Brand). Each card: icon, title, 2-line description. Use shadcn `Card` component.
- **Why Adverlex section**: 3 differentiators with icons
- **Process timeline**: 4 steps specific to digital marketing
- **CTA Banner** at bottom

---

### 5. Affiliate Marketing Page (`/affiliate-marketing`)

- **Hero**: Headline `Affiliate Marketing on Autopilot â€” Built to Scale` + unDraw `affiliate-network.svg`
- **Two-audience tabs** (shadcn `Tabs`): Switch between "For Advertisers" and "For Affiliates" content
- **Program features**: 6 cards (Program Setup, Partner Recruitment, Tracking, Commissions, Reporting, Fraud Detection)
- **Stats row**: Key affiliate network stats
- **CTA Banner** at bottom

---

### 6. Advertisers Page (`/advertisers`)

- **Hero**: Headline `Dominate Your Market with Performance Marketing` + CTA `Start Your Program`
- **Value props**: 4 reasons to choose Adverlex
- **How it works**: Advertiser-specific 4-step process
- **Pricing tiers section** (optional placeholder): 3 shadcn `Card`s â€” Starter / Growth / Enterprise. Mark as "Custom Pricing â€” Contact Us"
- **Testimonials**: Advertiser-focused
- **CTA Banner**

---

### 7. Affiliates Page (`/affiliates`)

- **Hero**: Headline `Monetize Your Audience. Earn Top Commissions.` + CTA `Join the Network`
- **Benefits grid**: 4 cards (Top Brands, Generous Commissions, Real-time Tracking, Timely Payouts)
- **How it works**: Affiliate-specific 3-step process (Sign Up â†’ Get Approved â†’ Start Earning)
- **unDraw illustration**: `team.svg` or `content-creator.svg`
- **FAQ section**: shadcn `Accordion` with 5 common affiliate questions
- **CTA Banner**

---

### 8. About Page (`/about`)

- **Hero**: `We Are Adverlex` headline + mission statement paragraph
- **Mission & Vision**: Two-column layout
- **Team Section**: Placeholder team cards (3â€“4) with avatar, name, role
- **Core Values**: 4 values with icons (Transparency, Performance, Partnership, Innovation)
- **CTA Banner**

---

### 9. Contact Page (`/contact`)

- **Hero**: `Let's Talk Growth` headline
- **Two-column layout**:
  - Left: Contact form using shadcn `Form` + `react-hook-form` + `zod`
    - Fields: Name, Email, Company, Service Interest (shadcn `Select`: Digital Marketing / Affiliate Marketing / Both), Message
    - Submit button: `Send Message` (orange, full-width)
    - On success: show shadcn `toast` notification
  - Right: Contact info card + unDraw `contact.svg` illustration
- Contact details:
  - Email: `hello@adverlex.com`
  - Placeholder address
  - Social links: LinkedIn, Twitter/X, Instagram (Lucide icons)

---

### 10. Footer (`components/Footer.tsx`)

- **Top section**: Logo + tagline `Forge Your Path to Unstoppable Growth.`
- **4-column links grid**:
  - Company: About, Contact, Careers
  - Services: Digital Marketing, Affiliate Marketing
  - For You: Advertisers, Affiliates
  - Legal: Privacy Policy, Terms of Service
- **Bottom bar**: `Â© 2026 Adverlex LLC. All rights reserved.` + social icons
- Background: `bg-black` with a subtle top border in orange
- Newsletter signup input (email + subscribe button) in a row above the links

---

## Component Implementation Notes

### `IllustrationBlock.tsx`
```tsx
// Reusable wrapper for unDraw SVGs
interface IllustrationBlockProps {
  src: string        // path to SVG in /public/illustrations/
  alt: string
  className?: string
  animate?: boolean  // if true, add Framer Motion float animation
}
```

### `FeatureCard.tsx`
```tsx
// Glassmorphism feature card
interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}
// Styles: bg-white/5 backdrop-blur border border-orange-500/20 rounded-2xl p-6
// Hover: border-orange-500/40 shadow-lg shadow-orange-500/10
```

### `StatsCounter.tsx`
- Use `framer-motion`'s `useInView` hook to trigger count-up only when visible
- Animate from `0` to final value over `2s` with easing

---

## unDraw Illustrations to Download

Go to https://undraw.co/illustrations, set the color to `#f97316`, and download these SVGs into `/public/illustrations/`:

| Filename | Search term on unDraw |
|---|---|
| `online-marketing.svg` | "online marketing" |
| `growth-analytics.svg` | "growth analytics" or "analytics" |
| `affiliate-network.svg` | "connected world" or "social network" |
| `revenue.svg` | "revenue" or "finance" |
| `data-driven.svg` | "data" or "business decisions" |
| `team.svg` | "team" or "collaboration" |
| `contact.svg` | "contact us" or "messaging" |
| `content-creator.svg` | "content creator" or "blogging" |

---

## shadcn Components to Install

Run these after `npx shadcn@latest init`:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add sheet
npx shadcn@latest add tabs
npx shadcn@latest add accordion
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add select
npx shadcn@latest add toast
npx shadcn@latest add dropdown-menu
npx shadcn@latest add separator
npx shadcn@latest add avatar
```

---

## Responsive Breakpoints

- Mobile first approach via Tailwind
- `sm`: 640px â€” adjust typography scale
- `md`: 768px â€” switch from single column to two columns
- `lg`: 1024px â€” full desktop layout, navbar links visible
- `xl`: 1280px â€” max content width `max-w-7xl mx-auto px-6`

---

## Animation Guidelines (Framer Motion)

```tsx
// Standard fade-up variant â€” use across all sections
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Stagger container for card grids
const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
}

// Float animation for hero illustrations
const float = {
  animate: { y: [0, -14, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }
}
```

Wrap all section content in `<motion.div>` with `viewport={{ once: true }}` so animations trigger once on scroll.

---

## SEO & Metadata

Add metadata to each page using Next.js `generateMetadata`:

```tsx
// app/page.tsx
export const metadata = {
  title: 'Adverlex â€” Digital & Affiliate Marketing Agency',
  description: 'Adverlex builds data-driven digital marketing and affiliate programs that turn clicks into revenue. Serving advertisers and affiliates worldwide.',
  openGraph: {
    title: 'Adverlex',
    description: 'Forge Unstoppable Traffic & Revenue.',
    url: 'https://adverlex.com',
    siteName: 'Adverlex',
    type: 'website',
  }
}
```

Customize metadata per page accordingly.

---

## Notes for the AI Agent

1. **Always use shadcn components** as the base â€” do not build custom input/button/card components from scratch
2. **Dark mode is the default** â€” ensure all text has sufficient contrast in dark mode
3. **All images** use `next/image` with explicit `width` and `height`
4. **All internal links** use `next/link`
5. **No placeholder lorem ipsum** â€” use the real copy provided in this document
6. **unDraw SVGs** should be embedded as `<img>` tags via `next/image` or inline SVG â€” not as `<Image>` if they're dynamic
7. **The brand color is orange `#f97316`** â€” use it consistently for CTAs, icons, badges, accents, and hover states
8. **Mobile hamburger menu** must be fully functional using shadcn `Sheet`
9. Build all pages â€” do not skip any page listed above
10. The contact form should have **client-side validation** via Zod â€” no backend required (just show success toast on submit)

---

## âš ï¸ Anti-AI Rules â€” This Site Must Not Look AI-Generated

These rules override any default coding habits. A real designer built this. Every decision must reflect intentional craft, not template output.

---

### Layout & Spacing â€” No Cookie-Cutter Grids

- **Never use a flat, uniform card grid** for everything. Mix layouts: some sections use asymmetric two-column splits, some use a large feature left + small stack right, some use a horizontal scroll row. Vary it.
- **Section padding must vary** â€” not every section gets `py-24`. Some are tighter (`py-12`), some are more generous (`py-36`). Rhythm should feel designed, not repeated.
- **Never center-align every section**. Hero is centered. Other sections alternate â€” left-aligned text blocks, right-aligned stats, full-bleed banners. Monotony kills credibility.
- **At least two sections per page must break the max-width container** â€” e.g. a full-bleed background color/gradient that goes edge to edge, with only the inner text constrained.
- **Avoid equal-height, equal-width card rows**. Let content breathe naturally. A testimonial card can be taller. A stat block shorter. Don't force uniform heights.

---

### Typography â€” Not Every Headline is the Same Size

- **Headlines must have real hierarchy**. The H1 on the homepage should be noticeably larger than H2s on inner pages. Don't use `text-4xl` everywhere and call it done.
- **Never set body text at full black or full white** â€” use `text-stone-300` on dark, `text-stone-600` on light. Pure `#ffffff` body copy feels like an AI default.
- **Use variable font sizes within a single headline** when appropriate â€” e.g. a smaller word on line 1 and a large word on line 2, or a word in a different weight mid-sentence for emphasis.
- **Mix font weights intentionally** â€” not everything is `font-bold`. Some labels are `font-medium`, some stat numbers are `font-black`, some body is `font-normal`. Make it feel deliberate.
- **Line height on large headlines** must be tight â€” `leading-none` or `leading-tight`. AI-generated code often leaves default leading on massive type which looks broken.
- **Letter-spacing on section label tags** (like `WHAT WE DO`) should use `tracking-widest text-xs uppercase` â€” this small detail signals design craft.

---

### Color & Contrast â€” Not Just Orange Everywhere

- **Don't apply the brand color to every element** â€” it loses meaning. Use orange for: primary buttons, key icons, active states, one accent word per headline, stat numbers. Everywhere else: neutral.
- **Use opacity variants of orange** for subtle depth â€” `text-orange-500/60`, `border-orange-500/20`, `bg-orange-500/10` for glows and ghost elements.
- **At least one section per page should have an inverted or distinct background** â€” not just the same dark surface repeated. Options: a slightly lighter stone-900, a warm near-black, an orange gradient band, a grid/dot pattern background.
- **Gradient text must be used sparingly** â€” max one or two instances per page on a key headline word. Overuse makes it look like a template.
- **Never use a rainbow or multi-color icon set**. All icons stay monochrome â€” either white, stone-400, or orange. Consistent icon treatment = professional.

---

### Components â€” Real Design Details

- **Buttons must have intentional states**: default, hover (slight scale + shadow change), focus (ring), active (scale down). Don't leave the shadcn default untouched â€” override the border-radius to `rounded-xl` and add the orange glow shadow on the primary button.
- **Cards must NOT all look the same**. Feature cards, testimonial cards, stat cards, and pricing cards should each have distinct visual treatments â€” different border styles, padding, background tints, or corner radii.
- **The Navbar logo area must have a real mark** â€” even if it's just a `<svg>` flame drawn inline or a styled `TF` monogram with a background pill. A plain text wordmark alone is lazy.
- **The Footer must not be an afterthought** â€” it should have the logo repeated, a short brand tagline, a newsletter input row, the link columns, a divider, and the copyright bar. Full treatment.
- **Section "label tags"** (the small uppercase text above section titles like `THE PROCESS`) should be styled as a badge â€” small pill with orange/10 background, orange text, slight border. Not just plain uppercase text.
- **At least one section must use a background pattern** â€” CSS dot grid, line grid, or diagonal stripes at very low opacity (3â€“5%) over the dark background. Adds texture without noise.

---

### Motion & Interaction â€” Purposeful, Not Gratuitous

- **Never animate everything** â€” only animate things that benefit from it: hero illustration (float), section entries (fade up once), stat counters (count up on view), CTA hover states.
- **Animation durations must feel natural**: fade-ups `0.5sâ€“0.7s`, counters `1.8sâ€“2.2s`, floats `3.5sâ€“5s`. Anything faster than `0.3s` for a section entry looks twitchy.
- **Hover effects on cards must be subtle**: a tiny border color shift + a soft shadow increase. No wild scale jumps or color flashes. `transition-all duration-300` minimum.
- **No infinite spinning loaders, no bouncing icons, no marquee scrolling text** unless it's the trust logo bar â€” and even that should be very slow (`40s` cycle).
- **Stagger delays on card grids** should be `0.08sâ€“0.15s` per item. Any longer looks sluggish.

---

### Copy & Content â€” Sounds Human

- **No sentence should start with "We are proud to..."**, **"Our team of experts..."**, or **"We offer a wide range of..."** â€” these are AI filler phrases. Rewrite any that appear.
- **Use second-person ("you", "your")** in body copy and CTAs wherever possible. Not "clients benefit from" â€” write "you get".
- **CTA buttons must not say "Learn More" or "Get Started" everywhere** â€” vary them: `See How It Works`, `Join the Network`, `Let's Build This`, `Start Earning`, `Run My Campaign`.
- **Stat labels must be specific and punchy** â€” not "Happy Clients" but `Brands That Scaled`. Not "Projects Done" but `Affiliate Programs Launched`.
- **Testimonial quotes must sound real and specific** â€” include a real pain point, a specific result, and a human reaction. Avoid generic praise like "Great service, highly recommend."

---

### Things That Are Forbidden

- âŒ No `rounded-lg` on everything â€” mix `rounded-xl`, `rounded-2xl`, `rounded-3xl`, and `rounded-full` for different element types
- âŒ No `text-gray-500` â€” use `text-stone-400` or `text-stone-300` to stay in the warm tone palette
- âŒ No flat white cards with a plain gray border on a white background â€” if the page is dark, cards must use the glassmorphism treatment
- âŒ No stock icon packs or emoji in headings â€” Lucide icons only, used in modular icon blocks
- âŒ No default browser `<select>` dropdowns â€” use shadcn `Select` component
- âŒ No `<table>` tags for layout â€” CSS Grid and Flexbox only
- âŒ No hardcoded inline `style={{}}` for colors â€” use Tailwind classes or CSS variables
- âŒ No copy that reads like a list of features with no narrative â€” each section needs a one or two sentence intro that frames *why it matters before* listing what it does
- âŒ No pages that are just the homepage hero reskinned â€” each page must have a distinct visual opener
- âŒ No `mt-4 mb-4` spacing everywhere â€” use Tailwind's `space-y-*` on containers and `gap-*` on grids for consistent, intentional spacing