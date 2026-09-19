import React from 'react';
import { Building2, Sparkles, CheckCircle2, MapPin, ExternalLink, X } from 'lucide-react';
import { APARTMENTS } from '../data/apartments';
import { Apartment } from '../types';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedApartment?: Apartment | null;
}

export const InterestModal: React.FC<InterestModalProps> = ({
  isOpen,
  onClose,
  selectedApartment
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="interest-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        id="interest-modal-card"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 px-6 py-5 text-white flex items-center justify-between border-b border-amber-900/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-white">Tenho Interesse por Localidade</h3>
              <p className="text-xs text-slate-300">
                Selecione o bairro de sua preferência para preencher o formulário oficial
              </p>
            </div>
          </div>
          <button
            id="close-interest-modal-btn"
            onClick={onClose}
            aria-label="Fechar janela"
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start space-x-3">
            <Sparkles className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
            <p className="text-xs text-amber-900 leading-relaxed">
              Cada empreendimento possui o link correspondente da sua respectiva campanha (<strong>Mooca</strong>, <strong>Tatuapé</strong> ou <strong>Vila Ema</strong>). Escolha abaixo a sua localização preferida:
            </p>
          </div>

          <div className="space-y-3">
            {APARTMENTS.map((apt, index) => {
              const isPreselected = selectedApartment?.id === apt.id;
              return (
                <div
                  key={apt.id}
                  id={`modal-option-${apt.id}`}
                  className={`p-4 rounded-xl border transition-all ${
                    isPreselected
                      ? 'border-amber-500 bg-amber-50/50 shadow-md ring-1 ring-amber-400'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start space-x-3.5">
                      <img
                        src={apt.image}
                        alt={apt.name}
                        className="w-16 h-16 rounded-lg object-cover shrink-0 border border-slate-200"
                        loading="lazy"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                            apt.district === 'Mooca'
                              ? 'bg-emerald-100 text-emerald-800'
                              : apt.district === 'Tatuapé'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            Opção 0{index + 1} • {apt.district}
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium">
                            {apt.area} • {apt.bedrooms}
                          </span>
                        </div>
                        <h4 className="font-semibold text-slate-900 text-base mt-1">
                          {apt.name}
                        </h4>
                        <div className="flex items-center space-x-1 text-xs text-slate-600 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{apt.location}</span>
                        </div>
                        <p className="text-xs font-semibold text-slate-900 mt-1">
                          {apt.startingPrice}
                        </p>
                      </div>
                    </div>

                    <a
                      id={`btn-modal-interest-${apt.id}`}
                      href={apt.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm transition-all shadow-sm hover:shadow group shrink-0"
                    >
                      <span>Tenho Interesse • {apt.district}</span>
                      <ExternalLink className="w-4 h-4 ml-1.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Sem custos ou taxas para cadastro de interesse</span>
            </div>
            <span>Atendimento por especialista da região</span>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex justify-end">
          <button
            id="btn-close-modal-footer"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Fechar Janela
          </button>
        </div>
      </div>
    </div>
  );
};
