'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative section-padding bg-dark-bg">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <span className="eyebrow text-[#b9b2a7]">
              About The Studio
            </span>
            <h2 className="section-title mt-5 mb-9 text-[#f2eee7]">
              Built around people, climate, and craft.
            </h2>

            <p className="text-[#b1a89b] leading-relaxed mb-9 max-w-xl">
              We design architecture and interiors that feel calm, precise, and deeply rooted in context.
            </p>

            <Link href="/about" className="btn-primary">
              Learn More
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.35 }}
            className="relative overflow-hidden surface-panel p-3"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/abedaljalil-architecture-9827472_1920.jpg"
                alt="Studio"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}