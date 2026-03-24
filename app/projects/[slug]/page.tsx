import { notFound } from 'next/navigation'
import { getProjectBySlug, projects } from '@/lib/projects'
import ProjectDetailView from '@/components/ProjectDetailView'

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailView project={project} />
}
