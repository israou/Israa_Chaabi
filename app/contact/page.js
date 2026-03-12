"use client";

import PortfolioShell from "../../components/PortfolioShell";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageProvider";

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
  const { lang } = useLanguage();
  const copy = {
    en: {
      tag: "Contact Hub",
      role: "Let us build something powerful",
      summary: "Open to internships, freelance opportunities, and collaboration on ambitious web and software projects.",
      chips: ["Fast response", "Remote friendly", "Team collaboration", "Product focused"],
      getInTouch: "Get In Touch",
      body: "Send me a message and I will get back quickly. I can join projects involving frontend, backend, full-stack architecture, or containerized deployments.",
      moreAboutMe: "More About Me",
      moreBody:
        "Want a more personal vibe? Check the Me Chill page with my lifestyle photo, creative story, and availability.",
      openMeChill: "Open Me Chill",
      letsTalk: "Let's Talk",
    },
    fr: {
      tag: "Contact",
      role: "Construisons quelque chose de fort",
      summary:
        "Ouverte aux stages, opportunités freelance et collaborations sur des projets web et software ambitieux.",
      chips: ["Réponse rapide", "Remote friendly", "Collaboration équipe", "Orientée produit"],
      getInTouch: "Entrer en Contact",
      body: "Envoie-moi un message et je répondrai rapidement. Je peux rejoindre des projets frontend, backend, architecture full-stack ou déploiements conteneurisés.",
      moreAboutMe: "Plus À Mon Sujet",
      moreBody:
        "Tu veux une version plus personnelle ? Découvre la page Me Chill avec ma photo lifestyle, mon univers créatif et mes disponibilités.",
      openMeChill: "Ouvrir Me Chill",
      letsTalk: "Discutons",
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
        <article className="card section span-12 reveal delay-1">
          <h2>{copy.getInTouch}</h2>
          <p className="summary summary-tight">{copy.body}</p>
          <div className="contact-grid">
            {contactLinks.map((link) => (
              <a key={link.label} className="contact-tile" href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                <small>{link.label}</small>
                <span>{link.value}</span>
              </a>
            ))}
          </div>
          <div className="section-inline-cta">
            <button
              className="cta cta-button"
              type="button"
              onClick={() => window.dispatchEvent(new Event("open-contact-modal"))}
            >
              {copy.letsTalk}
            </button>
          </div>
        </article>

        <article className="card section span-12 reveal delay-2">
          <h2>{copy.moreAboutMe}</h2>
          <p className="summary summary-tight">{copy.moreBody}</p>
          <div className="topbar-actions">
            <Link className="cta" href="/me-chill">
              {copy.openMeChill}
            </Link>
          </div>
        </article>
      </section>
    </PortfolioShell>
  );
}
