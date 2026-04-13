"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTranslation } from "@/lib/i18n";
import { useMagnetic } from "@/lib/animations";

export default function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.15);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-hero-badge]", { opacity: 0, y: 30, duration: 0.6 }, 0.3)
        .from("[data-hero-h1] > *", { opacity: 0, y: 80, duration: 1, stagger: 0.12 }, 0.5)
        .from("[data-hero-sub]", { opacity: 0, y: 30, duration: 0.7 }, 1.1)
        .from("[data-hero-cta] > *", { opacity: 0, y: 20, scale: 0.95, duration: 0.6, stagger: 0.1 }, 1.3)
        .from("[data-hero-stats] > *", { opacity: 0, y: 30, duration: 0.6, stagger: 0.15 }, 1.6);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: t("hero.stat1.number"), label: t("hero.stat1.label") },
    { number: t("hero.stat2.number"), label: t("hero.stat2.label") },
    { number: t("hero.stat3.number"), label: t("hero.stat3.label") },
  ];

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      <div className="absolute inset-0 z-0">
        <Image src="/servico-3.jpg" alt="" fill className="object-cover opacity-20" priority quality={80} />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/85 to-surface" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent" />
      </div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          <div data-hero-badge className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-light">{t("hero.badge")}</span>
          </div>

          <h1 data-hero-h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-[-0.03em] leading-[0.9] mb-8">
            <span className="block">{t("hero.headline1")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">{t("hero.headline2")}</span>
            </span>
            <span className="block text-on-surface-variant">{t("hero.headline3")}</span>
            <span className="block">{t("hero.headline4")}</span>
          </h1>

          <p data-hero-sub className="text-lg sm:text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed font-light">{t("hero.sub")}</p>

          <div data-hero-cta className="flex flex-wrap gap-4">
            <a ref={ctaRef} href="#quote" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-light hover:scale-[1.02] transition-all duration-300 active:scale-95 shadow-xl shadow-primary/20">
              {t("hero.cta1")}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#services" className="inline-flex items-center gap-2 border border-outline-variant/30 text-on-surface px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/5 transition-all duration-300">{t("hero.cta2")}</a>
          </div>

          <div data-hero-stats className="mt-16 pt-8 border-t border-outline-variant/10 grid grid-cols-3 gap-8 max-w-lg">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-extrabold text-primary">{stat.number}</p>
                <p className="text-xs text-on-surface-variant mt-1 tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-on-surface-variant/30 flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-on-surface-variant/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
