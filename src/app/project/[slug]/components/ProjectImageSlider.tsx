"use client"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ViewImage from "@/src/components/ViewImage"

function ProjectImageSlider({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (images.length <= 1 || isOpen) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length, isOpen])

  return (
    <div className="w-full mb-12 sm:mb-16">
      <div className="relative w-full h-64 sm:h-96 lg:h-125 overflow-hidden bg-[#111]">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setIsOpen(true)}
            className="absolute inset-0 w-full h-full object-contain cursor-pointer"
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 transition-all duration-300 ${i === index ? "w-6 bg-[#E7C446]" : "w-1.5 bg-zinc-700"
                }`}
            />
          ))}
        </div>
      )}

      {isOpen && (
        <ViewImage
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default ProjectImageSlider