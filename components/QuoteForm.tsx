"use client";

import { useState, type FormEvent } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="quote" className="py-24 lg:py-32 bg-surface relative noise-overlay">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Peça Já
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Orçamento Gratuito
          </h2>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
            Preencha o formulário e a nossa equipa entrará em contacto consigo
            em menos de 24 horas com uma proposta personalizada.
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-card border border-outline-variant/10 rounded-2xl p-8 lg:p-12 shadow-2xl shadow-black/20">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Pedido Enviado!</h3>
              <p className="text-on-surface-variant text-lg">
                Obrigado pelo seu contacto. A nossa equipa responderá brevemente.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="O seu nome"
                    className="w-full bg-surface-container-highest/80 border border-outline-variant/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="exemplo@email.com"
                    className="w-full bg-surface-container-highest/80 border border-outline-variant/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant mb-2">
                    Telemóvel
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+351 9XX XXX XXX"
                    className="w-full bg-surface-container-highest/80 border border-outline-variant/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant mb-2">
                    Tipo de Serviço
                  </label>
                  <select
                    required
                    className="w-full bg-surface-container-highest/80 border border-outline-variant/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3.5 text-on-surface transition-all outline-none appearance-none"
                  >
                    <option value="">Selecione...</option>
                    <option value="construcao">Construção Civil</option>
                    <option value="remodelacao">Remodelações</option>
                    <option value="limpeza">Limpezas Profissionais</option>
                    <option value="manutencao">Manutenção</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant mb-2">
                  Detalhes do Projeto
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Descreva brevemente o que precisa — tipo de obra, localização, dimensão estimada..."
                  className="w-full bg-surface-container-highest/80 border border-outline-variant/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-light transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-primary/20"
              >
                Enviar Pedido de Orçamento
              </button>

              <p className="text-center text-on-surface-variant/60 text-xs">
                Ao submeter, concorda com a nossa política de privacidade. Não partilhamos os seus dados.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
