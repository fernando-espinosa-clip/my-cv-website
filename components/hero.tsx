"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n-context"


export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()

  const slides = [
    {
      id: 1,
      image: "/developer-coding-dark-workspace.jpg",
      preTitle: t.hero.slide1.title,
      title: t.hero.slide1.name,
      subtitle: t.hero.slide1.subtitle,
    },
    {
      id: 2,
      image: "/abstract-technology-architecture.jpg",
      preTitle: t.hero.slide2.title,
      title: t.hero.slide2.name,
      subtitle: t.hero.slide2.subtitle,
    },
    {
      id: 3,
      image: "/team-collaboration-coding.jpg",
      preTitle: t.hero.slide3.title,
      title: t.hero.slide3.name,
      subtitle: t.hero.slide3.subtitle,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length]) // Added dependency

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#222]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 z-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt="Background"
              fill
              className="object-cover grayscale"
              priority={index === 0}
            />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
            <h2 className="text-primary font-bold tracking-widest text-lg mb-4 animate-fade-in-up">
              {slide.preTitle}
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up delay-100">
              {slide.title.split(" ").map((word, i) => (
                <span key={i} className="block md:inline md:mr-4">
                  {word}
                </span>
              ))}
            </h1>
            <div className="w-24 h-1 bg-gray-600 mx-auto mb-6 animate-fade-in-up delay-200"></div>
            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide animate-fade-in-up delay-300 uppercase">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-12 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-transparent border border-white hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
