import PortfolioShell from "../../components/PortfolioShell";

const projects = [
  {
    title: "ft_transcendence",
    text: "Designed and built a full-stack web app with user profiles, secure auth flows, and PostgreSQL-backed APIs.",
    stack: "React | Node.js | PostgreSQL",
    href: "https://github.com/israou?tab=repositories&q=transcendence&type=&language=&sort=",
  },
  {
    title: "Minishell",
    text: "Implemented a Unix shell replica in C with command parsing, pipes, redirections, and process control.",
    stack: "C | Unix System Calls",
    href: "https://github.com/israou?tab=repositories&q=minishell&type=&language=&sort=",
  },
  {
    title: "Philosophers",
    text: "Solved concurrency challenges using threads, mutexes, timing control, and deadlock prevention logic.",
    stack: "C | Multithreading",
    href: "https://github.com/israou/philo",
  },
  {
    title: "Inception",
    text: "Deployed a containerized multi-service architecture with Docker Compose and NGINX reverse proxy.",
    stack: "Docker | NGINX | Linux",
    href: "https://github.com/israou/inception",
  },
  {
    title: "ft_irc",
    text: "Built a real-time IRC server in C++ for concurrent clients and channel management over TCP sockets.",
    stack: "C++ | TCP/IP Sockets",
    href: "https://github.com/israou/ft_irc",
  },
];

export default function ProjectsPage() {
  return (
    <PortfolioShell
      tag="Project Archive"
      title="Israa Chaabi"
      role="Selected Engineering Work"
      summary="Hands-on projects covering full-stack development, systems programming, concurrency, and infrastructure."
      chips={["Product delivery", "System design", "Security first", "Performance aware"]}
    >
      <section className="grid">
        <article className="card section span-12 reveal delay-1">
          <h2>Project Breakdown</h2>
          <div className="project-list project-list-large">
            {projects.map((project, index) => (
              <a
                className={`project project-link reveal delay-${(index % 3) + 1}`}
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
        </article>
      </section>
    </PortfolioShell>
  );
}
