import { Sidebar } from "@/components/sidebar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Achievements } from "@/components/achievements"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fernando Espinosa Salido",
    jobTitle: "Senior Full Stack Engineer",
    url: "https://fernandoespinosa.com",
    sameAs: [
      "https://www.linkedin.com/in/fernandoespinosa",
      "https://github.com/fernandoespinosa",
    ],
    description: "Senior Full Stack Engineer & Tech Lead specializing in scalable solutions.",
    knowsAbout: ["React", "Node.js", "Next.js", "Cloud Architecture", "Software Engineering"],
  }

  return (
    <div className="flex min-h-screen bg-[#1a1a1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Sidebar />
      <main className="flex-1 lg:ml-64 w-full">
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
