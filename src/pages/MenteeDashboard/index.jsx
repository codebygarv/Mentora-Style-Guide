import React, { useState } from 'react';
import { Search, Bell, Sparkles, Video, Calendar, ArrowRight, Star, ChevronRight, Home, Compass, MessageSquare, User, BookOpen } from 'lucide-react';
import './styles.css';

const MenteeDashboard = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'React', 'Full-Stack', 'AI / ML', 'System Design'];

  return (
    <div className="mentee-dashboard no-scrollbar">
      {/* 1. Header Bar */}
      <div className="md-header">
        <div className="md-user-info">
          <div className="md-avatar-wrap">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" alt="User" className="md-avatar" />
            <span className="md-online-dot"></span>
          </div>
          <div>
            <span className="md-greeting">Good Morning 👋</span>
            <h3 className="md-username">Garv Sharma</h3>
          </div>
        </div>

        <div className="md-header-actions">
          <button className="md-icon-btn">
            <Search size={18} />
          </button>
          <button className="md-icon-btn">
            <Bell size={18} />
            <span className="md-notif-badge">2</span>
          </button>
        </div>
      </div>

      <div className="md-scroll-content">
        {/* 2. Upcoming Session Card */}
        <div className="md-upcoming-card">
          <div className="md-uc-top">
            <span className="md-uc-badge">
              <span className="live-pulse"></span>
              STARTS IN 45 MIN
            </span>
            <span className="md-uc-date">Today · 7:30 PM</span>
          </div>

          <div className="md-uc-mentor">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" 
              alt="Rahul Sharma" 
              className="md-mentor-photo" 
            />
            <div className="md-mentor-info">
              <h4>Rahul Sharma</h4>
              <p>Senior Staff Engineer @ Stripe</p>
              <div className="md-session-meta">
                <Video size={13} />
                <span>React Architecture & Career Roadmap</span>
              </div>
            </div>
          </div>

          <div className="md-uc-actions">
            <button className="btn-join-call">
              <Video size={16} />
              <span>Join Video Room</span>
            </button>
            <button className="btn-details">
              <Calendar size={16} />
            </button>
          </div>
        </div>

        {/* 3. Progress Stats Pill Row */}
        <div className="md-stats-row">
          <div className="md-stat-card">
            <div className="md-stat-num">8</div>
            <div className="md-stat-label">Sessions Done</div>
          </div>
          <div className="md-stat-divider"></div>
          <div className="md-stat-card">
            <div className="md-stat-num">12</div>
            <div className="md-stat-label">Goals Met</div>
          </div>
          <div className="md-stat-divider"></div>
          <div className="md-stat-card">
            <div className="md-stat-num highlight">96%</div>
            <div className="md-stat-label">Match Avg</div>
          </div>
        </div>

        {/* 4. Category Pills Filter */}
        <div className="md-categories-scroll no-scrollbar">
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={`md-category-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 5. Smart Mentor Recommendations */}
        <div className="md-section-header">
          <div>
            <h3 className="md-sec-title">Smart Match Mentors</h3>
            <span className="md-sec-subtitle">Based on your career roadmap</span>
          </div>
          <button className="md-view-all">
            <span>See all</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="md-mentor-list">
          {/* Mentor 1 */}
          <div className="md-card-mentor">
            <div className="md-cm-top">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" 
                alt="Priya Sharma" 
                className="md-cm-avatar" 
              />
              <div className="md-cm-details">
                <div className="md-cm-name-row">
                  <h4>Priya Sharma</h4>
                  <div className="md-rating-chip">
                    <Star size={12} fill="#F59E0B" color="#F59E0B" />
                    <span>4.9 (142)</span>
                  </div>
                </div>
                <p className="md-cm-title">Tech Lead @ Microsoft</p>
                <div className="md-cm-tags">
                  <span className="tag">Full-Stack</span>
                  <span className="tag">TypeScript</span>
                </div>
              </div>
            </div>

            <div className="md-cm-bottom">
              <div className="md-cm-match">
                <Sparkles size={13} color="#6366F1" />
                <span>96% Goal Match</span>
              </div>
              <div className="md-cm-action">
                <span className="md-cm-price">₹499<small>/30m</small></span>
                <button className="md-cm-book-btn">Book</button>
              </div>
            </div>
          </div>

          {/* Mentor 2 */}
          <div className="md-card-mentor">
            <div className="md-cm-top">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" 
                alt="Arjun Mehta" 
                className="md-cm-avatar" 
              />
              <div className="md-cm-details">
                <div className="md-cm-name-row">
                  <h4>Arjun Mehta</h4>
                  <div className="md-rating-chip">
                    <Star size={12} fill="#F59E0B" color="#F59E0B" />
                    <span>5.0 (98)</span>
                  </div>
                </div>
                <p className="md-cm-title">AI Engineer @ Uber</p>
                <div className="md-cm-tags">
                  <span className="tag">Python</span>
                  <span className="tag">MLOps</span>
                </div>
              </div>
            </div>

            <div className="md-cm-bottom">
              <div className="md-cm-match">
                <Sparkles size={13} color="#6366F1" />
                <span>92% Goal Match</span>
              </div>
              <div className="md-cm-action">
                <span className="md-cm-price">₹699<small>/45m</small></span>
                <button className="md-cm-book-btn">Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Mobile Bottom Navigation Bar */}
      <div className="md-bottom-nav">
        <button className="nav-item active">
          <Home size={20} />
          <span>Home</span>
        </button>
        <button className="nav-item">
          <Compass size={20} />
          <span>Explore</span>
        </button>
        <button className="nav-item">
          <BookOpen size={20} />
          <span>Sessions</span>
        </button>
        <button className="nav-item">
          <MessageSquare size={20} />
          <span>Chat</span>
        </button>
        <button className="nav-item">
          <User size={20} />
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
};

export default MenteeDashboard;
