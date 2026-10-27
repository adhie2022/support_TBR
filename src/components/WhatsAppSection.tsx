import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

export const WhatsAppSection: React.FC = () => {
  const wa = BRAND_CONFIG.officialContacts.whatsapp;

  return (
    <section className="wa-support-card" aria-label="Kontak Langsung WhatsApp">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#25D366' }}>
        <MessageSquare size={20} aria-hidden="true" />
        <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Jalur Langsung & Alternatif
        </span>
      </div>

      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>
        MAU SUPPORT LEWAT CARA LAIN?
      </h3>

      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '420px', lineHeight: 1.5 }}>
        Punya ide kolaborasi, mau traktir via jalur khusus, atau sekadar kirim salam hangat? Hubungi Bang Adhy langsung di WhatsApp.
      </p>

      <a
        href={wa.url}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        id="btn-whatsapp-chat"
        aria-label="Chat WhatsApp Bang Adhy"
      >
        <span>CHAT BANG ADHY</span>
        <ArrowRight size={18} aria-hidden="true" />
      </a>
      <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
        Nomor Resmi: {wa.displayNumber}
      </span>
    </section>
  );
};
