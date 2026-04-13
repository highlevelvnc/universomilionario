"use client";

import { useTranslation } from "@/lib/i18n";
import { useReveal, useStagger } from "@/lib/animations";

const testimonials = [
  {
    nameKey: "test.t1.name" as const,
    roleKey: "test.t1.role" as const,
    textKey: "test.t1.text" as const,
    rating: 5,
    initials: "JM",
  },
  {
    nameKey: "test.t2.name" as const,
    roleKey: "test.t2.role" as const,
    textKey: "test.t2.text" as const,
    rating: 5,
    initials: "AC",
  },
  {
    nameKey: "test.t3.name" as const,
    roleKey: "test.t3.role" as const,
    textKey: "test.t3.text" as const,
    rating: 5,
    initials: "RS",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useTranslation();
  const headerRef = useReveal<HTMLDivElement>();
  const gridRef = useStagger<HTMLDivElement>("[data-testimonial]", { stagger: 0.15, y: 50 });

  return (
    <section className="py-24 lg:py-32 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            {t("test.tag")}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {t("test.title")}
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            {t("test.sub")}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              data-testimonial
              key={item.nameKey}
              className="bg-surface-container rounded-xl p-8 border border-outline-variant/8 hover:border-primary/15 transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              <Stars count={item.rating} />
              <p className="text-on-surface-variant leading-relaxed mt-5 mb-8 flex-1 italic">
                &ldquo;{t(item.textKey)}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/8">
                <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm">
                  {item.initials}
                </div>
                <div>
                  <p className="font-bold text-sm">{t(item.nameKey)}</p>
                  <p className="text-on-surface-variant text-xs">{t(item.roleKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
