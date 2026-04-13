import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Universo Milionário LDA",
  description: "Política de privacidade e proteção de dados pessoais da Universo Milionário LDA.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <header className="bg-surface-container border-b border-outline-variant/8">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-headline font-extrabold text-lg">
              UM
            </div>
            <span className="font-headline font-bold text-sm tracking-widest uppercase">Universo Milionário</span>
          </Link>
          <Link href="/" className="text-sm text-primary hover:text-primary-light transition-colors">
            &larr; Voltar ao site
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Política de Privacidade</h1>
        <p className="text-on-surface-variant mb-12">Última atualização: Abril 2026</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">1. Responsável pelo Tratamento</h2>
            <p>A <strong className="text-on-surface">Universo Milionário LDA</strong>, com sede na R. Guilherme Gomes Fernandes, n22A, Amadora, 2725-627, é a entidade responsável pelo tratamento dos dados pessoais recolhidos através deste website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">2. Dados Recolhidos</h2>
            <p>Recolhemos apenas os dados que nos fornece voluntariamente através do formulário de contacto:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telemóvel</li>
              <li>Tipo de serviço pretendido</li>
              <li>Descrição do projeto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">3. Finalidade do Tratamento</h2>
            <p>Os dados são utilizados exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Responder ao seu pedido de orçamento</li>
              <li>Entrar em contacto consigo sobre o projeto solicitado</li>
              <li>Prestar o serviço contratado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">4. Base Legal</h2>
            <p>O tratamento dos seus dados baseia-se no seu consentimento expresso ao submeter o formulário e na execução de medidas pré-contratuais, nos termos do artigo 6.º do Regulamento Geral sobre a Proteção de Dados (RGPD).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">5. Partilha de Dados</h2>
            <p>Não partilhamos, vendemos ou cedemos os seus dados pessoais a terceiros. Os dados são utilizados exclusivamente pela Universo Milionário LDA para os fins descritos.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">6. Conservação dos Dados</h2>
            <p>Os dados pessoais são conservados apenas durante o período necessário para a finalidade para a qual foram recolhidos, ou conforme exigido por lei.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">7. Os Seus Direitos</h2>
            <p>Nos termos do RGPD, tem direito a:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Aceder aos seus dados pessoais</li>
              <li>Retificar dados incorretos</li>
              <li>Solicitar a eliminação dos dados</li>
              <li>Limitar ou opor-se ao tratamento</li>
              <li>Portabilidade dos dados</li>
              <li>Retirar o consentimento a qualquer momento</li>
            </ul>
            <p className="mt-3">Para exercer estes direitos, contacte-nos através do e-mail <strong className="text-on-surface">geral@universomilionario.pt</strong> ou pelo telefone 964 456 526.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">8. Cookies</h2>
            <p>Este website utiliza apenas cookies estritamente necessários ao funcionamento. Não utilizamos cookies de rastreamento ou publicidade. Pode gerir as suas preferências de cookies a qualquer momento através do banner exibido na primeira visita.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">9. Contacto</h2>
            <p>Para qualquer questão relativa à proteção dos seus dados:</p>
            <p className="mt-2"><strong className="text-on-surface">Universo Milionário LDA</strong><br />R. Guilherme Gomes Fernandes, n22A, Amadora, 2725-627<br />E-mail: geral@universomilionario.pt<br />Telefone: 964 456 526</p>
          </section>
        </div>
      </main>
    </div>
  );
}
