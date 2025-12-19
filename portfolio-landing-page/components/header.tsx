"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const customEase = [0.16, 1, 0.3, 1] as const

  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (pathname === "/") {
      const workSection = document.getElementById("work")
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push("/#work")
    }
  }

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (pathname === "/") {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push("/#contact")
    }
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 w-full z-[999] backdrop-blur-md bg-black/50 border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: customEase }}
      style={{ position: "fixed" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <Link href="/">
          <motion.div className="text-xl font-bold tracking-tight cursor-pointer text-white" whileHover={{ scale: 1.05 }}>
            OTHERXRYAN
          </motion.div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wider">
          <a href="#work" onClick={handleWorkClick}>
            <motion.span
              className="px-4 py-2 text-white hover:text-[#888888] transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              WORK
            </motion.span>
          </a>
          <Link href="/about">
            <motion.span
              className="px-4 py-2 text-white hover:text-[#888888] transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              ABOUT
            </motion.span>
          </Link>
          <a href="#contact" onClick={handleContactClick}>
            <motion.span className="px-4 py-2 text-white hover:text-[#888888] transition-colors cursor-pointer" whileHover={{ scale: 1.05 }}>
              CONTACT
            </motion.span>
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
