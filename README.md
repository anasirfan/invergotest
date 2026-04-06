# InverGo Design — Premium Dark-Mode Website

A modern, dark-mode website for InverGo Design built with **Next.js 15** and **React 19**. Features glass-morphism cards, gradient mesh backgrounds, scroll-reveal animations, and a fully responsive design system.

## Stack

- **Next.js 15** (App Router, static generation)
- **React 19** (hooks, client components where needed)
- **CSS Modules** + CSS custom properties (no Tailwind, no Bootstrap)
- **Inter** + **Space Grotesk** via `next/font/google`
- **Zero jQuery, zero GSAP** — all animations are CSS + Intersection Observer

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.js            — root layout with fonts, metadata, shell
  page.js              — homepage (hero, stats, projects, services, testimonials, contact)
  not-found.js         — custom 404
  packages/            — pricing page with tabbed glass cards
  portfolio/           — portfolio gallery with lightbox
  privacy/             — privacy policy
  terms/               — terms & conditions
  web/ logo/ uiux/ ... — individual service pages
  amh/ divine/ sous/ . — case study pages
  api/contact/         — server-side contact form handler
components/
  ui/                  — design system primitives (ScrollReveal, AnimatedCounter, Icons, etc.)
  layout/              — Header, Footer, QuotePopup, LayoutShell
  sections/            — page section components (Hero, Projects, Services, etc.)
lib/
  content.js           — all site text content as structured data
  packages-data.js     — pricing packages data
public/
  images/              — junction → ./images (legacy assets)
  img/                 — junction → ./img (legacy assets)
```

## Environment Variables

Create a `.env.local` file:

```env
# Option A: Webhook
CONTACT_WEBHOOK_URL=https://your-webhook-url

# Option B: EmailJS
EMAILJS_SERVICE_ID=service_xxx
EMAILJS_TEMPLATE_ID=template_xxx
EMAILJS_PUBLIC_KEY=your_public_key
```

## Build

```bash
npm run build
npm start
```

## Performance

| Metric | Original | New |
|--------|----------|-----|
| First Load JS | ~217 KB + duplicates | ~102 KB shared |
| CSS | 3,800 lines monolithic | ~700 lines modular |
| Fonts | 64 files / 1.4 MB | 2 files via next/font |
| jQuery | Yes (3 copies) | Removed |
| GSAP | Yes | Removed |
| Bootstrap | Yes | Removed |
