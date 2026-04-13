"use client";

import { useState, useEffect } from "react";
import { useTranslation, LanguageSwitcher } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations/pt";

const navKeys: { key: TranslationKey; href: string }[] = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.services", href: "#services" },
  { key: "nav.differentials", href: "#differentials" },
  { key: "nav.contact", href: "#contact" },
];

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-xl shadow-2xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-headline font-extrabold text-lg group-hover:scale-105 transition-transform">
            UM
          </div>
          <div className="hidden sm:block">
            <span className="text-on-surface font-headline font-bold text-sm tracking-widest uppercase block leading-tight">
              Universo
            </span>
            <span className="text-on-surface-variant text-[10px] tracking-[0.25em] uppercase font-medium">
              Milionário
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-on-surface-variant hover:text-on-surface transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#quote"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-light transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            {t("nav.cta")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-surface-container/95 backdrop-blur-xl border-t border-outline-variant/10 px-6 py-6 flex flex-col gap-4">
          {navKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-on-surface-variant hover:text-on-surface transition-colors py-2 text-lg"
            >
              {t(link.key)}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setMobileOpen(false)}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center mt-2"
          >
            {t("nav.cta")}
          </a>
        </nav>
      </div>
    </header>
  );
}
