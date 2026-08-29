import React, { useState } from 'react';
import { ArrowLeft, Clock, Star, Calendar, GraduationCap, MessageSquare, Briefcase, Info } from 'lucide-react';
import './styles.css';

const MentorProfile = () => {
  const [activeTab, setActiveTab] = useState('Reviews');

  const reviews = [
    {
      id: 1,
      name: 'Lola Thung',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
      rating: 5,
      time: '1 Days Ago',
      comment: "What stood out was the mentor's genuine care and experience—this wasn't just theory, it was lived wisdom."
    },
    {
      id: 2,
      name: 'Jose Barkley',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
      rating: 5,
      time: '2 Days Ago',
      comment: "Incredibly insightful! I left feeling more confident and focused on my next steps in growth marketing and branding."
    }
  ];

  return (
    <div className="mentor-profile-screen no-scrollbar">
      {/* 1. Top Navigation Bar */}
      <div className="mp-top-nav">
        <button className="mp-nav-circle-btn" aria-label="Back">
          <ArrowLeft size={18} color="#0F172A" />
        </button>
        <button className="mp-nav-circle-btn" aria-label="Details">
          <Clock size={18} color="#0F172A" />
        </button>
      </div>

      <div className="mp-scrollable-body no-scrollbar">
        {/* 2. Mentor Hero Showcase */}
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
              {/* Stat 1 */}
              <div className="mp-stat-box">
                <div className="mp-stat-header">
                  <span className="mp-stat-value">5 Years</span>
                  <div className="mp-stat-icon-wrap red">
                    <Clock size={11} color="#EF4444" />
                  </div>
                </div>
                <span className="mp-stat-label">Experience</span>
              </div>

              {/* Stat 2 */}
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

        {/* 3. Segmented Navigation Tabs */}
        <div className="mp-segmented-tabs">
          <button 
            className={`mp-seg-tab ${activeTab === 'Schedule' ? 'active' : ''}`}
            onClick={() => setActiveTab('Schedule')}
          >
            <Calendar size={15} />
            <span>Schedule</span>
          </button>

          <button 
            className={`mp-seg-tab ${activeTab === 'Education' ? 'active' : ''}`}
            onClick={() => setActiveTab('Education')}
          >
            <GraduationCap size={15} />
            <span>Education</span>
          </button>

          <button 
            className={`mp-seg-tab ${activeTab === 'Reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('Reviews')}
          >
            <Star size={15} fill={activeTab === 'Reviews' ? '#FFFFFF' : 'none'} />
            <span>Reviews</span>
          </button>
        </div>

        {/* 4. Reviews List */}
        <div className="mp-reviews-list">
          {reviews.map((rev) => (
            <div key={rev.id} className="mp-review-card">
              <div className="mp-rev-header">
                <div className="mp-rev-user">
                  <img src={rev.avatar} alt={rev.name} className="mp-rev-avatar" />
                  <div className="mp-rev-user-meta">
                    <h5 className="mp-rev-name">{rev.name}</h5>
                    <div className="mp-rev-stars">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="mp-rev-time">{rev.time}</span>
              </div>
              <p className="mp-rev-comment">{rev.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Fixed Bottom Action Bar */}
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

export default MentorProfile;
