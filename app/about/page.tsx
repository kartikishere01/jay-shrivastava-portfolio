'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 bg-dark-bg">
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow mb-4 text-[#b8b2a7]"
        >
          About
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="section-title max-w-4xl mb-7 text-[#f4f0e8]"
        >
          A practice shaped by context, light, and lived detail.
        </motion.h1>

        <section className="mt-12 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="body-copy text-[#b1a99b] max-w-2xl">
              Our studio works across architecture and interiors with a process rooted in material experimentation, patient collaboration, and regionally grounded design decisions.
            </p>
            <p className="text-[#9f978b] max-w-2xl">
              We believe architecture should reveal itself slowly: in shadow transitions, in threshold moments, and in the emotional rhythm of movement through space.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="surface-panel p-4">
                <p className="text-3xl text-[#f2eee7]">12+</p>
                <p className="text-xs uppercase tracking-[0.14em] text-[#9f978b] mt-2">Years</p>
              </div>
              <div className="surface-panel p-4">
                <p className="text-3xl text-[#f2eee7]">48</p>
                <p className="text-xs uppercase tracking-[0.14em] text-[#9f978b] mt-2">Projects</p>
              </div>
              <div className="surface-panel p-4">
                <p className="text-3xl text-[#f2eee7]">9</p>
                <p className="text-xs uppercase tracking-[0.14em] text-[#9f978b] mt-2">Cities</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="surface-panel p-3"
          >
            <div className="relative aspect-[4/5] overflow-hidden" data-cursor="image">
              <Image
                src="/images/theanandthakur-building-6011756_1920.jpg"
                alt="Studio architecture"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  )
}