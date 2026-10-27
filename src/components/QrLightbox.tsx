import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

interface QrLightboxProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrLightbox: React.FC<QrLightboxProps> = ({ isOpen, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const danaInfo = BRAND_CONFIG.officialContacts.dana;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Focus close button on open
    closeBtnRef.current?.focus();

    // Prevent body scroll when lightbox is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Tampilan Besar QR Code DANA"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
      >
        <button
          ref={closeBtnRef}
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Tutup dialog QR"
          id="btn-close-lightbox"
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF' }}>
            SCAN QR DANA RESMI
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            Arahkan kamera e-wallet atau mobile banking
          </p>
        </div>

        <div className="modal-qr-frame">
          <img
            src={danaInfo.qrImagePath}
            alt="Perbesar QR Code DANA Adhy The Bontot"
            className="modal-qr-img"
          />
        </div>

        <div style={{ textAlign: 'center', width: '100%' }}>
          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#118EEA', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <ShieldCheck size={16} />
            <span>Nomor Akun: {danaInfo.displayNumber}</span>
          </div>

          {danaInfo.directPaymentUrl && (
            <a
              href={danaInfo.directPaymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                textDecoration: 'underline'
              }}
            >
              <span>Buka tautan permintaan DANA</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
