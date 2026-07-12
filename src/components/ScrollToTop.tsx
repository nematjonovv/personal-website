'use client'

import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLenis } from 'lenis/react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    lenis?.scrollTo(0, { duration: 1.2 })
  }

  if (!visible) return null

  return (
    <button onClick={scrollToTop} className="fixed bottom-4 right-4 bg-[#E7C446] text-[#1A1A1A] p-2 rounded-full shadow-lg hover:bg-[#D9B33C] transition-colors cursor-pointer">
      <ArrowUp />
    </button>
  )
}