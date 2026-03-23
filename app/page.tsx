'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import ProjectsSection from '@/components/ProjectsSection'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Preloader from '@/components/Preloader'

export default function Home() {
  useEffect(() => {
    const preloader = document.querySelector('[data-preloader]')
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('opacity-0', 'pointer-events-none')
      }, 2000)
    }
  }, [])

  return (
    <>
      <Preloader />
      <main className="relative">
        <Hero />
        <ProjectsSection />
        <About />
        <CTA />
      </main>
    </>
  )
}