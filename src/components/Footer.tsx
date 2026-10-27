import React from 'react';
import { BRAND_CONFIG } from '../config/brand';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <p className="footer-copy-text">
        Made with ❤️ for Bontoters.
      </p>
      <p style={{ fontWeight: 700, color: '#e0e4ec' }}>
        {BRAND_CONFIG.name} © {currentYear}
      </p>
      <p className="footer-disclaimer">
        Halaman dukungan personal resmi. Pembayaran dilakukan secara sukarela dan mandiri langsung melalui aplikasi DANA atau transfer bank tujuan tanpa perantara.
      </p>
    </footer>
  );
};
