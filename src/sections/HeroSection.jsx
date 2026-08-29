import React from 'react';
import MenteeDashboard from '../pages/MenteeDashboard';
import './HeroSection.css';

const HeroSection = () => (
  <div className="presentation-canvas immersive-section" id="hero-section">
    <div className="immersive-content">
      <div className="immersive-text">
        <h4>MENTORA DESIGN SYSTEM</h4>
        <h1>The Mentorship Command Center</h1>
        <p>
          A completely reimagined mobile experience for 1:1 professional mentorship.
          Connecting learners with vetted industry veterans through frictionless discovery, smart goal matching, and one-tap video sessions.
        </p>
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-dot"></div>
            <span>Upcoming Session Alert & Instant Room Join</span>
          </div>
          <div className="feature-item">
            <div className="feature-dot"></div>
            <span>AI Goal-Matched Mentor Recommendations</span>
          </div>
          <div className="feature-item">
            <div className="feature-dot"></div>
            <span>Category-Based Skill Roadmaps & Transparent Rates</span>
          </div>
        </div>
      </div>

      <div className="immersive-showcase">
        <div className="floating-device" data-theme="light">
          <div className="device-mockup" data-theme="light">
            <div className="device-hardware">
              <div className="dynamic-island">
                <div className="dynamic-island-cam"></div>
                <div className="dynamic-island-sensor"></div>
              </div>
              <div className="device-screen no-scrollbar">
                <MenteeDashboard />
              </div>
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
