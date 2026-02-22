import Image from "next/image";

const skills = [
  "JavaScript",
  "TypeScript",
  "C",
  "C++",
  "SQL",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "REST API",
  "Docker",
  "NGINX",
  "Git",
  "CI/CD",
];

const projects = [
  {
    title: "ft_transcendence",
    text: "App full-stack avec gestion utilisateur complete, APIs REST securisees et base PostgreSQL.",
  },
  {
    title: "Minishell",
    text: "Shell Unix en C avec parsing, redirections, heredoc, pipelines et gestion des signaux.",
  },
  {
    title: "Inception & ft_irc",
    text: "Infra Docker multi-services + serveur IRC C++ en sockets TCP pour connexions concurrentes.",
  },
];

const education = [
  {
    title: "Software Engineering Program - 1337 School (42 Network)",
    date: "2023 - Present",
  },
  {
    title: "Baccalaureate in Physics & Chemistry - La Palmeraie Schools",
    date: "2022",
  },
];

export default function HomePage() {
  return (
    <main className="page">
      <header className="topbar reveal">
        <div className="brand">
          <span>Israa</span> Chaabi
        </div>
        <nav className="nav" aria-label="Navigation principale">
          <span>Home</span>
          <span>Skills</span>
          <span>Projects</span>
          <span>Contact</span>
        </nav>
        <a className="cta" href="mailto:chaabi@israa.engineer">
          Let&apos;s Talk
        </a>
      </header>

      <section className="hero">
        <article className="card hero-main reveal delay-1">
          <span className="tag">Futuristic Portfolio</span>
          <h1>
            I&apos;m <em>Israa Chaabi</em>
          </h1>
          <p className="role">Full-Stack Developer</p>
          <p className="summary">
            Developpeuse web passionnee par les interfaces modernes et les architectures fiables. Je concois des
            experiences digitales rapides, elegantes et scalables avec React, Node.js et PostgreSQL.
          </p>

          <div className="chip-row">
            <span className="chip">Casablanca</span>
            <span className="chip">Arabic | French | English</span>
            <span className="chip">React | Node.js | Docker</span>
          </div>

          <div className="count-row">
            <div className="count">
              <strong>5+</strong>
              <span>Projets techniques majeurs</span>
            </div>
            <div className="count">
              <strong>42</strong>
              <span>Ecole 1337 / 42 Network</span>
            </div>
            <div className="count">
              <strong>100%</strong>
              <span>Motivee produit & qualite</span>
            </div>
            <div className="count">
              <strong>24/7</strong>
              <span>Curiosite & progression</span>
            </div>
          </div>
        </article>

        <article className="card hero-photo reveal delay-2">
          <Image
            src="/profile.jpg"
            alt="Portrait d'Israa Chaabi"
            width={1242}
            height={2208}
            priority
          />
          <div className="status">Open to Opportunities</div>
        </article>
      </section>

      <section className="grid">
        <article className="card section span-5 reveal delay-1">
          <h2>Competences</h2>
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>

        <article className="card section span-7 reveal delay-2">
          <h2>Projets Cles</h2>
          <div className="project-list">
            {projects.map((project) => (
              <div className="project" key={project.title}>
                <strong>{project.title}</strong>
                <p>{project.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card section span-7 reveal delay-2">
          <h2>Formation</h2>
          <div className="education">
            {education.map((entry) => (
              <div className="item" key={entry.title}>
                <strong>{entry.title}</strong>
                <span>{entry.date}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="card section span-5 reveal delay-3">
          <h2>Contact</h2>
          <div className="contact">
            <a href="mailto:chaabi@israa.engineer">chaabi@israa.engineer</a>
            <a href="tel:+212660693207">+212 660 693 207</a>
            <a href="https://linkedin.com/in/israa-chaabi-dev" target="_blank" rel="noreferrer">
              linkedin.com/in/israa-chaabi-dev
            </a>
            <a href="https://github.com/israou" target="_blank" rel="noreferrer">
              github.com/israou
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
