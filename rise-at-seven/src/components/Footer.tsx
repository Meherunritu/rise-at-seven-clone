'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const footerLinks = [
  {
    col: [
      { label: 'Services', href: '/services' },
      { label: 'Work', href: '/work' },
      { label: 'About', href: '/about' },
      { label: 'Culture', href: '/culture' },
      { label: 'Meet The Risers', href: '/meet-the-team' },
    ],
  },
  {
    col: [
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Blog & Resources', href: '/blog' },
      { label: 'Webinars', href: '/webinars' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    col: [
      { label: 'Sheffield', href: 'https://g.co/kgs/4Br7JaS', external: true },
      { label: 'Manchester', href: 'https://g.co/kgs/9vh5imK', external: true },
      { label: 'London', href: 'https://g.co/kgs/hsv6LhR', external: true },
      { label: 'New York', href: 'https://g.co/kgs/NxzhAKU', external: true },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/riseatseven', icon: 'F' },
  { label: 'X / Twitter', href: 'https://x.com/riseatseven', icon: 'X' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/riseatseven/', icon: 'in' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCAjOP9BgpZPTgae-QT9HGCw', icon: 'YT' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@riseatseven', icon: 'TT' },
  { label: 'Instagram', href: 'https://www.instagram.com/riseatseven/', icon: 'IG' },
]

export default function Footer() {
  return (
    <footer className="relative pt-20 md:pt-32 pb-10 px-5 md:px-10 border-t border-white/[0.07] overflow-hidden">
      {/* Background text */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="text-[22vw] font-black uppercase leading-[0.8] tracking-tightest"
          style={{ color: 'rgba(255,255,255,0.025)', whiteSpace: 'nowrap' }}
        >
          RISE
        </div>
      </div>

      {/* Big CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-16 md:mb-24"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[3px] text-white/30 mb-4">
          Ready To Rise?
        </p>
        <h2 className="text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] font-black uppercase leading-[0.85] tracking-tightest mb-8 md:mb-12">
          Let's
          <br />
          Talk
        </h2>
        <Link
          href="/connect-with-us"
          data-cursor="LET'S GO"
          className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-[13px] font-black uppercase tracking-[2px] hover:bg-white/90 transition-all duration-300"
        >
          Get In Touch
          <motion.span
            animate={{ x: 0 }}
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </motion.span>
        </Link>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-white/[0.07] mb-10 md:mb-14" />

      {/* Footer grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12 md:mb-16">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="block mb-4">
            <span className="text-[18px] font-black uppercase tracking-tight">Rise At Seven</span>
          </Link>
          <p className="text-[12px] text-white/40 font-medium leading-relaxed mb-5 max-w-[200px]">
            Award winning search-first content marketing agency.
          </p>
          <p className="text-[11px] text-white/30 font-medium">hello@riseatseven.com</p>
          {/* Social icons */}
          <div className="flex gap-3 mt-5 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[9px] font-bold text-white/40 hover:text-white hover:border-white/40 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {footerLinks.map((group, gi) => (
          <div key={gi}>
            <ul className="space-y-3">
              {group.col.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={(link as any).external ? '_blank' : undefined}
                    rel={(link as any).external ? 'noopener noreferrer' : undefined}
                    className="text-[13px] font-medium text-white/45 hover:text-white transition-colors duration-200 link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-[11px] text-white/25 font-medium">
          © 2025 Rise at Seven Ltd. All rights reserved. Company No. 11955187 · VAT GB 322402945
        </p>
        <div className="flex items-center gap-5">
          <Link href="/privacy-policy" className="text-[11px] text-white/25 hover:text-white/60 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-conditions" className="text-[11px] text-white/25 hover:text-white/60 transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}
