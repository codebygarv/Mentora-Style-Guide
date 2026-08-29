import React from 'react';
import MentoraLogo from '../../components/MentoraLogo';
import { ShieldCheck, Sparkles } from 'lucide-react';
import './styles.css';

const Splash = () => {
  return (
    <div className="splash-screen no-scrollbar">
      {/* Background Ambient Glowing Auras */}
      <div className="splash-ambient-glow top-glow"></div>
      <div className="splash-ambient-glow center-glow"></div>

      {/* Decorative Constellation Dots */}
      <div className="splash-particle p1"></div>
      <div className="splash-particle p2"></div>
      <div className="splash-particle p3"></div>

      {/* Center Brand Identity */}
      <div className="splash-brand-wrap">
        <div className="splash-logo-card">
          <div className="splash-logo-inner">
            <MentoraLogo size={64} />
          </div>
          <div className="splash-pulse-ring ring-1"></div>
          <div className="splash-pulse-ring ring-2"></div>
        </div>

        <h1 className="splash-title">
          Mentora
        </h1>

        <div className="splash-tagline-pill">
          <span className="splash-pill-dot"></span>
          <span>Connect · Learn · Grow</span>
        </div>
      </div>

      {/* Modern Bottom Progress & Trust Footer */}
      <div className="splash-footer">
        <div className="splash-progress-container">
          <div className="splash-progress-track">
            <div className="splash-progress-fill"></div>
          </div>
          <div className="splash-progress-meta">
            <span className="splash-loading-text">Connecting to mentorship network...</span>
            <span className="splash-pct">100%</span>
          </div>
        </div>

        <div className="splash-trust-badge">
          <ShieldCheck size={13} color="#10B981" />
          <span>Encrypted 1:1 Network · iOS 18 Edition</span>
        </div>
      </div>
    </div>
  );
};

export default Splash;
