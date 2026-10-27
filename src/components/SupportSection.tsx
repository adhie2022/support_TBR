import React from 'react';
import { Heart } from 'lucide-react';
import { DanaCard } from './DanaCard';
import { BankCard } from './BankCard';

interface SupportSectionProps {
  onOpenQrModal: () => void;
  onShowToast: (message: string) => void;
}

export const SupportSection: React.FC<SupportSectionProps> = ({ onOpenQrModal, onShowToast }) => {
  return (
    <section id="support-methods" className="section-container" aria-label="Pilihan Metode Dukungan">
      <div className="section-header">
        <h2 className="section-title">
          PILIH CARA LU SUPPORT <Heart size={20} fill="#C81018" color="#C81018" aria-hidden="true" />
        </h2>
        <p className="section-subtitle">
          Semua dukungan dilakukan secara sukarela. Pilih cara yang paling nyaman buat lu.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '16px' }}>
        <DanaCard onOpenQrModal={onOpenQrModal} onShowToast={onShowToast} />
        <BankCard onShowToast={onShowToast} />
      </div>
    </section>
  );
};
