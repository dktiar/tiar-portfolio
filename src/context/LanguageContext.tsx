"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Locale } from "@/types";

interface LanguageContextType {
  locale: Locale;
  toggleLocale: () => void;
  t: (id: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = () => {
    setLocale((prev) => (prev === "id" ? "en" : "id"));
  };

  const t = (id: string, en: string) => (locale === "id" ? id : en);

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
