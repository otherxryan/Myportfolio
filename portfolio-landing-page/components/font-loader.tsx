"use client"

import { useEffect } from "react"

export default function FontLoader() {
  useEffect(() => {
    // Check if font is already loaded
    const existingLink = document.querySelector(
      'link[href*="pretendard"]'
    )
    if (existingLink) {
      return
    }

    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
    document.head.appendChild(link)

    return () => {
      const linkToRemove = document.querySelector(
        'link[href*="pretendard"]'
      )
      if (linkToRemove) {
        document.head.removeChild(linkToRemove)
      }
    }
  }, [])

  return null
}

