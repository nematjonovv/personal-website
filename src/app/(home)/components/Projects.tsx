"use client"
import { projects } from "@/src/shared/data/project.data";
import FeaturedCard from "./FeauterCard";
import SmallCard from "./SmallCard";
import Badge from "@/src/shared/ui/Badge";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Projects() {

  const [projectIndex, setProjectIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentProject = projects[projectIndex]

  return (
    <section id="projects" className="bg-(--secondary) px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 min-h-screen">
      <div className="w-full h-full container">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
          <div className="flex gap-4 sm:gap-5 items-center flex-wrap">
            <Badge title="Projects/" />
            <h2 className="font-semibold font-grotesk text-3xl sm:text-4xl lg:text-5xl sm:mt-4 text-(--primary)">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-[#555555] uppercase font-mono text-xs sm:text-sm">
            0{projects.length} projects
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <FeaturedCard project={currentProject} />
          </motion.div>
        </AnimatePresence>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center lg:justify-between gap-4 mt-4"
        >
          <AnimatePresence mode="popLayout">
            {
              projects.filter((project) => project.id !== currentProject.id).map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <SmallCard project={project} />
                </motion.div>
              ))
            }
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects;