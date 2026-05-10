'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

const floatingImages = [
  {
    src: 'https://rise-atseven.transforms.svdcdn.com/production/images/unnamed-6.png?w=213&h=278&q=100&auto=format&fit=crop&dm=1750948726&s=0ecee9869674cd309d3170dfd7b29674',
    className: 'absolute top-[12%] left-[2%] w-[110px] md:w-[150px] lg:w-[180px]',
    delay: 0,
    rotate: -8,
  },
  {
    src: 'https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=1890&h=2363&q=100&auto=format&fit=crop&dm=1753775231&s=60dc0e3c84825da30f8d809caf5fabe1',
    className: 'absolute top-[5%] right-[5%] w-[100px] md:w-[130px] lg:w-[160px]',
    delay: 0.1,
    rotate: 6,
  },
  {
    src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Emirates-airpline-in-flight.avif?w=1330&h=700&q=100&auto=format&fit=crop&dm=1750948034&s=7fc16049313aefb0ea160470af9ae379',
    className: 'absolute top-[38%] right-[1%] w-[160px] md:w-[200px] lg:w-[240px]',
    delay: 0.15,
    rotate: 4,
  },
  {
    src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=2560&h=1707&q=100&auto=format&fit=crop&dm=1750847623&s=2e6f5684a2dcbdbd148a651a17aafe47',
    className: 'absolute bottom-[18%] left-[0%] w-[150px] md:w-[190px] lg:w-[220px]',
    delay: 0.2,
    rotate: -5,
  },
  {
    src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-21.36.35.png?w=1198&h=1126&q=100&auto=format&fit=crop&dm=1751402284&s=4ad46c03819812b327e9b4643c1b0e6c',
    className: 'absolute bottom-[10%] right-[4%] w-[120px] md:w-[150px] lg:w-[180px]',
    delay: 0.05,
    rotate: 7,
  },
  {
    src: 'https://rise-atseven.transforms.svdcdn.com/production/images/spaseekers.png?w=654&h=654&q=100&auto=format&fit=crop&dm=1750847719&s=7878b323cf448fba3f57e5ecbcef8ed1',
    className: 'absolute top-[62%] left-[5%] w-[90px] md:w-[120px] lg:w-[140px]',
    delay: 0.25,
    rotate: -3,
  },
]

const platformLogos = [
  { label: 'ChatGPT', src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/chat-gpt.png?w=200&q=80&fm=webp' },
  { label: 'Gemini', src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/gemini.png?w=200&q=80&fm=webp' },
  { label: 'TikTok', src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/tiktok.png?w=200&q=80&fm=webp' },
  { label: 'YouTube', src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/youtube.png?w=200&q=80&fm=webp' },
  { label: 'Pinterest', src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/pinterest.png?w=200&q=80&fm=webp' },
  { label: 'Reddit', src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/reddit.png?w=200&q=80&fm=webp' },
  { label: 'Amazon', src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/amazon.png?w=200&q=80&fm=webp' },
]

const awardLogos = [
  { src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/global-search-awards.png?w=300&q=80&fm=webp', alt: 'Global Search Awards' },
  { src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/Mask-group.png?w=300&q=80&fm=webp', alt: 'Award' },
  { src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UKSocial-Media-Awards-White.png?w=300&q=80&fm=webp', alt: 'UK Social Media Awards' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -80])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[72px]"
    >
      {/* Floating campaign images — desktop only */}
      {floatingImages.map((img, i) => (
        <motion.div
          key={i}
          className={`${img.className} hidden md:block z-10 pointer-events-none`}
          initial={{ opacity: 0, y: 30, rotate: img.rotate - 4 }}
          animate={{ opacity: 1, y: 0, rotate: img.rotate }}
          transition={{ delay: 0.3 + img.delay, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ y }}
        >
          <img
            src={img.src}
            alt=""
            className="w-full rounded-xl shadow-2xl"
            style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))' }}
          />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-20 text-center px-5 md:px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/50 text-[11px] md:text-[13px] font-semibold uppercase tracking-[3px] mb-6 md:mb-8"
        >
          Organic media planners creating, distributing &amp; optimising
        </motion.p>

        {/* Main headline */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] xl:text-[8.5vw] font-black uppercase leading-[0.85] tracking-[-0.04em] text-white"
          >
            We Create
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.62, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] xl:text-[8.5vw] font-black uppercase leading-[0.85] tracking-[-0.04em] text-white"
          >
            Category
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.74, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] xl:text-[8.5vw] font-black uppercase leading-[0.85] tracking-[-0.04em] text-white"
          >
            Leaders
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/60 text-[13px] md:text-[15px] font-medium mt-6 md:mt-8 max-w-lg mx-auto leading-relaxed"
        >
          <strong className="text-white">search-first</strong> content for SEO, Social, PR, AI and LLM search
          <br className="hidden md:block" />
          <span className="text-white/40 text-[12px] block mt-2">
            <strong className="text-white/70">4 Global Offices</strong> serving UK, USA (New York) &amp; EU
          </span>
        </motion.p>

        {/* Platform logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center flex-wrap gap-4 md:gap-6 mt-8 md:mt-10"
        >
          {platformLogos.map((logo) => (
            <img
              key={logo.label}
              src={logo.src}
              alt={logo.label}
              className="h-4 md:h-5 object-contain opacity-35 hover:opacity-70 transition-opacity duration-300 filter invert"
            />
          ))}
        </motion.div>

        {/* Award logos + recommendation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.8 }}
          className="flex flex-col items-center mt-8 md:mt-10 gap-4"
        >
          <p className="text-[10px] font-bold uppercase tracking-[3px] text-white/30">
            #1 Most recommended content marketing agency
          </p>
          <div className="flex items-center justify-center gap-6 md:gap-10">
            {awardLogos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 object-contain opacity-40 hover:opacity-80 transition-opacity duration-300"
              />
            ))}
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 md:mt-10"
        >
          <Link
            href="/connect-with-us"
            data-cursor="CONNECT"
            className="group relative overflow-hidden bg-white text-black px-7 py-3.5 rounded-full text-[12px] font-bold uppercase tracking-[2px] hover:bg-white/90 transition-all duration-300 min-w-[180px] text-center"
          >
            Get In Touch
          </Link>
          <Link
            href="/work"
            data-cursor="WORK"
            className="group border border-white/25 text-white px-7 py-3.5 rounded-full text-[12px] font-bold uppercase tracking-[2px] hover:border-white/60 transition-all duration-300 min-w-[180px] text-center"
          >
            View Our Work
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[3px] text-white/25">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  )
}
