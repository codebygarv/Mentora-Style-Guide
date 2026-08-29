import React from 'react';
import { ArrowLeft, MoreHorizontal, Sparkles, Star, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import ColorBox from '../../components/ColorBox';
import './styles.css';

const StyleGuidePhone = ({ theme, title = "Design System" }) => (
  <div className="device-mockup" data-theme={theme}>
    <div className="device-hardware">
      <div className="dynamic-island">
        <div className="dynamic-island-cam"></div>
        <div className="dynamic-island-sensor"></div>
      </div>
      
      <div className="device-screen custom-scrollbar">
        <header className="sg-header">
          <ArrowLeft className="sg-icon" size={18} />
          <div className="sg-header-title-box">
            <span className="sg-theme-badge">{theme.toUpperCase()} MODE</span>
            <h2 className="sg-title">{title}</h2>
          </div>
          <MoreHorizontal className="sg-icon" size={18} />
        </header>

        <div className="sg-content">
          <section className="sg-section" style={{ paddingTop: '16px' }}>
            <div className="sg-brand-chip">
              <Sparkles size={14} />
              <span>Mentora v1.0 Tokens</span>
            </div>
            <h1 className="text-h1" style={{ fontSize: '22px', margin: '8px 0 4px', color: 'var(--text-primary)' }}>
              Design Tokens
            </h1>
            <p className="text-body" style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              Comprehensive chromatic scales, responsive typography, and micro-component tokens powering the Mentora iOS & Android ecosystem.
            </p>
          </section>

          {/* Primary Indigo Scale */}
          <section className="sg-section">
            <h2 className="sg-section-title">Primary · Indigo Scale</h2>
            <div className="color-grid">
              <ColorBox name="primary-50" hex="#EEF2FF" />
              <ColorBox name="primary-100" hex="#E0E7FF" />
              <ColorBox name="primary-200" hex="#C7D2FE" />
              
              <ColorBox name="primary-300" hex="#A5B4FC" />
              <ColorBox name="primary-400" hex="#818CF8" />
              <ColorBox name="primary-500" hex="#6366F1" />
              
              <ColorBox name="primary-600" hex="#4F46E5" />
              <ColorBox name="primary-700" hex="#4338CA" />
              <ColorBox name="primary-800" hex="#3730A3" />
              
              <ColorBox name="primary-900" hex="#312E81" />
              <ColorBox name="primary-950" hex="#1E1B4B" />
              <ColorBox name="white" hex="#FFFFFF" />
            </div>
          </section>

          {/* Functional Brand Accents */}
          <section className="sg-section">
            <h2 className="sg-section-title">Functional Accents</h2>
            <div className="color-grid">
              <ColorBox name="brand-core" hex="#6366F1" />
              <ColorBox name="amber-gold" hex="#F59E0B" />
              <ColorBox name="emerald-mint" hex="#10B981" />
              <ColorBox name="rose-alert" hex="#F43F5E" />
              <ColorBox name="slate-dark" hex="#0F172A" />
              <ColorBox name="surface-soft" hex="#F8FAFC" />
            </div>
          </section>

          {/* Typography */}
          <section className="sg-section">
            <h2 className="sg-section-title">Typography System</h2>
            <div className="type-item">
              <h1 className="text-h1" style={{ fontSize: '18px', fontWeight: 800 }}>Plus Jakarta Sans · Bold</h1>
              <span className="text-sm">Hero headers, mentor names, stat figures</span>
            </div>
            <div className="type-item">
              <h2 style={{ fontFamily: 'var(--font-editorial)', fontSize: '18px', fontStyle: 'italic', color: 'var(--primary-400)' }}>
                Playfair Display · Italic
              </h2>
              <span className="text-sm">Editorial flourishes, quotes & brand statements</span>
            </div>
            <div className="type-item" style={{ marginBottom: 0 }}>
              <p className="text-body" style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                Body · Inter Regular (400/500/600). High legibility for booking forms, session notes, and bio blurbs.
              </p>
            </div>
          </section>

          {/* Badges & Pills */}
          <section className="sg-section">
            <h2 className="sg-section-title">Badges & Status Chips</h2>
            <div className="badges-flex">
              <div className="sg-badge badge-verified">
                <ShieldCheck size={13} />
                <span>Verified Mentor</span>
              </div>
              <div className="sg-badge badge-rating">
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                <span>4.9 (120 reviews)</span>
              </div>
              <div className="sg-badge badge-match">
                <Sparkles size={13} />
                <span>96% Goal Match</span>
              </div>
              <div className="sg-badge badge-live">
                <span className="live-pulse-dot"></span>
                <span>Available Today</span>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <section className="sg-section">
            <h2 className="sg-section-title">Interactive Buttons</h2>
            <button className="btn-primary" style={{ width: '100%', marginBottom: '10px' }}>
              <Sparkles size={16} />
              <span>Book 1:1 Session · ₹499</span>
            </button>
            <span className="text-sm" style={{ display: 'block', marginBottom: '16px' }}>Primary Action · Gradient + Glow</span>
            
            <button className="btn-secondary" style={{ width: '100%', marginBottom: '10px' }}>
              <span>View Mentor Profile</span>
            </button>
            <span className="text-sm" style={{ display: 'block' }}>Secondary Action · Surface + Border</span>
          </section>

          {/* Input states */}
          <section className="sg-section" style={{ borderBottom: 'none' }}>
            <h2 className="sg-section-title">Input Fields</h2>
            <div className="sg-input-demo">
              <span className="sg-input-label">Discussion Topic</span>
              <div className="sg-input-box">
                <span>React Architecture & Roadmaps</span>
                <CheckCircle2 size={16} color="var(--accent-emerald)" />
              </div>
            </div>

            <div className="sg-input-demo">
              <span className="sg-input-label">Hourly Budget</span>
              <div className="sg-input-box focused">
                <span>₹500 - ₹1,500</span>
                <span className="sg-cursor"></span>
              </div>
            </div>

            <div className="sg-input-demo">
              <span className="sg-input-label" style={{ color: 'var(--accent-rose)' }}>Invite / Promo Code</span>
              <div className="sg-input-box error">
                <span>MENTOR99_EXPIRED</span>
                <AlertCircle size={16} color="var(--accent-rose)" />
              </div>
              <span className="sg-error-text">This discount code has expired</span>
            </div>
          </section>
        </div>
      </div>
      
      {/* Hardware buttons */}
      <div className="btn-mute"></div>
      <div className="btn-vol-up"></div>
      <div className="btn-vol-down"></div>
      <div className="btn-power"></div>
    </div>
  </div>
);

export default StyleGuidePhone;
