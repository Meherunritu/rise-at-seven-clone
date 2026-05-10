'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const newsItems = [
  {
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=800&h=600&q=80&fm=webp&fit=crop',
    author: 'Ray Saddiq',
    readTime: '3 mins',
    title: 'Rise at Seven Appoints Hollie Lovell as Senior Operations Lead',
    href: '/blog/rise-at-seven-appoints-new-senior-ops-lead',
    tag: 'Company News',
  },
  {
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.jpg?w=800&h=600&q=80&fm=webp&fit=crop',
    author: 'Ray Saddiq',
    readTime: '2 mins',
    title: "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
    href: '/blog/rise-at-seven-announces-new-global-hq-in-manchester',
    tag: 'Company News',
  },
  {
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=800&h=600&q=80&fm=webp&fit=crop',
    author: 'Carrie Rose',
    readTime: '2 mins',
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    href: '/blog/global-operations-director-promotion',
    tag: 'Company News',
  },
]

export default function WhatsNew() {
  return (
    <section className="py-20 md:py-32 px-5 md:px-10">
      {/* Header */}
      <div className="flex items-end justify-between mb-10 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[3px] text-white/30 mb-3">
            Latest From Us
          </p>
          <h2 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-black uppercase leading-[0.9] tracking-tightest">
            What's New
          </h2>
        </motion.div>
        <Link
          href="/blog"
          className="hidden md:flex items-center gap-2 text-[12px] font-bold uppercase tracking-[2px] text-white/40 hover:text-white transition-colors link-underline"
        >
          Explore More Thoughts →
        </Link>
      </div>

      {/* News grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {newsItems.map((item, i) => (
          <NewsCard key={item.title} item={item} i={i} />
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-8 md:hidden">
        <Link
          href="/blog"
          className="block text-center py-4 border border-white/20 rounded-full text-[12px] font-bold uppercase tracking-[2px] text-white/60 hover:text-white hover:border-white/40 transition-colors"
        >
          Explore More Thoughts →
        </Link>
      </div>
    </section>
  )
}

function NewsCard({ item, i }: { item: any; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={item.href} data-cursor="READ" className="group block">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[4/3]">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

          {/* Tag overlay */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/10 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-[2px] px-3 py-1.5 rounded-full border border-white/20">
              {item.tag}
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[11px] font-semibold text-white/40 uppercase tracking-[1.5px]">
            {item.author}
          </span>
          <span className="text-white/20">·</span>
          <span className="text-[11px] font-semibold text-white/40 uppercase tracking-[1.5px]">
            {item.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[16px] md:text-[17px] font-bold leading-snug text-white group-hover:text-white/80 transition-colors line-clamp-2">
          {item.title}
        </h3>

        {/* Read more */}
        <div className="flex items-center gap-2 mt-4 text-[11px] font-bold uppercase tracking-[2px] text-white/30 group-hover:text-white/70 transition-colors">
          Read Article
          <motion.span
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
            className="inline-block"
          >→</motion.span>
        </div>
      </Link>
    </motion.div>
  )
}
