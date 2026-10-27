import React, { useState } from 'react';
import { QrCode, Copy, Check, Maximize2, ExternalLink, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

interface DanaCardProps {
  onOpenQrModal: () => void;
  onShowToast: (message: string) => void;
}

export const DanaCard: React.FC<DanaCardProps> = ({ onOpenQrModal, onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [showManualFallback, setShowManualFallback] = useState(false);
  const danaInfo = BRAND_CONFIG.officialContacts.dana;

  const handleCopyDana = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(danaInfo.number);
      } else {
        // Fallback using textarea
        const textArea = document.createElement('textarea');
        textArea.value = danaInfo.number;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (!successful) throw new Error('execCommand failed');
      }

      setCopied(true);
      onShowToast(`Nomor DANA ${danaInfo.number} berhasil disalin!`);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setShowManualFallback(true);
      onShowToast('Silakan salin nomor secara manual.');
    }
  };

  return (
    <article className="support-card" id="dana-card" aria-labelledby="dana-title">
      <div className="card-header-row">
        <div className="card-title-group">
          <div className="method-icon-badge method-icon-dana" aria-hidden="true">
            <QrCode size={24} />
          </div>
          <div>
            <h3 id="dana-title" className="card-title">TRAKTIR VIA DANA</h3>
            <span style={{ fontSize: '0.78rem', color: '#118EEA', fontWeight: 600 }}>
              QRIS / Saldo DANA
            </span>
          </div>
        </div>
        <span className="card-tag card-tag-featured">Rekomendasi Utama</span>
      </div>

      <p className="card-desc">
        Scan QR di bawah untuk membuka metode pembayaran DANA melalui aplikasi yang mendukung.
      </p>

      {/* QR Code Presentation Frame */}
      <div className="qr-frame-wrapper">
        <div
          className="qr-image-container"
          onClick={onOpenQrModal}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpenQrModal();
            }
          }}
          aria-label="Perbesar QR DANA Resmi"
          title="Klik untuk melihat QR dalam ukuran besar"
        >
          <img
            src={danaInfo.qrImagePath}
            alt="Official QR Code Pembayaran DANA Adhy The Bontot"
            className="qr-image"
            width="210"
            height="210"
            loading="eager"
          />
          <div className="qr-overlay-hint" aria-hidden="true">
            <Maximize2 size={24} />
            <span>Ketuk untuk Perbesar</span>
          </div>
        </div>
        <p className="qr-hint-text">
          <ShieldCheck size={14} style={{ display: 'inline', verticalAlign: '-2px', color: '#118EEA', marginRight: 4 }} />
          Aset QR Resmi • Dapat di-scan dari e-wallet & mobile banking
        </p>
      </div>

      {/* Account detail display */}
      <div className="account-box">
        <div className="account-label-row">
          <span>Nomor Akun DANA Resmi</span>
          <span style={{ color: '#118EEA' }}>Terverifikasi</span>
        </div>
        <div className="account-number-value" id="dana-number-text">
          {danaInfo.displayNumber}
        </div>
        {showManualFallback && (
          <div style={{ marginTop: '8px' }}>
            <label htmlFor="manual-dana-input" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Salin manual jika tombol otomatis diblokir browser:
            </label>
            <input
              id="manual-dana-input"
              type="text"
              readOnly
              value={danaInfo.number}
              onFocus={(e) => e.target.select()}
              style={{
                width: '100%',
                padding: '8px 10px',
                marginTop: '4px',
                borderRadius: '6px',
                background: '#161920',
                border: '1px solid var(--border-gunmetal)',
                color: '#fff',
                fontSize: '0.9rem',
                fontFamily: 'monospace'
              }}
            />
          </div>
        )}
      </div>

      {/* Interaction buttons */}
      <div className="button-group-dual">
        <button
          type="button"
          className="action-btn action-btn-zoom"
          onClick={onOpenQrModal}
          id="btn-perbesar-qr"
          aria-label="Perbesar tampilan QR Code DANA"
        >
          <Maximize2 size={16} aria-hidden="true" />
          <span>PERBESAR QR</span>
        </button>

        <button
          type="button"
          className={`action-btn action-btn-copy ${copied ? 'copied' : ''}`}
          onClick={handleCopyDana}
          id="btn-salin-dana"
          aria-label="Salin nomor akun DANA 089629721717"
        >
          {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
          <span>{copied ? 'TERSALIN!' : 'SALIN NOMOR DANA'}</span>
        </button>

        {danaInfo.directPaymentUrl && (
          <a
            href={danaInfo.directPaymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn action-btn-dana-link"
            id="btn-buka-dana"
            aria-label="Buka link resmi DANA"
          >
            <ExternalLink size={16} aria-hidden="true" />
            <span>BUKA LINK RESMI DANA</span>
          </a>
        )}
      </div>
    </article>
  );
};
