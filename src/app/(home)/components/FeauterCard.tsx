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
        <div className="bg-(--secondary) w-1/2 h-full border border-[#333333] flex items-center justify-center">
          <a href={project.url} className="text-[#555555] font-mono text-sm uppercase" target="_blank" rel="noopener noreferrer">
            {project.url}
          </a>
        </div>

        <div>
          <span className="absolute left-5 bottom-1/2 translate-y-1/2 h-3 w-3 rounded-full border border-[#555]"></span>
          <span className="absolute left-10 bottom-1/2 translate-y-1/2 h-3 w-3 rounded-full border border-[#555]"></span>
          <span className="absolute left-15 bottom-1/2 translate-y-1/2 h-3 w-3 rounded-full border border-[#555]"></span>
        </div>
      </div>

      {/* card body */}
      <div className="grid grid-cols-2 lg:h-90 bg-[#1A1A1A]">
        <div className="h-full p-5 overflow-hidden">
          <img onClick={() => setIsOpen(true)} src={project.image} className="object-cover object-center h-full w-full" alt={project.title} />
        </div>
        <div className="h-full p-5 flex flex-col justify-center gap-4">
          <h2 className="text-3xl font-bold font-grotesk text-(--primary)">{project.title}</h2>
          <p className="text-[#555555] font-grotesk text-lg leading-6 max-w-150 mt-4 mb-8">{project.description}
          </p>
          <Link href={project.url} className="bg-(--accent) text-(--text) w-full py-6 flex items-center justify-center uppercase text-sm font-mono font-bold" target="_blank" rel="noopener noreferrer">
            View Project <ArrowUpRight />
          </Link>
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