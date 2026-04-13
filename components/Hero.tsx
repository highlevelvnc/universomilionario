import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden noise-overlay"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/servico-3.jpg"
          alt="Obra de construção civil"
          fill
          className="object-cover opacity-20"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/85 to-surface" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-light">
              Construção &amp; Limpezas em Portugal
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-[-0.03em] leading-[0.9] mb-8">
            Obras com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Excelência
            </span>
            <br />
            <span className="text-on-surface-variant">Resultados que</span>
            <br />
            Perduram.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed font-light">
            Construímos e mantemos espaços com rigor técnico e acabamento
            de referência. Do projeto à limpeza final, cada detalhe conta.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-light hover:scale-[1.02] transition-all duration-300 active:scale-95 shadow-xl shadow-primary/20"
            >
              Pedir Orçamento Grátis
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-outline-variant/30 text-on-surface px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/5 transition-all duration-300"
            >
              Ver Serviços
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-16 pt-8 border-t border-outline-variant/10 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { number: "500+", label: "Projetos Entregues" },
              { number: "15+", label: "Anos de Experiência" },
              { number: "100%", label: "Compromisso" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-extrabold text-primary">{stat.number}</p>
                <p className="text-xs text-on-surface-variant mt-1 tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-on-surface-variant/30 flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-on-surface-variant/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
