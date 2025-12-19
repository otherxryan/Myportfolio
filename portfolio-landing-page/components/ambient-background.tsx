"use client"

import { motion } from "framer-motion"

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          x: ["0%", "30%", "0%"],
          y: ["0%", "40%", "0%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
