import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Apartment } from '../types';

interface GalleryModalProps {
  apartment: Apartment | null;
  isOpen: boolean;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  apartment,
  isOpen,
  onClose
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!isOpen || !apartment) return null;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % apartment.gallery.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + apartment.gallery.length) % apartment.gallery.length);
  };

  return (
    <div
      id="gallery-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        id="gallery-modal-content"
        className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 text-white">
          <div className="flex items-center space-x-2">
            <ImageIcon className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-sm">{apartment.name}</span>
            <span className="text-xs text-slate-400 hidden sm:inline">• Foto {activeIndex + 1} de {apartment.gallery.length}</span>
          </div>
          <button
            id="close-gallery-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main image viewer */}
        <div className="relative aspect-video sm:h-[480px] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={apartment.gallery[activeIndex]}
            alt={`${apartment.name} - Imagem ${activeIndex + 1}`}
            className="w-full h-full object-contain"
          />

          {/* Navigation controls */}
          {apartment.gallery.length > 1 && (
            <>
              <button
                id="gallery-prev-btn"
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                id="gallery-next-btn"
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails + CTA footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex space-x-2 overflow-x-auto max-w-full pb-1">
            {apartment.gallery.map((img, idx) => (
              <button
                key={idx}
                id={`thumb-btn-${idx}`}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  activeIndex === idx ? 'border-amber-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <a
            id={`btn-gallery-interest-${apartment.id}`}
            href={apartment.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition-all text-center shrink-0 shadow-lg"
          >
            Tenho Interesse neste Apartamento
          </a>
        </div>
      </div>
    </div>
  );
};
