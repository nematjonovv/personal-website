"use client"
import { useEffect, useState } from "react"
import { Menu as MenuIcon, X } from "lucide-react"
import { useLenis } from "lenis/react"
import { menu } from "../shared/data/menu.data"
import { motion, AnimatePresence } from "framer-motion"
import { createPortal } from "react-dom"

function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    lenis?.scrollTo(`#${id}`, { duration: 1.2 })
    setIsOpen(false)
  }

  const mobileMenu = (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="sm:hidden fixed inset-0 top-0 bg-[#1A1A1A] z-50 flex flex-col items-center justify-center gap-8"
        >
          {/* close button lives inside the portal now */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-6 text-white cursor-pointer"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {menu.map((item, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.25 }}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className="uppercase font-mono font-bold text-2xl text-white hover:text-(--accent) transition-colors"
            >
              {item.title}/
            </motion.a>
          ))}

          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: menu.length * 0.07, duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-(#231B00) font-mono font-bold text-sm bg-(--accent) px-6 py-3 uppercase cursor-pointer mt-4"
          >
            hire me
          </motion.button>
        </motion.nav>
      )}
    </AnimatePresence>
  )

  return (
    <>
      {/* desktop nav */}
      <nav className="hidden sm:flex items-center gap-5">
        {menu.map((item, i) => (
          <a
            key={i}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className="uppercase font-mono font-light text-sm text-white hover:text-(--accent) transition-colors cursor-pointer"
          >
            {item.title}/
          </a>
        ))}
      </nav>

      {/* mobile toggle — only shown when menu is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="sm:hidden text-white relative cursor-pointer"
          aria-label="Open menu"
        >
          <MenuIcon size={24} />
        </button>
      )}

      {mounted && createPortal(mobileMenu, document.body)}
    </>
  )
}

export default Menu