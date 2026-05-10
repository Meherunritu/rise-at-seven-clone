'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

const phrase = 'Chasing Consumers — Not Algorithms'

export default function WaveText() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Row 1 goes left, Row 2 goes right
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['-12%', '0%'])

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 border-y border-white/[0.07] overflow-hidden relative"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(122,30,30,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Row 1 */}
      <motion.div style={{ x: x1 }} className="flex items-center gap-8 md:gap-12 mb-4 md:mb-6 whitespace-nowrap">
        {Array(6).fill(null).map((_, i) => (
          <span key={i} className="flex items-center gap-8 md:gap-12 flex-shrink-0">
            <Link
              href="/connect-with-us"
              data-cursor="LET'S GO"
              className="text-[9vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[4.5vw] font-black uppercase tracking-tightest text-white hover:text-white/70 transition-colors duration-300"
            >
              {phrase}
            </Link>
            <span className="text-[5vw] md:text-[3vw] text-white/20 flex-shrink-0">✦</span>
          </span>
        ))}
      </motion.div>

      {/* Row 2 — outlined style */}
      <motion.div style={{ x: x2 }} className="flex items-center gap-8 md:gap-12 whitespace-nowrap">
        {Array(6).fill(null).map((_, i) => (
          <span key={i} className="flex items-center gap-8 md:gap-12 flex-shrink-0">
            <span
              className="text-[9vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[4.5vw] font-black uppercase tracking-tightest"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.18)',
                color: 'transparent',
              }}
            >
              {phrase}
            </span>
            <span className="text-[5vw] md:text-[3vw] text-white/10 flex-shrink-0">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  )
}
