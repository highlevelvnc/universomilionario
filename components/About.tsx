"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n";
import { useReveal, useParallax, useLineReveal } from "@/lib/animations";

export default function About() {
  const { t } = useTranslation();
  const imageRef = useReveal<HTMLDivElement>({ y: 80, duration: 1 });
  const textRef = useReveal<HTMLDivElement>({ y: 60, delay: 0.2 });
  const statRef = useReveal<HTMLDivElement>({ y: 40, delay: 0.4 });
  const decoRef = useParallax<HTMLDivElement>(-0.15);
  const lineRef = useLineReveal<HTMLDivElement>();

  const features = [t("about.feat1"), t("about.feat2"), t("about.feat3"), t("about.feat4")];

  return (
    <section id="about" className="py-24 lg:py-32 bg-surface-dim relative noise-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={imageRef} className="relative">
            <div ref={decoRef} className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/40 z-20" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/servico-1.jpg" alt="" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div ref={statRef} className="absolute -bottom-6 -right-4 lg:-right-8 glass-card p-6 rounded-lg border border-outline-variant/15 z-20 shadow-2xl">
              <p className="text-4xl font-extrabold text-primary mb-1">15+</p>
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant">{t("about.years")}</p>
            </div>
            <div className="absolute -bottom-12 left-8 w-40 h-28 rounded-lg overflow-hidden border-2 border-surface shadow-xl z-10 hidden lg:block">
              <Image src="/servico-4.jpg" alt="" fill className="object-cover" />
            </div>
          </div>

          <div ref={textRef} className="lg:pl-4 mt-8 lg:mt-0">
            <div className="accent-blade mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2">{t("about.tag")}</p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{t("about.title")}</h2>
            </div>
            <div ref={lineRef} className="w-16 h-0.5 bg-primary/40 mb-8" />
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t("about.p1") }} />
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">{t("about.p2")}</p>
            <div className="space-y-5">
              {features.map((item, i) => (
                <div key={item} className="flex items-center gap-4" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-2 h-2 bg-primary shrink-0" />
                  <span className="font-semibold tracking-tight text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
