import React from 'react';
import HomeScreen from '../pages/HomeScreen';
import { Wifi, Battery } from 'lucide-react';
import './HeroSection.css';

const CellularIcon = () => (
  <svg width="15" height="11" viewBox="0 0 17 11" fill="currentColor">
    <rect x="0" y="8" width="3" height="3" rx="0.8" />
    <rect x="4.5" y="5.5" width="3" height="5.5" rx="0.8" />
    <rect x="9" y="3" width="3" height="8" rx="0.8" />
    <rect x="13.5" y="0" width="3" height="11" rx="0.8" />
  </svg>
);

const HeroSection = () => (
  <div className="presentation-canvas immersive-section" id="hero-section">
    <div className="immersive-content">
      <div className="immersive-text">
        <h4>MENTORA DESIGN SYSTEM</h4>
        <h1>The Professional Mentorship Command Center</h1>
        <p>
          Designed for frictionless discovery and 1:1 professional guidance.
          Featuring dynamic field discovery, curated mentors in marketing, finance & investing, and streamlined one-tap booking.
        </p>
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-dot"></div>
            <span>Interactive Pro Upgrade Banner & Mentor Network</span>
          </div>
          <div className="feature-item">
            <div className="feature-dot"></div>
            <span>Category Field Cards (Marketing, Finance, Investing)</span>
          </div>
          <div className="feature-item">
            <div className="feature-dot"></div>
            <span>Instant $16/Session Booking with Verified Professionals</span>
          </div>
        </div>
      </div>

      <div className="immersive-showcase">
        <div className="floating-device" data-theme="light">
          <div className="device-mockup" data-theme="light">
            <div className="device-hardware">
              {/* iOS Status Bar */}
              <div className="status-bar-row">
                <span className="status-time">9:41</span>
                <div className="status-icons">
                  <CellularIcon />
                  <Wifi size={13} strokeWidth={2.5} />
                  <Battery size={16} strokeWidth={2} />
                </div>
              </div>

              {/* Dynamic Island */}
              <div className="dynamic-island">
                <div className="dynamic-island-cam"></div>
                <div className="dynamic-island-sensor"></div>
              </div>

              <div className="device-screen no-scrollbar">
                <HomeScreen />
              </div>

              <div className="home-indicator-bar"></div>
              <div className="btn-mute"></div>
              <div className="btn-vol-up"></div>
              <div className="btn-vol-down"></div>
              <div className="btn-power"></div>
            </div>
          </div>
        </div>
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>
    </div>
  </div>
);

export default HeroSection;
