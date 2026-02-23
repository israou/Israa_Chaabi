import Image from "next/image";
import PortfolioShell from "../../components/PortfolioShell";

export default function MeChillPage() {
  return (
    <PortfolioShell
      tag="Me Chill"
      title="Israa Chaabi"
      role="Code, Creativity, and Calm Focus"
      summary="A more personal side of my journey: I enjoy building clean products, learning deeply, and turning ideas into polished experiences."
      chips={["Creative mindset", "Product energy", "Deep work", "Execution first"]}
      hideHero
    >
      <section className="grid">
        <article className="card section span-5 reveal delay-1 contact-showcase">
          <span className="contact-orb contact-orb-pink" aria-hidden="true" />
          <span className="contact-orb contact-orb-cyan" aria-hidden="true" />

          <div className="contact-photo-wrap">
            <Image
              src="/contact-lifestyle.jpg"
              alt="Israa Chaabi working on her laptop"
              width={1536}
              height={2048}
              className="contact-photo"
              sizes="(max-width: 1024px) 100vw, 32vw"
            />
            <span className="contact-photo-caption">Let&apos;s build something together.</span>
            <span className="contact-floating-tag">Creative Engineer</span>
          </div>

          <div className="contact-story">
            <p>
              I love building elegant digital experiences and shipping products that are fast, stable, and
              beautiful.
            </p>
            <div className="contact-story-chips">
              <span>UI precision</span>
              <span>Backend logic</span>
              <span>Clean delivery</span>
            </div>
          </div>
        </article>

        <article className="card section span-7 reveal delay-2">
          <h2>Availability</h2>
          <div className="education">
            <div className="item">
              <strong>Current status</strong>
              <span>Open to new opportunities</span>
            </div>
            <div className="item">
              <strong>Preferred roles</strong>
              <span>Full-Stack Developer | Digital & Software Engineering Architect</span>
            </div>
            <div className="item">
              <strong>Location</strong>
              <span>Casablanca, Morocco (remote friendly)</span>
            </div>
            <div className="item">
              <strong>Collaboration style</strong>
              <span>Clear communication, ownership, and fast iteration</span>
            </div>
          </div>
        </article>
      </section>
    </PortfolioShell>
  );
}
