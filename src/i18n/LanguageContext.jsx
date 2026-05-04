import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations.js";

const LanguageContext = createContext(null);

const STORAGE_KEY = "macs.language";
const SUPPORTED = ["en", "mn"];

function getInitialLanguage() {
  if (typeof window === "undefined") return "en";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
  } catch {
    // ignore storage errors (e.g. private mode)
  }
  return "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLang = useCallback((lang) => {
    if (SUPPORTED.includes(lang)) setLanguage(lang);
  }, []);

  const toggleLang = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "mn" : "en"));
  }, []);

  const value = useMemo(() => {
    const t = translations[language];
    return { language, setLang, toggleLang, t };
  }, [language, setLang, toggleLang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
