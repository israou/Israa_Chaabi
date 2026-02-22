import PortfolioShell from "../../components/PortfolioShell";

const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API", "Authentication", "Socket Programming"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Schema Design", "Query Optimization"],
  },
  {
    title: "Infra",
    items: ["Docker", "Docker Compose", "NGINX", "Linux", "GitHub Actions", "CI/CD"],
  },
];

export default function SkillsPage() {
  return (
    <PortfolioShell
      tag="Skills Matrix"
      title="Israa Chaabi"
      role="Engineering Toolkit"
      summary="A complete stack focused on performance, maintainability, and clean architecture for production-grade apps."
      chips={["JavaScript", "TypeScript", "C/C++", "SQL", "Cloud-ready workflow"]}
    >
      <section className="grid">
        {skillGroups.map((group, index) => (
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
