import { Project } from "@/src/shared/data/project.data"
import { ArrowUpRight, Check } from "lucide-react"
import Link from "next/link"
import ProjectImageSlider from "./ProjectImageSlider"

function ProjectDetail({ project }: { project: Project }) {
  const images = [project.image, ...(project.gallery ?? [])]

  return (
    <div className="bg-[#1A1A1A] min-h-screen px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
      <div className="container">

        {/* header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-xs font-mono text-zinc-500 uppercase">{project.status}</span>
            <span className="text-xs font-mono text-zinc-500">•</span>
            <span className="text-xs font-mono text-zinc-500 uppercase">{project.role}</span>
          </div>
          <span className="text-xs font-mono text-zinc-500">{project.duration} — {project.year}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-grotesk uppercase tracking-tight text-white mb-6 sm:mb-8">
          {project.title}
        </h1>

        <p className="text-zinc-400 font-grotesk text-base sm:text-lg leading-7 max-w-2xl mb-10">
          {project.description}
        </p>

        <ProjectImageSlider images={images} title={project.title} />

        {/* problem / solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-mono text-[#E7C446] tracking-widest uppercase">The Problem</span>
            <p className="text-zinc-300 font-grotesk text-base sm:text-lg leading-7 mt-3">
              {project.problem}
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-[#E7C446] tracking-widest uppercase">The Solution</span>
            <p className="text-zinc-300 font-grotesk text-base sm:text-lg leading-7 mt-3">
              {project.solution}
            </p>
          </div>
        </div>

        {/* my contribution */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-mono text-[#E7C446] tracking-widest uppercase">My Contribution</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {project.myContribution.map((item) => (
              <div key={item} className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
                <Check size={14} className="text-[#E7C446] shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* challenges */}
        {project.challenges && (
          <div className="mb-12 sm:mb-16">
            <span className="text-xs font-mono text-[#E7C446] tracking-widest uppercase">Challenges</span>
            <p className="text-zinc-300 font-grotesk text-base sm:text-lg leading-7 mt-3 max-w-2xl">
              {project.challenges}
            </p>
          </div>
        )}

        {/* results */}
        {project.results && project.results.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <span className="text-xs font-mono text-[#E7C446] tracking-widest uppercase">Results</span>
            <div className="flex flex-col gap-3 mt-4">
              {project.results.map((result, i) => (
                <div key={i} className="flex items-start gap-3 text-zinc-300 font-grotesk text-base leading-6">
                  <span className="text-[#E7C446] font-mono text-sm mt-1 shrink-0">→</span>
                  {result}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* roadmap */}
        {project.roadmap && project.roadmap.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">What's Next</span>
            <div className="flex flex-col gap-3 mt-4">
              {project.roadmap.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-zinc-400 font-grotesk text-base leading-6">
                  <span className="text-zinc-600 font-mono text-sm mt-1 shrink-0">○</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* tags */}
        <div className="flex flex-wrap gap-2 mb-12 sm:mb-16">
          {project.tags.map((tag) => {
            const isClaude = tag.toUpperCase().includes('CLAUDE')
            return (
              <span
                key={tag}
                className={
                  isClaude
                    ? "border border-[#D97757]/40 bg-[#D97757]/10 text-[#D97757] px-3 py-1.5 text-xs font-mono tracking-widest"
                    : "border border-zinc-700 text-zinc-400 px-3 py-1.5 text-xs font-mono tracking-widest"
                }
              >
                {tag}
              </span>
            )
          })}
        </div>

        {/* links */}
        <div className="flex flex-col sm:flex-row gap-3">
          {project.links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--accent) text-(--text) py-4 px-8 flex items-center justify-center gap-2 uppercase text-sm font-mono font-bold"
            >
              {link.label} <ArrowUpRight size={16} />
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ProjectDetail