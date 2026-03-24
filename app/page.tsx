'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Hero from '@/components/Hero'
import AllWorksCinematic from '@/components/AllWorksCinematic'
import ProjectsSection from '@/components/ProjectsSection'
import About from '@/components/About'
import CTA from '@/components/CTA'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const ctx = gsap.context(() => {
      const scenes = gsap.utils.toArray<HTMLElement>('.scene-block')

      scenes.forEach((scene, index) => {
        if (index === 0) {
          return
        }

        if (scene.classList.contains('scene-block--no-reveal')) {
          gsap.set(scene, {
            clipPath: 'inset(0% 0% 0% 0% round 0px)',
            scale: 1,
            opacity: 1,
            clearProps: 'filter',
          })
          return
        }

        const previous = scenes[index - 1]

        gsap.set(scene, {
          clipPath: 'inset(12% 0% 0% 0% round 24px)',
          scale: 1.06,
          opacity: 0.58,
          transformOrigin: 'center top',
        })

        const transitionTl = gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            start: 'top 86%',
            end: 'top 24%',
            scrub: 1,
          },
        })

        transitionTl
          .to(scene, {
            clipPath: 'inset(0% 0% 0% 0% round 0px)',
            scale: 1,
            opacity: 1,
            ease: 'none',
          }, 0)
          .to(previous, {
            scale: 0.95,
            opacity: 0.34,
            filter: 'brightness(0.62)',
            ease: 'none',
          }, 0)
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef} className="relative bg-dark-bg">
      <section className="scene-block relative z-[5]">
        <Hero />
      </section>
      <section className="scene-block scene-block--no-reveal relative z-[6]">
        <AllWorksCinematic />
      </section>
      <section className="scene-block scene-block--no-reveal relative z-[7]">
        <ProjectsSection />
      </section>
      <section className="scene-block scene-block--no-reveal relative z-[8]">
        <About />
      </section>
      <section className="scene-block scene-block--no-reveal relative z-[9]">
        <CTA />
      </section>
    </main>
  )
}