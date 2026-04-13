"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import pt, { type TranslationKey } from "./translations/pt";
import en from "./translations/en";

export type Locale = "pt" | "en";

const dictionaries: Record<Locale, Record<TranslationKey, string>> = { pt, en };

type I18nContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");

  const t = useCallback(
    (key: TranslationKey) => dictionaries[locale][key] ?? key,
    [locale],
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
  return ctx;
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center bg-surface-container-high/80 rounded-lg p-0.5 border border-outline-variant/10">
      {(["pt", "en"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
            locale === lang
              ? "bg-primary text-white shadow-sm"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
