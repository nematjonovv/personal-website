import { Project } from "@/src/shared/data/project.data"
import { ArrowUpRight } from "lucide-react"

function SmallCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col w-100 mt-8 bg-[#222222]">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold font-grotesk uppercase text-white">{project.title}</h3>
          <span className="text-xs font-mono text-zinc-500">0{project.id}</span>
        </div>
        <p className="text-xs text-zinc-400 font-grotesk leading-relaxed">{project.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs font-mono text-zinc-500">{project.tags[0]}</span>
          <a href={project.url} className="text-xs font-mono font-bold text-[#E7C446] tracking-widest flex items-center gap-1">
            VIEW <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SmallCard