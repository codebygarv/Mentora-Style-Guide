import React from 'react';
import MentoraLogo from '../MentoraLogo';
import { Sparkles, Layers, ShieldCheck, Compass, Video } from 'lucide-react';
import './styles.css';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const DocHeader = () => {
  return (
    <>
      <div className="doc-top">
        <div className="doc-in">
          <a href="#hero-section" className="doc-brandmark">
            <MentoraLogo size={28} />
            <span className="doc-brand-name">Mentora</span>
          </a>

          <nav className="doc-nav">
            <a href="#hero-section">Overview</a>
            <a href="#section-01">Tokens</a>
            <a href="#section-02">Auth</a>
            <a href="#section-03">Discovery</a>
            <a href="#section-04">Live</a>
            <a href="#section-05">Tabs</a>
            <a href="#section-06">Mentor Tools</a>
            <a href="#section-07">Roadmaps & Badges</a>
          </nav>

          <a 
            href="https://github.com/codebygarv/Mentora-Style-Guide" 
            target="_blank" 
            rel="noopener noreferrer"
            className="doc-github-btn"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <header className="doc-hero">
        <div className="doc-wrap">
          <h1 className="doc-hero-title">
            Mentora App<br />Interactive Design System
          </h1>
          <p className="doc-lede">
            The next-generation mobile mentorship platform connecting ambitious learners with industry leaders.
            High-fidelity prototypes, locked tokens, and end-to-end user journeys rendered at 375px mobile viewport scale.
          </p>
          <div className="doc-meta-stats">
            <div className="stat-badge">
              <Layers size={15} />
              <span>16 High-Fidelity Screens</span>
            </div>
            <div className="stat-badge">
              <ShieldCheck size={15} />
              <span>Dual Light / Dark Tokens</span>
            </div>
            <div className="stat-badge">
              <Compass size={15} />
              <span>Full Mentee Booking Journey</span>
            </div>
            <div className="stat-badge">
              <Video size={15} />
              <span>Interactive Live Call & Notes</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default DocHeader;
