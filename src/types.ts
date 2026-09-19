export interface Apartment {
  id: string;
  name: string;
  district: string; // Mooca, Tatuapé, Vila Ema
  tag: string;
  tagColor: string;
  subtitle: string;
  description: string;
  location: string;
  neighborhood: string;
  metroStation: string;
  area: string;
  bedrooms: string;
  suites: string;
  parkingSpots: string;
  startingPrice: string;
  estimatedInstallment: string;
  formUrl: string;
  image: string;
  gallery: string[];
  highlights: string[];
  targetAudience: string;
  status: 'Lançamento' | 'Em Construção' | 'Pronto para Morar' | 'Breve Lançamento' | 'Sucesso de Vendas' | 'Lançamento Exclusivo';
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  unitPurchased: string;
  quote: string;
  avatar: string;
  rating: number;
}
