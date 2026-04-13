"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n";

export default function CookieBanner() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 lg:p-6 animate-fade-in-up">
      <div className="max-w-4xl mx-auto glass-card border border-outline-variant/15 rounded-2xl p-6 lg:p-8 shadow-2xl shadow-black/40 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-on-surface font-semibold text-sm mb-1">{t("cookie.title")}</p>
          <p className="text-on-surface-variant text-xs leading-relaxed">
            {t("cookie.text")}{" "}
            <a href="/privacidade" className="text-primary underline hover:text-primary-light">
              {t("cookie.link")}
            </a>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 text-sm text-on-surface-variant border border-outline-variant/20 rounded-lg hover:bg-white/5 transition-all"
          >
            {t("cookie.decline")}
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-all"
          >
            {t("cookie.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
