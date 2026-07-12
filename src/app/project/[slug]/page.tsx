import { projects } from "@/src/shared/data/project.data"
import ProjectDetail from "./components/ProjectDetail"
import { notFound } from "next/navigation"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  return <ProjectDetail project={project} />
}