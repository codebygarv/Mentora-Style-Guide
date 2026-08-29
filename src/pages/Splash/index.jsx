import React from 'react';
import { Sparkles } from 'lucide-react';
import './styles.css';

const Splash = () => {
  return (
    <div className="splash-screen">
      <div className="splash-brand-wrap">
        <div className="splash-logo-container">
          <Sparkles size={40} className="splash-icon" />
          <div className="splash-pulse-ring"></div>
        </div>
        <h1 className="splash-title">Mentora</h1>
        <div className="splash-tagline-pill">
          <span>Connect · Learn · Grow</span>
        </div>
      </div>

      <div className="splash-footer">
        <div className="splash-spinner"></div>
        <span className="splash-loading-text">Loading mentorship network...</span>
      </div>
    </div>
  );
};

export default Splash;
