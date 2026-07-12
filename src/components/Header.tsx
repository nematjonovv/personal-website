import { MoveRight } from "lucide-react";
import Menu from "./header-menu";
import { motion } from "framer-motion"

function Header() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 left-0 w-full z-40 h-15 bg-(--secondary) flex items-center justify-between px-4 sm:px-6"
    >
      <p className="uppercase text-white font-mono font-bold text-xs sm:text-sm">
        h.nematjonov
      </p>
      <Menu />
      <button className="hidden sm:flex items-center gap-2 text-(#231B00) font-mono font-bold text-sm bg-(--accent) h-full px-4 uppercase cursor-pointer">
        hire me <MoveRight />
      </button>
    </motion.header>
  )
}

export default Header;