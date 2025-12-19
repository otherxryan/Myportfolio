"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { memo } from "react"
import { transition } from "@/lib/motion-config"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    category: string
    image: string
  }
  index: number
}

const ProjectCard = memo(function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.id}`}>
      <motion.div
        className="group relative cursor-pointer will-change-transform"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0%", amount: 0.3 }}
        transition={{
          ...transition,
          delay: index * 0.15,
          duration: 0.6,
        }}
      >
        <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-[#0a0a0a]">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover will-change-transform"
            whileHover={{ scale: 1.05 }}
            transition={transition}
          />
          <motion.div
            className="absolute inset-0 bg-black/50 will-change-[opacity]"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={transition}
          />
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
          <p className="text-[#888888] text-sm tracking-wide">{project.category}</p>
        </div>
      </motion.div>
    </Link>
  )
})

export default ProjectCard
