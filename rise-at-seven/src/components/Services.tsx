'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    name: 'Digital PR',
    href: '/services/digital-pr',
    tag: '01',
    desc: 'Earn links and coverage that drive real organic growth.',
  },
  {
    name: 'Organic Social & Content',
    href: '/services/social',
    tag: '02',
    desc: 'Content that wins on every feed and every format.',
  },
  {
    name: 'Search & Growth Strategy',
    href: '/services/strategy-growth',
    tag: '03',
    desc: 'Data-led strategies that compound over time.',
  },
  {
    name: 'Content Experience',
    href: '/services/content-experience',
    tag: '04',
    desc: 'Pages people actually want to read — and Google ranks.',
  },
  {
    name: 'Data & Insights',
    href: '/services/data-insights',
    tag: '05',
    desc: 'Turning numbers into decisions that move the needle.',
  },
  {
    name: 'Onsite SEO',
    href: '/services/onsite-seo',
    tag: '06',
    desc: 'Technical and on-page SEO that removes every barrier.',
  },
]

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="relative py-20 md:py-32 px-5 md:px-10 overflow-hidden">
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
          <h2 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-black uppercase leading-[0.9] tracking-tighter">
            Our Services
          </h2>
        </motion.div>
      </div>

      {/* Service rows — all visible on main page, no redirect */}
      <div>
        {services.map((service, i) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.07,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="border-b border-white/[0.1] py-5 md:py-7 group cursor-pointer"
              style={{
                background:
                  hovered === service.name
                    ? 'rgba(255,255,255,0.03)'
                    : 'transparent',
                transition: 'background 0.4s ease',
              }}
              onMouseEnter={() => setHovered(service.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-8">
                  {/* Number */}
                  <span className="text-[10px] font-bold text-white/20 tracking-[2px] w-6 shrink-0">
                    {service.tag}
                  </span>

                  {/* Service name */}
                  <motion.h3
                    animate={{
                      letterSpacing:
                        hovered === service.name ? '0.06em' : '0em',
                      x: hovered === service.name ? 10 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[5.5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.4vw] font-black uppercase leading-none text-white"
                  >
                    {service.name}
                  </motion.h3>
                </div>

                {/* Arrow — appears on hover */}
                <motion.div
                  animate={{
                    opacity: hovered === service.name ? 1 : 0,
                    x: hovered === service.name ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M2 7H12M7 2L12 7L7 12"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Description — expands on hover */}
              <AnimatePresence>
                {hovered === service.name && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden text-[13px] text-white/45 font-medium mt-2 pl-10 md:pl-14"
                  >
                    {service.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All — stays on page, just shows all 6 above */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 md:mt-14"
      >
        <Link
          href="/services"
          className="inline-flex items-center gap-2 border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-6 py-3 rounded-full text-[12px] font-bold uppercase tracking-[2px] transition-all duration-300"
        >
          View All Services
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7H12M7 2L12 7L7 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </motion.div>
    </section>
  )
}
