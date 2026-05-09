"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Linkedin, Github, Globe } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n-context"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { t, language, setLanguage } = useLanguage()

  const navItems = useMemo(() => [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.achievements || "ACHIEVEMENTS", href: "#achievements" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.contact, href: "#contact" },
  ], [t.nav])

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection(navItems[navItems.length - 1].href.substring(1))
        return
      }

      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems]) // Added navItems dependency

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-black z-50 flex items-center justify-between px-6 border-b border-gray-800">
        <span className="text-white font-bold text-lg tracking-wider">FERNANDO E.S.</span>
        <div className="flex items-center gap-4">
          {/* Mobile language toggle */}
          <button 
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="text-xs font-bold text-primary border border-primary px-2 py-1 rounded hover:bg-primary hover:text-white transition-colors"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-black z-40 transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:block", // Always show on desktop
          isOpen ? "pt-20 lg:pt-0" : "" // Add padding on mobile when open
        )}
      >
        {/* Profile Image Area (Hidden on mobile menu mode, visible on desktop sidebar) */}
        <div className="hidden lg:flex flex-col items-center justify-center h-48 bg-[#111] border-b border-gray-800">
          <div className="w-24 h-24 rounded-full bg-gray-700 overflow-hidden mb-3 border-2 border-primary relative">
            <Image 
              src="/avatar.jpg" 
              alt="Fernando Espinosa Salido" 
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-white font-bold tracking-wide text-sm">FERNANDO ESPINOSA</h2>
        </div>

        {/* Navigation Links */}
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

        {/* Desktop language toggle in footer area */}
        <div className="px-6 pb-4">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="w-full py-2 border border-gray-700 text-gray-400 hover:text-primary hover:border-primary text-xs font-bold tracking-widest transition-all flex items-center justify-center gap-2"
          >
            <Globe size={14} />
            {language === 'en' ? 'SWITCH TO SPANISH' : 'CAMBIAR A INGLÉS'}
          </button>
        </div>

        {/* Social Footer */}
        <div className="p-6 border-t border-gray-800">
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/seniordeveloper1/" target="_BLANK" className="text-gray-500 hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/fernando-espinosa-clip" target="_BLANK" className="text-gray-500 hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            { /*<a href="#" className="text-gray-500 hover:text-primary transition-colors">
              <Globe size={18} />
            </a>*/ }
          </div>
          <p className="text-center text-[10px] text-gray-600 mt-4">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED.
          </p>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
