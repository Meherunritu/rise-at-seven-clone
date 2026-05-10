'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const cards = [
  {
    title: 'Pioneers',
    subtitle: 'Legacy In The Making',
    body: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.\n\nWe're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=800&h=1000&q=80&fm=webp&fit=crop',
    bg: '#0e0e0e',
    accent: '#7a1e1e',
  },
  {
    title: 'Award\nWinning',
    subtitle: '79+ Industry Awards',
    body: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=800&h=1000&q=80&fm=webp&fit=crop',
    bg: '#111111',
    accent: '#1e3a7a',
  },
  {
    title: 'Speed',
    subtitle: 'Ideas to Result in 60 Minutes',
    body: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=800&h=1000&q=80&fm=webp&fit=crop',
    bg: '#0d0d0d',
    accent: '#1a4a1a',
  },
]

export default function SwipeCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={containerRef} style={{ height: `${cards.length * 100}vh` }} className="relative">
      {cards.map((card, i) => (
        <StickyCard key={card.title} card={card} i={i} total={cards.length} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  )
}

function StickyCard({ card, i, total, scrollYProgress }: {
  card: any; i: number; total: number; scrollYProgress: any
}) {
  const start = i / total
  const end = (i + 1) / total

  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, i === total - 1 ? 1 : 0])
  const scale = useTransform(scrollYProgress, [start, start + 0.05, end - 0.08, end], [0.96, 1, 1, i === total - 1 ? 1 : 0.95])

  return (
    <motion.div
      style={{ opacity, scale, backgroundColor: card.bg }}
      className="sticky top-0 h-screen flex flex-col md:flex-row items-center overflow-hidden"
    >
      {/* Left — text content */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-14 lg:px-20 pt-20 md:pt-0 pb-10 md:pb-0 order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[3px] mb-4"
            style={{ color: `${card.accent}` }}>
            {card.subtitle}
          </p>
          <h2
            className="text-[11vw] sm:text-[9vw] md:text-[7.5vw] lg:text-[6.5vw] font-black uppercase leading-[0.88] tracking-tightest mb-6 md:mb-8 whitespace-pre-line"
          >
            {card.title}
          </h2>
          <p className="text-[14px] md:text-[15px] text-white/55 font-medium leading-relaxed max-w-lg whitespace-pre-line">
            {card.body}
          </p>
        </motion.div>

        {/* Decorative number */}
        <div
          className="absolute right-8 bottom-8 md:right-14 md:bottom-10 text-[120px] md:text-[160px] font-black leading-none select-none pointer-events-none"
          style={{ color: 'rgba(255,255,255,0.03)', userSelect: 'none' }}
        >
          0{i + 1}
        </div>
      </div>

      {/* Right — image */}
      <div className="w-full md:w-[42%] lg:w-[40%] h-[45vw] md:h-full flex-shrink-0 order-1 md:order-2 relative overflow-hidden">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover"
          style={{
            transform: 'scale(1.05)',
            filter: 'brightness(0.75)',
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${card.bg} 0%, transparent 40%)`,
          }}
        />
      </div>
    </motion.div>
  )
}
