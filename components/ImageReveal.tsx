'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
}

export default function ImageReveal({ src, alt, className = '' }: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'top 30%',
        scrub: 1,
      },
    })

    tl.from(imageRef.current, {
      clipPath: 'inset(0 100% 0 0)',
      duration: 1.2,
      ease: 'power3.inOut',
    }).to(
      imageRef.current,
      {
        scale: 1.05,
        duration: 0.8,
      },
      0
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={imageRef} className="relative w-full h-full">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  )
}