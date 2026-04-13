export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-headline font-extrabold text-lg">
                UM
              </div>
              <div>
                <span className="font-headline font-bold text-sm tracking-widest uppercase block leading-tight text-on-surface">
                  Universo
                </span>
                <span className="text-on-surface-variant text-[10px] tracking-[0.25em] uppercase font-medium">
                  Milionário
                </span>
              </div>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Construção civil e limpezas profissionais em Portugal.
              Excelência, rigor e compromisso em cada projeto.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-primary mb-6">
              Empresa
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#home" },
                { label: "Sobre Nós", href: "#about" },
                { label: "Serviços", href: "#services" },
                { label: "Contactos", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-on-surface-variant text-sm hover:text-on-surface transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-primary mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              {[
                "Construção Civil",
                "Remodelações",
                "Limpezas Profissionais",
                "Manutenção Preventiva",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-on-surface-variant text-sm hover:text-on-surface transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-primary mb-6">
              Contactos
            </h4>
            <div className="space-y-3 text-on-surface-variant text-sm">
              <p>R. Guilherme Gomes Fernandes, n22A</p>
              <p>Amadora, 2725-627</p>
              <p className="pt-2">
                <a href="tel:+351964456526" className="hover:text-on-surface transition-colors">
                  964 456 526
                </a>{" "}
                /{" "}
                <a href="tel:+351933058761" className="hover:text-on-surface transition-colors">
                  933 058 761
                </a>
              </p>
              <p>
                <a href="tel:+351216039832" className="hover:text-on-surface transition-colors">
                  216 039 832
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-outline-variant/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant/60 text-xs">
            &copy; {new Date().getFullYear()} Universo Milionário LDA. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-on-surface-variant/60 text-xs hover:text-on-surface-variant transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-on-surface-variant/60 text-xs hover:text-on-surface-variant transition-colors">
              Termos e Condições
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
