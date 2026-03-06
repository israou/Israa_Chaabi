"use client";

import Link from "next/link";
import PortfolioShell from "../components/PortfolioShell";
import FeaturedProjectsSlider from "../components/FeaturedProjectsSlider";
import { useLanguage } from "../components/LanguageProvider";

const skills = [
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "Python",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "SQL",
  "Docker",
  "Linux",
  "Bash",
  "Git",
  "GitHub",
  "NGINX",
  "CI/CD",
  "REST API",
  "Testing",
  "System Design",
];

export default function HomePage() {
  const { lang } = useLanguage();
  const copy = {
    en: {
      tag: "Portfolio",
      role: "Full-Stack Developer | Digital & Software Engineering Architect",
      summary: "I build elegant and reliable digital products, from polished frontends to scalable backend systems.",
      chips: ["Casablanca", "Arabic | French | English", "React | Node.js | Docker"],
      stats: [
        { value: "5+", label: "Major technical projects" },
        { value: "42", label: "1337 / 42 Network" },
        { value: "100%", label: "Product and quality mindset" },
        { value: "24/7", label: "Learning and growth mode" },
      ],
      featuredProjects: [
        {
          title: "ft_transcendence",
          text: "Modern full-stack app with profile management, secure APIs, and PostgreSQL.",
          stack: "React | Node.js | PostgreSQL",
          href: "https://github.com/israou?tab=repositories&q=transcendence&type=&language=&sort=",
        },
        {
          title: "Minishell",
          text: "Unix shell in C with parsing, redirections, pipelines, and robust signal handling.",
          stack: "C | Unix System Calls",
          href: "https://github.com/israou?tab=repositories&q=minishell&type=&language=&sort=",
        },
        {
          title: "Inception",
          text: "Containerized multi-service infrastructure with Docker Compose and NGINX reverse proxy.",
          stack: "Docker | NGINX | Linux",
          href: "https://github.com/israou/inception",
        },
      ],
      highlights: [
        {
          title: "Architecture Thinking",
          text: "I design features end-to-end: data models, APIs, frontend states, and deployment flow.",
        },
        {
          title: "Fast Execution",
          text: "I can move from concept to production-ready delivery while keeping code quality high.",
        },
        {
          title: "Reliable Communication",
          text: "Clear updates, ownership mindset, and practical collaboration inside product teams.",
        },
      ],
      process: [
        { step: "01", title: "Discover", text: "Clarify goals, users, scope, and constraints." },
        { step: "02", title: "Design", text: "Shape architecture, interfaces, and implementation plan." },
        { step: "03", title: "Build", text: "Ship features with clean code and robust tests." },
        { step: "04", title: "Scale", text: "Optimize performance, security, and deployment reliability." },
      ],
      stackGroups: [
        { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
        { label: "Backend", items: ["Node.js", "Express", "REST APIs", "PostgreSQL"] },
        { label: "Infra", items: ["Docker", "Linux", "NGINX", "CI/CD"] },
      ],
      timeline: [
        {
          title: "Engineering Track - 42 Network",
          text: "Project-based training focused on systems programming, algorithms, and peer-driven code quality.",
        },
        {
          title: "Full-Stack Projects",
          text: "Delivered end-to-end products from UI to backend services, authentication, and deployment.",
        },
        {
          title: "Current Focus",
          text: "Building scalable web products and refining software architecture skills.",
        },
      ],
      coreSkills: "Core Skills",
      featured: "Featured Projects",
      viewAllProjects: "View All Projects",
      whyWork: "Why Work With Me",
      processTitle: "My Process",
      stackTitle: "Tech Stack Snapshot",
      experienceTitle: "Experience Snapshot",
      learningTitle: "Currently Learning",
      learningItems: [
       "Advanced SQL & Database Internals",
       "Distributed Systems Fundamentals",
       "System Design & Scalability",
       "High Performance Backend Systems",
       "Concurrency & Event-Driven Architectures",
       "Low-Level Performance (Memory, CPU, Networking)"
      ],
      ctaTitle: "Ready To Build Something Bold?",
      ctaSummary:
        "I am open to internship and freelance opportunities where product quality, speed, and impact really matter.",
      openCv: "Open CV",
      contactMe: "Contact Me",
      meChill: "Me Chill",
    },
    fr: {
      tag: "Portfolio",
      role: "Développeuse Full-Stack | Architecte en ingénierie logicielle",
      summary:
        "Je construis des produits digitaux élégants et fiables, du frontend soigné au backend scalable.",
      chips: ["Casablanca", "Arabe | Français | Anglais", "React | Node.js | Docker"],
      stats: [
        { value: "5+", label: "Projets techniques majeurs" },
        { value: "42", label: "1337 / Réseau 42" },
        { value: "100%", label: "Culture produit et qualité" },
        { value: "24/7", label: "Apprentissage continu" },
      ],
      featuredProjects: [
        {
          title: "ft_transcendence",
          text: "Application full-stack moderne avec profils, APIs sécurisées et PostgreSQL.",
          stack: "React | Node.js | PostgreSQL",
          href: "https://github.com/israou?tab=repositories&q=transcendence&type=&language=&sort=",
        },
        {
          title: "Minishell",
          text: "Shell Unix en C avec parsing, redirections, pipelines et gestion robuste des signaux.",
          stack: "C | Appels système Unix",
          href: "https://github.com/israou?tab=repositories&q=minishell&type=&language=&sort=",
        },
        {
          title: "Inception",
          text: "Infrastructure multi-services conteneurisée avec Docker Compose et reverse proxy NGINX.",
          stack: "Docker | NGINX | Linux",
          href: "https://github.com/israou/inception",
        },
      ],
      highlights: [
        {
          title: "Vision Architecture",
          text: "Je conçois les features de bout en bout: modèles de données, APIs, états frontend et déploiement.",
        },
        {
          title: "Exécution Rapide",
          text: "Je passe vite du concept à une livraison production-ready en gardant une haute qualité de code.",
        },
        {
          title: "Communication Fiable",
          text: "Updates clairs, sens de la responsabilité et collaboration pragmatique avec les équipes produit.",
        },
      ],
      process: [
        { step: "01", title: "Découvrir", text: "Clarifier objectifs, utilisateurs, périmètre et contraintes." },
        { step: "02", title: "Concevoir", text: "Définir architecture, interfaces et plan d'implémentation." },
        { step: "03", title: "Construire", text: "Livrer des fonctionnalités avec un code propre et testé." },
        { step: "04", title: "Scaler", text: "Optimiser performance, sécurité et fiabilité du déploiement." },
      ],
      stackGroups: [
        { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
        { label: "Backend", items: ["Node.js", "Express", "APIs REST", "PostgreSQL"] },
        { label: "Infra", items: ["Docker", "Linux", "NGINX", "CI/CD"] },
      ],
      timeline: [
        {
          title: "Parcours Ingénierie - Réseau 42",
          text: "Formation par projets axée systèmes, algorithmes et qualité de code en peer review.",
        },
        {
          title: "Projets Full-Stack",
          text: "Livraison de produits end-to-end du frontend aux services backend, auth et déploiement.",
        },
        {
          title: "Focus Actuel",
          text: "Construire des produits web scalables et renforcer l'architecture logicielle.",
        },
      ],
      coreSkills: "Compétences Clés",
      featured: "Projets Phares",
      viewAllProjects: "Voir Tous Les Projets",
      whyWork: "Pourquoi Travailler Avec Moi",
      processTitle: "Ma Méthode",
      stackTitle: "Aperçu de la Stack",
      experienceTitle: "Aperçu d'Expérience",
      learningTitle: "Currently Learning",
      learningItems: [
        "SQL",
        "System Design Basics",
        "Backend Architecture",
        "Performance Optimization",
      ],
      ctaTitle: "Prête à Construire Quelque Chose d'Ambitieux ?",
      ctaSummary:
        "Je suis ouverte aux opportunités de stage et freelance où la qualité produit, la vitesse et l'impact comptent.",
      openCv: "Ouvrir le CV",
      contactMe: "Me Contacter",
      meChill: "Me Chill",
    },
  }[lang];

  return (
    <PortfolioShell
      tag={copy.tag}
      title="Israa Chaabi"
      role={copy.role}
      summary={copy.summary}
      chips={copy.chips}
      imagePriority
      stats={copy.stats}
    >
      <section className="grid">
        <article className="card section span-4 reveal delay-1 core-skills-section">
          <h2>{copy.coreSkills}</h2>
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>

        <article className="card section span-8 reveal delay-2 featured-projects-section">
          <h2>{copy.featured}</h2>
          <FeaturedProjectsSlider projects={copy.featuredProjects} />
          <div className="section-inline-cta">
            <Link href="/projects" className="cta cta-secondary">
              {copy.viewAllProjects}
            </Link>
          </div>
        </article>

        <article className="card section span-12 reveal delay-1">
          <h2>{copy.whyWork}</h2>
          <div className="value-grid">
            {copy.highlights.map((item) => (
              <div className="value-card" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card section span-12 reveal delay-2">
          <h2>{copy.processTitle}</h2>
          <div className="process-grid">
            {copy.process.map((item) => (
              <div className="process-step" key={item.step}>
                <small>{item.step}</small>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card section span-7 reveal delay-2">
          <h2>{copy.stackTitle}</h2>
          <div className="stack-grid">
            {copy.stackGroups.map((group) => (
              <div className="stack-group" key={group.label}>
                <strong>{group.label}</strong>
                <div className="stack-items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="card section span-5 reveal delay-3">
          <h2>{copy.experienceTitle}</h2>
          <div className="timeline">
            {copy.timeline.map((item) => (
              <div className="timeline-item" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card section span-12 reveal delay-3 learning-section">
          <h2>{copy.learningTitle}</h2>
          <div className="learning-grid">
            {copy.learningItems.map((item) => (
              <div className="learning-item" key={item}>
                <span />
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="card section span-12 reveal delay-3 home-cta">
          <h2>{copy.ctaTitle}</h2>
          <p className="summary summary-tight">{copy.ctaSummary}</p>
          <div className="home-cta-actions">
            <a className="cta" href="/IsraaChaabi_dev.pdf" target="_blank" rel="noreferrer">
              {copy.openCv}
            </a>
            <Link className="cta cta-secondary" href="/contact">
              {copy.contactMe}
            </Link>
            <Link className="cta cta-secondary" href="/me-chill">
              {copy.meChill}
            </Link>
          </div>
        </article>
      </section>
    </PortfolioShell>
  );
}
