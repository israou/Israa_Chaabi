import PortfolioShell from "../../components/PortfolioShell";

const projectGroups = [
  {
    title: "C Language Projects",
    label: "Core Cursus",
    projects: [
      {
        title: "pipex",
        text: "Built a Unix-style pipeline executor with process management, pipes, and file descriptor handling.",
        stack: "C | Unix | Process Management",
        href: "https://github.com/israou/pipex",
      },
      {
        title: "so_long",
        text: "Developed a small 2D game with map parsing, rendering, and event-driven movement logic.",
        stack: "C | MiniLibX | Game Loop",
        href: "https://github.com/israou/so_long",
      },
      {
        title: "push_swap",
        text: "Implemented an optimized sorting strategy using constrained stack operations and algorithmic heuristics.",
        stack: "C | Algorithms | Data Structures",
        href: "https://github.com/israou/push_swap",
      },
      {
        title: "Minishell",
        text: "Implemented a Unix shell replica with command parsing, pipes, redirections, and process control.",
        stack: "C | Parsing | Unix System Calls",
        href: "https://github.com/israou?tab=repositories&q=minishell&type=&language=&sort=",
      },
      {
        title: "Philosophers",
        text: "Solved concurrency challenges with threads, mutexes, timing control, and deadlock prevention.",
        stack: "C | Threads | Synchronization",
        href: "https://github.com/israou/philo",
      },
      {
        title: "cub3d",
        text: "Created a Wolfenstein-like raycasting engine with textures, movement physics, and map validation.",
        stack: "C | Raycasting | MiniLibX",
        href: "https://github.com/israou/cub3d",
      },
    ],
  },
  {
    title: "Network",
    label: "System & Networking",
    projects: [
      {
        title: "netpractice",
        text: "Practiced subnetting, routing, and IP addressing through network topology scenarios.",
        stack: "Networking | TCP/IP | Subnetting",
        href: "https://github.com/israou?tab=repositories&q=netpractice&type=&language=&sort=",
      },
    ],
  },
  {
    title: "C++ Projects",
    label: "Object-Oriented Programming",
    projects: [
      {
        title: "CPP-Modules-00-04",
        text: "C++ foundations: OOP basics, memory management, polymorphism, inheritance, and abstract interfaces.",
        stack: "C++ | OOP | STL",
        href: "https://github.com/israou/CPP-Modules-00-04",
      },
      {
        title: "CPP-Modules-05-09",
        text: "Advanced C++: exceptions, casting, templates, STL containers, algorithms, and data processing.",
        stack: "C++ | Templates | STL",
        href: "https://github.com/israou/CPP-Modules-05-09",
      },
      {
        title: "ft_irc",
        text: "Built a real-time IRC server supporting concurrent clients and channel management over TCP sockets.",
        stack: "C++ | Networking | TCP/IP",
        href: "https://github.com/israou/ft_irc",
      },
    ],
  },
  {
    title: "Containerization & Infra",
    label: "DevOps Track",
    projects: [
      {
        title: "born2beroot",
        text: "Configured and hardened a Linux server environment with strict security, monitoring, and system administration practices.",
        stack: "Linux | SysAdmin | Security",
        href: "https://github.com/israou/born2beroot",
      },
      {
        title: "Inception",
        text: "Deployed a multi-service architecture with Docker Compose and NGINX reverse proxy.",
        stack: "Docker | NGINX | Linux",
        href: "https://github.com/israou/inception",
      },
    ],
  },
  {
    title: "Full-Stack Web",
    label: "Advanced Product",
    projects: [
      {
        title: "ft_transcendence",
        text: "Designed and built a full-stack web app with authentication, profiles, and PostgreSQL APIs.",
        stack: "React | Node.js | PostgreSQL",
        href: "https://github.com/israou?tab=repositories&q=transcendence&type=&language=&sort=",
      },
    ],
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
          <div className="project-groups">
            {projectGroups.map((group, groupIndex) => (
              <section className={`project-category reveal delay-${(groupIndex % 3) + 1}`} key={group.title}>
                <div className="project-category-head">
                  <h3>{group.title}</h3>
                  <span>{group.label}</span>
                </div>
                <div className="project-list project-list-large">
                  {group.projects.map((project, projectIndex) => (
                    <a
                      className={`project project-link reveal delay-${(projectIndex % 3) + 1}`}
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
              </section>
            ))}
          </div>
        </article>
      </section>
    </PortfolioShell>
  );
}
