'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  stagger = 0.05,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const chars = containerRef.current.querySelectorAll('span')

    gsap.from(chars, {
      duration: 0.8,
      opacity: 0,
      y: 100,
      rotationZ: 10,
      delay: delay,
      stagger: stagger,
      ease: 'back.out',
    })
  }, [delay, stagger])

  return (
    <div ref={containerRef} className={className}>
      {text.split('').map((char, i) => (
        <span key={i} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  )
}