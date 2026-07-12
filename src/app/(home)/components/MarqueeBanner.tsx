"use client"
import { useEffect, useRef, useState } from "react"
const rowOne = ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWINDCSS"]
const rowTwo = ["JAVASCRIPT", "FIGMA", "GIT", "NODE.JS"]

const separator = <span className="mx-2 sm:mx-4 text-[#E7C446]">✦</span>


function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[]
  reverse?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const setRef = useRef<HTMLSpanElement>(null)
  const [repeatCount, setRepeatCount] = useState(4)

  useEffect(() => {
    const calculateRepeats = () => {
      if (!containerRef.current || !setRef.current) return
      const containerWidth = containerRef.current.offsetWidth
      const setWidth = setRef.current.offsetWidth
      if (setWidth === 0) return

      let needed = Math.ceil((containerWidth * 2) / setWidth) + 2
      if (needed % 2 !== 0) needed += 1
      setRepeatCount(Math.max(needed, 4))
    }

    calculateRepeats()
    const ro = new ResizeObserver(calculateRepeats)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [items])

  return (
    <div ref={containerRef} className="flex overflow-hidden">
      <div className={`flex whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...Array(repeatCount)].map((_, i) => (
          <span key={i} ref={i === 0 ? setRef : undefined} className="flex items-center">
            {items.map((item, j) => (
              <span key={j} className="flex items-center text-xs sm:text-sm font-mono tracking-widest text-white uppercase">
                {item}
                {separator}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function MarqueeBanner() {
  return (
    <div className="bg-[#111] py-2 sm:py-3 flex flex-col gap-1.5 sm:gap-2 overflow-hidden">
      <MarqueeRow items={rowOne} />
      <MarqueeRow items={rowTwo} reverse />
    </div>
  )
}