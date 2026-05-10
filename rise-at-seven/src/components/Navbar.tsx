'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  {
    label: 'Services',
    href: '/services',
    dropdown: {
      type: 'grid',
      items: [
        { label: 'Search & Growth Strategy', href: '/services/strategy-growth', img: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png?w=400&q=80&fm=webp&fit=crop' },
        { label: 'Onsite SEO', href: '/services/onsite-seo', img: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=400&q=80&fm=webp&fit=crop' },
        { label: 'Content Experience', href: '/services/content-experience', img: 'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7499.jpg?w=400&q=80&fm=webp&fit=crop' },
        { label: 'B2B Marketing', href: '/services/b2b-marketing', img: 'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg?w=400&q=80&fm=webp&fit=crop' },
        { label: 'Digital PR', href: '/services/digital-pr', img: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=400&q=80&fm=webp&fit=crop' },
        { label: 'Social Media & Campaigns', href: '/services/social', img: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-20.31.18.png?w=400&q=80&fm=webp&fit=crop' },
        { label: 'Data & Insights', href: '/services/data-insights', img: 'https://rise-atseven.transforms.svdcdn.com/production/images/data.jpg?w=400&q=80&fm=webp&fit=crop' },
        { label: 'Social SEO / Search', href: '/services/social-seo-tiktok-youtube', img: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-09-24-at-11.47.25.png?w=400&q=80&fm=webp&fit=crop' },
      ],
    },
  },
  {
    label: 'International',
    href: '/international',
    dropdown: {
      type: 'list',
      items: [
        { label: 'US Digital PR', href: '/international/us-digital-pr' },
        { label: 'Spain Digital PR', href: '/international/us-digital-pr/spain-digital-pr' },
        { label: 'Germany Digital PR', href: '/germany-digital-pr' },
        { label: 'Netherlands Digital PR', href: '/netherlands-digital-pr' },
      ],
    },
  },
  {
    label: 'About',
    href: '/about',
    dropdown: {
      type: 'list',
      items: [
        { label: 'About Us', href: '/about' },
        { label: 'Meet The Risers', href: '/meet-the-team' },
        { label: 'Culture', href: '/culture' },
        { label: 'Testimonials', href: '/testimonials' },
      ],
    },
  },
  { label: 'Work', href: '/work', badge: '25' },
  { label: 'Careers', href: '/careers' },
  {
    label: 'Blog & Resources',
    href: '/blog',
    dropdown: {
      type: 'list',
      items: [
        { label: 'Blog', href: '/blog' },
        { label: 'Category Leaderboard', href: '/category-leaderboard' },
        { label: 'Multi-Channel Search Report', href: '/multi-channel-search-report-2026-/' },
        { label: 'Webinar', href: '/webinars' },
      ],
    },
  },
]

// Mobile accordion items
const mobileItems = [
  { label: 'Services', href: '/services', hasChild: true, children: ['Search & Growth Strategy', 'Onsite SEO', 'Content Experience', 'B2B Marketing', 'Digital PR', 'Social Media & Campaigns', 'Data & Insights', 'Social SEO/Search'] },
  { label: 'Industries', href: '/services/b2b-marketing', hasChild: true, children: ['B2B Marketing'] },
  { label: 'International', href: '/international', hasChild: true, children: ['US Digital PR', 'Spain Digital PR', 'Germany Digital PR', 'Netherlands Digital PR'] },
  { label: 'About', href: '/about', hasChild: true, children: ['About Us', 'Meet The Risers', 'Culture', 'Testimonials'] },
  { label: 'Work', href: '/work', badge: '25' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog & Resources', href: '/blog', hasChild: true, children: ['Blog', 'Category Leaderboard', 'Multi-Channel Search Report', 'Webinar'] },
]

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    const item = navItems.find(i => i.label === label)
    if (item?.dropdown) setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  return (
    <>
      {/* Blur overlay when dropdown open */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 blur-overlay z-30 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'bg-[#0b0b0b]/95 blur-overlay' : 'bg-transparent'
        }`}
        style={{ borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
      >
        <div className="flex items-center justify-between px-5 md:px-8 lg:px-10 h-[72px]">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex-shrink-0">
            <svg width="140" height="28" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="22" fontFamily="Barlow, Arial, sans-serif" fontSize="20" fontWeight="900" fill="white" letterSpacing="-0.5">
                RISE AT SEVEN
              </text>
            </svg>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  href={item.href}
                  className="relative flex items-center gap-1.5 px-4 py-3 text-[13px] font-semibold uppercase tracking-[1.5px] text-white/80 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                  {item.badge && (
                    <span className="text-[9px] font-bold bg-white text-black px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.dropdown && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`}>
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.label && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current) }}
                      onMouseLeave={handleMouseLeave}
                      className={`absolute top-full mt-2 bg-white text-black rounded-2xl shadow-2xl overflow-hidden z-50 ${
                        item.dropdown.type === 'grid'
                          ? 'w-[640px] -left-20'
                          : 'w-[280px] left-0'
                      }`}
                    >
                      {item.dropdown.type === 'grid' ? (
                        <div className="p-5">
                          <div className="grid grid-cols-2 gap-2">
                            {(item.dropdown.items as any[]).map((sub: any) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                              >
                                {sub.img && (
                                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                                    <img src={sub.img} alt={sub.label} className="w-full h-full object-cover img-zoom" />
                                  </div>
                                )}
                                <span className="text-[13px] font-semibold text-gray-800 group-hover:text-black leading-tight">
                                  {sub.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <Link href="/services" className="text-[12px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors flex items-center gap-2">
                              View All Services <span>→</span>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div className="py-3">
                          {(item.dropdown.items as any[]).map((sub: any) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block px-5 py-3 text-[14px] font-semibold text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Get In Touch CTA */}
          <div className="hidden lg:block">
            <Link
              href="/connect-with-us"
              className="relative overflow-hidden group inline-flex items-center px-5 py-2.5 border border-white/30 rounded-full text-[12px] font-bold uppercase tracking-[1.5px] text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="relative z-10">Get In Touch</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 flex flex-col gap-[5px] w-8 h-8 justify-center items-center"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-400 ease-out ${
                mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-400 ease-out ${
                mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden bg-[#0e0e0e] border-t border-white/[0.07]"
              style={{ maxHeight: 'calc(100vh - 72px)', overflowY: 'auto' }}
            >
              <div className="px-5 py-4">
                {mobileItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.35 }}
                    className="border-b border-white/[0.07]"
                  >
                    <div
                      className="flex items-center justify-between py-4 cursor-pointer"
                      onClick={() => {
                        if (item.hasChild) {
                          setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                        }
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => !item.hasChild && setMobileOpen(false)}
                        className="text-[18px] font-bold uppercase tracking-[1px] text-white flex items-center gap-2"
                      >
                        {item.label}
                        {item.badge && (
                          <span className="text-[9px] font-bold bg-white text-black px-1.5 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                      {item.hasChild && (
                        <motion.span
                          animate={{ rotate: mobileExpanded === item.label ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-white/50 text-xl w-8 h-8 flex items-center justify-center"
                        >
                          +
                        </motion.span>
                      )}
                    </div>

                    <AnimatePresence>
                      {mobileExpanded === item.label && item.children && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-3 pl-4">
                            {item.children.map((child) => (
                              <Link
                                key={child}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-[14px] text-white/55 hover:text-white transition-colors font-medium"
                              >
                                {child}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <div className="pt-6 pb-4">
                  <Link
                    href="/connect-with-us"
                    className="block w-full text-center py-4 bg-white text-black font-bold uppercase tracking-[2px] text-[13px] rounded-full hover:bg-white/90 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
