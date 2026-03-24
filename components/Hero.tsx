'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const introDismissedRef = useRef(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.hero-intro', { autoAlpha: 1, y: 0, pointerEvents: 'auto' })
      gsap.set('.hero-preview', { opacity: 1, y: 0 })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top-=1',
        once: true,
        onEnter: () => {
          if (introDismissedRef.current) return
          introDismissedRef.current = true
          gsap.to('.hero-intro', {
            autoAlpha: 0,
            y: -16,
            duration: 0.38,
            ease: 'power2.out',
            pointerEvents: 'none',
          })
        },
      })

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 0.85,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      scrollTl
        .to('.hero-media-frame', {
          clipPath: 'inset(0% 0% 0% 0% round 0px)',
          ease: 'none',
        }, 0)
        .to('.hero-preview-panel', {
          opacity: 0,
          ease: 'none',
        }, 0)
        .to('.hero-topline-dark', {
          opacity: 0,
          y: -10,
          ease: 'none',
        }, 0.05)
        .to('.hero-topline-light', {
          opacity: 1,
          y: 0,
          ease: 'none',
        }, 0.2)
        .to('.hero-bottom-copy', {
          color: '#f3f3f1',
          ease: 'none',
        }, 0.25)
        .to('.hero-bg-image', {
          scale: 1.08,
          ease: 'none',
        }, 0)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
      <div className="h-screen overflow-hidden">
        <div className="hero-intro absolute inset-0 z-20 bg-black">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden px-4 md:px-8">
            <h1 className="text-[#e5e5e5] uppercase font-bold tracking-[-0.045em] leading-[0.78] text-[clamp(2.9rem,13vw,14rem)] whitespace-nowrap">
              <span className="hero-intro-word inline-block mr-[0.16em]">adze</span>
              <span className="hero-intro-word inline-block">&axis</span>
            </h1>
          </div>
        </div>

        <div className="hero-preview absolute inset-0 z-10">
          <div className="hero-preview-panel absolute inset-4 md:inset-5 lg:inset-6 bg-[#ececeb]" />

          <div className="hero-topline-dark absolute top-8 left-8 right-8 z-20 flex items-center justify-between text-[#1f1f1f] text-[0.95rem] md:text-[2.7vh] font-semibold tracking-[-0.02em]">
            <p>adze&axis</p>
            <p className="hidden md:block">Architecture & interiors</p>
            <p className="text-[#8f8f8f]">Work</p>
          </div>

          <div className="hero-topline-light absolute top-6 left-5 right-5 md:top-8 md:left-8 md:right-8 z-20 flex items-center justify-between text-white text-[0.88rem] md:text-[2.45vh] font-semibold tracking-[-0.02em] opacity-0 -translate-y-2">
            <p>adze&axis</p>
            <p className="hidden md:block">Architecture & interiors</p>
            <p className="text-white/72">Work</p>
          </div>

          <div className="hero-media-frame absolute inset-0 will-change-transform [clip-path:inset(24%_56%_18%_6%_round_0px)]">
            <Image
              src="/images/theanandthakur-building-6011756_1920.jpg"
              alt="Featured architecture"
              fill
              priority
              className="hero-bg-image object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.24),rgba(0,0,0,0.32))]" />
          </div>

          <div className="hero-bottom-copy absolute bottom-6 left-5 right-5 md:bottom-8 md:left-8 md:right-8 z-20 flex items-end justify-between text-[#1d1d1d] font-semibold tracking-[-0.02em]">
            <p className="text-[clamp(1.4rem,3.3vw,3rem)] leading-[0.92] max-w-[23ch]">
              Minimal. Contextual. Timeless.
            </p>
            <p className="text-[#b3b7b4] text-[1.25rem] md:text-[2.35vh]">[Scroll down]</p>
          </div>
        </div>
      </div>
    </section>
  )
}