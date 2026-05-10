'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    name: 'Digital PR',
    href: '/services/digital-pr',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=600&h=400&q=80&fm=webp&fit=crop',
    tag: '01',
  },
  {
    name: 'Organic Social & Content',
    href: '/services/social',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-20.31.18.png?w=600&h=400&q=80&fm=webp&fit=crop',
    tag: '02',
  },
  {
    name: 'Search & Growth Strategy',
    href: '/services/strategy-growth',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png?w=600&h=400&q=80&fm=webp&fit=crop',
    tag: '03',
  },
  {
    name: 'Content Experience',
    href: '/services/content-experience',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7499.jpg?w=600&h=400&q=80&fm=webp&fit=crop',
    tag: '04',
  },
  {
    name: 'Data & Insights',
    href: '/services/data-insights',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/data.jpg?w=600&h=400&q=80&fm=webp&fit=crop',
    tag: '05',
  },
  {
    name: 'Onsite SEO',
    href: '/services/onsite-seo',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=600&h=400&q=80&fm=webp&fit=crop',
    tag: '06',
  },
]

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-5 md:px-10 overflow-hidden"
      onMouseMove={onMouseMove}
    >
      {/* Section header */}
      <div className="flex items-end justify-between mb-10 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[3px] text-white/30 mb-3">
            What We Do
          </p>
          <h2 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-black uppercase leading-[0.9] tracking-tightest">
            Our Services
          </h2>
        </motion.div>
        <Link
          href="/services"
          className="hidden md:flex items-center gap-2 text-[12px] font-bold uppercase tracking-[2px] text-white/40 hover:text-white transition-colors link-underline"
        >
          View All Services →
        </Link>
      </div>

      {/* Service rows */}
      <div>
        {services.map((service, i) => (
          <ServiceRow
            key={service.name}
            service={service}
            i={i}
            isHovered={hovered === service.name}
            onEnter={() => setHovered(service.name)}
            onLeave={() => setHovered(null)}
          />
        ))}
      </div>

      {/* Floating image that follows mouse */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key={hovered}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute pointer-events-none hidden lg:block z-20 rounded-xl overflow-hidden shadow-2xl"
            style={{
              left: mousePos.x + 30,
              top: mousePos.y - 100,
              width: 300,
              height: 200,
            }}
          >
            <img
              src={services.find(s => s.name === hovered)?.img}
              alt={hovered}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile CTA */}
      <div className="mt-8 md:hidden">
        <Link
          href="/services"
          className="block text-center py-4 border border-white/20 rounded-full text-[12px] font-bold uppercase tracking-[2px] text-white/60 hover:text-white hover:border-white/40 transition-colors"
        >
          View All Services →
        </Link>
      </div>
    </section>
  )
}

function ServiceRow({
  service,
  i,
  isHovered,
  onEnter,
  onLeave,
}: {
  service: any
  i: number
  isHovered: boolean
  onEnter: () => void
  onLeave: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={service.href}
        data-cursor="VIEW"
        className="service-row flex items-center justify-between py-5 md:py-7 group"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-[10px] font-bold text-white/20 tracking-[2px] w-6 shrink-0">
            {service.tag}
          </span>
          <motion.h3
            animate={{
              letterSpacing: isHovered ? '0.08em' : '0em',
              x: isHovered ? 12 : 0,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-[6vw] sm:text-[4.5vw] md:text-[3.5vw] lg:text-[2.8vw] font-black uppercase tracking-tight leading-none text-white"
          >
            {service.name}
          </motion.h3>
        </div>

        <motion.div
          animate={{ x: isHovered ? 0 : 8, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M7 2L12 7L7 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
