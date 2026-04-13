import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-surface-dim relative noise-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Decorative corner */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/40 z-20" />

            {/* Main image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/servico-1.jpg"
                alt="Obra de construção Universo Milionário"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 glass-card p-6 rounded-lg border border-outline-variant/15 z-20 shadow-2xl">
              <p className="text-4xl font-extrabold text-primary mb-1">15+</p>
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant">
                Anos de Experiência
              </p>
            </div>

            {/* Second image overlapping */}
            <div className="absolute -bottom-12 left-8 w-40 h-28 rounded-lg overflow-hidden border-2 border-surface shadow-xl z-10 hidden lg:block">
              <Image
                src="/servico-4.jpg"
                alt="Equipa em obra"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:pl-4 mt-8 lg:mt-0">
            <div className="accent-blade mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2">
                Quem Somos
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Compromisso com a Perfeição em Cada Detalhe
              </h2>
            </div>

            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              A <strong className="text-on-surface">Universo Milionário LDA</strong> é
              uma referência no mercado de construção civil e limpezas profissionais
              em Portugal. Sediados na Amadora, servimos todo o território nacional
              com padrões de qualidade elevados.
            </p>

            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              Cada projeto é tratado com rigor técnico, transparência e atenção ao detalhe.
              Utilizamos materiais certificados, tecnologias atuais e uma equipa experiente
              para garantir resultados que superam expectativas.
            </p>

            {/* Feature list */}
            <div className="space-y-5">
              {[
                "Equipa Técnica Especializada e Certificada",
                "Gestão de Projetos com Prazos Rigorosos",
                "Materiais de Primeira Linha e Acabamento Premium",
                "Cobertura em Todo o Território Nacional",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
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
