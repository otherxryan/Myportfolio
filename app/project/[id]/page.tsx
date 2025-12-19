"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, X } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { projects } from "@/lib/projects"
import { transition } from "@/lib/motion-config"

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const project = projects.find((p) => p.id === Number.parseInt(id))
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Helper function to check if video is YouTube URL
  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be")
  }

  // Helper function to convert YouTube URL to embed format
  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = ""
    if (url.includes("youtube.com/watch?v=")) {
      videoId = url.split("v=")[1]?.split("&")[0] || ""
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0] || ""
    } else if (url.includes("youtube.com/embed/")) {
      return url // Already in embed format
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [id])

  // Preload gallery images for better performance (skip for poster category and YouTube videos)
  useEffect(() => {
    if (project && project.category.toLowerCase() !== "poster") {
      const preloadLinks: HTMLLinkElement[] = []
      // Preload all gallery images in the background (skip if video is YouTube)
      if (!project.video || !isYouTubeUrl(project.video)) {
        project.images.forEach((imageSrc) => {
          const link = document.createElement("link")
          link.rel = "preload"
          link.as = "image"
          link.href = imageSrc
          document.head.appendChild(link)
          preloadLinks.push(link)
        })
      }

      // Cleanup preload links when component unmounts or project changes
      return () => {
        preloadLinks.forEach((link) => {
          if (document.head.contains(link)) {
            document.head.removeChild(link)
          }
        })
      }
    }
  }, [project])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }
    if (selectedImage) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [selectedImage])

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/")
    setTimeout(() => {
      const workSection = document.getElementById("work")
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  if (!project) {
    return (
      <div className="relative min-h-screen bg-[#030303] text-white cursor-none overflow-x-hidden flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <button onClick={handleBackClick}>
            <motion.span
              className="inline-flex items-center gap-2 text-[#888888] hover:text-white transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={transition}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </motion.span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-[#030303] text-white cursor-none overflow-x-hidden">
      <section className="relative pt-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-8 will-change-transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}
          >
            <button onClick={handleBackClick}>
              <motion.span
                className="inline-flex items-center gap-3 text-lg text-[#888888] hover:text-white transition-colors cursor-pointer"
                whileHover={{ x: -5 }}
                transition={transition}
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </motion.span>
            </button>
          </motion.div>

          <motion.div
            className="will-change-transform"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <p className="text-[#888888] text-sm tracking-wider mb-4">{project.category}</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-12">{project.title}</h1>
          </motion.div>
        </div>
      </section>

      {project.category.toLowerCase() === "poster" ? (
        /* Poster Layout - Simple: Big Image + Minimal Text */
        <>
          <section className="relative px-6 lg:px-12 mb-24">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="w-full overflow-hidden rounded-lg will-change-transform"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.2 }}
              >
                <div className="aspect-[3/4] md:aspect-[4/5]">
                  {project.video ? (
                    isYouTubeUrl(project.video) ? (
                      <iframe
                        src={getYouTubeEmbedUrl(project.video)}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={project.title}
                      />
                    ) : (
                      <video
                        src={project.video}
                        className="w-full h-full object-contain"
                        controls
                        playsInline
                        muted
                        preload="metadata"
                      />
                    )
                  ) : (
                    <div
                      className="cursor-pointer"
                      onClick={() => setSelectedImage(project.image)}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-contain"
                        loading="eager"
                        fetchPriority="high"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Minimal Text for Poster */}
          <section className="relative pb-24 px-6 lg:px-12 mt-12">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="will-change-transform text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.4 }}
              >
                <p className="text-xl md:text-2xl text-white leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </motion.div>
            </div>
          </section>
        </>
      ) : (
        /* Regular Layout - Full Gallery */
        <>
          <section className="relative px-6 lg:px-12 mb-24">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="w-full overflow-hidden rounded-lg will-change-transform"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.2 }}
              >
                <div className="aspect-[16/10]">
                  {project.video ? (
                    isYouTubeUrl(project.video) ? (
                      <iframe
                        src={getYouTubeEmbedUrl(project.video)}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={project.title}
                      />
                    ) : (
                      <video
                        src={project.video}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                        muted
                        preload="metadata"
                      />
                    )
                  ) : (
                    <div
                      className="cursor-pointer"
                      onClick={() => setSelectedImage(project.image)}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Project Details */}
          <section className="relative pb-24 px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="mb-12 will-change-transform"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.4 }}
              >
                <p className="text-xl md:text-2xl text-[#888888] leading-relaxed mb-8">{project.description}</p>
                <p className="text-[#aaaaaa] leading-relaxed">{project.fullDescription}</p>
              </motion.div>

              {/* Project Gallery */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 will-change-transform"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.6 }}
              >
                {project.images.slice(0, 3).map((image, index) => (
                  <motion.div
                    key={index}
                    className={`relative overflow-hidden rounded-lg cursor-pointer ${index === 0 ? "md:col-span-2" : ""}`}
                    whileHover={{ scale: 1.02 }}
                    transition={transition}
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-[16/10] bg-[#0a0a0a]">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading={index < 2 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "auto"}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </>
      )}

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/95 flex items-center justify-center p-4 cursor-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 z-10 text-white hover:text-[#888888] transition-colors cursor-none"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              whileHover={{ scale: 1.1 }}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img
              src={selectedImage}
              alt={project.title}
              className="max-w-[85vw] max-h-[70vh] object-contain cursor-none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={transition}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
