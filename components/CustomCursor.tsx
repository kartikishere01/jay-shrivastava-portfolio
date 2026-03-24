'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorLabelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) {
      return
    }

    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    const cursorLabel = cursorLabelRef.current

    if (!cursor || !cursorDot || !cursorLabel) return

    const cursorX = gsap.quickTo(cursor, 'x', { duration: 0.42, ease: 'expo.out' })
    const cursorY = gsap.quickTo(cursor, 'y', { duration: 0.42, ease: 'expo.out' })
    const dotX = gsap.quickTo(cursorDot, 'x', { duration: 0.1, ease: 'power3.out' })
    const dotY = gsap.quickTo(cursorDot, 'y', { duration: 0.1, ease: 'power3.out' })
    const labelX = gsap.quickTo(cursorLabel, 'x', { duration: 0.26, ease: 'power3.out' })
    const labelY = gsap.quickTo(cursorLabel, 'y', { duration: 0.26, ease: 'power3.out' })

    const handleMouseMove = (e: MouseEvent) => {
      cursorX(e.clientX - 18)
      cursorY(e.clientY - 18)
      dotX(e.clientX - 3)
      dotY(e.clientY - 3)
      labelX(e.clientX + 20)
      labelY(e.clientY - 16)
    }

    const handleMouseEnter = () => {
      gsap.to([cursor, cursorDot], { opacity: 1, duration: 0.25, ease: 'power3.out' })
    }

    const handleMouseLeave = () => {
      gsap.to([cursor, cursorDot, cursorLabel], { opacity: 0, duration: 0.2, ease: 'power3.out' })
    }

    const handleHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [data-cursor], input, textarea')

      if (interactive) {
        const cursorType = interactive.getAttribute('data-cursor')
        const isImage = cursorType === 'image'

        cursorLabel.textContent = isImage ? 'View' : ''

        gsap.to(cursor, {
          scale: isImage ? 2.45 : 1.45,
          borderColor: '#c86e3f',
          backgroundColor: isImage ? 'rgba(200,110,63,0.16)' : 'rgba(200,110,63,0.08)',
          duration: 0.45,
          ease: 'expo.out',
        })

        gsap.to(cursorDot, {
          scale: isImage ? 0 : 0.55,
          duration: 0.35,
          ease: 'power3.out',
        })

        gsap.to(cursorLabel, {
          opacity: isImage ? 1 : 0,
          duration: 0.25,
        })
      } else {
        gsap.to(cursor, {
          scale: 1,
          borderColor: '#f4f2ee',
          backgroundColor: 'transparent',
          duration: 0.45,
          ease: 'expo.out',
        })

        gsap.to(cursorDot, {
          scale: 1,
          duration: 0.35,
          ease: 'power3.out',
        })

        gsap.to(cursorLabel, {
          opacity: 0,
          duration: 0.2,
        })
      }
    }

    const handleMouseDown = () => {
      gsap.to(cursor, { scale: 0.82, duration: 0.18, ease: 'power3.out' })
    }

    const handleMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'expo.out' })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleHoverState)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleHoverState)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-9 h-9 border border-dark-text rounded-full pointer-events-none z-[9999] opacity-0 hidden md:block"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-1.5 h-1.5 bg-dark-text rounded-full pointer-events-none z-[9999] opacity-0 hidden md:block"
        style={{ willChange: 'transform' }}
      />
      <span
        ref={cursorLabelRef}
        className="fixed pointer-events-none z-[9999] text-[10px] uppercase tracking-[0.18em] text-dark-text opacity-0 hidden md:block"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}