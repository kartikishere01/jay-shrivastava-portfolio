'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { projects } from '@/lib/projects'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeProjectSlug, setActiveProjectSlug] = useState(projects[0]?.slug ?? '')

  const activeProject = projects.find((project) => project.slug === activeProjectSlug) ?? projects[0]

  useEffect(() => {
    const listenerCleanup: Array<() => void> = []

    const ctx = gsap.context(() => {
      const scenes = gsap.utils.toArray<HTMLElement>('.project-scene')

      scenes.forEach((scene, index) => {
        const media = scene.querySelector('.scene-media-inner')
        const copy = scene.querySelector('.scene-copy')
        const number = scene.querySelector('.scene-number')

        if (!media || !copy || !number) {
          return
        }

        gsap.fromTo(media,
          { scale: 1.28, yPercent: 18, filter: 'brightness(0.62)' },
          {
            scale: 1,
            yPercent: 0,
            filter: 'brightness(1)',
            ease: 'none',
            scrollTrigger: {
              trigger: scene,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.9,
            },
          }
        )

        if (index > 0) {
          const previousScene = scenes[index - 1]
          const previousMedia = previousScene.querySelector('.scene-media-inner')

          gsap.fromTo(media,
            {
              scale: 1.44,
              yPercent: 16,
              autoAlpha: 0,
              filter: 'brightness(0.52) blur(6px)',
              clipPath: 'inset(16% 14% 16% 14%)',
            },
            {
              scale: 1,
              yPercent: 0,
              autoAlpha: 1,
              filter: 'brightness(1) blur(0px)',
              clipPath: 'inset(0% 0% 0% 0%)',
              ease: 'none',
              scrollTrigger: {
                trigger: scene,
                start: 'top 88%',
                end: 'top 22%',
                scrub: 1.15,
              },
            }
          )

          if (previousMedia) {
            gsap.to(previousMedia, {
              scale: 0.88,
              yPercent: -6,
              autoAlpha: 0.34,
              filter: 'brightness(0.48) blur(7px)',
              ease: 'none',
              scrollTrigger: {
                trigger: scene,
                start: 'top 88%',
                end: 'top 22%',
                scrub: 1.15,
              },
            })
          }
        }

        gsap.fromTo(copy,
          { y: 95, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: scene,
              start: 'top 62%',
              end: 'top 27%',
              scrub: 0.55,
            },
          }
        )

        gsap.to(scene, {
          opacity: 0.38,
          ease: 'none',
          scrollTrigger: {
            trigger: scene,
            start: 'center top',
            end: 'bottom top',
            scrub: 0.8,
          },
        })

        gsap.fromTo(number,
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: scene,
              start: 'top 67%',
              end: 'top 38%',
              scrub: 0.5,
            },
          }
        )
      })

      const wrappers = gsap.utils.toArray<HTMLElement>('.scene-media')

      wrappers.forEach((wrapper) => {
        const inner = wrapper.querySelector<HTMLElement>('.scene-media-inner')
        const gloss = wrapper.querySelector<HTMLElement>('.scene-gloss')

        if (!inner || !gloss) {
          return
        }

        const onMouseMove = (event: MouseEvent) => {
          const rect = wrapper.getBoundingClientRect()
          const x = (event.clientX - rect.left) / rect.width - 0.5
          const y = (event.clientY - rect.top) / rect.height - 0.5

          gsap.to(inner, {
            x: x * 26,
            y: y * 18,
            skewX: x * 4,
            scale: 1.06,
            duration: 0.6,
            ease: 'power3.out',
            overwrite: true,
          })

          gsap.to(gloss, {
            x: x * 30,
            y: y * 30,
            opacity: 0.8,
            duration: 0.6,
            ease: 'power3.out',
            overwrite: true,
          })
        }

        const onMouseLeave = () => {
          gsap.to(inner, {
            x: 0,
            y: 0,
            skewX: 0,
            scale: 1,
            duration: 0.95,
            ease: 'expo.out',
          })

          gsap.to(gloss, {
            x: 0,
            y: 0,
            opacity: 0.58,
            duration: 0.95,
            ease: 'expo.out',
          })
        }

        wrapper.addEventListener('mousemove', onMouseMove)
        wrapper.addEventListener('mouseleave', onMouseLeave)
        listenerCleanup.push(() => {
          wrapper.removeEventListener('mousemove', onMouseMove)
          wrapper.removeEventListener('mouseleave', onMouseLeave)
        })
      })

    }, sectionRef)

    return () => {
      listenerCleanup.forEach((cleanup) => cleanup())
      ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-dark-bg">
      <div className="project-names-stage relative h-[175vh]">
        <div className="project-names-wall sticky top-0 h-screen w-full bg-[#f1eee8] px-4 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(0,72fr)_minmax(0,28fr)] gap-8 lg:gap-10 items-center">
            <div>
              <div className="flex flex-wrap gap-x-2 gap-y-3 md:gap-x-3 md:gap-y-4 text-[clamp(2rem,5vw,4.35rem)] font-bold leading-[1.02] tracking-[-0.02em] text-[#bcc2bf]">
                {projects.map((project, index) => {
                  const isActive = activeProjectSlug === project.slug

                  return (
                    <span key={`project-name-${project.id}`} className="project-name-item inline-flex items-center will-change-transform">
                      <Link
                        href={`/projects/${project.slug}`}
                        onMouseEnter={() => setActiveProjectSlug(project.slug)}
                        onFocus={() => setActiveProjectSlug(project.slug)}
                        className={`transition-colors duration-300 ${isActive ? 'text-black' : 'text-[#bcc2bf] hover:text-[#7d7d7d]'}`}
                      >
                        {project.title}
                      </Link>
                      {index < projects.length - 1 ? <span className="ml-2 md:ml-3 text-[#c4c9c6]">/</span> : null}
                    </span>
                  )
                })}
              </div>
            </div>

            <div className="relative lg:h-full">
              <div className="project-preview-media relative overflow-hidden aspect-[4/5] lg:aspect-[3/4] min-h-[320px] max-h-[72vh] w-full">
                {projects.map((project) => {
                  const isVisible = activeProject?.slug === project.slug

                  return (
                    <Image
                      key={`preview-${project.slug}`}
                      src={project.cover}
                      alt={project.title}
                      fill
                      className={`object-cover transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                      sizes="(min-width: 1024px) 28vw, 100vw"
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide pb-16 md:pb-20">
        <div className="mb-16 md:mb-24">
          <span className="eyebrow text-[#b8b2a7]">
            Selected Work
          </span>
          <h2 className="section-title mt-5 max-w-5xl text-[#f3efe8]">
            A quiet sequence of built work.
          </h2>
        </div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <article key={project.id} className="project-scene relative h-[100vh] border-t border-dark-border">
              <div className="sticky top-[88px] h-[calc(100vh-88px)] flex items-center">
                <Link href={`/projects/${project.slug}`} className="w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    <div className="scene-media relative overflow-hidden h-[56vh] min-h-[380px] lg:col-span-8" data-cursor="image">
                      <div className="scene-media-inner absolute inset-0 will-change-transform">
                        <Image
                          src={project.cover}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 65vw, 100vw"
                        />
                      </div>
                      <div className="scene-gloss absolute inset-0 opacity-[0.58] bg-[radial-gradient(circle_at_24%_24%,rgba(255,255,255,0.24),transparent_48%),linear-gradient(to_top,rgba(0,0,0,0.56),transparent_55%)] will-change-transform" />
                    </div>

                    <div className="scene-copy lg:col-span-4 will-change-transform">
                      <div className="scene-number text-[#958e83] text-xs tracking-[0.14em] mb-5">
                        {(index + 1).toString().padStart(2, '0')} / {projects.length.toString().padStart(2, '0')}
                      </div>
                      <p className="eyebrow mb-4 text-[#baafa0]">{project.category}</p>
                      <h3 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] text-[#f4f0e8]">
                        {project.title}
                      </h3>
                      <p className="text-[#90887d] mt-5 text-xs tracking-[0.14em]">{project.location} · {project.year}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <Link href="/projects" className="btn-secondary">Browse Full Portfolio</Link>
        </div>
      </div>
    </section>
  )
}