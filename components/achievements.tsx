"use client"

import { Trophy, Star, Target, Zap, Users } from 'lucide-react'
import { useLanguage } from "@/lib/i18n-context"

export function Achievements() {
  const { t } = useLanguage()

  const icons = [Trophy, Star, Target, Zap, Users]

  return (
    <section id="achievements" className="py-20 px-8 md:px-16 bg-[#1f1f1f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">{t.achievements.title}</h2>
        <div className="w-16 h-1 bg-primary mb-12"></div>

        <div className="mb-12">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">{t.achievements.subtitle}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.achievements.items.map((item, index) => {
              const Icon = icons[index % icons.length]
              return (
                <div key={index} className="bg-[#2a2a2a] p-8 border-l-4 border-primary hover:bg-[#333] transition-colors group">
                  <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300 origin-left">
                    <Icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
