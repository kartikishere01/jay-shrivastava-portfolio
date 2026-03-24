'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) {
      return
    }

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => setIsVisible(false),
    })

    tl.from('.preloader-word', {
      yPercent: 130,
      opacity: 0,
      duration: 1,
      stagger: 0.08,
      ease: 'expo.out',
    })
      .from('.preloader-line', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.8,
        ease: 'expo.out',
      }, '-=0.65')
      .to(overlay, {
        opacity: 0,
        duration: 0.65,
        ease: 'power3.inOut',
      }, '+=0.2')

    return () => {
      tl.kill()
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div
      ref={overlayRef}
      data-preloader
      className="fixed inset-0 z-[9999] bg-dark-bg flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-6 px-6">
        <div className="overflow-hidden">
          <p className="preloader-word text-5xl sm:text-6xl">adze&axis</p>
        </div>
        <div className="overflow-hidden">
          <p className="preloader-word text-xs uppercase tracking-[0.22em] text-dark-muted">Architecture Studio</p>
        </div>
        <div className="preloader-line w-40 h-[1px] bg-dark-border" />
        <p className="text-[10px] uppercase tracking-[0.16em] text-dark-muted">
          Curating Spatial Stories
        </p>
      </div>
    </div>
  )
}