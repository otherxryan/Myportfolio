"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Mail } from "lucide-react"
import { useEffect, useState } from "react"
import ProjectCard from "@/components/project-card"
import { projects, categories } from "@/lib/projects"
import { transition } from "@/lib/motion-config"

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  useEffect(() => {
    const hash = window.location.hash
    if (hash === "#contact" || hash === "#work") {
      setTimeout(() => {
        const section = document.getElementById(hash.substring(1))
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  const filteredProjects = (
    activeCategory === "all"
      ? projects
      : activeCategory === "poster"
        ? projects.filter((project) => project.category === "poster")
        : activeCategory === "personal" || activeCategory === "commission"
          ? projects.filter(
              (project) => project.category === "poster" && project.subcategory === activeCategory
            )
          : projects.filter((project) => project.category === activeCategory)
  ).sort((a, b) => {
    // Sort by date (newest first)
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA // Descending order (newest first)
  })

  return (
    <div className="relative min-h-screen bg-[#030303] text-white cursor-none overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <div className="overflow-hidden mb-4">
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-regular tracking-tighter leading-none will-change-transform font-['Pretendard']"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...transition, delay: 0.2 }}
            >
              안녕하세요
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8 relative inline-block">
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none will-change-transform font-['Pretendard'] relative z-10"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...transition, delay: 0.4 }}
            >
              전지훈입니다.
            </motion.h1>
            <motion.div
              className="absolute bg-[#FFB84D]/50 -z-0"
              style={{
                left: "-2%",
                width: "50%",
                bottom: "0%",
                height: "30%",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ ...transition, delay: 0.7, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            />
          </div>
          <motion.p
            className="text-8 font-regular tracking-tighter leading-none will-change-transform font-['Pretendard']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transition, delay: 0.8 }}
          >
            3년간의 저의 성장하는 작업물들을 소개합니다.
          </motion.p>
        </div>
      </section>

      {/* Work Gallery */}
      <section id="work" className="relative py-24 px-6 lg:px-12">
        <motion.h2
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 text-center will-change-transform"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={transition}
        >
          MY WORKS
        </motion.h2>

        <div className="max-w-7xl mx-auto mb-12 flex flex-wrap items-center justify-center gap-4 relative">
          {categories.map((category) => (
            <div
              key={category}
              className="relative"
              onMouseEnter={() => category === "poster" && setHoveredCategory("poster")}
              onMouseLeave={() => category === "poster" && setHoveredCategory(null)}
            >
              <motion.button
                type="button"
                onClick={() => {
                  if (category === "poster") {
                    setActiveCategory("poster")
                  } else {
                    setActiveCategory(category)
                  }
                }}
                className={`px-6 py-2 rounded-full border will-change-transform relative z-10 ${
                  activeCategory === category ||
                  (category === "poster" && (activeCategory === "personal" || activeCategory === "commission"))
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-[#888888] border-[#888888] hover:text-white hover:border-white"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={transition}
              >
                {category.toUpperCase()}
              </motion.button>
              
              {/* Dropdown menu for poster category */}
              <AnimatePresence>
                {category === "poster" && hoveredCategory === "poster" && (
                  <motion.div
                    className="absolute top-full left-0 mt-3 pt-3 pb-3 px-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl shadow-lg z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ ...transition, duration: 0.3 }}
                    onMouseEnter={() => setHoveredCategory("poster")}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {/* Invisible hover area to cover the gap - positioned to not block button */}
                    <div className="absolute -top-12 left-0 right-0 h-12 pointer-events-auto" />
                    <div className="flex flex-col gap-2">
                      <motion.button
                        type="button"
                        onClick={() => setActiveCategory("personal")}
                        className={`px-6 py-3 rounded-full border will-change-transform whitespace-nowrap min-w-[120px] ${
                          activeCategory === "personal"
                            ? "bg-white text-black border-white"
                            : "bg-[#1a1a1a] text-white border-white/20 hover:bg-white/10 hover:border-white/40"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={transition}
                      >
                        PERSONAL
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={() => setActiveCategory("commission")}
                        className={`px-6 py-3 rounded-full border will-change-transform whitespace-nowrap min-w-[120px] ${
                          activeCategory === "commission"
                            ? "bg-white text-black border-white"
                            : "bg-[#1a1a1a] text-white border-white/20 hover:bg-white/10 hover:border-white/40"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={transition}
                      >
                        COMMISSION
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center space-y-8 will-change-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={transition}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
              LET&apos;S WORK
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
              TOGETHER
            </h2>
            <motion.a
              href="mailto:otherxryan@gmail.com"
              className="inline-flex items-center gap-4 text-xl md:text-2xl text-[#888888] hover:text-white transition-colors mt-12"
              whileHover={{ scale: 1.05 }}
              transition={transition}
            >
              <Mail className="w-6 h-6" />
              otherxryan@gmail.com
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#888888]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ ...transition, delay: 0.2 }}
          >
            <p>© 2025 JEON JI HOON All rights reserved.</p>
            <div className="flex gap-8">
              <a href="https://www.instagram.com/otherxdesign/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
              
              
              <a href="https://github.com/otherxryan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Github
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
