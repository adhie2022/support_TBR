import React from 'react';
import { Coffee, ArrowDown } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

interface HeroProps {
  onScrollToSupport: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSupport }) => {
  return (
    <section className="hero-card" aria-label="Profil dan Dukungan Adhy The Bontot">
      <div className="hero-avatar-wrapper">
        <img
          src="/assets/the-bontot-radio-logo.jpg"
          alt="Official Logo The Bontot Radio"
          className="hero-avatar"
          width="96"
          height="96"
          loading="eager"
        />
        <div className="hero-steam-coffee" title="Secangkir Kopi Digital" aria-hidden="true">
          ☕
        </div>
      </div>

      <div className="hero-identity">
        <span className="hero-channel-tag">{BRAND_CONFIG.tagline}</span>
        <h1 className="hero-creator-name">{BRAND_CONFIG.name}</h1>
      </div>

      <h2 className="hero-headline">
        TRAKTIR KOPI BUAT <span className="hero-headline-highlight">BANG ADHY</span> ☕
      </h2>

      <p className="hero-description">
        {BRAND_CONFIG.heroSupportingText}
      </p>

      <blockquote className="hero-personal-quote">
        "{BRAND_CONFIG.heroPersonalCopy}"
      </blockquote>

      <button
        type="button"
        className="cta-primary-btn"
        id="btn-traktir-kopi"
        onClick={onScrollToSupport}
        aria-label="Traktir Kopi Sekarang, lompat ke pilihan metode pembayaran"
      >
        <Coffee size={20} aria-hidden="true" />
        <span>☕ TRAKTIR KOPI SEKARANG</span>
        <ArrowDown size={18} aria-hidden="true" />
      </button>
    </section>
  );
};
