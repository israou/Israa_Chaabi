"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function PortfolioShell({
  tag,
  title,
  role,
  summary,
  chips,
  stats,
  imagePriority = false,
  children,
}) {
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitState, setSubmitState] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    if (!isContactOpen) {
      return;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsContactOpen(false);
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isContactOpen]);

  useEffect(() => {
    if (!isContactOpen) {
      setSubmitState("idle");
      setSubmitMessage("");
    }
  }, [isContactOpen]);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitContact = async (event) => {
    event.preventDefault();
    setSubmitState("loading");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result?.ok) {
        const detailedMessage = [result?.message, result?.providerError]
          .filter(Boolean)
          .join(" ");
        throw new Error(detailedMessage || "Message sending failed.");
      }

      setSubmitState("success");
      setSubmitMessage("Message sent successfully. I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <main className="page">
      <header className="topbar reveal">
        <nav className="nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.href === "/"
                  ? pathname === "/"
                    ? "active"
                    : ""
                  : pathname.startsWith(item.href)
                    ? "active"
                    : ""
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="topbar-actions">
          <a className="cta cta-secondary" href="/IsraaChaabi_dev.pdf" target="_blank" rel="noreferrer">
            Open CV
          </a>
          <button className="cta cta-button" type="button" onClick={() => setIsContactOpen(true)}>
            Let&apos;s Talk
          </button>
        </div>
      </header>

      <section className="hero">
        <article className="card hero-main reveal delay-1">
          <span className="tag">{tag}</span>
          <h1>
            I&apos;m <em>{title}</em>
          </h1>
          <p className="role">{role}</p>
          <p className="summary">{summary}</p>

          <div className="chip-row">
            {chips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>

          {Array.isArray(stats) && stats.length > 0 ? (
            <div className="count-row">
              {stats.map((stat) => (
                <div className="count" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          ) : null}
        </article>

        <article className="card hero-photo reveal delay-2">
          <Image
            src="/profile.jpg"
            alt="Portrait of Israa Chaabi"
            width={1242}
            height={2208}
            priority={imagePriority}
            sizes="(max-width: 1024px) 100vw, 38vw"
          />
          <div className="status">Open to Opportunities</div>
        </article>
      </section>

      {children}

      {isContactOpen ? (
        <div className="contact-modal-overlay" role="presentation" onClick={() => setIsContactOpen(false)}>
          <div
            className="contact-modal card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="contact-modal-head">
              <h2 id="contact-modal-title">Let&apos;s Talk</h2>
              <button
                className="contact-modal-close"
                type="button"
                onClick={() => setIsContactOpen(false)}
                aria-label="Close contact form"
              >
                x
              </button>
            </div>

            <form className="contact-modal-form" onSubmit={onSubmitContact}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onInputChange}
                  placeholder="Your name"
                  disabled={submitState === "loading"}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onInputChange}
                  placeholder="your@email.com"
                  disabled={submitState === "loading"}
                  required
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={onInputChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  disabled={submitState === "loading"}
                  required
                />
              </label>
              {submitMessage ? (
                <p className={`contact-modal-feedback ${submitState}`}>{submitMessage}</p>
              ) : null}
              <div className="contact-modal-actions">
                <button
                  className="cta cta-secondary"
                  type="button"
                  onClick={() => setIsContactOpen(false)}
                  disabled={submitState === "loading"}
                >
                  Cancel
                </button>
                <button className="cta cta-button" type="submit" disabled={submitState === "loading"}>
                  {submitState === "loading" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </main>
  );
}
