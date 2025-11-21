import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { LanguageProvider } from "@/lib/i18n-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Fernando Espinosa Salido - Senior Full Stack Engineer",
    template: "%s | Fernando Espinosa Salido",
  },
  description: "Portfolio of Fernando Espinosa Salido, a Senior Full Stack Engineer & Tech Lead specializing in scalable solutions, React, Node.js, and Cloud Architecture.",
  keywords: ["Full Stack Engineer", "Tech Lead", "React", "Node.js", "Next.js", "Cloud Architecture", "Software Development", "Fernando Espinosa Salido"],
  authors: [{ name: "Fernando Espinosa Salido" }],
  creator: "Fernando Espinosa Salido",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fernandoespinosa.com",
    title: "Fernando Espinosa Salido - Senior Full Stack Engineer",
    description: "Senior Full Stack Engineer & Tech Lead Portfolio. View my projects, skills, and experience.",
    siteName: "Fernando Espinosa Salido Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists or is replaced
        width: 1200,
        height: 630,
        alt: "Fernando Espinosa Salido Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernando Espinosa Salido - Senior Full Stack Engineer",
    description: "Senior Full Stack Engineer & Tech Lead Portfolio. View my projects, skills, and experience.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#1a1a1a] text-gray-300 antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
