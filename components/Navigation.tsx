'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(8,8,8,0.82)] backdrop-blur-md border-b border-dark-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide flex justify-between items-center h-[88px]">
        <Link href="/" className="tracking-[0.18em] text-[0.72rem] uppercase font-semibold text-dark-text">
          adze&axis
        </Link>

        <div className="hidden md:flex gap-8 lg:gap-11">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.72rem] uppercase tracking-[0.17em] transition-colors ${
                pathname === item.href ? 'text-dark-text' : 'text-dark-muted hover:text-dark-text'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-dark-text transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-dark-text transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-dark-text transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-dark-card border-b border-dark-border"
      >
        <div className="container-wide py-8 space-y-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block text-[0.72rem] uppercase tracking-[0.17em] ${
                pathname === item.href ? 'text-dark-text' : 'text-dark-muted hover:text-dark-text'
              }`}
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