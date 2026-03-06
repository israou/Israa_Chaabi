"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio_lang");
    if (saved === "en" || saved === "fr") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((current) => (current === "en" ? "fr" : "en")),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
