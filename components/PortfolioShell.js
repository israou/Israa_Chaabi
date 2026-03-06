"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/skills", key: "skills" },
  { href: "/projects", key: "projects" },
  { href: "/contact", key: "contact" },
  { href: "/me-chill", key: "meChill" },
];

const MOBILE_MENU_ICON_VARIANT = "v3";
const MOBILE_NAV_VARIANT = "v4";

export default function PortfolioShell({
  tag,
  title,
  role,
  summary,
  chips,
  stats,
  imagePriority = false,
  hideHero = false,
  children,
}) {
  const { lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const mobileNavCloseRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitState, setSubmitState] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const text = {
    en: {
      nav: { home: "Home", skills: "Skills", projects: "Projects", contact: "Contact", meChill: "Me Chill" },
      openMenu: "Open menu",
      mobileTitle: "Navigation",
      navigate: "Navigate",
      closeMenu: "Close menu",
      openCv: "Open CV",
      letsTalk: "Let's Talk",
      heroIntro: "I'm",
      openToOpportunities: "Open to Opportunities",
      closeContactForm: "Close contact form",
      contactTitle: "Let's Talk",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        messagePlaceholder: "Tell me about your project...",
        cancel: "Cancel",
        sending: "Sending...",
        send: "Send Message",
      },
      feedback: {
        success: "Message sent successfully. I will get back to you soon.",
        error: "Something went wrong. Please try again.",
        failed: "Message sending failed.",
      },
      langSwitch: "FR",
      langSwitchAria: "Switch language to French",
    },
    fr: {
      nav: { home: "Accueil", skills: "Compétences", projects: "Projets", contact: "Contact", meChill: "Me Chill" },
      openMenu: "Ouvrir le menu",
      mobileTitle: "Navigation",
      navigate: "Naviguer",
      closeMenu: "Fermer le menu",
      openCv: "Ouvrir le CV",
      letsTalk: "Discutons",
      heroIntro: "Je suis",
      openToOpportunities: "Ouverte aux opportunités",
      closeContactForm: "Fermer le formulaire",
      contactTitle: "Discutons",
      form: {
        name: "Nom",
        email: "Email",
        message: "Message",
        namePlaceholder: "Votre nom",
        emailPlaceholder: "votre@email.com",
        messagePlaceholder: "Parlez-moi de votre projet...",
        cancel: "Annuler",
        sending: "Envoi...",
        send: "Envoyer",
      },
      feedback: {
        success: "Message envoyé avec succès. Je vous répondrai rapidement.",
        error: "Une erreur est survenue. Veuillez réessayer.",
        failed: "L'envoi du message a échoué.",
      },
      langSwitch: "EN",
      langSwitchAria: "Basculer la langue vers l'anglais",
    },
  }[lang];

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

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add("mobile-nav-open");
      mobileNavCloseRef.current?.focus();
    } else {
      document.body.classList.remove("mobile-nav-open");
    }

    return () => {
      document.body.classList.remove("mobile-nav-open");
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    if (!isMobileNavOpen) {
      return;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileNavOpen]);

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
        throw new Error(detailedMessage || text.feedback.failed);
      }

      setSubmitState("success");
      setSubmitMessage(text.feedback.success);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(error.message || text.feedback.error);
    }
  };

  return (
    <main className="page">
      <header className="topbar reveal">
        <button
          className="mobile-menu-toggle"
          type="button"
          onClick={() => setIsMobileNavOpen(true)}
          aria-label={text.openMenu}
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-nav-panel"
        >
          <span className={`mobile-menu-bars mobile-menu-bars-${MOBILE_MENU_ICON_VARIANT}`} aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className="sr-only">{text.openMenu}</span>
        </button>
        <span className="mobile-topbar-title">{text.mobileTitle}</span>
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
              {text.nav[item.key]}
            </Link>
          ))}
        </nav>
        <div className="topbar-actions">
          <button className="lang-toggle" type="button" onClick={toggleLang} aria-label={text.langSwitchAria}>
            {text.langSwitch}
          </button>
          <a className="cta cta-secondary" href="/IsraaChaabi_dev.pdf" target="_blank" rel="noreferrer">
            {text.openCv}
          </a>
          <button className="cta cta-button" type="button" onClick={() => setIsContactOpen(true)}>
            {text.letsTalk}
          </button>
        </div>
      </header>

      {isMobileNavOpen ? (
        <div className="mobile-nav-overlay" role="presentation" onClick={() => setIsMobileNavOpen(false)}>
          <aside
            className={`mobile-nav-panel mobile-nav-panel-${MOBILE_NAV_VARIANT} card`}
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-nav-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mobile-nav-head">
              <strong id="mobile-nav-title">{text.navigate}</strong>
              <button
                className="mobile-nav-close"
                type="button"
                onClick={() => setIsMobileNavOpen(false)}
                aria-label={text.closeMenu}
                ref={mobileNavCloseRef}
              >
                x
              </button>
            </div>
            <div className={`mobile-nav-links mobile-nav-links-${MOBILE_NAV_VARIANT}`}>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={`mobile-${item.href}`}
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
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  {text.nav[item.key]}
                </Link>
              ))}
            </div>
            <div className={`mobile-nav-actions mobile-nav-actions-${MOBILE_NAV_VARIANT}`}>
              <button className="lang-toggle" type="button" onClick={toggleLang} aria-label={text.langSwitchAria}>
                {text.langSwitch}
              </button>
              <a className="cta cta-secondary" href="/IsraaChaabi_dev.pdf" target="_blank" rel="noreferrer">
                {text.openCv}
              </a>
              <button
                className="cta cta-button"
                type="button"
                onClick={() => {
                  setIsMobileNavOpen(false);
                  setIsContactOpen(true);
                }}
              >
                {text.letsTalk}
              </button>
            </div>
          </aside>
        </div>
      ) : null}

      {!hideHero ? (
        <section className="hero">
          <article className="card hero-main reveal delay-1">
            {tag ? <span className="tag">{tag}</span> : null}
            <h1>
              {text.heroIntro} <em>{title}</em>
            </h1>
            <p className="role">{role}</p>
            <p className="summary">{summary}</p>

            <div className="chip-row">
              {(chips ?? []).map((chip) => (
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
              src="/profile.png"
              alt="Portrait of Israa Chaabi"
              width={1242}
              height={2208}
              priority={imagePriority}
              sizes="(max-width: 1024px) 100vw, 38vw"
            />
            <div className="status">{text.openToOpportunities}</div>
          </article>
        </section>
      ) : null}

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
              <h2 id="contact-modal-title">{text.contactTitle}</h2>
              <button
                className="contact-modal-close"
                type="button"
                onClick={() => setIsContactOpen(false)}
                aria-label={text.closeContactForm}
              >
                x
              </button>
            </div>

            <form className="contact-modal-form" onSubmit={onSubmitContact}>
              <label>
                {text.form.name}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onInputChange}
                  placeholder={text.form.namePlaceholder}
                  disabled={submitState === "loading"}
                  required
                />
              </label>
              <label>
                {text.form.email}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onInputChange}
                  placeholder={text.form.emailPlaceholder}
                  disabled={submitState === "loading"}
                  required
                />
              </label>
              <label>
                {text.form.message}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={onInputChange}
                  placeholder={text.form.messagePlaceholder}
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
                  {text.form.cancel}
                </button>
                <button className="cta cta-button" type="submit" disabled={submitState === "loading"}>
                  {submitState === "loading" ? text.form.sending : text.form.send}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </main>
  );
}
