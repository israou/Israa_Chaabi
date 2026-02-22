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
  },
  {
    title: "Minishell",
    text: "Unix shell in C with parsing, redirections, pipelines, and robust signal handling.",
  },
];

export default function HomePage() {
  return (
    <PortfolioShell
      tag="Futuristic Portfolio"
      title="Israa Chaabi"
      role="Full-Stack Developer"
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
          <h2>Featured Work</h2>
          <div className="project-list">
            {featuredProjects.map((project) => (
              <div className="project" key={project.title}>
                <strong>{project.title}</strong>
                <p>{project.text}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </PortfolioShell>
  );
}
