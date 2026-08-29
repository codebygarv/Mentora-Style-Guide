import React from 'react';
import { ArrowRight } from 'lucide-react';
import './styles.css';

const Welcome = () => {
  return (
    <div className="welcome-screen no-scrollbar">
      <div className="welcome-hero-media">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=80"
          alt="Mentorship"
          className="welcome-hero-img"
        />
        <div className="welcome-gradient-overlay"></div>
      </div>

      <div className="welcome-content">
        <div className="welcome-text-wrap">
          <h1 className="welcome-title">
            Connect with<br />World-Class Mentors
          </h1>
          <p className="welcome-desc">
            Book 1:1 focused video sessions, get tailored career roadmaps, and master industry skills from leaders.
          </p>

          <div className="welcome-stat-line">
            <strong>1,200+</strong> verified mentors across 12 industries
          </div>

          <div className="welcome-dots-row">
            <span className="welcome-dot active"></span>
            <span className="welcome-dot"></span>
            <span className="welcome-dot"></span>
          </div>
        </div>

        <div className="welcome-actions">
          <button className="btn-welcome-primary">
            <span>Get Started</span>
            <ArrowRight size={16} />
          </button>
          
          <button className="btn-welcome-secondary">
            <span>I already have an account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
