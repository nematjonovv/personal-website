import { Project } from "@/src/shared/data/project.data"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

function SmallCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col w-full lg:w-100 mt-8 bg-[#222222]">
      <div className="h-40 sm:h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-base sm:text-lg font-bold font-grotesk uppercase text-white">{project.title}</h3>
          <span className="text-xs font-mono text-zinc-500 shrink-0">0{project.id}</span>
        </div>
        <p className="text-xs text-zinc-400 font-grotesk leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-zinc-500 border border-zinc-700 px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-2">
          <span className="text-xs font-mono text-zinc-500 uppercase">{project.status}</span>
          <Link href={`/project/${project.slug}`} className="text-xs font-mono font-bold text-[#E7C446] tracking-widest flex items-center gap-1 shrink-0">
            VIEW <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SmallCard