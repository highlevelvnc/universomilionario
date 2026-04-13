"use client";

import { useTranslation } from "@/lib/i18n";
import { useReveal, useStagger } from "@/lib/animations";
import type { TranslationKey } from "@/lib/translations/pt";

const diffIcons = [
  <svg key="d1" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  <svg key="d2" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>,
  <svg key="d3" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="d4" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>,
  <svg key="d5" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
  <svg key="d6" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>,
];

const diffKeys: { titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { titleKey: "diff.d1.title", descKey: "diff.d1.desc" },
  { titleKey: "diff.d2.title", descKey: "diff.d2.desc" },
  { titleKey: "diff.d3.title", descKey: "diff.d3.desc" },
  { titleKey: "diff.d4.title", descKey: "diff.d4.desc" },
  { titleKey: "diff.d5.title", descKey: "diff.d5.desc" },
  { titleKey: "diff.d6.title", descKey: "diff.d6.desc" },
];

export default function Differentials() {
  const { t } = useTranslation();
  const headerRef = useReveal<HTMLDivElement>();
  const gridRef = useStagger<HTMLDivElement>("[data-diff-card]", { stagger: 0.1, y: 50 });
  const coverageRef = useStagger<HTMLDivElement>("[data-coverage]", { stagger: 0.15, y: 40 });
  const ctaBannerRef = useReveal<HTMLDivElement>({ y: 50, delay: 0.1 });

  return (
    <section id="differentials" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">{t("diff.tag")}</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">{t("diff.title")}</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">{t("diff.sub")}</p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diffKeys.map((item, i) => (
            <div data-diff-card key={item.titleKey} className="group bg-surface-container rounded-xl p-8 border border-outline-variant/8 hover:border-primary/20 transition-all duration-500 hover:bg-surface-container-high hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-500">{diffIcons[i]}</div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{t(item.titleKey)}</h3>
              <p className="text-on-surface-variant leading-relaxed">{t(item.descKey)}</p>
            </div>
          ))}
        </div>

        <div ref={coverageRef} className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div data-coverage className="bg-surface-container rounded-xl p-8 border border-outline-variant/8 flex items-center gap-5 hover:border-primary/20 transition-all duration-500">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864a4.5 4.5 0 010 6.635.75.75 0 01-.405.864v.568M12.75 3.03A11.944 11.944 0 0112 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9a9.004 9.004 0 00-2.25-5.97" /></svg>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">{t("diff.coverage1.title")}</h4>
              <p className="text-on-surface-variant text-sm">{t("diff.coverage1.desc")}</p>
            </div>
          </div>
          <div data-coverage className="bg-surface-container rounded-xl p-8 border border-outline-variant/8 flex items-center gap-5 hover:border-primary/20 transition-all duration-500">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">{t("diff.coverage2.title")}</h4>
              <p className="text-on-surface-variant text-sm">{t("diff.coverage2.desc")}</p>
            </div>
          </div>
        </div>

        <div ref={ctaBannerRef} className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dim/90 z-0" />
          <div className="absolute inset-0 bg-[url('/servico-6.jpg')] bg-cover bg-center opacity-10 z-0" />
          <div className="relative z-10 px-8 lg:px-16 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">{t("diff.cta.title")}</h3>
              <p className="text-white/80 text-lg max-w-xl">{t("diff.cta.sub")}</p>
            </div>
            <a href="#quote" className="shrink-0 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl">{t("diff.cta.btn")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
