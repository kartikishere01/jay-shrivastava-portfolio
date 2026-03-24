'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { projects } from '@/lib/projects'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsPage() {
  const pageRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-project-header]', {
        y: 32,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
      })

      const cards = gsap.utils.toArray<HTMLElement>('[data-project-card]')
      cards.forEach((card) => {
        const image = card.querySelector('[data-project-image]')

        gsap.from(card, {
          y: 36,
          opacity: 0,
          duration: 0.95,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 86%',
          },
        })

        if (image) {
          gsap.fromTo(image,
            { yPercent: 10, scale: 1.1 },
            {
              yPercent: -6,
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          )
        }
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef} className="pt-32 pb-20 bg-dark-bg">
      <div className="container-wide">
        <motion.p
          data-project-header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow mb-4"
        >
          Projects
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="section-title max-w-5xl mb-7 text-[#f3efe8]"
        >
          A portfolio of residential, heritage, and cultural work.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="body-copy max-w-3xl text-[#b1a99b]"
        >
          Each project reflects a distinct response to climate, site, and ritual. We avoid stylistic repetition in favor of contextual clarity and long-term value.
        </motion.p>

        <section className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <motion.div
              data-project-card
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.07, duration: 0.7 }}
              className="surface-panel p-3 group"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="relative aspect-[4/3] overflow-hidden" data-cursor="image">
                  <Image
                    data-project-image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 45vw, 100vw"
                  />
                </div>
                <div className="pt-4 pb-2">
                  <p className="eyebrow mb-2 text-[#a79f92]">{project.category}</p>
                  <h2 className="text-3xl leading-[0.95] text-[#f4f0e8]">{project.title}</h2>
                  <p className="text-sm text-[#9e9589] mt-3">{project.location}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  )
}