import Image from "next/image";

const services = [
  {
    title: "Construção Civil",
    description:
      "Projetos estruturais completos — moradias, edifícios e espaços comerciais. Do alicerce ao acabamento, com engenharia de excelência.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
      </svg>
    ),
    image: "/servico-2.jpg",
    span: "lg:col-span-7",
    large: true,
  },
  {
    title: "Limpezas Profissionais",
    description:
      "Higienização profunda pós-obra, manutenção de escritórios, residências e espaços comerciais com equipamentos industriais.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    image: "/servico-8.jpg",
    span: "lg:col-span-5",
    large: false,
  },
  {
    title: "Remodelações",
    description:
      "Renovação de interiores com design moderno — cozinhas, casas de banho, escritórios e espaços de habitação. Transformamos o seu espaço.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1M20.49 3.51L11.42 12.58m-.34 2.59l-5.1-5.1m14.24-3.37l-5.1 5.1M3.75 21h16.5" />
      </svg>
    ),
    image: "/servico-5.jpg",
    span: "lg:col-span-5",
    large: false,
  },
  {
    title: "Manutenção Preventiva",
    description:
      "Serviços preventivos e corretivos para conservar a integridade da sua estrutura. Planos personalizados de manutenção regular.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a7.002 7.002 0 019.9-9.9l-5.1 5.1m0 0l5.1-5.1a7.002 7.002 0 010 9.9m-9.9 0a7.002 7.002 0 009.9 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: "/servico-7.jpg",
    span: "lg:col-span-7",
    large: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            O Que Fazemos
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Soluções Completas para o Seu Imóvel
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Do primeiro tijolo à manutenção diária, oferecemos um ecossistema
            completo de serviços de construção e limpeza.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className={`${service.span} group relative overflow-hidden rounded-xl bg-surface-container-high border border-outline-variant/8 hover:border-primary/30 transition-all duration-500`}
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-[0.07] group-hover:opacity-[0.15] group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="relative z-10 p-8 lg:p-10 flex flex-col justify-between min-h-[320px]">
                <div>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                    {service.icon}
                  </div>
                  <h3 className={`font-bold mb-4 ${service.large ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"}`}>
                    {service.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-primary font-semibold mt-6 group-hover:gap-3 transition-all duration-300"
                >
                  Pedir Orçamento
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
