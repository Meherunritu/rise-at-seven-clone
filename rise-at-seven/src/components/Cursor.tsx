'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [label, setLabel] = useState('')

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0
    let animFrame: number

    setIsVisible(true)

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseEnterLink = (e: Event) => {
      const el = e.currentTarget as HTMLElement
      cursorRef.current?.classList.add('cursor--hover')
      followerRef.current?.classList.add('cursor--hover')
      const cursorLabel = el.getAttribute('data-cursor')
      if (cursorLabel) setLabel(cursorLabel)
    }

    const onMouseLeaveLink = () => {
      cursorRef.current?.classList.remove('cursor--hover')
      followerRef.current?.classList.remove('cursor--hover')
      setLabel('')
    }

    const addListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterLink)
        el.addEventListener('mouseleave', onMouseLeaveLink)
      })
    }

    addListeners()

    // Observer for dynamic elements
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    const animate = () => {
      followerX += (mouseX - followerX) * 0.1
      followerY += (mouseY - followerY) * 0.1

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`
      }

      animFrame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    animFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animFrame)
      observer.disconnect()
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <style>{`
        .cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 12px; height: 12px;
          background: white;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          mix-blend-mode: difference;
          transition: transform 0.1s, width 0.3s cubic-bezier(0.22,1,0.36,1), height 0.3s cubic-bezier(0.22,1,0.36,1);
          will-change: transform;
        }
        .cursor-follower {
          position: fixed;
          top: 0; left: 0;
          width: 40px; height: 40px;
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99998;
          mix-blend-mode: difference;
          transition: width 0.4s cubic-bezier(0.22,1,0.36,1), height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s;
          will-change: transform;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cursor-dot.cursor--hover {
          width: 8px; height: 8px;
          background: white;
        }
        .cursor-follower.cursor--hover {
          width: 64px; height: 64px;
          border-color: rgba(255,255,255,0.8);
          background: rgba(255,255,255,0.05);
        }
        .cursor-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: white;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.2s;
          mix-blend-mode: difference;
        }
        .cursor-follower.cursor--hover .cursor-label {
          opacity: 1;
        }
      `}</style>
      <div ref={cursorRef} className="cursor-dot" />
      <div ref={followerRef} className="cursor-follower">
        <span className="cursor-label">{label}</span>
      </div>
    </>
  )
}
