import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import PageWrapper from "@/components/page-wrapper"
import Header from "@/components/header"
import CustomCursor from "@/components/custom-cursor"
import AmbientBackground from "@/components/ambient-background"
import FontLoader from "@/components/font-loader"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Creative Developer Portfolio",
  description: "Crafting digital experiences with precision",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <FontLoader />
        <CustomCursor />
        <AmbientBackground />
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Analytics />
      </body>
    </html>
  )
}
