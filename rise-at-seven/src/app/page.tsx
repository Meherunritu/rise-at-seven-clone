'use client'

import dynamic from 'next/dynamic'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoMarquee from '@/components/LogoMarquee'
import FeaturedWork from '@/components/FeaturedWork'
import Services from '@/components/Services'
import SwipeCards from '@/components/SwipeCards'
import WhatsNew from '@/components/WhatsNew'
import WaveText from '@/components/WaveText'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

// Cursor only loads on client (no SSR needed)
const Cursor = dynamic(() => import('@/components/Cursor'), { ssr: false })

export default function Home() {
  return (
    <SmoothScroll>
      <Cursor />
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <FeaturedWork />
        <Services />
        <SwipeCards />
        <WhatsNew />
        <WaveText />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
