'use client'

import { useEffect, useMemo, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { projects } from '@/lib/projects'

gsap.registerPlugin(ScrollTrigger)

export default function AllWorksCinematic() {
  const sectionRef = useRef<HTMLElement>(null)

  const rowProjects = useMemo(() => {
    return [...projects, ...projects, ...projects]
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>('.all-works-row-track')
      const mediaItems = gsap.utils.toArray<HTMLElement>('.all-works-media')
      const images = gsap.utils.toArray<HTMLElement>('.all-works-img')

      // Initialize starting positions
      gsap.set(rows, { xPercent: (index) => -48 * (index % 2 === 0 ? 1 : -1) })
      gsap.set(mediaItems, { xPercent: (_, element) => -18 * Number((element as HTMLElement).dataset.dir ?? 1) })
      gsap.set(images, { scale: 1.08, xPercent: (_, element) => 8 * Number(((element as HTMLElement).closest('.all-works-media') as HTMLElement)?.dataset.dir ?? 1) })

      if (rows.length > 0) {
        rows.forEach((row, index) => {
          const direction = index % 2 === 0 ? 1 : -1

          gsap.to(
            row,
            {
              xPercent: 48 * direction,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current!,
                start: 'top center',
                end: 'bottom center',
                scrub: 0.8,
                once: false,
                invalidateOnRefresh: true,
              },
            }
          )
        })
      }

      if (mediaItems.length > 0) {
        gsap.to(
          mediaItems,
          {
            xPercent: (_, element) => 18 * Number((element as HTMLElement).dataset.dir ?? 1),
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current!,
              start: 'top center',
              end: 'bottom center',
              scrub: 0.85,
              once: false,
              invalidateOnRefresh: true,
            },
          }
        )
      }

      if (images.length > 0) {
        gsap.to(
          images,
          {
            scale: 0.95,
            xPercent: (_, element) => -8 * Number(((element as HTMLElement).closest('.all-works-media') as HTMLElement)?.dataset.dir ?? 1),
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current!,
              start: 'top center',
              end: 'bottom center',
              scrub: 0.9,
              once: false,
              invalidateOnRefresh: true,
            },
          }
        )
      }

      gsap.fromTo(
        '.all-works-title',
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.95,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: 'top 78%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-[#ece8e1] py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none sticky top-0 z-20 flex h-screen items-center justify-center px-4 text-center">
        <h2 className="all-works-title text-[clamp(2.2rem,6.2vw,5.2rem)] leading-[0.9] text-[#1f1d1a]">
          ALL WORKS
        </h2>
      </div>

      <div className="relative z-10 -mt-[18vh] space-y-48 md:-mt-[20vh] md:space-y-56">
        {[0, 1, 2].map((rowIndex) => (
          <div key={`all-works-row-${rowIndex}`} className="all-works-row relative overflow-visible">
            <div className="all-works-row-track flex w-max gap-8 px-6 md:gap-14 md:px-10 lg:gap-16 lg:px-12 will-change-transform">
              {rowProjects.map((project, cardIndex) => {
                const isAlternate = (cardIndex + rowIndex) % 2 === 1

                return (
                  <Link
                    key={`all-works-card-${rowIndex}-${project.slug}-${cardIndex}`}
                    href={`/projects/${project.slug}`}
                    className={`all-works-card group relative block shrink-0 overflow-hidden surface-panel p-2 md:p-3 transition-transform duration-500 hover:-translate-y-1 border-2 border-[#1f1d1a] ${
                      isAlternate ? 'translate-y-6 md:translate-y-10' : ''
                    }`}
                    aria-label={`Open ${project.title}`}
                  >
                    <div
                      className="all-works-media relative w-[62vw] sm:w-[42vw] md:w-[31vw] lg:w-[21vw] xl:w-[18vw] aspect-[4/5] overflow-hidden will-change-transform"
                      data-dir={rowIndex % 2 === 0 ? 1 : -1}
                    >
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="all-works-img object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                        sizes="(min-width: 1280px) 21vw, (min-width: 1024px) 24vw, (min-width: 768px) 36vw, (min-width: 640px) 48vw, 70vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-85" />
                    </div>

                    <div className="absolute inset-x-4 bottom-4 text-white">
                      <p className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-white/75">
                        {project.category}
                      </p>
                      <p className="mt-1 text-lg md:text-xl leading-tight">{project.title}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
