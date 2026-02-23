import PortfolioShell from "../../components/PortfolioShell";
import Link from "next/link";

const contactLinks = [
  { label: "Email", value: "chaabi@israa.engineer", href: "mailto:chaabi@israa.engineer" },
  { label: "Phone", value: "+212 660 693 207", href: "tel:+212660693207" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/israa-chaabi-dev",
    href: "https://linkedin.com/in/israa-chaabi-dev",
  },
  { label: "GitHub", value: "github.com/israou", href: "https://github.com/israou" },
];

export default function ContactPage() {
  return (
    <PortfolioShell
      tag="Contact Hub"
      title="Israa Chaabi"
      role="Let us build something powerful"
      summary="Open to internships, freelance opportunities, and collaboration on ambitious web and software projects."
      chips={["Fast response", "Remote friendly", "Team collaboration", "Product focused"]}
    >
      <section className="grid">
        <article className="card section span-12 reveal delay-1">
          <h2>Get In Touch</h2>
          <p className="summary summary-tight">
            Send me a message and I will get back quickly. I can join projects involving frontend, backend,
            full-stack architecture, or containerized deployments.
          </p>
          <div className="contact-grid">
            {contactLinks.map((link) => (
              <a key={link.label} className="contact-tile" href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                <small>{link.label}</small>
                <span>{link.value}</span>
              </a>
            ))}
          </div>
        </article>

        <article className="card section span-12 reveal delay-2">
          <h2>More About Me</h2>
          <p className="summary summary-tight">
            Want a more personal vibe? Check the <strong>Me Chill</strong> page with my lifestyle photo, creative
            story, and availability.
          </p>
          <div className="topbar-actions">
            <Link className="cta" href="/me-chill">
              Open Me Chill
            </Link>
          </div>
        </article>
      </section>
    </PortfolioShell>
  );
}
