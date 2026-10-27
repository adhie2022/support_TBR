import React from 'react';
import { Coffee, Radio } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="brand-header" role="banner">
      <div className="live-badge" title="The Bontot Radio Active Hub">
        <span className="pulse-dot" aria-hidden="true" />
        <Radio size={13} aria-hidden="true" />
        <span>THE BONTOT RADIO</span>
      </div>

      <div className="coffee-counter-badge" title="Satu cangkir kopi untuk semangat berkarya">
        <Coffee size={14} aria-hidden="true" />
        <span>One-Click Support</span>
      </div>
    </header>
  );
};
