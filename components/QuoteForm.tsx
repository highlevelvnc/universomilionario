"use client";

import { useState, type FormEvent } from "react";
import { useTranslation } from "@/lib/i18n";

export default function QuoteForm() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="quote" className="py-24 lg:py-32 bg-surface relative noise-overlay">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">{t("quote.tag")}</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">{t("quote.title")}</h2>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto">{t("quote.sub")}</p>
        </div>

        <div className="glass-card border border-outline-variant/10 rounded-2xl p-8 lg:p-12 shadow-2xl shadow-black/20">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">{t("quote.success.title")}</h3>
              <p className="text-on-surface-variant text-lg">{t("quote.success.msg")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant mb-2">{t("quote.name")}</label>
                  <input type="text" required placeholder={t("quote.name.ph")} className="w-full bg-surface-container-highest/80 border border-outline-variant/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant mb-2">{t("quote.email")}</label>
                  <input type="email" required placeholder={t("quote.email.ph")} className="w-full bg-surface-container-highest/80 border border-outline-variant/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant mb-2">{t("quote.phone")}</label>
                  <input type="tel" required placeholder={t("quote.phone.ph")} className="w-full bg-surface-container-highest/80 border border-outline-variant/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant mb-2">{t("quote.service")}</label>
                  <select required className="w-full bg-surface-container-highest/80 border border-outline-variant/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3.5 text-on-surface transition-all outline-none appearance-none">
                    <option value="">{t("quote.service.ph")}</option>
                    <option value="construcao">{t("quote.service.o1")}</option>
                    <option value="remodelacao">{t("quote.service.o2")}</option>
                    <option value="limpeza">{t("quote.service.o3")}</option>
                    <option value="manutencao">{t("quote.service.o4")}</option>
                    <option value="outro">{t("quote.service.o5")}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant mb-2">{t("quote.details")}</label>
                <textarea rows={4} required placeholder={t("quote.details.ph")} className="w-full bg-surface-container-highest/80 border border-outline-variant/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all outline-none resize-none" />
              </div>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-light transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-primary/20">{t("quote.submit")}</button>
              <p className="text-center text-on-surface-variant/60 text-xs">{t("quote.privacy")}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
