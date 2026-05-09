import { Sidebar } from "@/components/sidebar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Achievements } from "@/components/achievements"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { getDictionary } from "@/lib/get-dictionary"

export default async function Home() {
  const { t, lang } = await getDictionary()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fernando Espinosa Salido",
    jobTitle: "Senior Full Stack Engineer",
    url: "https://fernandoespinosa.com",
    sameAs: [
      "https://www.linkedin.com/in/seniordeveloper1/",
      "https://github.com/fernando-espinosa-clip",
    ],
    description: "Senior Full Stack Engineer & Tech Lead specializing in scalable solutions.",
    knowsAbout: ["React", "Node.js", "Next.js", "Cloud Architecture", "Software Engineering"],
  }

  return (
    <div className="flex min-h-screen bg-dark-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Sidebar lang={lang} nav={t.nav} />
      <main className="flex-1 lg:ml-64 w-full">
        <Hero t={t.hero} />
        <About t={t.about} />
        <Skills t={t.skills} />
        <Achievements t={t.achievements} />
        <Experience t={t.experience} />
        <Contact t={t.contact} />
      </main>
    </div>
  )
}
