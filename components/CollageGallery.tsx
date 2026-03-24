'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    slug: 'abedaljalil-architecture',
    title: 'Abedaljalil Architecture',
    category: 'Residential',
    image: '/images/abedaljalil-architecture-9827472_1920.jpg',
  },
  {
    id: 2,
    slug: 'antonio-cansino-duomo',
    title: 'Antonio Cansino Duomo',
    category: 'Cultural',
    image: '/images/antonio_cansino-duomo-6808817_1920.jpg',
  },
  {
    id: 3,
    slug: 'mostafa-meraji-caravansary',
    title: 'Mostafa Meraji Caravansary',
    category: 'Heritage',
    image: '/images/mostafa_meraji-caravansary-4528924_1920.jpg',
  },
  {
    id: 4,
    slug: 'nobleprime-mosque',
    title: 'Noble Prime Mosque',
    category: 'Religious',
    image: '/images/nobleprime-mosque-8547944_1920.jpg',
  },
  {
    id: 5,
    slug: 'pierreforlin-cathedral',
    title: 'Pierreforlin Cathedral',
    category: 'Religious',
    image: '/images/pierreforlin-cathedral-7827172_1920.jpg',
  },
  {
    id: 6,
    slug: 'stufforge-roof',
    title: 'Stufforge Roof Design',
    category: 'Modern',
    image: '/images/stufforge-roof-7649801_1920.jpg',
  },
  {
    id: 7,
    slug: 'tama66-church',
    title: 'Tama66 Church',
    category: 'Religious',
    image: '/images/tama66-church-7913551_1920.jpg',
  },
  {
    id: 8,
    slug: 'tama66-monastery',
    title: 'Tama66 Monastery',
    category: 'Heritage',
    image: '/images/tama66-monastery-8114076_1920.jpg',
  },
  {
    id: 9,
    slug: 'theanandthakur-building',
    title: 'TheAnandThakur Building',
    category: 'Commercial',
    image: '/images/theanandthakur-building-6011756_1920.jpg',
  },
  {
    id: 10,
    slug: 'wal-building',
    title: 'Wal Contemporary Building',
    category: 'Modern',
    image: '/images/wal_172619-building-6577149_1920.jpg',
  },
  {
    id: 11,
    slug: 'wal-church',
    title: 'Wal Church Architecture',
    category: 'Religious',
    image: '/images/wal_172619-church-7921891_1920.jpg',
  },
  {
    id: 12,
    slug: 'wal-city-1',
    title: 'Wal City Development',
    category: 'Urban',
    image: '/images/wal_172619-city-5974876_1920.jpg',
  },
  {
    id: 13,
    slug: 'wal-city-2',
    title: 'Wal Modern Cityscape',
    category: 'Urban',
    image: '/images/wal_172619-city-9599967_1920.jpg',
  },
]

export default function CollageGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll('[data-collage-item]')
      if (!items) return

      items.forEach((item, index) => {
        const isFromLeft = index % 2 === 0

        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          x: isFromLeft ? -100 : 100,
          duration: 1,
          delay: (index % 3) * 0.1,
        })
      })
    }, containerRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section ref={containerRef} className="relative bg-dark-bg py-40">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-32"
        >
          <span className="text-sm uppercase tracking-widest text-dark-muted">Portfolio</span>
          <h2 className="text-7xl md:text-8xl font-bold mt-6">All Projects</h2>
        </motion.div>

        {/* Collage grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <motion.div
                data-collage-item
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Text */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-dark-muted uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-dark-text">{project.title}</h3>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}