export type Project = {
  id: number
  slug: string
  title: string
  category: string
  year: string
  location: string
  cover: string
  overview: string
  details: string[]
  gallery: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'abedaljalil-residence',
    title: 'Abedaljalil Residence',
    category: 'Residential',
    year: '2024',
    location: 'Jaipur, India',
    cover: '/images/abedaljalil-architecture-9827472_1920.jpg',
    overview:
      'A shaded residence arranged around thick walls, courtyards, and slow transitions of light.',
    details: [
      'The plan stages movement through compressed thresholds and expanded volumes.',
      'Masonry and limestone surfaces are treated as thermal mass and visual anchor.',
      'Openings are calibrated for seasonal sun and prevailing breeze patterns.',
    ],
    gallery: [
      '/images/abedaljalil-architecture-9827472_1920.jpg',
      '/images/stufforge-roof-7649801_1920.jpg',
      '/images/wal_172619-building-6577149_1920.jpg',
    ],
  },
  {
    id: 2,
    slug: 'antonio-cansino-duomo',
    title: 'Antonio Cansino Duomo',
    category: 'Cultural',
    year: '2022',
    location: 'Florence, Italy',
    cover: '/images/antonio_cansino-duomo-6808817_1920.jpg',
    overview:
      'A conservation-led intervention balancing liturgical use, tourism, and civic memory.',
    details: [
      'Existing structural geometries informed every new insertion and circulation move.',
      'The material palette remains restrained to protect the monumentality of the dome.',
      'Lighting strategy foregrounds ritual sequences and spatial hierarchy.',
    ],
    gallery: [
      '/images/antonio_cansino-duomo-6808817_1920.jpg',
      '/images/pierreforlin-cathedral-7827172_1920.jpg',
      '/images/tama66-church-7913551_1920.jpg',
    ],
  },
  {
    id: 3,
    slug: 'mostafa-meraji-caravansary',
    title: 'Mostafa Meraji Caravansary',
    category: 'Heritage',
    year: '2021',
    location: 'Isfahan, Iran',
    cover: '/images/mostafa_meraji-caravansary-4528924_1920.jpg',
    overview:
      'A restoration strategy centered on handcrafted masonry and courtyard life.',
    details: [
      'Interventions were designed as reversible layers to preserve historic integrity.',
      'Stone paving and brick vaults were repaired with local craft practices.',
      'The courtyard was reactivated as a social and climatic core.',
    ],
    gallery: [
      '/images/mostafa_meraji-caravansary-4528924_1920.jpg',
      '/images/tama66-monastery-8114076_1920.jpg',
      '/images/wal_172619-city-5974876_1920.jpg',
    ],
  },
  {
    id: 4,
    slug: 'noble-prime-mosque',
    title: 'Noble Prime Mosque',
    category: 'Religious',
    year: '2020',
    location: 'Cairo, Egypt',
    cover: '/images/nobleprime-mosque-8547944_1920.jpg',
    overview:
      'A contemporary mosque defined by light wells, layered colonnades, and stillness.',
    details: [
      'Prayer hall acoustics and daylight were tuned as primary design parameters.',
      'A rhythmic structural grid shapes procession and collective gathering.',
      'Material expression remains quiet to emphasize volume and light.',
    ],
    gallery: [
      '/images/nobleprime-mosque-8547944_1920.jpg',
      '/images/wal_172619-church-7921891_1920.jpg',
      '/images/theanandthakur-building-6011756_1920.jpg',
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
