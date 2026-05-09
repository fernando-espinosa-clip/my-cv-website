import { Check } from 'lucide-react'
import type { Dictionary } from "@/lib/dictionaries"

function CircularProgress({ percentage, title, subtitle }: { percentage: number; title: string; subtitle: string }) {
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 mb-4">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="64" cy="64" r={radius} stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-700" />
          <circle
            cx="64" cy="64" r={radius}
            stroke="currentColor" strokeWidth="4" fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="text-primary transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">{percentage}%</span>
        </div>
      </div>
      <h4 className="text-white font-bold uppercase tracking-wide">{title}</h4>
      <p className="text-gray-500 text-xs mt-1">{subtitle}</p>
    </div>
  )
}

export function Skills({ t }: { t: Dictionary['skills'] }) {
  return (
    <section id="skills" className="py-20 px-8 md:px-16 bg-dark-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">{t.title}</h2>
        <div className="w-16 h-1 bg-primary mb-12"></div>

        <div className="mb-16">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">{t.subtitle}</h3>
          <p className="text-gray-400 mb-12 max-w-3xl">{t.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.circular.map((skill, index) => (
              <CircularProgress key={index} percentage={skill.percentage} title={skill.title} subtitle={skill.subtitle} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">{t.knowledgeTitle}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.knowledgeList.map((skill) => (
                <li key={skill} className="flex items-center text-gray-400">
                  <Check size={16} className="text-primary mr-2 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">{t.languagesTitle}</h3>
            <div className="space-y-6">
              {t.languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-bold">{lang.name}</span>
                    <span className="text-gray-400">{lang.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${lang.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
