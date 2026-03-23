'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container-wide">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            All Projects
          </motion.h1>
          <p className="text-lg text-dark-muted">
            Explore our complete portfolio of architectural works
          </p>
        </div>
      </main>
    </>
  )
}