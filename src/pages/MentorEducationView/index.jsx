import React from 'react';
import { ArrowLeft, Clock, Star, Calendar, GraduationCap, MessageSquare, Briefcase, Award, Globe } from 'lucide-react';
import './styles.css';

const MentorEducationView = () => {
  return (
    <div className="mentor-profile-screen no-scrollbar">
      {/* 1. Top Bar */}
      <div className="mp-top-nav">
        <button className="mp-nav-circle-btn" aria-label="Back">
          <ArrowLeft size={18} color="#0F172A" />
        </button>
        <button className="mp-nav-circle-btn" aria-label="Details">
          <Clock size={18} color="#0F172A" />
        </button>
      </div>

      <div className="mp-scrollable-body no-scrollbar">
        {/* 2. Mentor Hero Card */}
        <div className="mp-hero-card">
          <div className="mp-hero-info">
            <div className="field-tag-badge">
              <Briefcase size={12} className="field-icon" />
              <span>Marketing</span>
            </div>

            <h1 className="mp-mentor-name">
              Stella<br />Fernandez
            </h1>

            <div className="mp-price-row">
              <span className="mp-price-num">$16</span>
              <span className="mp-price-unit">/session</span>
            </div>

            <div className="mp-stats-container">
              <div className="mp-stat-box">
                <div className="mp-stat-header">
                  <span className="mp-stat-value">5 Years</span>
                  <div className="mp-stat-icon-wrap red">
                    <Clock size={11} color="#EF4444" />
                  </div>
                </div>
                <span className="mp-stat-label">Experience</span>
              </div>

              <div className="mp-stat-box">
                <div className="mp-stat-header">
                  <span className="mp-stat-value">4.9</span>
                  <div className="mp-stat-icon-wrap amber">
                    <Star size={11} fill="#F59E0B" color="#F59E0B" />
                  </div>
                </div>
                <span className="mp-stat-label">Ratings</span>
              </div>
            </div>
          </div>

          <div className="mp-hero-photo-wrap">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=450&auto=format&fit=crop&q=80" 
              alt="Stella Fernandez" 
              className="mp-hero-photo" 
            />
          </div>
        </div>

        {/* 3. Segmented Navigation Tabs (Education Active) */}
        <div className="mp-segmented-tabs">
          <button className="mp-seg-tab">
            <Calendar size={15} />
            <span>Schedule</span>
          </button>

          <button className="mp-seg-tab active">
            <GraduationCap size={15} />
            <span>Education</span>
          </button>

          <button className="mp-seg-tab">
            <Star size={15} />
            <span>Reviews</span>
          </button>
        </div>

        {/* 4. Experience & Education Cards */}
        <div className="mpe-body-stack">
          {/* Work History */}
          <div className="mpe-block">
            <div className="mpe-block-title">
              <Briefcase size={14} color="#1D75FE" />
              <span>Work Experience</span>
            </div>

            <div className="mpe-item">
              <div className="mpe-item-header">
                <strong>Senior Director of Growth</strong>
                <span className="mpe-year">2021 - Present</span>
              </div>
              <p className="mpe-company">Stripe · San Francisco, CA</p>
              <p className="mpe-desc">Led user acquisition funnels and scaled global onboarding conversion by 34%.</p>
            </div>

            <div className="mpe-item">
              <div className="mpe-item-header">
                <strong>Product Marketing Lead</strong>
                <span className="mpe-year">2018 - 2021</span>
              </div>
              <p className="mpe-company">Uber · San Francisco, CA</p>
              <p className="mpe-desc">Managed driver marketplace campaigns and localized growth strategies.</p>
            </div>
          </div>

          {/* Education */}
          <div className="mpe-block">
            <div className="mpe-block-title">
              <GraduationCap size={14} color="#1D75FE" />
              <span>Degrees & Education</span>
            </div>

            <div className="mpe-item">
              <div className="mpe-item-header">
                <strong>M.S. in Marketing & Strategy</strong>
                <span className="mpe-year">2016 - 2018</span>
              </div>
              <p className="mpe-company">Stanford University</p>
            </div>

            <div className="mpe-item">
              <div className="mpe-item-header">
                <strong>B.A. in Economics</strong>
                <span className="mpe-year">2012 - 2016</span>
              </div>
              <p className="mpe-company">UC Berkeley</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Fixed Bottom CTA */}
      <div className="mp-bottom-cta-bar">
        <button className="btn-mp-book-now">
          Book Now
        </button>
        <button className="btn-mp-chat-float" aria-label="Send Message">
          <MessageSquare size={20} color="#FFFFFF" />
        </button>
      </div>
    </div>
  );
};

export default MentorEducationView;
