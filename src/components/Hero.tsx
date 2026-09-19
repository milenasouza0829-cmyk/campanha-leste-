import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Check, KeyRound, MapPin, ExternalLink } from 'lucide-react';
import { GOOGLE_FORM_LINKS } from '../data/apartments';

interface HeroProps {
  onOpenInterestModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInterestModal }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-950 text-white">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="Edifício Residencial de Alto Padrão"
          className="w-full h-full object-cover object-center opacity-35 scale-105 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines and CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Launch badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>3 LANÇAMENTOS • MOOCA, TATUAPÉ E VILA EMA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.12]">
              Seu novo apartamento na <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Mooca, Tatuapé</span> ou <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Vila Ema</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Escolha a sua região preferida de São Paulo. Cada empreendimento possui tabela especial de abertura, fluxo de obra facilitado e formulário exclusivo de atendimento.
            </p>

            {/* Key badges with regions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="leading-tight">
                  <span className="text-xs font-bold text-white block">Mooca</span>
                  <span className="text-[11px] text-slate-400">Próx. Metrô Bresser</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="leading-tight">
                  <span className="text-xs font-bold text-white block">Tatuapé</span>
                  <span className="text-[11px] text-slate-400">Próx. Anália Franco</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="leading-tight">
                  <span className="text-xs font-bold text-white block">Vila Ema</span>
                  <span className="text-[11px] text-slate-400">Próx. Metrô São Lucas</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-interest-main-cta"
                onClick={onOpenInterestModal}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-base shadow-xl shadow-amber-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-3 text-center"
              >
                <span>Tenho Interesse</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                id="hero-view-apartments-btn"
                href="#apartamentos"
                className="px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-base border border-slate-700/80 transition-all text-center"
              >
                Ver os 3 Empreendimentos
              </a>
            </div>

            <p className="text-xs text-slate-400 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Receba a tabela oficial, plantas e simulação de crédito da sua região preferida.</span>
            </p>
          </div>

          {/* Right Column: Direct Quick-Access Cards to the 3 Forms with their exact locations */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-6 border border-slate-800 shadow-2xl space-y-4">
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-base">Escolha por Localidade</h3>
                  <p className="text-xs text-slate-400">Formulários específicos para cada bairro:</p>
                </div>
                <KeyRound className="w-5 h-5 text-amber-400" />
              </div>

              {/* Form Option 1: MOOCA */}
              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/50 transition-all group">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-emerald-400 inline" />
                    <span>Opção 01 • MOOCA</span>
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold">A partir de R$ 279 mil</span>
                </div>
                <h4 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                  Residencial Mooca Origens
                </h4>
                <p className="text-xs text-slate-300 mt-1 mb-2.5 flex items-center space-x-1">
                  <span>📍 Bairro Mooca • A 450m do Metrô Bresser-Mooca • Studios e 1-2 Dorms</span>
                </p>
                <a
                  id="hero-quick-form-1"
                  href={GOOGLE_FORM_LINKS.form1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors shadow"
                >
                  <span>Tenho Interesse na Mooca</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Form Option 2: TATUAPÉ */}
              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500/50 transition-all group">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 bg-blue-950/80 border border-blue-500/40 px-2 py-0.5 rounded flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-blue-400 inline" />
                    <span>Opção 02 • TATUAPÉ</span>
                  </span>
                  <span className="text-xs text-blue-400 font-semibold">A partir de R$ 520 mil</span>
                </div>
                <h4 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                  Grand Tatuapé Club & Living
                </h4>
                <p className="text-xs text-slate-300 mt-1 mb-2.5 flex items-center space-x-1">
                  <span>📍 Bairro Tatuapé • Próx. Parque CERET e Shopping Anália Franco • 2 e 3 Dorms</span>
                </p>
                <a
                  id="hero-quick-form-2"
                  href={GOOGLE_FORM_LINKS.form2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors shadow"
                >
                  <span>Tenho Interesse no Tatuapé</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Form Option 3: VILA EMA */}
              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-500/50 transition-all group">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 border border-amber-500/40 px-2 py-0.5 rounded flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-amber-400 inline" />
                    <span>Opção 03 • VILA EMA</span>
                  </span>
                  <span className="text-xs text-amber-400 font-semibold">A partir de R$ 335 mil</span>
                </div>
                <h4 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                  Reserva Vila Ema Exclusive
                </h4>
                <p className="text-xs text-slate-300 mt-1 mb-2.5 flex items-center space-x-1">
                  <span>📍 Bairro Vila Ema • A 300m da Estação São Lucas (Linha 15) • 2 e 3 Dorms</span>
                </p>
                <a
                  id="hero-quick-form-3"
                  href={GOOGLE_FORM_LINKS.form3}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors shadow"
                >
                  <span>Tenho Interesse na Vila Ema</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
