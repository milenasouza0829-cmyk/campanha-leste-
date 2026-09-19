import React from 'react';
import { 
  Waves, 
  Dumbbell, 
  UtensilsCrossed, 
  Briefcase, 
  ShieldCheck, 
  Zap, 
  CheckCircle2 
} from 'lucide-react';
import { AMENITIES } from '../data/apartments';

export const AmenitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves':
        return <Waves className="w-6 h-6 text-amber-500" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-amber-500" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-amber-500" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-500" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/20 inline-block">
            VIVER COM MÁXIMO CONFORTO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Estrutura de Clube & Lazer Completo
          </h2>
          <p className="text-slate-300 text-base leading-relaxed font-light">
            Áreas comuns entregues totalmente decoradas e equipadas por arquitetos renomados. 
            Mais qualidade de vida, segurança para a sua família e valorização patrimonial garantida.
          </p>
        </div>

        {/* Grid of Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((item, idx) => (
            <div
              key={idx}
              id={`amenity-item-${idx}`}
              className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-500/50 transition-all hover:bg-slate-800/90 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:border-amber-500/40 group-hover:scale-105 transition-all">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Architecture quote / banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-slate-800 via-slate-800/90 to-amber-950/40 border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold font-heading text-white">
              Garantia de Qualidade Construtiva
            </h4>
            <p className="text-sm text-slate-300">
              Projetos com certificação de sustentabilidade, acústica testada em laboratório e materiais de primeira linha.
            </p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <div className="text-center px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-700">
              <span className="block text-xl font-bold text-amber-400">100%</span>
              <span className="text-[11px] text-slate-400">Entregue no Prazo</span>
            </div>
            <div className="text-center px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-700">
              <span className="block text-xl font-bold text-amber-400">5 Anos</span>
              <span className="text-[11px] text-slate-400">Garantia Estrutural</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
