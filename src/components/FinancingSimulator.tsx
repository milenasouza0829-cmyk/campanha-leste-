import React, { useState, useId } from 'react';
import { Calculator, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';

interface FinancingSimulatorProps {
  onOpenInterestModal: () => void;
}

export const FinancingSimulator: React.FC<FinancingSimulatorProps> = ({ onOpenInterestModal }) => {
  const propertyValueInputId = useId();
  const downPaymentPercentInputId = useId();

  const [propertyValue, setPropertyValue] = useState<number>(335000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [years, setYears] = useState<number>(30);
  const [selectedPreset, setSelectedPreset] = useState<string>('vila-ema');

  // Financial calculations
  const downPaymentValue = Math.round((propertyValue * downPaymentPercent) / 100);
  const financedAmount = propertyValue - downPaymentValue;
  const totalMonths = years * 12;

  // Approximate monthly interest rate (e.g. 9.99% a.a. ~ 0.8% a.m.)
  const monthlyRate = 0.008;
  // Standard price amortization formula
  const calculatedInstallment = Math.round(
    (financedAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
  // Recommended family gross income (installment should be <= 30% of income)
  const recommendedIncome = Math.round(calculatedInstallment / 0.3);

  const formatBRL = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  const setLocationPreset = (preset: 'mooca' | 'vila-ema' | 'tatuape', value: number) => {
    setSelectedPreset(preset);
    setPropertyValue(value);
  };

  return (
    <section id="simulador" className="py-20 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold">
              <Calculator className="w-3.5 h-3.5 text-amber-700" />
              <span>PLANEJAMENTO FINANCEIRO POR REGIÃO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
              Simule o Financiamento do Seu Apartamento
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-light">
              Calcule a parcela estimada para as opções na <strong>Mooca</strong>, <strong>Tatuapé</strong> ou <strong>Vila Ema</strong>. Durante a obra, você conta com fluxo direto com a construtora sem juros bancários.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong>Entrada Parcelada:</strong> parcele o sinal e mensais durante o período de obras.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong>Uso do FGTS:</strong> amortize parcelas ou complemente o valor de entrada.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong>Menores Taxas:</strong> parceria oficial com Caixa Econômica, Itaú, Santander e Bradesco.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="simulator-interest-cta"
                onClick={onOpenInterestModal}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md flex items-center space-x-2"
              >
                <span>Tenho Interesse • Selecionar Localidade</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Calculator Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-bold font-heading text-xl text-slate-900">
                    Calculadora Estimada de Financiamento
                  </h3>
                  <p className="text-xs text-slate-500">Selecione uma localidade de referência para preencher:</p>
                </div>
                <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium">
                  Taxa estimada Caixa
                </span>
              </div>

              {/* Location Presets */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-700 block">Opções por Localidade:</span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setLocationPreset('mooca', 279000)}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      selectedPreset === 'mooca'
                        ? 'border-emerald-500 bg-emerald-50/80 ring-1 ring-emerald-500'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center space-x-1 text-emerald-700 text-xs font-bold">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span>Mooca</span>
                    </div>
                    <span className="text-[11px] text-slate-600 block mt-0.5">R$ 279 mil</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setLocationPreset('vila-ema', 335000)}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      selectedPreset === 'vila-ema'
                        ? 'border-amber-500 bg-amber-50/80 ring-1 ring-amber-500'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center space-x-1 text-amber-800 text-xs font-bold">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span>Vila Ema</span>
                    </div>
                    <span className="text-[11px] text-slate-600 block mt-0.5">R$ 335 mil</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setLocationPreset('tatuape', 520000)}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      selectedPreset === 'tatuape'
                        ? 'border-blue-500 bg-blue-50/80 ring-1 ring-blue-500'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center space-x-1 text-blue-700 text-xs font-bold">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span>Tatuapé</span>
                    </div>
                    <span className="text-[11px] text-slate-600 block mt-0.5">R$ 520 mil</span>
                  </button>
                </div>
              </div>

              {/* Slider 1: Property Value */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor={propertyValueInputId} className="font-semibold text-slate-700">Valor do Imóvel:</label>
                  <span className="font-bold text-base text-amber-800 font-heading">
                    {formatBRL(propertyValue)}
                  </span>
                </div>
                <input
                  id={propertyValueInputId}
                  type="range"
                  min={250000}
                  max={1200000}
                  step={10000}
                  value={propertyValue}
                  onChange={(e) => {
                    setPropertyValue(Number(e.target.value));
                    setSelectedPreset('');
                  }}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>R$ 250 mil</span>
                  <span>R$ 1,2 milhão</span>
                </div>
              </div>

              {/* Slider 2: Down payment percent */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor={downPaymentPercentInputId} className="font-semibold text-slate-700">Entrada ({downPaymentPercent}%):</label>
                  <span className="font-bold text-base text-slate-900 font-heading">
                    {formatBRL(downPaymentValue)}
                  </span>
                </div>
                <input
                  id={downPaymentPercentInputId}
                  type="range"
                  min={10}
                  max={50}
                  step={5}
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>10% (Entrada mínima)</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Term Selector */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 block">
                  Prazo de Financiamento:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[15, 20, 30, 35].map((y) => (
                    <button
                      key={y}
                      id={`simulator-term-${y}`}
                      type="button"
                      onClick={() => setYears(y)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                        years === y
                          ? 'bg-amber-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {y} Anos
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Highlight Box */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-5 text-white space-y-4 shadow-inner">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wide block">
                      Parcela Mensal Estimada
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold font-heading text-amber-400">
                      {formatBRL(calculatedInstallment)}
                      <span className="text-xs font-normal text-slate-300">/mês</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wide block">
                      Saldo a Financiar
                    </span>
                    <span className="text-lg font-bold text-slate-200">
                      {formatBRL(financedAmount)}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
                  <span>Renda familiar sugerida: ~{formatBRL(recommendedIncome)}</span>
                  <span className="text-amber-400/90">*Simulação referencial</span>
                </div>
              </div>

              {/* CTA trigger */}
              <button
                id="simulator-action-btn"
                type="button"
                onClick={onOpenInterestModal}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <span>Tenho Interesse • Solicitar Proposta Oficial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
