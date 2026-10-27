import React, { useState } from 'react';
import { Building2, Copy, Check, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

interface BankCardProps {
  onShowToast: (message: string) => void;
}

export const BankCard: React.FC<BankCardProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [showManualFallback, setShowManualFallback] = useState(false);
  const bankInfo = BRAND_CONFIG.officialContacts.bank;

  const handleCopyAccount = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(bankInfo.accountNumber);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = bankInfo.accountNumber;
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
      onShowToast(`Nomor Rekening Bank Jago ${bankInfo.accountNumber} berhasil disalin!`);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setShowManualFallback(true);
      onShowToast('Silakan salin nomor rekening secara manual.');
    }
  };

  return (
    <article className="support-card" id="bank-card" aria-labelledby="bank-title">
      <div className="card-header-row">
        <div className="card-title-group">
          <div className="method-icon-badge method-icon-jago" aria-hidden="true">
            <Building2 size={24} />
          </div>
          <div>
            <h3 id="bank-title" className="card-title">SUPPORT VIA BANK JAGO</h3>
            <span style={{ fontSize: '0.78rem', color: '#FF7300', fontWeight: 600 }}>
              Transfer Antar Bank & BI-FAST
            </span>
          </div>
        </div>
        <span className="card-tag card-tag-bank">Transfer Bank</span>
      </div>

      <p className="card-desc">
        Kalau lu lebih nyaman transfer melalui bank, lu juga bisa menggunakan rekening berikut.
      </p>

      {/* Bank Account detail box */}
      <div className="account-box">
        <div className="account-label-row">
          <span>{bankInfo.bankName}</span>
          <span style={{ color: '#FF7300' }}>Rekening Resmi</span>
        </div>
        <div className="account-number-value" id="bank-number-text">
          {bankInfo.displayAccountNumber}
        </div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: 5 }}>
          <ShieldCheck size={14} style={{ color: '#FF7300' }} />
          <span>Pastikan bank tujuan adalah {bankInfo.bankName}</span>
        </div>

        {showManualFallback && (
          <div style={{ marginTop: '8px' }}>
            <label htmlFor="manual-bank-input" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Salin manual jika tombol otomatis diblokir browser:
            </label>
            <input
              id="manual-bank-input"
              type="text"
              readOnly
              value={bankInfo.accountNumber}
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

      <button
        type="button"
        className={`action-btn action-btn-copy ${copied ? 'copied' : ''}`}
        onClick={handleCopyAccount}
        id="btn-salin-rekening"
        aria-label="Salin nomor rekening Bank Jago 103415027159"
      >
        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        <span>{copied ? 'NOMOR TERSALIN!' : 'SALIN NOMOR REKENING'}</span>
      </button>
    </article>
  );
};
