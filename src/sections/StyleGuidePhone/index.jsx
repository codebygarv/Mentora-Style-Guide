import React from 'react';
import { ArrowLeft, MoreHorizontal, Sparkles, Star, ShieldCheck, CheckCircle2, AlertCircle, Clock, Briefcase, DollarSign, BarChart3 } from 'lucide-react';
import ColorBox from '../../components/ColorBox';
import Pill from '../../components/Pill';
import StatusBadge from '../../components/StatusBadge';
import './styles.css';

const StyleGuidePhone = ({ theme, title = "Design System" }) => (
  <div className="device-mockup" data-theme={theme}>
    <div className="device-hardware">
      {/* iOS Status Bar */}
      <div className="status-bar-row">
        <span className="status-time">9:41</span>
        <div className="status-icons">
          <span style={{ fontSize: '11px', fontWeight: 600 }}>5G</span>
        </div>
      </div>

      <div className="dynamic-island">
        <div className="dynamic-island-cam"></div>
        <div className="dynamic-island-sensor"></div>
      </div>
      
      <div className="device-screen custom-scrollbar">
        <header className="sg-header">
          <ArrowLeft className="sg-icon" size={18} />
          <div className="sg-header-title-box">
            <span className="sg-theme-badge">{theme.toUpperCase()} THEME</span>
            <h2 className="sg-title">{title}</h2>
          </div>
          <MoreHorizontal className="sg-icon" size={18} />
        </header>

        <div className="sg-content">
          <section className="sg-section" style={{ paddingTop: '14px' }}>
            <div className="sg-brand-chip">
              <Sparkles size={13} />
              <span>Mentora Visual Tokens</span>
            </div>
            <h1 className="text-h1" style={{ fontSize: '22px', margin: '8px 0 4px', color: 'var(--text-primary)' }}>
              Electric Blue & Obsidian
            </h1>
            <p className="text-body" style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              Tailored chromatic system matching the clean sky blue mobile application UI.
            </p>
          </section>

          {/* Electric Blue Scale */}
          <section className="sg-section">
            <h2 className="sg-section-title">Primary · Electric Azure Scale</h2>
            <div className="color-grid">
              <ColorBox name="blue-50" hex="#EFF6FF" />
              <ColorBox name="blue-100" hex="#DBEAFE" />
              <ColorBox name="blue-200" hex="#BFDBFE" />
              <ColorBox name="blue-300" hex="#93C5FD" />
              <ColorBox name="blue-400" hex="#60A5FA" />
              <ColorBox name="blue-500" hex="#1D75FE" />
              <ColorBox name="blue-600" hex="#1E40AF" />
              <ColorBox name="blue-700" hex="#1D4ED8" />
              <ColorBox name="blue-800" hex="#1E3A8A" />
              <ColorBox name="blue-900" hex="#172554" />
              <ColorBox name="obsidian" hex="#18181B" />
              <ColorBox name="white" hex="#FFFFFF" />
            </div>
          </section>

          {/* Accent Scale */}
          <section className="sg-section">
            <h2 className="sg-section-title">Functional Accents</h2>
            <div className="color-grid">
              <ColorBox name="action-blue" hex="#1D75FE" />
              <ColorBox name="charcoal-cta" hex="#18181B" />
              <ColorBox name="amber-stars" hex="#F59E0B" />
              <ColorBox name="orange-warm" hex="#FF7849" />
              <ColorBox name="emerald-online" hex="#10B981" />
              <ColorBox name="rose-clock" hex="#EF4444" />
            </div>
          </section>

          {/* Badges & Chips */}
          <section className="sg-section">
            <h2 className="sg-section-title">Field Tags & Status Badges</h2>
            <div className="badges-flex">
              <Pill variant="field" icon={<Briefcase size={12} />}>Marketing</Pill>
              <Pill variant="field" icon={<DollarSign size={12} />}>Finance</Pill>
              <Pill variant="field" icon={<BarChart3 size={12} />}>Investing</Pill>
              <Pill variant="rating" icon={<Star size={12} fill="#F59E0B" color="#F59E0B" />}>4.9 Ratings</Pill>
              <Pill variant="rating" icon={<Clock size={12} color="#EF4444" />}>5 Years Experience</Pill>
            </div>
            <div className="badges-flex" style={{ marginTop: '10px' }}>
              <StatusBadge label="Live Now" tone="live" />
              <StatusBadge label="Online" tone="online" />
              <StatusBadge label="Scheduled" tone="scheduled" />
            </div>
          </section>

          {/* Buttons */}
          <section className="sg-section">
            <h2 className="sg-section-title">Pill Button Variants</h2>
            <button className="btn-pill-dark" style={{ width: '100%', marginBottom: '10px' }}>
              <span>Book Now</span>
            </button>
            <span className="text-sm" style={{ display: 'block', marginBottom: '16px' }}>Obsidian Pill CTA (Width 100%)</span>
            
            <button className="btn-pill-blue" style={{ width: '100%', marginBottom: '10px' }}>
              <span>Book Now</span>
            </button>
            <span className="text-sm" style={{ display: 'block' }}>Electric Blue Action Pill</span>
          </section>
        </div>
      </div>

      <div className="home-indicator-bar"></div>
      <div className="btn-mute"></div>
      <div className="btn-vol-up"></div>
      <div className="btn-vol-down"></div>
      <div className="btn-power"></div>
    </div>
  </div>
);

export default StyleGuidePhone;
