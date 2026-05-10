# Rise at Seven — Homepage Clone

A pixel-perfect recreation of the [riseatseven.com](https://riseatseven.com) homepage built with Next.js 15, Framer Motion, GSAP, and Lenis smooth scroll.

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
├── public/                   ← Static assets (add your own images here)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## STEP 1 — Install Node.js

Download from: https://nodejs.org (choose LTS version)

Verify installation:
```bash
node --version    # should show v18 or higher
npm --version     # should show 9 or higher
```

---

## STEP 2 — Set Up the Project

### Option A — Use this downloaded folder

1. Extract the ZIP
2. Open terminal in the folder
3. Run:

```bash
npm install
```

### Option B — Create from scratch

```bash
npx create-next-app@latest rise-at-seven-clone --typescript --tailwind --eslint --app
cd rise-at-seven-clone
npm install framer-motion gsap @studio-freight/lenis react-icons clsx tailwind-merge
```

---

## STEP 3 — Run Locally

```bash
npm run dev
```

Open: http://localhost:3000

---

## STEP 4 — Create GitHub Repository

### Install Git (if not already)
Download from: https://git-scm.com

### Create repo on GitHub
1. Go to https://github.com/new
2. Repository name: `rise-at-seven-clone`
3. Set to **Public** (needed for free Vercel deploy)
4. Click **Create repository**
5. Copy the repo URL shown (looks like `https://github.com/YOUR_NAME/rise-at-seven-clone.git`)

### Push your code

```bash
# Inside your project folder:
git init
git add .
git commit -m "Initial commit: Rise at Seven homepage clone"
git branch -M main
git remote add origin https://github.com/YOUR_NAME/rise-at-seven-clone.git
git push -u origin main
```

---

## STEP 5 — Deploy Live on Vercel (Free)

1. Go to https://vercel.com
2. Sign up / log in with your GitHub account
3. Click **Add New → Project**
4. Import your `rise-at-seven-clone` repository
5. Leave all settings as default — Vercel auto-detects Next.js
6. Click **Deploy**

Your live URL will be:
```
https://rise-at-seven-clone.vercel.app
```

Every time you push to GitHub (`git push`), Vercel auto-deploys.

---

## STEP 6 — Making Changes

After editing any file:
```bash
git add .
git commit -m "Update: describe what you changed"
git push
```

Vercel will auto-deploy within 30 seconds.

---

## File Connection Map

```
layout.tsx
  └── imports globals.css (styles applied globally)
  └── wraps everything in <html><body>

page.tsx
  └── imports SmoothScroll (wraps entire page for Lenis)
  └── imports Cursor (custom cursor, desktop only)
  └── imports AnnouncementBar (top red bar)
  └── imports Navbar (fixed navigation)
  └── imports Hero (first visible section)
  └── imports LogoMarquee (client logos strip)
  └── imports FeaturedWork (horizontal scroll cards)
  └── imports Services (hover service rows)
  └── imports SwipeCards (sticky scroll sections)
  └── imports WhatsNew (blog news cards)
  └── imports WaveText (animated marquee CTA)
  └── imports Footer (bottom section)
```

---

## Customisation

### Change colors
Edit `src/app/globals.css` — look for `:root { ... }` variables.

### Change content
Each component has its own data array at the top of the file. Edit directly.

### Add images
Drop images into `/public/images/` and reference as `/images/filename.jpg`.

### Change fonts
Replace the Google Fonts URL in `src/app/layout.tsx` and update `--font-primary` in `globals.css`.

---

## Performance Tips

- Images use the real Rise at Seven CDN URLs — replace with your own for production
- Cursor is disabled on mobile/touch devices automatically
- Lenis smooth scroll degrades gracefully if the library fails to load

---

## Browser Support

Chrome, Firefox, Safari, Edge (all modern versions)
Mobile: iOS Safari, Android Chrome
