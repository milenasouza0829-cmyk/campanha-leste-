import React from 'react';
import { Building2, ExternalLink, ShieldCheck, MapPin, Mail, Phone } from 'lucide-react';
import { GOOGLE_FORM_LINKS } from '../data/apartments';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white shadow-lg">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-heading text-white tracking-tight">
                VIVRE <span className="text-amber-400 font-light">RESIDENCE</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-light">
              Especialistas em lançamentos residenciais na <strong className="text-slate-200">Mooca</strong>, <strong className="text-slate-200">Tatuapé</strong> e <strong className="text-slate-200">Vila Ema</strong>. Plantas inteligentes, financiamento facilitado e atendimento personalizado.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Empreendimentos registrados e aprovados conforme a Lei 4.591/64</span>
            </div>
          </div>

          {/* Direct "Tenho Interesse" Forms Column */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Formulários Oficiais por Localidade
            </h4>
            <p className="text-xs text-slate-400">
              Clique para acessar diretamente o formulário do Google Forms de cada bairro:
            </p>
            <div className="space-y-2.5 pt-1">
              <a
                id="footer-interest-form-1"
                href={GOOGLE_FORM_LINKS.form1}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800/90 border border-slate-800 hover:border-emerald-500/50 transition-colors"
              >
                <div>
                  <span className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors block">
                    Opção 01 • Mooca (Campanha Mooca)
                  </span>
                  <span className="text-[11px] text-slate-400">Residencial Mooca Origens • A 450m do Metrô</span>
                </div>
                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-emerald-600/20 text-emerald-400 text-xs font-medium border border-emerald-500/30">
                  <span>Tenho Interesse</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              <a
                id="footer-interest-form-2"
                href={GOOGLE_FORM_LINKS.form2}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800/90 border border-slate-800 hover:border-blue-500/50 transition-colors"
              >
                <div>
                  <span className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors block">
                    Opção 02 • Tatuapé (Campanha Tatuapé)
                  </span>
                  <span className="text-[11px] text-slate-400">Grand Tatuapé Club & Living • Próx. Anália Franco</span>
                </div>
                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-blue-600/20 text-blue-400 text-xs font-medium border border-blue-500/30">
                  <span>Tenho Interesse</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              <a
                id="footer-interest-form-3"
                href={GOOGLE_FORM_LINKS.form3}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/50 transition-colors"
              >
                <div>
                  <span className="text-xs font-semibold text-white group-hover:text-amber-400 transition-colors block">
                    Opção 03 • Vila Ema (Campanha Vila Ema)
                  </span>
                  <span className="text-[11px] text-slate-400">Reserva Vila Ema Exclusive • A 300m da Estação São Lucas</span>
                </div>
                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-amber-600/20 text-amber-400 text-xs font-medium border border-amber-500/30">
                  <span>Tenho Interesse</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          </div>

          {/* Fast Navigation & Central de Atendimento */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Central de Atendimento
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>São Paulo - SP • Atendimento Mooca, Tatuapé e Vila Ema</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Plantão digital diário das 08h às 21h</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>vendas@vivreresidence.com.br</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <span className="text-[11px] text-slate-500 block">
                CRECI Jurídico: 34.892-J • Incorporações e Vendas
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Vivre Residence Lançamentos Imobiliários. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-slate-600 text-center sm:text-right">
            Imagens ilustrativas com sugestão de decoração. Valores e disponibilidade sujeitos a alteração sem aviso prévio.
          </p>
        </div>
      </div>
    </footer>
  );
};
