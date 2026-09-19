import { Apartment } from '../types';

export const GOOGLE_FORM_LINKS = {
  form1: 'https://docs.google.com/forms/d/e/1FAIpQLSdk6ZRy7DmLA-tjAwBEJLM_vvUJpLPMV33vuOz2CdBSCPaLPQ/viewform?usp=publish-editor',
  form2: 'https://docs.google.com/forms/d/e/1FAIpQLSeRxyxY8_YK41tUiDCVkEjAzoptFNJLFPJTZH1umTElkHHQCA/viewform?usp=publish-editor',
  form3: 'https://docs.google.com/forms/d/e/1FAIpQLSe7TSwPcBLFHNlt7JGqw6y2alpyI2w2Dm_PLFCJVc0uJwVlZA/viewform?usp=publish-editor',
};

export const APARTMENTS: Apartment[] = [
  {
    id: 'opt-1-mooca',
    name: 'Residencial Mooca Origens',
    district: 'Mooca',
    tag: 'Opção 01 • Mooca',
    tagColor: 'bg-emerald-600 text-white',
    subtitle: 'Studios e Apartamentos de 1 e 2 Dormitórios na Mooca',
    description: 'Localização tradicional e consagrada na Mooca (Campanha Mooca). Una a vibrante gastronomia e charme do bairro à comodidade de morar a poucos passos da estação de metrô.',
    location: 'Mooca • São Paulo, SP (Próx. Metrô Bresser-Mooca)',
    neighborhood: 'Bairro Mooca (Zona Leste / Centro Expandido)',
    metroStation: 'A 450m da Estação Bresser-Mooca',
    area: '32 a 48 m²',
    bedrooms: 'Studios e 1 a 2 Dormitórios',
    suites: 'Opção c/ Suíte',
    parkingSpots: 'Opção de Vaga ou Moto/Bike',
    startingPrice: 'A partir de R$ 279.000',
    estimatedInstallment: 'Parcelas a partir de R$ 1.190/mês',
    formUrl: GOOGLE_FORM_LINKS.form1,
    targetAudience: 'Investidores, estudantes e jovens casais',
    status: 'Lançamento',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Localizado no coração da Mooca: gastronomia, cantinas e conveniência',
      'A 450m do Metrô Bresser-Mooca e próximo à Universidade São Judas',
      'Rooftop panorâmico com piscina e vista do skyline paulistano',
      'Coworking equipado com internet fibra e cabines individuais',
      'Lavanderia compartilhada OMO e fechadura eletrônica digital'
    ]
  },
  {
    id: 'opt-2-tatuape',
    name: 'Grand Tatuapé Club & Living',
    district: 'Tatuapé',
    tag: 'Opção 02 • Tatuapé',
    tagColor: 'bg-blue-600 text-white',
    subtitle: 'Apartamentos Familiares de 2 e 3 Dormitórios com Suíte',
    description: 'Viva no coração nobre do Tatuapé (Campanha Tatuapé), próximo ao Shopping Anália Franco e Parque CERET. Um verdadeiro resort urbano com infraestrutura de lazer completa.',
    location: 'Tatuapé • São Paulo, SP (Região Nobre / Anália Franco)',
    neighborhood: 'Bairro Tatuapé (Zona Leste Nobre)',
    metroStation: 'Fácil acesso ao Metrô Tatuapé e Radial Leste',
    area: '65 a 92 m²',
    bedrooms: '2 e 3 Dormitórios',
    suites: '1 a 2 Suítes',
    parkingSpots: '1 a 2 Vagas Cobertas',
    startingPrice: 'A partir de R$ 520.000',
    estimatedInstallment: 'Parcelas a partir de R$ 2.350/mês',
    formUrl: GOOGLE_FORM_LINKS.form2,
    targetAudience: 'Famílias que buscam lazer, segurança e espaço',
    status: 'Sucesso de Vendas',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Endereço prestigiado no Tatuapé, próximo ao Parque CERET e Shopping',
      'Varanda Gourmet ampla integrada à cozinha com churrasqueira a carvão',
      'Complexo aquático com piscina aquecida, raia de 25m e deck molhado',
      'Academia com equipamentos de ponta e consultoria esportiva',
      'Segurança com guarita blindada, biometria e vaga com tomada elétrica'
    ]
  },
  {
    id: 'opt-3-vila-ema',
    name: 'Reserva Vila Ema Exclusive',
    district: 'Vila Ema',
    tag: 'Opção 03 • Vila Ema',
    tagColor: 'bg-amber-700 text-white',
    subtitle: 'Apartamentos Confort de 2 e 3 Dormitórios com Varanda',
    description: 'Excelente custo-benefício e alto potencial de valorização na Vila Ema (Campanha Vila Ema). Bairro arborizado com mobilidade ágil através da Estação São Lucas e Av. Anhaia Mello.',
    location: 'Vila Ema • São Paulo, SP (Próx. Estação São Lucas)',
    neighborhood: 'Bairro Vila Ema / Vila Prudente',
    metroStation: 'A 300m da Estação São Lucas (Linha 15-Prata)',
    area: '48 a 72 m²',
    bedrooms: '2 e 3 Dormitórios',
    suites: 'Opção c/ Suíte',
    parkingSpots: '1 Vaga de Garagem Coberta',
    startingPrice: 'A partir de R$ 335.000',
    estimatedInstallment: 'Parcelas a partir de R$ 1.450/mês',
    formUrl: GOOGLE_FORM_LINKS.form3,
    targetAudience: 'Primeiro imóvel, famílias e investimento seguro',
    status: 'Lançamento Exclusivo',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'A apenas 300m da Estação São Lucas com ligação direta ao Metrô Vila Prudente',
      'Fácil acesso à Av. Professor Luiz Ignácio Anhaia Mello e Salim Farah Maluf',
      'Piscina adulto e infantil com solarium gramado',
      'Salão de festas decorado, churrasqueira gourmet e espaço pet place',
      'Condições especiais com fluxo de obras direto e uso do FGTS'
    ]
  }
];

export const AMENITIES = [
  {
    icon: 'Waves',
    title: 'Parque Aquático & Rooftop',
    description: 'Piscinas adulto com raia de 25m, deck molhado, piscina infantil e spas aquecidos para relaxar a qualquer momento.'
  },
  {
    icon: 'Dumbbell',
    title: 'Fitness Center Completo',
    description: 'Academia equipada com esteiras de última geração, pesos livres e espaço funcional para crossfit e pilates.'
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Espaços Gourmet & Festas',
    description: 'Salões de festas climatizados e churrasqueiras integradas com chopeira para celebrar momentos inesquecíveis.'
  },
  {
    icon: 'Briefcase',
    title: 'Coworking com Cabines Privativas',
    description: 'Espaço profissional com internet de alta velocidade, salas para reuniões e chamadas de vídeo.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Segurança & Monitoramento 24h',
    description: 'Portaria blindada, controle de acesso facial, câmeras de alta definição e ronda perimetral constante.'
  },
  {
    icon: 'Zap',
    title: 'Vagas Elétricas & Sustentabilidade',
    description: 'Painéis solares para áreas comuns, reuso de água e infraestrutura pronta para carregamento de carros elétricos.'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Como funciona o preenchimento do formulário "Tenho Interesse"?',
    answer: 'Ao clicar no botão "Tenho Interesse" do empreendimento desejado (Mooca, Tatuapé ou Vila Ema), você será direcionado para o formulário oficial correspondente do Google Forms. Lá você informará seus dados para receber a tabela de preços de lançamento, plantas humanizadas e agendar uma visita.'
  },
  {
    question: 'Qual é a localização exata de cada uma das 3 opções?',
    answer: 'Opção 01: Bairro Mooca (próximo ao Metrô Bresser-Mooca); Opção 02: Bairro Tatuapé (próximo ao Shopping Anália Franco e Parque CERET); Opção 03: Bairro Vila Ema (a 300m da Estação São Lucas do Monotrilho com integração ao Metrô Vila Prudente).'
  },
  {
    question: 'Posso utilizar meu FGTS para entrada ou amortização?',
    answer: 'Sim! Os empreendimentos da Mooca, Tatuapé e Vila Ema aceitam o uso de FGTS tanto para composição de entrada na entrega das chaves quanto para amortização no financiamento bancário Caixa Econômica Federal ou bancos privados.'
  },
  {
    question: 'Qual é a flexibilidade das parcelas durante o período de obras?',
    answer: 'Oferecemos fluxo de pagamento direto com a construtora durante a fase de obra com juros zero (apenas correção pelo INCC), permitindo adequar o valor das mensais, intermediárias e chave ao seu orçamento.'
  },
  {
    question: 'Consigo fazer uma simulação de financiamento prévia?',
    answer: 'Com certeza. Ao enviar o formulário correspondente à região de seu interesse, nossa equipe realiza a análise de crédito gratuita e sem compromisso nos principais bancos (Caixa, Itaú, Bradesco, Santander) para garantir as menores taxas de juros do mercado.'
  }
];
