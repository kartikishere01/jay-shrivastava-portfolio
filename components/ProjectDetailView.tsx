'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import type { Project } from '@/lib/projects'

gsap.registerPlugin(ScrollTrigger)

type ProjectDetailViewProps = {
  project: Project
}

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const pageRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-project-hero-copy]', {
        y: 28,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
      })

      gsap.fromTo('[data-project-hero-image]',
        { scale: 1.08, yPercent: 8 },
        {
          scale: 1,
          yPercent: -6,
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-project-hero-wrap]',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      const galleryItems = gsap.utils.toArray<HTMLElement>('[data-project-gallery-item]')
      galleryItems.forEach((item) => {
        gsap.from(item, {
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 86%',
          },
        })
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef} className="pt-28 pb-20 bg-dark-bg">
      <div className="container-wide">
        <div data-project-hero-copy>
          <p className="eyebrow text-[#b8b2a7]">{project.category}</p>
          <h1 className="section-title max-w-5xl text-[#f4f0e8] mt-4">{project.title}</h1>
          <p className="text-sm text-[#9f978b] tracking-[0.12em] uppercase mt-7">
            {project.location} • {project.year}
          </p>
        </div>

        <div data-project-hero-wrap className="mt-10 relative h-[66vh] min-h-[400px] overflow-hidden surface-panel p-3" data-cursor="image">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              data-project-hero-image
              src={project.cover}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10">
          <p className="text-lg text-[#d4cdc0] leading-relaxed">{project.overview}</p>
          <div className="space-y-6 text-[#aba296]">
            {project.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        </div>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {project.gallery.map((imageSrc, index) => (
            <div key={`${imageSrc}-${index}`} data-project-gallery-item className="surface-panel p-3">
              <div className="relative aspect-[4/3] overflow-hidden" data-cursor="image">
                <Image
                  src={imageSrc}
                  alt={`${project.title} gallery ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 28vw, (min-width: 768px) 45vw, 100vw"
                />
              </div>
            </div>
          ))}
        </section>

        <div className="mt-14">
          <Link href="/projects" className="btn-secondary">Back to Projects</Link>
        </div>
      </div>
    </main>
  )
}
