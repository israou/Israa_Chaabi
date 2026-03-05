"use client";

import PortfolioShell from "../../components/PortfolioShell";
import { useLanguage } from "../../components/LanguageProvider";

export default function SkillsPage() {
  const { lang } = useLanguage();
  const copy = {
    en: {
      tag: "Skills Matrix",
      role: "Engineering Toolkit",
      summary:
        "A complete stack focused on performance, maintainability, and clean architecture for production-grade apps.",
      chips: ["JavaScript", "TypeScript", "C/C++", "SQL", "Cloud-ready workflow"],
      groups: [
        { title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design", "HTML", "CSS"] },
        { title: "Backend", items: ["Node.js", "Express.js", "REST API", "Authentication", "Socket Programming"] },
        { title: "Data", items: ["PostgreSQL", "MongoDB", "MySQL", "Schema Design", "Query Optimization"] },
        { title: "Infra", items: ["Docker", "Docker Compose", "NGINX", "Linux", "GitHub Actions", "CI/CD"] },
      ],
    },
    fr: {
      tag: "Matrice de Compétences",
      role: "Boîte à outils d'ingénierie",
      summary:
        "Une stack complète orientée performance, maintenabilité et architecture propre pour des applications production.",
      chips: ["JavaScript", "TypeScript", "C/C++", "SQL", "Workflow cloud-ready"],
      groups: [
        {
          title: "Frontend",
          items: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design", "HTML", "CSS"],
        },
        {
          title: "Backend",
          items: ["Node.js", "Express.js", "API REST", "Authentification", "Programmation Socket"],
        },
        { title: "Data", items: ["PostgreSQL", "MongoDB", "MySQL", "Design de schéma", "Optimisation de requêtes"] },
        { title: "Infra", items: ["Docker", "Docker Compose", "NGINX", "Linux", "GitHub Actions", "CI/CD"] },
      ],
    },
  }[lang];

  return (
    <PortfolioShell
      tag={copy.tag}
      title="Israa Chaabi"
      role={copy.role}
      summary={copy.summary}
      chips={copy.chips}
    >
      <section className="grid">
        {copy.groups.map((group, index) => (
          <article className={`card section span-6 reveal delay-${(index % 3) + 1}`} key={group.title}>
            <h2>{group.title}</h2>
            <div className="skills">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </PortfolioShell>
  );
}
