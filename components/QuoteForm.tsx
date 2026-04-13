"use client";

import { useState, useRef, type FormEvent } from "react";
import { useTranslation } from "@/lib/i18n";
import { useReveal } from "@/lib/animations";

export default function QuoteForm() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const headerRef = useReveal<HTMLDivElement>();
  const formRef = useReveal<HTMLDivElement>({ y: 50, delay: 0.2 });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const detailsRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const phone = phoneRef.current?.value || "";
    const service = serviceRef.current?.selectedOptions[0]?.text || "";
    const details = detailsRef.current?.value || "";

    const message =
      `*Novo Pedido de Orçamento*%0A%0A` +
      `*Nome:* ${encodeURIComponent(name)}%0A` +
      `*Email:* ${encodeURIComponent(email)}%0A` +
      `*Telemóvel:* ${encodeURIComponent(phone)}%0A` +
      `*Serviço:* ${encodeURIComponent(service)}%0A` +
      `*Detalhes:* ${encodeURIComponent(details)}`;

    window.open(`https://wa.me/351964456526?text=${message}`, "_blank");
    setSubmitted(true);
  }

  return (
    <section id="quote" className="py-24 lg:py-32 bg-surface relative noise-overlay">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">{t("quote.tag")}</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">{t("quote.title")}</h2>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto">{t("quote.sub")}</p>
        </div>

        <div ref={formRef} className="glass-card border border-outline-variant/10 rounded-2xl p-8 lg:p-12 shadow-2xl shadow-black/20">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">{t("quote.success.title")}</h3>
              <p className="text-on-surface-variant text-lg">{t("quote.success.msg")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant mb-2">{t("quote.name")}</label>
                  <input ref={nameRef} type="text" required placeholder={t("quote.name.ph")} className="w-full bg-surface-container-highest/80 border border-outline-variant/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all outline-none focus:translate-y-[-1px] focus:shadow-lg focus:shadow-primary/5" />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant mb-2">{t("quote.email")}</label>
                  <input ref={emailRef} type="email" required placeholder={t("quote.email.ph")} className="w-full bg-surface-container-highest/80 border border-outline-variant/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all outline-none focus:translate-y-[-1px] focus:shadow-lg focus:shadow-primary/5" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant mb-2">{t("quote.phone")}</label>
                  <input ref={phoneRef} type="tel" required placeholder={t("quote.phone.ph")} className="w-full bg-surface-container-highest/80 border border-outline-variant/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all outline-none focus:translate-y-[-1px] focus:shadow-lg focus:shadow-primary/5" />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant mb-2">{t("quote.service")}</label>
                  <select ref={serviceRef} required className="w-full bg-surface-container-highest/80 border border-outline-variant/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3.5 text-on-surface transition-all outline-none appearance-none">
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
                <textarea ref={detailsRef} rows={4} required placeholder={t("quote.details.ph")} className="w-full bg-surface-container-highest/80 border border-outline-variant/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all outline-none resize-none focus:translate-y-[-1px] focus:shadow-lg focus:shadow-primary/5" />
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-500 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-green-600/20 flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {t("quote.submit")}
              </button>
              <p className="text-center text-on-surface-variant/60 text-xs">{t("quote.privacy")}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
