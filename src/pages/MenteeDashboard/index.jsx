import React, { useState } from 'react';
import { Search, Bell, Sparkles, Video, Calendar, ArrowRight, Star, ChevronRight, Home, Compass, MessageSquare, User, BookOpen } from 'lucide-react';
import Avatar from '../../components/Avatar';
import Pill from '../../components/Pill';
import StatRow from '../../components/StatRow';
import StatusBadge from '../../components/StatusBadge';
import './styles.css';

const MenteeDashboard = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'React', 'Full-Stack', 'AI / ML', 'System Design'];

  return (
    <div className="mentee-dashboard no-scrollbar">
      {/* 1. Header Bar */}
      <div className="md-header">
        <div className="md-user-info">
          <Avatar name="Garv Sharma" size={42} shape="circle" status="online" />
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
            <StatusBadge label="Starts in 45 min" tone="live" />
            <span className="md-uc-date">Today · 7:30 PM</span>
          </div>

          <div className="md-uc-mentor">
            <Avatar name="Rahul Sharma" size={48} shape="rounded" />
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

        {/* 3. Progress Stats Row */}
        <StatRow
          layout="divided"
          items={[
            { value: '8', label: 'Sessions Done' },
            { value: '12', label: 'Goals Met' },
            { value: '96%', label: 'Match Avg', highlight: true },
          ]}
        />

        {/* 4. Category Pills Filter */}
        <div className="md-categories-scroll no-scrollbar">
          {categories.map((cat) => (
            <Pill
              key={cat}
              variant="toggle"
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Pill>
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
              <Avatar name="Priya Sharma" size={48} shape="rounded" />
              <div className="md-cm-details">
                <div className="md-cm-name-row">
                  <h4>Priya Sharma</h4>
                  <Pill variant="rating" icon={<Star size={12} fill="#F59E0B" color="#F59E0B" />}>
                    4.9 (142)
                  </Pill>
                </div>
                <p className="md-cm-title">Tech Lead @ Microsoft</p>
                <div className="md-cm-tags">
                  <Pill variant="tag">Full-Stack</Pill>
                  <Pill variant="tag">TypeScript</Pill>
                </div>
              </div>
            </div>

            <div className="md-cm-bottom">
              <div className="md-cm-match">
                <Sparkles size={13} color="#1D75FE" />
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
              <Avatar name="Arjun Mehta" size={48} shape="rounded" />
              <div className="md-cm-details">
                <div className="md-cm-name-row">
                  <h4>Arjun Mehta</h4>
                  <Pill variant="rating" icon={<Star size={12} fill="#F59E0B" color="#F59E0B" />}>
                    5.0 (98)
                  </Pill>
                </div>
                <p className="md-cm-title">AI Engineer @ Uber</p>
                <div className="md-cm-tags">
                  <Pill variant="tag">Python</Pill>
                  <Pill variant="tag">MLOps</Pill>
                </div>
              </div>
            </div>

            <div className="md-cm-bottom">
              <div className="md-cm-match">
                <Sparkles size={13} color="#1D75FE" />
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
