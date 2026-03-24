'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const galleryImages = [
  '/images/abedaljalil-architecture-9827472_1920.jpg',
  '/images/antonio_cansino-duomo-6808817_1920.jpg',
  '/images/mostafa_meraji-caravansary-4528924_1920.jpg',
  '/images/nobleprime-mosque-8547944_1920.jpg',
  '/images/pierreforlin-cathedral-7827172_1920.jpg',
  '/images/stufforge-roof-7649801_1920.jpg',
  '/images/tama66-church-7913551_1920.jpg',
  '/images/tama66-monastery-8114076_1920.jpg',
  '/images/theanandthakur-building-6011756_1920.jpg',
  '/images/wal_172619-building-6577149_1920.jpg',
  '/images/wal_172619-church-7921891_1920.jpg',
  '/images/wal_172619-city-5974876_1920.jpg',
  '/images/wal_172619-city-9599967_1920.jpg',
]

export default function GalleryPage() {
  const pageRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('[data-gallery-item]')
      items.forEach((item) => {
        const image = item.querySelector('[data-gallery-image]')

        gsap.from(item, {
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 86%',
          },
        })

        if (image) {
          gsap.fromTo(image,
            { yPercent: 8, scale: 1.08 },
            {
              yPercent: -5,
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          )
        }
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef} className="pt-32 pb-20 bg-dark-bg">
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow mb-4"
        >
          Gallery
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="section-title max-w-5xl mb-7 text-[#f4f0e8]"
        >
          Fragments from ongoing explorations and completed works.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="body-copy max-w-3xl text-[#b0a79a]"
        >
          A rotating collection of visual studies, site impressions, and project moments curated from the studio archive.
        </motion.p>

        <section className="mt-14 md:mt-20 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {galleryImages.map((src, index) => (
            <motion.figure
              data-gallery-item
              key={src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 + index * 0.04, duration: 0.65 }}
              whileHover={{ y: -4 }}
              className="mb-6 break-inside-avoid overflow-hidden surface-panel p-3"
            >
              <div className={`group relative overflow-hidden ${index % 3 === 0 ? 'aspect-[4/5]' : index % 3 === 1 ? 'aspect-[4/3]' : 'aspect-square'}`} data-cursor="image">
                <Image
                  data-gallery-image
                  src={src}
                  alt={`Architecture gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.figure>
          ))}
        </section>
      </div>
    </main>
  )
}