import Link from "next/link";
import PortfolioShell from "../components/PortfolioShell";

const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "TypeScript",
  "CI/CD",
  "REST API",
];

const featuredProjects = [
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
];

const highlights = [
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
];

const process = [
  { step: "01", title: "Discover", text: "Clarify goals, users, scope, and constraints." },
  { step: "02", title: "Design", text: "Shape architecture, interfaces, and implementation plan." },
  { step: "03", title: "Build", text: "Ship features with clean code and robust tests." },
  { step: "04", title: "Scale", text: "Optimize performance, security, and deployment reliability." },
];

const stackGroups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs", "PostgreSQL"] },
  { label: "Infra", items: ["Docker", "Linux", "NGINX", "CI/CD"] },
];

const timeline = [
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
];

export default function HomePage() {
  return (
    <PortfolioShell
      tag="Futuristic Portfolio"
      title="Israa Chaabi"
      role="Full-Stack Developer | Digital & Software Engineering Architect"
      summary="I build elegant and reliable digital products, from polished frontends to scalable backend systems."
      chips={["Casablanca", "Arabic | French | English", "React | Node.js | Docker"]}
      imagePriority
      stats={[
        { value: "5+", label: "Major technical projects" },
        { value: "42", label: "1337 / 42 Network" },
        { value: "100%", label: "Product and quality mindset" },
        { value: "24/7", label: "Learning and growth mode" },
      ]}
    >
      <section className="grid">
        <article className="card section span-5 reveal delay-1">
          <h2>Core Skills</h2>
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>

        <article className="card section span-7 reveal delay-2">
          <h2>Featured Projects</h2>
          <div className="project-list">
            {featuredProjects.map((project) => (
              <a
                className="project project-link project-feature"
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <strong>{project.title}</strong>
                <p>{project.text}</p>
                <p className="project-stack">{project.stack}</p>
                <p className="project-cta">Open GitHub Repo</p>
              </a>
            ))}
          </div>
          <div className="section-inline-cta">
            <Link href="/projects" className="cta cta-secondary">
              View All Projects
            </Link>
          </div>
        </article>

        <article className="card section span-12 reveal delay-1">
          <h2>Why Work With Me</h2>
          <div className="value-grid">
            {highlights.map((item) => (
              <div className="value-card" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card section span-12 reveal delay-2">
          <h2>My Process</h2>
          <div className="process-grid">
            {process.map((item) => (
              <div className="process-step" key={item.step}>
                <small>{item.step}</small>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card section span-7 reveal delay-2">
          <h2>Tech Stack Snapshot</h2>
          <div className="stack-grid">
            {stackGroups.map((group) => (
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
          <h2>Experience Snapshot</h2>
          <div className="timeline">
            {timeline.map((item) => (
              <div className="timeline-item" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card section span-12 reveal delay-3 home-cta">
          <h2>Ready To Build Something Bold?</h2>
          <p className="summary summary-tight">
            I am open to internship and freelance opportunities where product quality, speed, and impact really
            matter.
          </p>
          <div className="home-cta-actions">
            <a className="cta" href="/IsraaChaabi_dev.pdf" target="_blank" rel="noreferrer">
              Open CV
            </a>
            <Link className="cta cta-secondary" href="/contact">
              Contact Me
            </Link>
            <Link className="cta cta-secondary" href="/me-chill">
              Me Chill
            </Link>
          </div>
        </article>
      </section>
    </PortfolioShell>
  );
}
