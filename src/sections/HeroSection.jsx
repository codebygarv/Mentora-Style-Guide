import React from 'react';
import MentoraLogo from '../components/MentoraLogo';
import HomeScreen from '../pages/HomeScreen';
import MentorProfile from '../pages/MentorProfile';
import { Sparkles, Star, ShieldCheck, Video, ArrowRight, Layers, Clock, Zap } from 'lucide-react';
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

const HeroSection = () => {
  return (
    <section className="hero-command-section" id="hero-section">
      <div className="hero-ambient-glow glow-top-left"></div>
      <div className="hero-ambient-glow glow-center-right"></div>

      <div className="hero-container">
        {/* Left Column: Clear High-Contrast Typography & Metrics */}
        <div className="hero-copy-column">
          <div className="hero-badge-pill">
            <MentoraLogo size={16} />
            <span>MENTORA APP DESIGN SYSTEM v1.0</span>
          </div>

          <h1 className="hero-main-heading">
            The Professional<br />
            <span className="hero-gradient-accent">Mentorship</span><br />
            Command Center
          </h1>

          <p className="hero-lead-text">
            A totally reimagined mobile experience for 1:1 professional mentorship.
            Connecting ambitious learners with industry-leading mentors through frictionless discovery, verified ratings, and one-tap video sessions.
          </p>

          {/* Quick Metrics Bar */}
          <div className="hero-metrics-grid">
            <div className="hero-metric-item">
              <span className="metric-val">1,200+</span>
              <span className="metric-lbl">Active Mentors</span>
            </div>
            <div className="hero-metric-sep"></div>
            <div className="hero-metric-item">
              <span className="metric-val highlight">4.9 ★</span>
              <span className="metric-lbl">Avg. Feedback</span>
            </div>
            <div className="hero-metric-sep"></div>
            <div className="hero-metric-item">
              <span className="metric-val">$16</span>
              <span className="metric-lbl">Starting Rate</span>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="hero-feature-stack">
            <div className="hero-feat-card">
              <div className="hero-feat-icon-wrap blue">
                <Zap size={16} />
              </div>
              <div className="hero-feat-text">
                <strong>Curated Field Networks</strong>
                <span>Instant discovery in Marketing, Finance, Investing, and AI</span>
              </div>
            </div>

            <div className="hero-feat-card">
              <div className="hero-feat-icon-wrap amber">
                <Star size={16} />
              </div>
              <div className="hero-feat-text">
                <strong>Verified Testimonials & Badges</strong>
                <span>Authentic feedback and proven track records for every mentor</span>
              </div>
            </div>

            <div className="hero-feat-card">
              <div className="hero-feat-icon-wrap green">
                <Video size={16} />
              </div>
              <div className="hero-feat-text">
                <strong>Frictionless Video Mentorship</strong>
                <span>In-app video calls with shared notes, checklists, and calendar sync</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#section-03" className="btn-hero-primary">
              <span>Explore Screen Flow</span>
              <ArrowRight size={16} />
            </a>
            <a href="#section-01" className="btn-hero-secondary">
              <Layers size={16} />
              <span>Inspect Tokens</span>
            </a>
          </div>
        </div>

        {/* Right Column: Dual 3D Floating Phone Mockups */}
        <div className="hero-visual-column">
          <div className="hero-dual-mockup-wrapper">
            
            {/* Phone 1 (Back Layer): Mentor Profile - Stella Fernandez */}
            <div className="hero-mockup-layer layer-back">
              <div className="device-mockup" data-theme="light">
                <div className="device-hardware">
                  <div className="status-bar-row">
                    <span className="status-time">9:41</span>
                    <div className="status-icons">
                      <CellularIcon />
                      <Wifi size={13} strokeWidth={2.5} />
                      <Battery size={16} strokeWidth={2} />
                    </div>
                  </div>
                  <div className="dynamic-island">
                    <div className="dynamic-island-cam"></div>
                    <div className="dynamic-island-sensor"></div>
                  </div>
                  <div className="device-screen no-scrollbar">
                    <MentorProfile />
                  </div>
                  <div className="home-indicator-bar"></div>
                  <div className="btn-mute"></div>
                  <div className="btn-vol-up"></div>
                  <div className="btn-vol-down"></div>
                  <div className="btn-power"></div>
                </div>
              </div>
            </div>

            {/* Phone 2 (Front Layer): Home Screen - Sakura Hime */}
            <div className="hero-mockup-layer layer-front">
              <div className="device-mockup" data-theme="light">
                <div className="device-hardware">
                  <div className="status-bar-row">
                    <span className="status-time">9:41</span>
                    <div className="status-icons">
                      <CellularIcon />
                      <Wifi size={13} strokeWidth={2.5} />
                      <Battery size={16} strokeWidth={2} />
                    </div>
                  </div>
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

            {/* Floating Glassmorphic Chips */}
            <div className="hero-floating-chip chip-top-right">
              <div className="chip-icon-amber">
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
              </div>
              <div className="chip-text">
                <span className="chip-title">4.9 Ratings</span>
                <span className="chip-sub">120+ Verified Sessions</span>
              </div>
            </div>

            <div className="hero-floating-chip chip-bottom-left">
              <div className="chip-live-dot"></div>
              <div className="chip-text">
                <span className="chip-title">Next Session: 7:30 PM</span>
                <span className="chip-sub">Growth Marketing · Stella</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
