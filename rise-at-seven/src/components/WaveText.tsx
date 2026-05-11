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

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['-15%', '0%'])

  // Wave Y positions — creates zigzag as you scroll
  const wave1 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ['0px', '-30px', '0px', '30px', '0px']
  )
  const wave2 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ['0px', '30px', '0px', '-30px', '0px']
  )

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 border-y border-white/[0.07] overflow-hidden relative"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(122,30,30,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Row 1 — moves left AND waves up/down */}
      <motion.div
        style={{ x: x1, y: wave1 }}
        className="flex items-center gap-8 md:gap-12 mb-6 md:mb-8 whitespace-nowrap"
      >
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-8 md:gap-12 flex-shrink-0"
            >
              <Link
                href="/connect-with-us"
                className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] font-black uppercase tracking-tightest text-white hover:text-white/70 transition-colors duration-300"
              >
                {phrase}
              </Link>
              <span className="text-[5vw] md:text-[3vw] text-white/20 flex-shrink-0">
                ✦
              </span>
            </span>
          ))}
      </motion.div>

      {/* Row 2 — moves right AND waves opposite direction */}
      <motion.div
        style={{ x: x2, y: wave2 }}
        className="flex items-center gap-8 md:gap-12 whitespace-nowrap"
      >
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-8 md:gap-12 flex-shrink-0"
            >
              <span
                className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] font-black uppercase tracking-tightest"
                style={{
                  WebkitTextStroke: '1px rgba(255,255,255,0.18)',
                  color: 'transparent',
                }}
              >
                {phrase}
              </span>
              <span className="text-[5vw] md:text-[3vw] text-white/10 flex-shrink-0">
                ✦
              </span>
            </span>
          ))}
      </motion.div>
    </section>
  )
}
