import React from 'react';
import { MapPin, Navigation, TrainTrack, Sparkles, ExternalLink, Check, ShoppingBag, Utensils, Trees } from 'lucide-react';
import { GOOGLE_FORM_LINKS } from '../data/apartments';

export const LocationHighlightsSection: React.FC = () => {
  const locations = [
    {
      id: 'mooca',
      name: 'Mooca',
      badge: 'Opção 01 • Mooca',
      formTitle: 'Campanha Mooca',
      badgeColor: 'bg-emerald-600 text-white',
      accentColor: 'border-emerald-500 hover:border-emerald-600',
      tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      description: 'Um dos bairros mais amados e tradicionais de São Paulo, que alia rica herança cultural, gastronomia de primeira e fácil mobilidade com metrô e centro expandido.',
      metro: 'A 450m da Estação Bresser-Mooca (Linha 3-Vermelha)',
      points: [
        'Tradição gastronômica: cantinas italianas, confeitarias e pizzarias renomadas',
        'Próximo às Universidades São Judas e Anhembi Morumbi',
        'Fácil acesso à Radial Leste, Av. do Estado e Marginal Tietê',
        'Hospital São Cristóvão e Mooca Plaza Shopping a poucos minutos'
      ],
      icon: Utensils,
      formUrl: GOOGLE_FORM_LINKS.form1,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      startingPrice: 'A partir de R$ 279 mil'
    },
    {
      id: 'tatuape',
      name: 'Tatuapé',
      badge: 'Opção 02 • Tatuapé',
      formTitle: 'Campanha Tatuapé',
      badgeColor: 'bg-blue-600 text-white',
      accentColor: 'border-blue-500 hover:border-blue-600',
      tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
      description: 'A região mais nobre e valorizada da Zona Leste. Infraestrutura de ponta, shopping centers de prestígio, polo gastronômico cosmopolita e o verde do Parque CERET.',
      metro: 'Fácil acesso ao Metrô Tatuapé, Carrão e Radial Leste',
      points: [
        'A 5 minutos do Parque CERET e Shopping Anália Franco',
        'Rua Itapura e Euclides Pacheco: o maior polo gastronômico da Zona Leste',
        'Colégios tradicionais (Agostiniano Mendel, Drummond, Santo Antônio)',
        'Complexos corporativos, centros médicos e alta liquidez imobiliária'
      ],
      icon: ShoppingBag,
      formUrl: GOOGLE_FORM_LINKS.form2,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      startingPrice: 'A partir de R$ 520 mil'
    },
    {
      id: 'vila-ema',
      name: 'Vila Ema',
      badge: 'Opção 03 • Vila Ema',
      formTitle: 'Campanha Vila Ema',
      badgeColor: 'bg-amber-700 text-white',
      accentColor: 'border-amber-500 hover:border-amber-600',
      tagColor: 'text-amber-800 bg-amber-50 border-amber-200',
      description: 'Bairro residencial em expressiva valorização, arborizado e com rápida integração pelo Monotrilho Linha 15-Prata direto à Linha Verde do Metrô.',
      metro: 'A apenas 300m da Estação São Lucas (Monotrilho Linha 15)',
      points: [
        'A 300m do Monotrilho São Lucas com rápida conexão ao Metrô Vila Prudente',
        'Avenida Professor Luiz Ignácio Anhaia Mello e Salim Farah Maluf',
        'Supermercados Joanin, Dia, padarias artesanais e comércio consolidado',
        'Melhor valor de m² da região com altíssimo potencial de valorização'
      ],
      icon: Trees,
      formUrl: GOOGLE_FORM_LINKS.form3,
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      startingPrice: 'A partir de R$ 335 mil'
    }
  ];

  return (
    <section id="localidades" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold tracking-wide">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>LOCALIZAÇÕES PRIVILEGIADAS EM SÃO PAULO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Cada Opção em uma Localidade Estratégica
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            Conheça as vantagens exclusivas de morar ou investir na <strong>Mooca</strong>, no <strong>Tatuapé</strong> ou na <strong>Vila Ema</strong>. Clique no botão de interesse da localidade para abrir o formulário dedicado:
          </p>
        </div>

        {/* 3 Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc) => {
            const IconComponent = loc.icon;
            return (
              <div
                key={loc.id}
                id={`location-card-${loc.id}`}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  {/* Image header */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-bold shadow ${loc.badgeColor}`}>
                        {loc.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-xs text-amber-300 font-semibold block uppercase tracking-wider">
                        {loc.formTitle}
                      </span>
                      <h3 className="text-xl font-bold font-heading">
                        Bairro {loc.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {loc.description}
                    </p>

                    {/* Metro Distance Pill */}
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center space-x-2 text-xs font-medium text-slate-800 shadow-sm">
                      <TrainTrack className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{loc.metro}</span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 pt-1">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1.5">
                        <Sparkles className="w-3 h-3 text-amber-600" />
                        <span>Por que morar no {loc.name}?</span>
                      </h4>
                      <ul className="space-y-2">
                        {loc.points.map((pt, idx) => (
                          <li key={idx} className="text-xs text-slate-700 flex items-start space-x-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer with Price and Link */}
                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-200">
                    <span className="text-slate-500">Unidades a partir de:</span>
                    <span className="font-extrabold text-slate-900 text-sm">{loc.startingPrice}</span>
                  </div>

                  <a
                    id={`btn-location-interest-${loc.id}`}
                    href={loc.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-xs shadow-md flex items-center justify-center space-x-2 transition-all"
                  >
                    <span>Tenho Interesse na {loc.name}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <p className="text-[11px] text-center text-slate-400">
                    Link direto: Formulário Google da {loc.formTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
