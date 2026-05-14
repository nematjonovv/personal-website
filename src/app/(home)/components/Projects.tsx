"use client"
import { projects } from "@/src/shared/data/project.data";
import FeaturedCard from "./FeauterCard";
import SmallCard from "./SmallCard";
import Badge from "@/src/shared/ui/Badge";
import { useEffect, useState } from "react";

function Projects() {

  const [projectIndex, setProjectIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  },[])
  return (
    <section className="bg-(--secondary) px-16 py-20 min-h-screen">
      <div className="w-full h-full container">
        <div className="flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <Badge title="Projects/" />
            <h2 className="font-semibold font-grotesk text-5xl mt-4 text-(--primary)">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-[#555555] uppercase font-mono text-sm ">
            0{projects.length} projects
          </p>
        </div>

        <FeaturedCard project={projects[projectIndex]} />
        <div className="flex items-center justify-between">
          {
            projects.filter((project, i) => i !== projectIndex).map(project => (
                <SmallCard key={project.id} project={project} />
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects;