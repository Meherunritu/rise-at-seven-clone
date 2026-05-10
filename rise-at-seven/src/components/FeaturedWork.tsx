'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const works = [
  {
    year: '2023-2025',
    client: 'SIXT',
    category: 'Car rental',
    description: 'An extra 3m clicks regionally through SEO',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/Sixt-1.jpg?w=800&h=1000&q=80&fm=webp&fit=crop&crop=focalpoint',
    href: '/work/sixt',
    color: '#1a1a2e',
  },
  {
    year: '2021-2025',
    client: 'Dojo',
    category: 'Card Machines',
    description: 'A B2B success story for Dojo card machines',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=800&h=1000&q=80&fm=webp&fit=crop',
    href: '/work/dojo',
    color: '#0d1f0d',
  },
  {
    year: '2023-2024',
    client: 'Magnet Trade',
    category: 'B2B',
    description: 'A full service SEO success story — 170%+ increase',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=800&h=1000&q=80&fm=webp&fit=crop',
    href: '/work/magnet-trade-b2b',
    color: '#1a120b',
  },
  {
    year: '2023-2025',
    client: 'Leading eSIM Brand',
    category: 'Esims',
    description: 'Increasing brand and non-brand visibility UK/ES',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/E-SIM-Europe-p1-what-is-e-SIM-2-1.jpg?w=800&h=1000&q=80&fm=webp&fit=crop',
    href: '/work/esim-case-study',
    color: '#0a0a1a',
  },
  {
    year: '2025',
    client: 'JD Sports',
    category: 'Trainers',
    description: '65% up YoY in clicks for JDSports FR, IT, ES',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault.jpg?w=800&h=1000&q=80&fm=webp&fit=crop',
    href: '/work/jd-sports-/',
    color: '#0d0d0d',
  },
  {
    year: '2019-2025',
    client: 'Parkdean Resorts',
    category: 'Easter Breaks',
    description: 'Dominating Google and AI search',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/Easter-breaks.jpg?w=800&h=1000&q=80&fm=webp&fit=crop',
    href: '/work/parkdean-resorts-easter-breaks',
    color: '#0b1a0a',
  },
]

export default function FeaturedWork() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  // Drag to scroll
  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0)
    scrollLeft.current = scrollRef.current?.scrollLeft || 0
    if (scrollRef.current) scrollRef.current.style.cursor = 'grabbing'
  }
  const onMouseUp = () => {
    isDown.current = false
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = (x - startX.current) * 2
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <section className="py-20 md:py-32">
      {/* Header */}
      <div className="px-5 md:px-10 flex items-end justify-between mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[3px] text-white/30 mb-3">
            Our Work
          </p>
          <h2 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-black uppercase leading-[0.9] tracking-tightest">
            Featured
            <br />
            Work
          </h2>
        </motion.div>
        <Link
          href="/work"
          data-cursor="ALL WORK"
          className="hidden md:flex items-center gap-2 text-[12px] font-bold uppercase tracking-[2px] text-white/40 hover:text-white transition-colors link-underline"
        >
          Explore All Work
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </Link>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pl-5 md:pl-10 pr-5 md:pr-10"
        style={{ cursor: 'grab' }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {works.map((work, i) => (
          <WorkCard key={work.client} work={work} i={i} />
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-8 px-5 md:hidden">
        <Link
          href="/work"
          className="block text-center py-4 border border-white/20 rounded-full text-[12px] font-bold uppercase tracking-[2px] text-white/60 hover:text-white hover:border-white/40 transition-colors"
        >
          Explore All Work →
        </Link>
      </div>
    </section>
  )
}

function WorkCard({ work, i }: { work: any; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex-shrink-0 relative group"
      style={{ width: 'clamp(260px, 36vw, 440px)' }}
    >
      <Link href={work.href} data-cursor="VIEW">
        {/* Image container */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ aspectRatio: '3/4', background: work.color }}
        >
          <img
            src={work.img}
            alt={work.client}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            draggable={false}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Content overlay */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <span className="block text-[10px] font-semibold uppercase tracking-[2.5px] text-white/50 mb-1">
                {work.year} · {work.category}
              </span>
              <h3 className="text-[22px] md:text-[26px] font-black uppercase leading-tight text-white mb-2">
                {work.client}
              </h3>
              <p className="text-[13px] text-white/60 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-400 max-w-[90%] leading-snug">
                {work.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
