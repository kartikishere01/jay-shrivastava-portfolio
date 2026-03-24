'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative border-t border-dark-border py-12 md:py-14">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.35 }}
          className="grid md:grid-cols-12"
        >
          <div className="md:col-span-5" />
          <div className="md:col-span-7 text-right">
            <p className="eyebrow mb-2">Commissioning Enquiries</p>

            <h2 className="mb-3 text-[clamp(2rem,4.8vw,3.8rem)] leading-[0.94] text-dark-text">
              Planning something ambitious?
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 ml-auto max-w-lg text-[0.95rem] leading-relaxed text-dark-muted"
            >
              We undertake carefully considered residential, cultural, and heritage commissions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-end"
            >
              <Link href="/contact" className="btn-primary">
                Discuss Your Project
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}