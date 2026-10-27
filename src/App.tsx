import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SupportSection } from './components/SupportSection';
import { WhatsAppSection } from './components/WhatsAppSection';
import { SocialShortcuts } from './components/SocialShortcuts';
import { BrandSignature } from './components/BrandSignature';
import { Footer } from './components/Footer';
import { QrLightbox } from './components/QrLightbox';
import { Toast } from './components/Toast';

export const App: React.FC = () => {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3000);
  };

  const handleScrollToSupport = () => {
    const section = document.getElementById('support-methods');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Accessibility focus
      const focusTarget = document.getElementById('dana-card');
      if (focusTarget) {
        focusTarget.focus({ preventScroll: true });
      }
    }
  };

  return (
    <>
      {/* Ambient background atmosphere */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-glow-red" />
        <div className="ambient-glow-gold" />
        <div className="ambient-grid" />
      </div>

      <main className="app-layout">
        <div className="app-container">
          <Navbar />
          <Hero onScrollToSupport={handleScrollToSupport} />
          <SupportSection
            onOpenQrModal={() => setIsQrModalOpen(true)}
            onShowToast={showToast}
          />
          <WhatsAppSection />
          <SocialShortcuts />
          <BrandSignature />
          <Footer />
        </div>
      </main>

      {/* Lightbox dialog for high-res QR code */}
      <QrLightbox
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />

      {/* Toast notifications for copy feedback */}
      <Toast message={toastMessage} />
    </>
  );
};

export default App;
