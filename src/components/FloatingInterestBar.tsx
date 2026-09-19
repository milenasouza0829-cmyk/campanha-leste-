import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface FloatingInterestBarProps {
  onOpenInterestModal: () => void;
}

export const FloatingInterestBar: React.FC<FloatingInterestBarProps> = ({ onOpenInterestModal }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (e.g. 400px)
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="floating-interest-bar"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 w-11/12 max-w-md animate-fade-in"
    >
      <div className="bg-slate-950/95 backdrop-blur-md rounded-2xl p-2.5 shadow-2xl border border-amber-500/30 flex items-center justify-between text-white">
        <div className="pl-3 flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
          <div className="leading-tight">
            <span className="text-xs font-bold text-white block">Tabela Promocional</span>
            <span className="text-[10px] text-slate-300">Unidades de lançamento disponíveis</span>
          </div>
        </div>

        <button
          id="btn-floating-interest"
          onClick={onOpenInterestModal}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-xs shadow-lg flex items-center space-x-1.5 transition-all transform active:scale-95 shrink-0"
        >
          <span>Tenho Interesse</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
