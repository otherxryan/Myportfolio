"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"
import { transition } from "@/lib/motion-config"
import { awards } from "@/lib/awards"

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className="relative min-h-screen bg-[#030303] text-white cursor-none overflow-x-hidden">
      <section className="relative pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-8 will-change-transform"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <Link href="/">
              <motion.button
                className="group flex items-center gap-2 text-sm text-[#888888] hover:text-white transition-colors"
                whileHover={{ x: -5 }}
                transition={transition}
              >
                <span>←</span>
                <span>Back to Home</span>
              </motion.button>
            </Link>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-20 will-change-transform"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            ABOUT ME
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
            {/* Left Column - Profile Image */}
            <motion.div
              className="will-change-transform lg:sticky lg:top-32"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...transition, delay: 0.2 }}
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg overflow-hidden">
                <img
                  src="/IMG_9822.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </motion.div>

            {/* Right Column - Introduction, Experience & Skills */}
            <motion.div
              className="space-y-12 will-change-transform"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...transition, delay: 0.4 }}
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">생각한 것을 현실로 만드는 디자이너</h2>
                <p className="text-lg text-[#888888] leading-relaxed">
                  안녕하세요, 중학교 때부터 디자인을 시작해 감각을 키워온 3년 차 디자이너 전지훈입니다. 
                  현재는 다양한 클라이언트와 협업하며 프리랜서 디자이너로서 활동하고 있으며, 단순히 예쁜 그림을 넘어 브랜드의 가치를 높여주는 실질적인 솔루션을 제안합니다.
                </p>
                <p className="text-lg text-[#888888] leading-relaxed">
                Hello, I'm Jihoon Jeon. I've been honing my design skills since middle school and now have 3 years of experience in the field.
                Currently, I'm working as a freelancer and collaborating with diverse clients to deliver practical solutions that go beyond aesthetics to truly elevate brand value.
                </p>
              </div>

              <div className="space-y-8 pt-8 border-t border-white/10">
                <div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight">Experience</h3>
                  <div className="space-y-4 text-[#888888]">
                    <div>
                      <p className="text-white font-medium">Korea digital media High school</p>
                      <p className="text-sm">2022 - 2025</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">nothing yet</p>
                      <p className="text-sm">??? ~ ???</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">   </p>
                      <p className="text-sm">   </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight">Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Photoshop",
                      "After Effects",
                      "Premiere Pro",
                      "Figma",
                      "Lightroom",
                    ].map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        transition={transition}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Awards Section - Full Width */}
          <motion.div
            className="pt-8 border-t-2 border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.6 }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold tracking-tighter mb-8 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...transition, delay: 0.7 }}
            >
              AWARDS
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {awards
                .sort((a, b) => {
                  // Sort by date (newest first)
                  const dateA = new Date(a.date).getTime()
                  const dateB = new Date(b.date).getTime()
                  return dateB - dateA // Descending order (newest first)
                })
                .map((award, index) => (
                <motion.div
                  key={award.id}
                  className="p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/20 rounded-lg backdrop-blur-sm hover:border-white/40 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...transition, delay: 0.8 + index * 0.1 }}
                >
                  <p className="text-white text-xl md:text-2xl font-bold mb-2">{award.name}</p>
                  <p className="text-[#888888] text-base">{award.organization} • {award.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
