import PortfolioShell from "../../components/PortfolioShell";

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
        <article className="card section span-7 reveal delay-1">
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

        <article className="card section span-5 reveal delay-2">
          <h2>Availability</h2>
          <div className="education">
            <div className="item">
              <strong>Current status</strong>
              <span>Open to new opportunities</span>
            </div>
            <div className="item">
              <strong>Preferred roles</strong>
              <span>Full-Stack Developer | Frontend Engineer</span>
            </div>
            <div className="item">
              <strong>Location</strong>
              <span>Casablanca, Morocco (remote friendly)</span>
            </div>
          </div>
        </article>
      </section>
    </PortfolioShell>
  );
}
