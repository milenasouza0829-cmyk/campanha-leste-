import React, { useState } from 'react';
import { Sparkles, Building2, MapPin, ExternalLink } from 'lucide-react';
import { APARTMENTS, GOOGLE_FORM_LINKS } from '../data/apartments';
import { ApartmentCard } from './ApartmentCard';
import { Apartment } from '../types';

interface DevelopmentsSectionProps {
  onOpenGallery: (apartment: Apartment) => void;
  onOpenInterestModal: () => void;
}

export const DevelopmentsSection: React.FC<DevelopmentsSectionProps> = ({
  onOpenGallery,
  onOpenInterestModal
}) => {
  const [filter, setFilter] = useState<'all' | 'mooca' | 'tatuape' | 'vila-ema'>('all');

  const filteredApartments = APARTMENTS.filter((apt) => {
    if (filter === 'all') return true;
    if (filter === 'mooca') return apt.district.toLowerCase().includes('mooca');
    if (filter === 'tatuape') return apt.district.toLowerCase().includes('tatuapé') || apt.district.toLowerCase().includes('tatuape');
    if (filter === 'vila-ema') return apt.district.toLowerCase().includes('ema');
    return true;
  });

  return (
    <section id="apartamentos" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>3 LOCALIDADES DE DESTAQUE EM SÃO PAULO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Escolha o Seu Próximo Apartamento por Localidade
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            Três empreendimentos estrategicamente localizados na <strong className="text-emerald-700 font-semibold">Mooca</strong>, no <strong className="text-blue-700 font-semibold">Tatuapé</strong> e na <strong className="text-amber-800 font-semibold">Vila Ema</strong>. Clique em{' '}
            <strong className="text-amber-800 font-semibold">"Tenho Interesse"</strong> da região desejada para preencher o formulário oficial e garantir sua condição especial.
          </p>

          {/* Filter tabs by location */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              id="filter-all-btn"
              onClick={() => setFilter('all')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Todas as Localidades (3)
            </button>
            <button
              id="filter-mooca-btn"
              onClick={() => setFilter('mooca')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1.5 ${
                filter === 'mooca'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-white text-slate-700 hover:bg-emerald-50 border border-slate-200'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>Opção 01 • Mooca</span>
            </button>
            <button
              id="filter-tatuape-btn"
              onClick={() => setFilter('tatuape')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1.5 ${
                filter === 'tatuape'
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-white text-slate-700 hover:bg-blue-50 border border-slate-200'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>Opção 02 • Tatuapé</span>
            </button>
            <button
              id="filter-vila-ema-btn"
              onClick={() => setFilter('vila-ema')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1.5 ${
                filter === 'vila-ema'
                  ? 'bg-amber-700 text-white shadow'
                  : 'bg-white text-slate-700 hover:bg-amber-50 border border-slate-200'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Opção 03 • Vila Ema</span>
            </button>
          </div>
        </div>

        {/* Apartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApartments.map((apartment, index) => (
            <ApartmentCard
              key={apartment.id}
              apartment={apartment}
              index={index}
              onOpenGallery={onOpenGallery}
            />
          ))}
        </div>

        {/* Quick Summary Strip of all 3 Google Forms with explicit locations */}
        <div className="mt-16 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <h3 className="text-lg font-bold font-heading text-slate-900 flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-amber-600" />
                <span>Acesso Direto ao Formulário de Cada Localidade</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Preencha o formulário específico do bairro para receber plantas, condições financeiras e tabela de preços:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
              <a
                id="strip-form-link-mooca"
                href={GOOGLE_FORM_LINKS.form1}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-between transition-colors shadow-sm group"
              >
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-emerald-400 font-bold uppercase">Opção 01</span>
                  <span className="font-bold">Campanha Mooca</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 ml-3 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                id="strip-form-link-tatuape"
                href={GOOGLE_FORM_LINKS.form2}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-between transition-colors shadow-sm group"
              >
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-blue-400 font-bold uppercase">Opção 02</span>
                  <span className="font-bold">Campanha Tatuapé</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 ml-3 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                id="strip-form-link-vila-ema"
                href={GOOGLE_FORM_LINKS.form3}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-amber-700 text-white text-xs font-semibold flex items-center justify-between transition-colors shadow-sm group"
              >
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-amber-400 font-bold uppercase">Opção 03</span>
                  <span className="font-bold">Campanha Vila Ema</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 ml-3 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
