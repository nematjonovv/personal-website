"use client"
import ViewImage from "@/src/components/ViewImage";
import { Project } from "@/src/shared/data/project.data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function FeaturedCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="w-full mt-8">
      {/* card header */}
      <div className="w-full h-10 py-1 border border-[#333333] bg-[#222222] flex items-center justify-center relative">
        <div className="bg-(--secondary) w-2/3 sm:w-1/2 h-full border border-[#333333] flex items-center justify-center px-2">
          <a href={project.url} className="text-[#555555] font-mono text-xs sm:text-sm uppercase truncate" target="_blank" rel="noopener noreferrer">
            {project.url}
          </a>
        </div>

        <div className="hidden sm:block">
          <span className="absolute left-5 bottom-1/2 translate-y-1/2 h-3 w-3 rounded-full border border-[#555]"></span>
          <span className="absolute left-10 bottom-1/2 translate-y-1/2 h-3 w-3 rounded-full border border-[#555]"></span>
          <span className="absolute left-15 bottom-1/2 translate-y-1/2 h-3 w-3 rounded-full border border-[#555]"></span>
        </div>
      </div>

      {/* card body */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:h-100 bg-[#1A1A1A]">
        <div className="h-64 sm:h-full p-4 sm:p-5 overflow-hidden">
          <img onClick={() => setIsOpen(true)} src={project.image} className="object-cover object-center h-full w-full cursor-pointer" alt={project.title} />
        </div>
        <div className="h-full p-5 sm:p-6 lg:p-5 flex flex-col justify-center gap-3 sm:gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-grotesk text-(--primary)">{project.title}</h2>
          <p className="text-[#555555] font-grotesk text-base sm:text-lg leading-6 max-w-150 mt-2 sm:mt-4">{project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-2 sm:mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-zinc-700 text-zinc-400 px-2.5 py-1 text-[10px] sm:text-xs font-mono tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Link href={project.url} className="bg-(--accent) text-(--text) w-full py-4 sm:py-6 flex items-center justify-center gap-2 uppercase text-sm font-mono font-bold" target="_blank" rel="noopener noreferrer">
              View Project <ArrowUpRight />
            </Link>
            <Link href={`/project/${project.slug}`} className="border border-zinc-700 text-white w-full py-4 sm:py-6 flex items-center justify-center gap-2 uppercase text-sm font-mono font-bold hover:bg-zinc-800 transition-colors">
              Read More <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>




      {isOpen && (
        <ViewImage
          src={project.image}
          alt={project.title}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default FeaturedCard;