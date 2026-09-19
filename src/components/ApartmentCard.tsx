import React, { useState } from 'react';
import { 
  Maximize2, 
  MapPin, 
  BedDouble, 
  Bath, 
  Car, 
  Sparkles, 
  Check, 
  ExternalLink, 
  Copy, 
  CheckCheck,
  TrainTrack
} from 'lucide-react';
import { Apartment } from '../types';

interface ApartmentCardProps {
  apartment: Apartment;
  index: number;
  onOpenGallery: (apartment: Apartment) => void;
}

export const ApartmentCard: React.FC<ApartmentCardProps> = ({
  apartment,
  index,
  onOpenGallery
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(apartment.formUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <article
      id={`apartment-card-${apartment.id}`}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={apartment.image}
          alt={apartment.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-black/30" />

        {/* Status & Tag */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 items-center">
          <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${apartment.tagColor}`}>
            {apartment.tag}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900/90 backdrop-blur-sm text-white border border-slate-700">
            {apartment.status}
          </span>
        </div>

        {/* Gallery button */}
        <button
          id={`btn-gallery-view-${apartment.id}`}
          onClick={() => onOpenGallery(apartment)}
          className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white text-xs font-medium flex items-center space-x-1.5 transition-colors border border-white/20"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Ver Fotos ({apartment.gallery.length})</span>
        </button>

        {/* Neighborhood & District overlay */}
        <div className="absolute bottom-3 left-4 text-white text-xs font-medium drop-shadow flex flex-col">
          <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 w-fit">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-bold text-amber-300">{apartment.district}</span>
            <span className="text-slate-300">• {apartment.neighborhood}</span>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          {/* Subtitle & Title */}
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
              {apartment.subtitle}
            </span>
            <h3 className="text-2xl font-bold font-heading text-slate-900 leading-tight">
              {apartment.name}
            </h3>
          </div>

          {/* Location highlight box */}
          <div className="mt-3 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 space-y-1">
            <div className="flex items-center space-x-1.5 font-bold text-amber-900">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Localização: {apartment.location}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-700 font-medium pl-5">
              <TrainTrack className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>{apartment.metroStation}</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
            {apartment.description}
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-4 gap-2 py-4 my-4 border-y border-slate-100 text-center">
            <div className="p-2 rounded-lg bg-slate-50">
              <span className="text-[11px] text-slate-500 block">Área</span>
              <span className="text-sm font-bold text-slate-900">{apartment.area}</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-50">
              <div className="flex items-center justify-center space-x-1 text-slate-500 text-[11px]">
                <BedDouble className="w-3 h-3" />
                <span>Dorm.</span>
              </div>
              <span className="text-xs font-bold text-slate-900">{apartment.bedrooms}</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-50">
              <div className="flex items-center justify-center space-x-1 text-slate-500 text-[11px]">
                <Bath className="w-3 h-3" />
                <span>Suítes</span>
              </div>
              <span className="text-xs font-bold text-slate-900">{apartment.suites}</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-50">
              <div className="flex items-center justify-center space-x-1 text-slate-500 text-[11px]">
                <Car className="w-3 h-3" />
                <span>Vagas</span>
              </div>
              <span className="text-xs font-bold text-slate-900">{apartment.parkingSpots}</span>
            </div>
          </div>

          {/* Highlights checklist */}
          <div className="space-y-2 mb-4">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Destaques de {apartment.district}:</span>
            </h4>
            <ul className="space-y-1.5">
              {apartment.highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-start space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing & CTA Section */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[11px] text-slate-500 uppercase tracking-wide block">Investimento ({apartment.district})</span>
              <span className="text-lg font-extrabold text-slate-900">{apartment.startingPrice}</span>
            </div>
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              {apartment.estimatedInstallment}
            </span>
          </div>

          {/* Primary CTA Button for Tenho Interesse */}
          <div className="space-y-2">
            <a
              id={`btn-interest-apartment-${apartment.id}`}
              href={apartment.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-base shadow-md shadow-amber-600/25 hover:shadow-lg transition-all flex items-center justify-center space-x-2 text-center group/btn active:scale-[0.99]"
            >
              <span>Tenho Interesse • {apartment.district}</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>

            <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Formulário Campanha {apartment.district}</span>
              </span>

              <button
                id={`btn-copy-form-${apartment.id}`}
                onClick={handleCopyLink}
                className="hover:text-amber-700 transition-colors flex items-center space-x-1 underline decoration-dotted"
                title={`Copiar link direto do formulário de ${apartment.district}`}
              >
                {copied ? (
                  <>
                    <CheckCheck className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Link copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copiar link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
