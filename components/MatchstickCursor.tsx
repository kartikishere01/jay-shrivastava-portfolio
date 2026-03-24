'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function MatchstickCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const lightRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const scrollY = window.scrollY
      const totalHeight = document.documentElement.scrollHeight
      const viewportHeight = window.innerHeight
      const scrollableHeight = totalHeight - viewportHeight

      // Check if we're in the last 20% of the page
      if (scrollY > scrollableHeight * 0.8) {
        setIsActive(true)

        setPosition({ x: e.clientX, y: e.clientY })

        // Move matchstick cursor
        gsap.to(cursorRef.current, {
          x: e.clientX - 5,
          y: e.clientY - 30,
          duration: 0,
        })

        // Move light glow
        gsap.to(lightRef.current, {
          x: e.clientX - 50,
          y: e.clientY - 50,
          duration: 0.3,
        })

        // Move text
        gsap.to(textRef.current, {
          x: e.clientX + 30,
          y: e.clientY - 50,
          duration: 0.3,
        })
      } else {
        setIsActive(false)
      }
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  if (!isActive) return null

  return (
    <>
      {/* Light glow */}
      <div
        ref={lightRef}
        className="fixed w-64 h-64 rounded-full pointer-events-none z-40"
        style={{
          background: 'radial-gradient(circle, rgba(245,245,245,0.3) 0%, rgba(245,245,245,0.1) 50%, rgba(245,245,245,0) 100%)',
        }}
      />

      {/* Matchstick cursor */}
      <div
        ref={cursorRef}
        className="fixed w-2 h-16 pointer-events-none z-50"
        style={{
          background: 'linear-gradient(to bottom, #ff6b00 0%, #ffa500 50%, #ffe6cc 100%)',
          filter: 'drop-shadow(0 0 10px #ff6b00)',
        }}
      />

      {/* Text */}
      <motion.div
        ref={textRef}
        className="fixed pointer-events-none z-50 whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-2xl font-bold text-dark-text tracking-widest">
          ADZE&AXIS
        </p>
        <p className="text-sm text-dark-muted uppercase tracking-widest">
          Architecture Studio
        </p>
      </motion.div>
    </>
  )
}