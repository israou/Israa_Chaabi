"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function FeaturedProjectsSlider({ projects }) {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const safeProjects = useMemo(() => (Array.isArray(projects) ? projects : []), [projects]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => setPrefersReducedMotion(mediaQuery.matches);
    onMotionChange();
    mediaQuery.addEventListener("change", onMotionChange);

    return () => mediaQuery.removeEventListener("change", onMotionChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    if (isPaused) {
      return;
    }

    if (safeProjects.length < 2) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % safeProjects.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion, safeProjects.length]);

  if (safeProjects.length === 0) {
    return null;
  }

  const orderedProjects = safeProjects.map((_, index) => safeProjects[(currentIndex + index) % safeProjects.length]);
  const text = {
    en: {
      aria: "Featured projects slider",
      cta: "Open GitHub Repo",
      select: "Select featured project",
      show: "Show",
    },
    fr: {
      aria: "Carrousel des projets phares",
      cta: "Ouvrir le dépôt GitHub",
      select: "Choisir un projet phare",
      show: "Afficher",
    },
  }[lang];

  return (
    <div
      className="featured-slider"
      aria-label={text.aria}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="featured-stack" key={currentIndex}>
        {orderedProjects.map((project, index) => (
          <a
            className={`project project-link project-feature featured-stack-item ${
              index === 0 ? "is-primary" : "is-secondary"
            }`}
            key={`${project.title}-${index}`}
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className="featured-slide-content">
              <strong>{project.title}</strong>
              <p>{project.text}</p>
            </div>
            <div className="featured-slide-meta">
              <p className="project-stack">{project.stack}</p>
              <p className="project-cta">{text.cta}</p>
            </div>
          </a>
        ))}
      </div>

      {safeProjects.length > 1 ? (
        <div className="featured-slider-footer">
          <div className="featured-slider-dots" aria-label={text.select}>
            {safeProjects.map((project, index) => (
              <button
                key={`${project.title}-dot`}
                type="button"
                className={index === currentIndex ? "active" : ""}
                aria-label={`${text.show} ${project.title}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
