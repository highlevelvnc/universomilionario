"use client";

import { useTranslation } from "@/lib/i18n";
import { useReveal, useStagger } from "@/lib/animations";

export default function Contact() {
  const { t } = useTranslation();
  const leftRef = useReveal<HTMLDivElement>({ y: 50 });
  const rightRef = useReveal<HTMLDivElement>({ y: 50, delay: 0.2 });
  const actionsRef = useStagger<HTMLDivElement>("[data-action]", { stagger: 0.15, y: 30 });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div ref={leftRef}>
            <div className="accent-blade mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2">{t("contact.tag")}</p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{t("contact.title")}</h2>
            </div>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">{t("contact.sub")}</p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">{t("contact.office")}</p>
                  <p className="text-on-surface-variant leading-relaxed">R. Guilherme Gomes Fernandes, n22A<br />Amadora, 2700-446 Portugal</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">{t("contact.phones")}</p>
                  <p className="text-on-surface-variant"><a href="tel:+351964456526" className="hover:text-primary transition-colors">964 456 526</a> / <a href="tel:+351933058761" className="hover:text-primary transition-colors">933 058 761</a></p>
                  <p className="text-on-surface-variant"><a href="tel:+351216039832" className="hover:text-primary transition-colors">216 039 832</a> <span className="text-on-surface-variant/50 text-sm">{t("contact.landline")}</span></p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">{t("contact.email.label")}</p>
                  <p className="text-on-surface-variant"><a href="mailto:geral.universomilionario@gmail.com" className="hover:text-primary transition-colors">{t("contact.email.value")}</a></p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">{t("contact.hours")}</p>
                  <p className="text-on-surface-variant">{t("contact.hours.weekday")}</p>
                  <p className="text-on-surface-variant">{t("contact.hours.weekend")}</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={rightRef} className="flex flex-col gap-6">
            <div className="flex-1 rounded-2xl overflow-hidden border border-outline-variant/10 min-h-[320px] bg-surface-container-high">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.8!2d-9.2308!3d38.7545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ1JzE2LjIiTiA5wrAxMyc1MC45Ilc!5e0!3m2!1spt-PT!2spt!4v1" width="100%" height="100%" style={{ border: 0, minHeight: 320, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização" />
            </div>
            <div ref={actionsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a data-action href="tel:+351964456526" className="flex items-center gap-4 bg-surface-container-high rounded-xl p-5 border border-outline-variant/8 hover:border-primary/20 transition-all group hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                </div>
                <div><p className="font-bold text-sm">{t("contact.call")}</p><p className="text-on-surface-variant text-xs">964 456 526</p></div>
              </a>
              <a data-action href="https://wa.me/351964456526?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-surface-container-high rounded-xl p-5 border border-outline-variant/8 hover:border-green-500/30 transition-all group hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-green-500/15 flex items-center justify-center text-green-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </div>
                <div><p className="font-bold text-sm">{t("contact.whatsapp")}</p><p className="text-on-surface-variant text-xs">{t("contact.whatsapp.sub")}</p></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
