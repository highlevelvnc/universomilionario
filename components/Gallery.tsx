import Image from "next/image";

const photos = [
  { src: "/servico-1.jpg", alt: "Obra de construção - estrutura" },
  { src: "/servico-2.jpg", alt: "Obra de construção - edifício" },
  { src: "/servico-3.jpg", alt: "Projeto de grande escala" },
  { src: "/servico-4.jpg", alt: "Trabalho de armação" },
  { src: "/servico-5.jpg", alt: "Remodelação exterior" },
  { src: "/servico-6.jpg", alt: "Construção modular" },
  { src: "/servico-7.jpg", alt: "Estrutura em cofragem" },
  { src: "/servico-8.jpg", alt: "Construção de laje" },
];

export default function Gallery() {
  return (
    <section className="py-24 lg:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Portfólio
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Os Nossos Trabalhos
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Algumas das obras e projetos que realizámos ao longo dos anos em Portugal.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 || i === 5 ? "aspect-square" : "aspect-[4/3]"}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-medium">{photo.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
