"use client"
import { Briefcase, Code, Server, Terminal } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from "@/lib/i18n-context"

const ExperienceItem = ({ 
  role, 
  company, 
  period, 
  points, // Changed description to points
  icon: Icon 
}: { 
  role: string; 
  company: string; 
  period: string; 
  points: string[]; // Changed type to string array
  icon: LucideIcon
}) => (
  <div className="flex gap-6 group">
    <div className="flex-shrink-0 mt-1">
      <div className="w-12 h-12 bg-[#333] rounded-full flex items-center justify-center border border-gray-700 group-hover:border-primary transition-colors">
        <Icon className="text-primary" size={20} />
      </div>
    </div>
    <div className="flex-1 pb-12 border-b border-gray-800 last:border-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <div>
          <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{role}</h4>
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{company}</span>
        </div>
        <span className="text-xs font-bold text-white bg-[#333] px-3 py-1 rounded mt-2 sm:mt-0 inline-block w-fit">
          {period}
        </span>
      </div>
      <ul className="mt-3 space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-gray-400 text-sm leading-relaxed flex items-start">
            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export function Experience() {
  const { t } = useLanguage() // Added language hook

  // Helper to get icon component by name
  const getIcon = (name: string) => {
    switch(name) {
      case 'Briefcase': return Briefcase
      case 'Code': return Code
      case 'Terminal': return Terminal
      case 'Server': return Server
      default: return Code
    }
  }

  return (
    <section id="experience" className="py-20 px-8 md:px-16 bg-[#252525]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">{t.experience.title}</h2>
        <div className="w-16 h-1 bg-primary mb-12"></div>

        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">{t.experience.subtitle}</h3>
          <p className="text-gray-500 text-sm mb-12">
            {t.experience.description}
          </p>
        </div>

        <div className="space-y-4">
          {t.experience.jobs.map((job, index) => (
            <ExperienceItem 
              key={index}
              role={job.role}
              company={job.company}
              period={job.period}
              points={job.points} // Pass points instead of description
              icon={getIcon(job.iconName)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
