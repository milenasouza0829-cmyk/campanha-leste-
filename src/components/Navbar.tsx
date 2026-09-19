import React, { useState, useEffect } from 'react';
import { Building2, PhoneCall, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenInterestModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInterestModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md shadow-lg py-3 border-b border-slate-800/80'
          : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white shadow-lg shadow-amber-600/30 group-hover:bg-amber-500 transition-colors">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-bold font-heading text-white tracking-tight flex items-center">
              VIVRE <span className="text-amber-400 ml-1.5 font-light">RESIDENCE</span>
            </span>
            <span className="text-[10px] text-slate-300 block -mt-1 tracking-wider uppercase font-medium">
              Lançamentos & Vendas
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-slate-200">
          <a
            href="#apartamentos"
            className="hover:text-amber-400 transition-colors"
          >
            Apartamentos
          </a>
          <a
            href="#localidades"
            className="hover:text-amber-400 transition-colors flex items-center space-x-1"
          >
            <span>Localidades (Mooca, Tatuapé, Vila Ema)</span>
          </a>
          <a
            href="#diferenciais"
            className="hover:text-amber-400 transition-colors"
          >
            Diferenciais
          </a>
          <a
            href="#simulador"
            className="hover:text-amber-400 transition-colors"
          >
            Simulador
          </a>
          <a
            href="#duvidas"
            className="hover:text-amber-400 transition-colors"
          >
            Dúvidas
          </a>
        </nav>

        {/* Desktop Action */}
        <div className="hidden sm:flex items-center space-x-4">
          <button
            id="nav-interest-cta-btn"
            onClick={onOpenInterestModal}
            className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold text-sm shadow-md shadow-amber-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center space-x-2"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            id="nav-interest-mobile-quick"
            onClick={onOpenInterestModal}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-amber-600 text-white shadow"
          >
            Tenho Interesse
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-200 hover:bg-white/10"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-5 text-white space-y-4 shadow-2xl animate-fade-in"
        >
          <a
            href="#apartamentos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-amber-400 py-1"
          >
            Opções de Apartamentos
          </a>
          <a
            href="#localidades"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-amber-400 py-1"
          >
            Localidades (Mooca, Tatuapé, Vila Ema)
          </a>
          <a
            href="#diferenciais"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-amber-400 py-1"
          >
            Diferenciais de Lazer & Segurança
          </a>
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-amber-400 py-1"
          >
            Simulador de Financiamento
          </a>
          <a
            href="#duvidas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-amber-400 py-1"
          >
            Perguntas Frequentes
          </a>

          <div className="pt-2 border-t border-slate-800">
            <button
              id="mobile-menu-interest-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInterestModal();
              }}
              className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-center flex items-center justify-center space-x-2"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
