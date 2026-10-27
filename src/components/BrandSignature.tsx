import React from 'react';
import { BRAND_CONFIG } from '../config/brand';

export const BrandSignature: React.FC = () => {
  return (
    <section className="ecosystem-section" aria-label="Ekosistem The Bontot">
      <h3 className="ecosystem-headline">
        BUKAN CUMA RADIO, INI KELUARGA KITA.
      </h3>

      <p className="ecosystem-subtext">
        Di balik The Bontot Radio ada perjalanan kreatif, teknologi, karya digital, dan komunitas Bontoters yang terus tumbuh.
      </p>

      <div className="ecosystem-logos-grid">
        {BRAND_CONFIG.ecosystemLogos.map((eco) => (
          <div key={eco.name} className="ecosystem-item">
            <img
              src={eco.imagePath}
              alt={eco.name}
              className="ecosystem-logo-img"
              width="58"
              height="58"
              loading="lazy"
            />
            <div>
              <div className="ecosystem-item-title">{eco.name}</div>
              <div className="ecosystem-item-badge">{eco.badge}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="ecosystem-chips-wrap" aria-label="Pilar Ekosistem Lainnya">
        {BRAND_CONFIG.ecosystemMention.map((item) => (
          <span key={item} className="ecosystem-chip">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};
