'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg/95 backdrop-blur-md border-b border-dark-border' : 'bg-transparent'
      }`}
    >
      <nav className="container-wide flex justify-between items-center h-20">
        <Link href="/" className="text-xl font-bold">
          Jay Shrivastava
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-widest text-dark-muted hover:text-dark-text transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-dark-text transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-dark-text transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-dark-text transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-dark-bg border-b border-dark-border"
      >
        <div className="container-wide py-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm uppercase tracking-widest text-dark-muted hover:text-dark-text transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  )
}