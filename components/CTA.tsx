'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative bg-dark-bg py-32 border-t border-dark-border">
      <div className="container-wide text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
            Ready to <br /> Start?
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-dark-muted mb-12 max-w-2xl mx-auto"
          >
            Let's discuss your vision and create something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact">
              <button className="px-8 py-4 bg-dark-text text-dark-bg font-semibold uppercase tracking-widest rounded-none hover:bg-dark-muted transition-colors text-sm">
                Get In Touch
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}