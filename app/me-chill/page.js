"use client";

import Image from "next/image";
import PortfolioShell from "../../components/PortfolioShell";
import { useLanguage } from "../../components/LanguageProvider";

export default function MeChillPage() {
  const { lang } = useLanguage();
  const copy = {
    en: {
      tag: "Me Chill",
      role: "Code, Creativity, and Calm Focus",
      summary:
        "A more personal side of my journey: I enjoy building clean products, learning deeply, and turning ideas into polished experiences.",
      chips: ["Creative mindset", "Product energy", "Deep work", "Execution first"],
      photoAlt: "Israa Chaabi working on her laptop",
      story: "I love building elegant digital experiences and shipping products that are fast, stable, and beautiful.",
      storyChips: ["UI precision", "Backend logic", "Clean delivery"],
      availability: "Availability",
      currentStatus: "Current status",
      currentStatusValue: "Open to new opportunities",
      preferredRoles: "Preferred roles",
      preferredRolesValue: "Full-Stack Developer | Digital & Software Engineering Architect",
      location: "Location",
      locationValue: "Casablanca, Morocco (remote friendly)",
      collaborationStyle: "Collaboration style",
      collaborationStyleValue: "Clear communication, ownership, and fast iteration",
      binaryLabel: "Binary decoder",
      binaryRaw:
        "01100001 01101100 01101100 00100000 01101101 01111001 00100000 01110000 01110010 01101111 01101010 01100101 01100011 01110100 00100000 01100001 01110010 01100101 00100000 01110011 01101001 01100111 01101110 01100101 01100100 00100000 01010010 01101111 01100010 01101001 01101111",
      binaryDecoded: "all my projects are signed Robio",
      philosophy: "My engineering philosophy",
    },
    fr: {
      tag: "Me Chill",
      role: "Code, créativité et focus",
      summary:
        "Une facette plus personnelle de mon parcours: j'aime construire des produits propres, apprendre en profondeur et transformer des idées en expériences soignées.",
      chips: ["Esprit créatif", "Énergie produit", "Deep work", "Exécution d'abord"],
      photoAlt: "Israa Chaabi travaillant sur son laptop",
      story:
        "J'aime concevoir des expériences digitales élégantes et livrer des produits rapides, stables et beaux.",
      storyChips: ["Précision UI", "Logique backend", "Livraison propre"],
      availability: "Disponibilité",
      currentStatus: "Statut actuel",
      currentStatusValue: "Ouverte à de nouvelles opportunités",
      preferredRoles: "Rôles préférés",
      preferredRolesValue: "Développeuse Full-Stack | Architecte en ingénierie logicielle",
      location: "Localisation",
      locationValue: "Casablanca, Maroc (remote friendly)",
      collaborationStyle: "Style de collaboration",
      collaborationStyleValue: "Communication claire, ownership et itération rapide",
      binaryLabel: "Décodeur binaire",
      binaryRaw:
        "01100001 01101100 01101100 00100000 01101101 01111001 00100000 01110000 01110010 01101111 01101010 01100101 01100011 01110100 00100000 01100001 01110010 01100101 00100000 01110011 01101001 01100111 01101110 01100101 01100100 00100000 01010010 01101111 01100010 01101001 01101111",
      binaryDecoded: "all my projects are signed Robio",
      philosophy: "My engineering philosophy",
    },
  }[lang];

  return (
    <PortfolioShell
      tag={copy.tag}
      title="Israa Chaabi"
      role={copy.role}
      summary={copy.summary}
      chips={copy.chips}
      hideHero
    >
      <section className="grid">
        <article className="card section span-5 reveal delay-1 contact-showcase">
          <span className="contact-orb contact-orb-pink" aria-hidden="true" />
          <span className="contact-orb contact-orb-cyan" aria-hidden="true" />

          <div className="contact-photo-wrap">
            <Image
              src="/contact-lifestyle.jpg"
              alt={copy.photoAlt}
              width={1536}
              height={2048}
              className="contact-photo"
              sizes="(max-width: 1024px) 100vw, 32vw"
            />
          </div>

          <div className="contact-story">
            <p>{copy.story}</p>
            <div className="contact-story-chips">
              {copy.storyChips.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </article>

        <article className="card section span-7 reveal delay-2 availability-card">
          <h2>{copy.availability}</h2>
          <div className="education">
            <div className="item">
              <strong>{copy.currentStatus}</strong>
              <span>{copy.currentStatusValue}</span>
            </div>
            <div className="item">
              <strong>{copy.preferredRoles}</strong>
              <span>{copy.preferredRolesValue}</span>
            </div>
            <div className="item">
              <strong>{copy.location}</strong>
              <span>{copy.locationValue}</span>
            </div>
            <div className="item">
              <strong>{copy.collaborationStyle}</strong>
              <span>{copy.collaborationStyleValue}</span>
            </div>
          </div>
          <div className="availability-filler">
            <div className="availability-binary-frame">
              <div className="availability-divider availability-divider-top" aria-hidden="true">
                <span className="availability-divider-dot" />
                <span className="availability-divider-line" />
                <span className="availability-divider-dot" />
              </div>
              <p className="availability-binary-inline">{copy.binaryRaw}</p>
              <div className="availability-divider availability-divider-bottom" aria-hidden="true">
                <span className="availability-divider-dot" />
                <span className="availability-divider-line" />
                <span className="availability-divider-dot" />
              </div>
            </div>
            <div className="availability-binary">
              <p className="availability-binary-decoded">
                {copy.binaryLabel}: {copy.binaryDecoded}
              </p>
              <p className="availability-binary-philosophy">{copy.philosophy}</p>
            </div>
          </div>
        </article>
      </section>
    </PortfolioShell>
  );
}
