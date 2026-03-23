'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current

    if (!cursor || !cursorDot) return

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      gsap.to(cursorDot, {
        x: mouseX - 4,
        y: mouseY - 4,
        duration: 0,
      })

      gsap.to(cursor, {
        x: mouseX - 16,
        y: mouseY - 16,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 })
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border border-dark-text rounded-full pointer-events-none z-[9999] opacity-0"
      />
      <div
        ref={cursorDotRef}
        className="fixed w-1 h-1 bg-dark-text rounded-full pointer-events-none z-[9999]"
      />
    </>
  )
}