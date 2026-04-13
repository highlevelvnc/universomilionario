"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations/pt";

const photos: { src: string; altKey: TranslationKey }[] = [
  { src: "/servico-1.jpg", altKey: "gallery.alt1" },
  { src: "/servico-2.jpg", altKey: "gallery.alt2" },
  { src: "/servico-3.jpg", altKey: "gallery.alt3" },
  { src: "/servico-4.jpg", altKey: "gallery.alt4" },
  { src: "/servico-5.jpg", altKey: "gallery.alt5" },
  { src: "/servico-6.jpg", altKey: "gallery.alt6" },
  { src: "/servico-7.jpg", altKey: "gallery.alt7" },
  { src: "/servico-8.jpg", altKey: "gallery.alt8" },
];

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section className="py-24 lg:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">{t("gallery.tag")}</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">{t("gallery.title")}</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">{t("gallery.sub")}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {photos.map((photo, i) => (
            <div key={photo.src} className={`relative overflow-hidden rounded-lg group cursor-pointer ${i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <div className={`relative ${i === 0 || i === 5 ? "aspect-square" : "aspect-[4/3]"}`}>
                <Image src={photo.src} alt={t(photo.altKey)} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-medium">{t(photo.altKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
