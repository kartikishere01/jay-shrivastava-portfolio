'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function Hero() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        duration: 1.5,
        y: 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark-bg pt-20">
      {/* Content */}
      <div className="relative z-10 container-wide text-center w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Eyebrow text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm uppercase tracking-[0.2em] text-dark-muted mb-8"
          >
            Architecture Studio
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[1.1] mb-8"
          >
            Spaces That <br />
            <span className="text-gradient">Inspire</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-dark-muted max-w-2xl mx-auto mb-12 font-light"
          >
            Award-winning architecture and design studio creating innovative spaces across residential, commercial, and cultural sectors.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button className="px-8 py-4 bg-dark-text text-dark-bg font-semibold uppercase tracking-widest rounded-none hover:bg-dark-muted transition-colors duration-300 text-sm">
              Explore Work
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        ref={scrollIndicatorRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-dark-muted mb-4 tracking-widest uppercase">
            Scroll
          </span>
          <svg
            className="w-5 h-5 text-dark-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}