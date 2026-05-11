<div align="center">

# Rise at Seven — Homepage Clone

A pixel-perfect frontend recreation of [riseatseven.com](https://riseatseven.com) — one of the UK's most visually ambitious agency websites.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?style=flat-square&logo=framer)](https://www.framer.com/motion)

</div>

---

## Overview

This project is a frontend clone of the Rise at Seven agency homepage, built as a study in modern web animation, scroll-based storytelling, and cinematic UI. Every section has been reconstructed from scratch using contemporary tooling — no templates, no UI kits.

The goal was to replicate the feel of the original: fast, bold, visually immersive — while keeping the codebase clean, typed, and maintainable.

---

## Features

- **Cinematic hero** — full-viewport entrance with staggered text reveal and background media
- **Infinite logo marquee** — CSS-only, GPU-accelerated client logo strip
- **Horizontal drag scroll** — Framer Motion constrained drag for the work cards section
- **Hover-reveal services** — GSAP-powered image reveal on each service row
- **Sticky scroll sequence** — GSAP ScrollTrigger pinning cycling through Pioneers / Awards / Speed panels
- **Scroll-driven marquee CTA** — accelerates in response to scroll velocity
- **Custom cursor** — `mix-blend-difference` invert effect, disabled automatically on touch devices
- **Smooth scroll** — Lenis integrated with GSAP's ticker for frame-perfect rendering
- **Film grain overlay** — SVG filter applied globally via CSS pseudo-element
- **Mobile responsive** — hamburger nav, touch-friendly interactions, cursor suppressed on mobile

---

## Tech Stack

| Tool | Version | Role |
|------|---------|------|
| [Next.js](https://nextjs.org) | 15 | React framework & routing |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 3 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion) | 11 | Component animations & drag |
| [GSAP](https://gsap.com) | 3 | ScrollTrigger, pinning, timelines |
| [Lenis](https://lenis.darkroom.engineering) | latest | Smooth scroll engine |
| [React Icons](https://react-icons.github.io/react-icons) | 5 | Icon library |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root shell, font loading
│   ├── page.tsx            # Homepage — composes all sections
│   └── globals.css         # CSS variables, marquee, grain, keyframes
│
├── components/
│   ├── SmoothScroll.tsx    # Lenis + GSAP ticker integration
│   ├── Cursor.tsx          # Custom cursor (mix-blend-difference)
│   ├── AnnouncementBar.tsx # Top red bar
│   ├── Navbar.tsx          # Fixed nav, dropdowns, mobile hamburger
│   ├── Hero.tsx            # Cinematic hero with staggered entrance
│   ├── LogoMarquee.tsx     # Infinite auto-scrolling logos
│   ├── FeaturedWork.tsx    # Horizontal drag-scroll cards
│   ├── Services.tsx        # Hover-animated service rows
│   ├── SwipeCards.tsx      # Sticky scroll: Pioneers / Awards / Speed
│   ├── WhatsNew.tsx        # Blog/news card grid
│   ├── WaveText.tsx        # Scroll-velocity marquee CTA
│   └── Footer.tsx          # Footer with columns + large CTA
│
├── hooks/
│   ├── useMouse.ts         # Mouse position tracker
│   └── useScroll.ts        # Scroll position + velocity
│
└── lib/
    └── utils.ts            # cn() classname helper
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/rise-at-seven-clone.git
cd rise-at-seven-clone

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Requires **Node.js v18+**.

---

## Customisation

**Colors** → Edit `:root` variables in `src/app/globals.css`

**Content** → Each component has a data array at the top of its file

**Images** → Add to `/public/images/` and reference as `/images/filename.jpg`

**Fonts** → Replace the Google Fonts import in `layout.tsx` and update `--font-primary` in `globals.css`

---

## Notes

- Image URLs currently point to the Rise at Seven CDN — swap with your own assets for any production use
- The custom cursor is suppressed automatically on touch/mobile devices
- Lenis degrades gracefully if the library fails to load

---

## Browser Support

Chrome · Firefox · Safari · Edge · iOS Safari · Android Chrome

---

<div align="center">

Built for learning purposes. All design credit goes to [Rise at Seven](https://riseatseven.com).

</div>
