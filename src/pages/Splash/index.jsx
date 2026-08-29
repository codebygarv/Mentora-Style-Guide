import React from 'react';
import MentoraLogo from '../../components/MentoraLogo';
import './styles.css';

const Splash = () => {
  return (
    <div className="splash-screen">
      <div className="splash-brand-wrap">
        <div className="splash-logo-container">
          <MentoraLogo size={56} />
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
