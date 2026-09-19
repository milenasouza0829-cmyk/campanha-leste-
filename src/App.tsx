import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DevelopmentsSection } from './components/DevelopmentsSection';
import { LocationHighlightsSection } from './components/LocationHighlightsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { FinancingSimulator } from './components/FinancingSimulator';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { InterestModal } from './components/InterestModal';
import { GalleryModal } from './components/GalleryModal';
import { FloatingInterestBar } from './components/FloatingInterestBar';
import { Apartment } from './types';

export default function App() {
  const [interestModalOpen, setInterestModalOpen] = useState(false);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [selectedApartmentForGallery, setSelectedApartmentForGallery] = useState<Apartment | null>(null);

  const handleOpenInterestModal = () => {
    setInterestModalOpen(true);
  };

  const handleCloseInterestModal = () => {
    setInterestModalOpen(false);
  };

  const handleOpenGallery = (apartment: Apartment) => {
    setSelectedApartmentForGallery(apartment);
    setGalleryModalOpen(true);
  };

  const handleCloseGallery = () => {
    setGalleryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-amber-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenInterestModal={handleOpenInterestModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenInterestModal={handleOpenInterestModal} />

        {/* Apartments & Developments with the 3 Google Forms */}
        <DevelopmentsSection
          onOpenGallery={handleOpenGallery}
          onOpenInterestModal={handleOpenInterestModal}
        />

        {/* Location Highlights: Mooca, Tatuapé e Vila Ema */}
        <LocationHighlightsSection />

        {/* Amenities & Condo Club */}
        <AmenitiesSection />

        {/* Interactive Financing & Installments Simulator */}
        <FinancingSimulator onOpenInterestModal={handleOpenInterestModal} />

        {/* FAQ & Trust factors */}
        <FAQSection />
      </main>

      {/* Footer with direct links to the 3 forms */}
      <Footer />

      {/* Floating CTA for easy conversion */}
      <FloatingInterestBar onOpenInterestModal={handleOpenInterestModal} />

      {/* Interactive Interest Selection Modal */}
      <InterestModal
        isOpen={interestModalOpen}
        onClose={handleCloseInterestModal}
      />

      {/* Gallery Lightbox Modal */}
      <GalleryModal
        apartment={selectedApartmentForGallery}
        isOpen={galleryModalOpen}
        onClose={handleCloseGallery}
      />
    </div>
  );
}
