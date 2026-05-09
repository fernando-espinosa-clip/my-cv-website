"use client"

import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Linkedin, Github, Globe } from 'lucide-react'
import { cn } from "@/lib/utils"
import type { Lang } from "@/lib/get-dictionary"
import type { Dictionary } from "@/lib/dictionaries"

export function Sidebar({ lang, nav }: { lang: Lang; nav: Dictionary['nav'] }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navItems = useMemo(() => [
    { name: nav.home, href: "#home" },
    { name: nav.about, href: "#about" },
    { name: nav.skills, href: "#skills" },
    { name: nav.achievements, href: "#achievements" },
    { name: nav.experience, href: "#experience" },
    { name: nav.contact, href: "#contact" },
  ], [nav])

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'es' : 'en'
    document.cookie = `lang=${newLang}; path=/; max-age=31536000; SameSite=lax`
    document.documentElement.lang = newLang
    router.refresh()
  }

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection(navItems[navItems.length - 1].href.substring(1))
        return
      }
      const scrollPosition = window.scrollY + 100
      for (const item of navItems) {
        const id = item.href.substring(1)
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPosition && el.offsetTop + el.offsetHeight > scrollPosition) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-dark-header z-50 flex items-center justify-between px-6 border-b border-gray-800">
        <span className="text-white font-bold text-lg tracking-wider">FERNANDO E.S.</span>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-xs font-bold text-primary border border-primary px-2 py-1 rounded hover:bg-primary hover:text-white transition-colors"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-dark-sidebar z-40 transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col",
          isOpen ? "translate-x-0 pt-20" : "-translate-x-full",
          "lg:pt-0 lg:block"
        )}
      >
        <div className="hidden lg:flex flex-col items-center justify-center h-48 bg-dark-header border-b border-gray-800">
          <div className="w-24 h-24 rounded-full bg-gray-700 overflow-hidden mb-3 border-2 border-primary relative">
            <Image
              src="/avatar.jpg"
              alt="Fernando Espinosa Salido"
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-white font-bold tracking-wide text-sm">FERNANDO ESPINOSA</h2>
        </div>

        <nav className="flex-1 overflow-y-auto py-6">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-8 py-3 text-xs font-bold tracking-widest transition-colors hover:text-primary",
                    activeSection === item.href.substring(1) ? "text-primary" : "text-gray-400"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6 pb-4">
          <button
            onClick={toggleLanguage}
            className="w-full py-2 border border-gray-700 text-gray-400 hover:text-primary hover:border-primary text-xs font-bold tracking-widest transition-all flex items-center justify-center gap-2"
          >
            <Globe size={14} />
            {lang === 'en' ? 'SWITCH TO SPANISH' : 'CAMBIAR A INGLÉS'}
          </button>
        </div>

        <div className="p-6 border-t border-gray-800">
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/seniordeveloper1/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/fernando-espinosa-clip" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
              <Github size={18} />
            </a>
          </div>
          <p className="text-center text-[10px] text-gray-600 mt-4">
            © {new Date().getFullYear()} {nav.rights}
          </p>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
