'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-dark-border">
      <div className="container-wide py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h3 className="text-3xl">adze&axis</h3>
            <p className="mt-2 max-w-sm text-sm text-dark-muted">
              Architecture and interiors with quiet clarity.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 text-[0.72rem] uppercase tracking-[0.15em] text-dark-muted">
            <Link href="/" className="hover:text-dark-text transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-dark-text transition-colors">Projects</Link>
            <Link href="/about" className="hover:text-dark-text transition-colors">About</Link>
            <Link href="/contact" className="hover:text-dark-text transition-colors">Contact</Link>
          </div>
        </motion.div>

        <div className="mt-8 border-t border-dark-border pt-6 flex flex-col gap-3 text-sm text-dark-muted md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} adze&axis</p>
          <a href="mailto:hello@jayshrivastava.com" className="hover:text-dark-text transition-colors">
            hello@jayshrivastava.com
          </a>
        </div>
      </div>
    </footer>
  )
}