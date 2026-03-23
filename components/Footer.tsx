'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-dark-bg border-t border-dark-border">
      <div className="container-wide py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-bold mb-4">Jay Shrivastava</h3>
            <p className="text-dark-muted text-sm leading-relaxed">
              Award-winning architecture and design studio creating spaces that inspire.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-4 text-dark-muted text-sm">
              <li>
                <Link href="/" className="hover:text-dark-text transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-dark-text transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-dark-text transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-dark-text transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">
              Services
            </h4>
            <ul className="space-y-4 text-dark-muted text-sm">
              <li>Architecture</li>
              <li>Interior Design</li>
              <li>Urban Planning</li>
              <li>Consulting</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-dark-muted text-sm">
              <li>
                <a href="mailto:hello@jayshrivastava.com" className="hover:text-dark-text transition-colors">
                  hello@jayshrivastava.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-dark-text transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>New York, USA</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-dark-muted">
          <p>&copy; {currentYear} Jay Shrivastava Studio. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-dark-text transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-dark-text transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-dark-text transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}