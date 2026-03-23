'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 60%',
          scrub: 1,
        },
        clipPath: 'inset(0 50% 0 0)',
        opacity: 0,
      })
    }
  }, [])

  return (
    <section ref={containerRef} className="relative bg-dark-bg py-32">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm uppercase tracking-widest text-dark-muted">
              About Studio
            </span>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold mt-6 mb-12 leading-tight">
              Visionary Design
            </h2>

            <div className="space-y-6 text-lg text-dark-muted leading-relaxed mb-12">
              <p>
                Jay Shrivastava Studio is a global leader in contemporary architecture and design. We create spaces that transcend functionality and inspire the human spirit.
              </p>

              <p>
                Our approach combines rigorous conceptual thinking with meticulous attention to detail. Every project is a collaboration with visionary clients and skilled craftspeople.
              </p>
            </div>

            <button className="px-8 py-4 bg-dark-text text-dark-bg font-semibold uppercase tracking-widest rounded-none hover:bg-dark-muted transition-colors text-sm">
              Learn More
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            ref={imageRef}
            className="relative aspect-square overflow-hidden"
          >
            <Image
              src="/images/abedaljalil-architecture-9827472_1920.jpg"
              alt="Studio"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}