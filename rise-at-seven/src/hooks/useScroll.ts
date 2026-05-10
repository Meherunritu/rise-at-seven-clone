'use client'

import { useState, useEffect } from 'react'

export function useScrollDirection() {
  const [direction, setDirection] = useState<'up' | 'down'>('up')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let lastY = window.scrollY

    const handler = () => {
      const currentY = window.scrollY
      setDirection(currentY > lastY ? 'down' : 'up')
      setScrollY(currentY)
      lastY = currentY
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return { direction, scrollY }
}
