
# Rise at Seven — Homepage Clone

A pixel-perfect recreation of [riseatseven.com](https://riseatseven.com) built with Next.js 15, Framer Motion, GSAP, and Lenis smooth scroll.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 15 | React framework |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| GSAP | Scroll-based animations |
| Lenis | Ultra-smooth scroll |
| React Icons | Icon library |

---

## Project Structure

```
rise-at-seven-clone/
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← Root HTML shell + fonts
│   │   ├── page.tsx          ← Main homepage (assembles all sections)
│   │   └── globals.css       ← Global styles, marquee, grain, animations
│   │
│   ├── components/
│   │   ├── SmoothScroll.tsx  ← Lenis wrapper
│   │   ├── Cursor.tsx        ← Custom cursor with mix-blend-difference
│   │   ├── AnnouncementBar.tsx
│   │   ├── Navbar.tsx        ← Desktop dropdowns + mobile hamburger
│   │   ├── Hero.tsx          ← Full cinematic hero section
│   │   ├── LogoMarquee.tsx   ← Infinite scrolling client logos
│   │   ├── FeaturedWork.tsx  ← Horizontal drag-scroll work cards
│   │   ├── Services.tsx      ← Hover-animated service rows
│   │   ├── SwipeCards.tsx    ← Sticky scroll Pioneers/Awards/Speed
│   │   ├── WhatsNew.tsx      ← Blog/news cards
│   │   ├── WaveText.tsx      ← Scroll-driven marquee CTA
│   │   └── Footer.tsx        ← Full footer with columns + CTA
│   │
│   ├── hooks/
│   │   ├── useMouse.ts
│   │   └── useScroll.ts
│   │
│   └── lib/
│       └── utils.ts          ← cn() helper
│
├── public/                   ← Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## Sections

**AnnouncementBar** — Top red bar with a short rotating message.

**Navbar** — Fixed navigation with desktop dropdown menus and a mobile hamburger. Hides/shows on scroll.

**Hero** — Full-viewport cinematic section with a background video/image, large heading, and a staggered entrance animation.

**LogoMarquee** — Infinite auto-scrolling strip of client logos using CSS animation.

**FeaturedWork** — Horizontally scrollable work cards, draggable with Framer Motion's drag constraints.

**Services** — List of service offerings. Each row reveals an image on hover and animates with GSAP.

**SwipeCards** — Sticky scroll sequence cycling through three panels: Pioneers, Awards, and Speed stats.

**WhatsNew** — Grid of blog/news cards with hover effects.

**WaveText** — A scroll-driven marquee CTA that speeds up as the user scrolls.

**Footer** — Full-width footer with link columns, social icons, and a large contact CTA.

---

## Key Implementation Details

- **Smooth scroll** is handled globally by a Lenis wrapper (`SmoothScroll.tsx`) that integrates with GSAP's ticker for frame-perfect sync.
- **Custom cursor** uses `mix-blend-difference` for the invert effect and is suppressed on touch devices.
- **Horizontal drag scroll** in FeaturedWork uses Framer Motion's `drag="x"` with calculated constraints based on container width.
- **Sticky scroll animations** in SwipeCards use GSAP ScrollTrigger pinning with a scrub value for smooth panel transitions.
- **Grain texture** is applied globally via a pseudo-element in `globals.css` using an SVG filter.
- **Fonts** are loaded via Google Fonts in `layout.tsx` and referenced through a CSS variable (`--font-primary`).

---

## Customisation

**Colors** — Edit `:root { ... }` variables in `src/app/globals.css`.

**Content** — Each component has a data array at the top of its file. Edit directly.

**Images** — Drop files into `/public/images/` and reference as `/images/filename.jpg`.

**Fonts** — Replace the Google Fonts URL in `src/app/layout.tsx` and update `--font-primary` in `globals.css`.

---

## Notes

- Images reference the real Rise at Seven CDN URLs — replace with your own for production use.
- The custom cursor is automatically disabled on mobile and touch devices.
- Lenis smooth scroll degrades gracefully if the library fails to load.
- Requires Node.js v18 or higher.

---

## Browser Support

Chrome, Firefox, Safari, Edge — all modern versions.
Mobile: iOS Safari, Android Chrome.
