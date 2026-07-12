"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useAnimationFrame } from "framer-motion"
import { stack } from "@/src/shared/data/stack.data"

const ROW_ONE_CATEGORIES = ["FRONTEND", "BACKEND", "AI WORKFLOW"]

const rowOne = stack
  .filter((s) => ROW_ONE_CATEGORIES.includes(s.category))
  .flatMap((s) => s.items.map((i) => i.toUpperCase()))

const rowTwo = stack
  .filter((s) => !ROW_ONE_CATEGORIES.includes(s.category))
  .flatMap((s) => s.items.map((i) => i.toUpperCase()))

const Separator = () => <span className="mx-2 sm:mx-4 text-[#E7C446]">✦</span>

const BASE_SPEED = 70
const TRANSITION_TIME = 0.4

function Item({ item }: { item: string }) {
  return (
    <span className="flex items-center text-xs sm:text-sm font-mono tracking-widest text-white uppercase">
      {item}
      <Separator />
    </span>
  )
}

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const blockRef = useRef<HTMLDivElement>(null)
  const [blockRepeat, setBlockRepeat] = useState(4)
  const blockWidthRef = useRef(0)
  const distanceRef = useRef(0)
  const speedRef = useRef(BASE_SPEED)
  const isHovered = useRef(false)
  const x = useMotionValue(0)

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !blockRef.current) return
      const containerWidth = containerRef.current.getBoundingClientRect().width
      const width = blockRef.current.getBoundingClientRect().width
      if (width === 0) return

      // blok konteynerdan kamida 1.5 baravar kengroq bo'lishi shart
      // — bo'lmasa, item'larni ko'paytirib qayta o'lchaymiz
      if (width < containerWidth * 1.5) {
        setBlockRepeat((prev) => prev + 2)
        return
      }
      blockWidthRef.current = width
    }

    measure()
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(measure)
    }

    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    if (blockRef.current) ro.observe(blockRef.current)
    return () => ro.disconnect()
  }, [items, blockRepeat])

  useAnimationFrame((_, delta) => {
    const blockWidth = blockWidthRef.current
    if (!blockWidth) return

    const target = isHovered.current ? 0 : BASE_SPEED
    const smoothing = 1 - Math.exp(-(delta / 1000) / TRANSITION_TIME)
    speedRef.current += (target - speedRef.current) * smoothing

    distanceRef.current += speedRef.current * (delta / 1000)
    const offset = distanceRef.current % blockWidth

    x.set(reverse ? offset - blockWidth : -offset)
  })

  const renderedItems = Array.from({ length: blockRepeat }, () => items).flat()

  return (
    <div
      ref={containerRef}
      className="flex overflow-hidden"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        <div ref={blockRef} className="flex items-center shrink-0">
          {renderedItems.map((item, j) => (
            <Item key={`a-${j}`} item={item} />
          ))}
        </div>
        <div className="flex items-center shrink-0">
          {renderedItems.map((item, j) => (
            <Item key={`b-${j}`} item={item} />
          ))}
        </div>
      </motion.div>
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