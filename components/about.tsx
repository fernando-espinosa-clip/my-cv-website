import { Download } from "lucide-react"
import type { Dictionary } from "@/lib/dictionaries"

export function About({ t }: { t: Dictionary['about'] }) {
  return (
    <section id="about" className="py-20 px-8 md:px-16 bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">{t.title}</h2>
        <div className="w-16 h-1 bg-primary mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">{t.personalInfo}</h3>
            <ul className="space-y-4">
              <li className="border-b border-gray-700 pb-2">
                <span className="text-primary font-bold w-32 inline-block">{t.name}</span>
                <span className="text-gray-300">Fernando Espinosa Salido</span>
              </li>
              <li className="border-b border-gray-700 pb-2">
                <span className="text-primary font-bold w-32 inline-block">{t.email}</span>
                <span className="text-gray-300">mail@fer.cc</span>
              </li>
              <li className="border-b border-gray-700 pb-2">
                <span className="text-primary font-bold w-32 inline-block">{t.phone}</span>
                <span className="text-gray-300">+52 (624) 12745-05</span>
              </li>
              <li className="border-b border-gray-700 pb-2">
                <span className="text-primary font-bold w-32 inline-block">{t.location}</span>
                <span className="text-gray-300">Guadalajara, Mexico</span>
              </li>
              <li className="border-b border-gray-700 pb-2">
                <span className="text-primary font-bold w-32 inline-block">{t.website}</span>
                <a href="https://curriculum.fer.cc" className="text-gray-300 hover:text-primary transition-colors">
                  curriculum.fer.cc
                </a>
              </li>
            </ul>

            <a
              href="/Fernando-Espinosa-Resume.pdf"
              download="Fernando-Espinosa-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-8 py-3 border-2 border-primary text-white font-bold tracking-wider hover:bg-primary transition-colors inline-flex items-center gap-2"
            >
              {t.downloadResume} <Download size={18} />
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">{t.professionalProfile}</h3>
            <div className="text-gray-400 leading-relaxed space-y-4">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
