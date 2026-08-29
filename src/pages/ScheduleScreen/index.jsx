import React, { useState } from 'react';
import { Calendar, Video, Clock, ChevronRight, Home, Search, MessageSquare, User, MoreVertical, Plus } from 'lucide-react';
import './styles.css';

const ScheduleScreen = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  return (
    <div className="schedule-screen no-scrollbar">
      {/* 1. Header */}
      <div className="sch-header">
        <h2 className="sch-title">My Mentorship Sessions</h2>
        <div className="sch-tabs-toggle">
          <button 
            className={`sch-tab-btn ${activeTab === 'Upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('Upcoming')}
          >
            Upcoming (3)
          </button>
          <button 
            className={`sch-tab-btn ${activeTab === 'Past' ? 'active' : ''}`}
            onClick={() => setActiveTab('Past')}
          >
            Past Sessions
          </button>
        </div>
      </div>

      <div className="sch-scroll-body no-scrollbar">
        {/* 2. Urgent Live / Today Session Hero Card */}
        <div className="sch-hero-card">
          <div className="sch-hero-top">
            <span className="sch-live-badge">
              <span className="sch-live-dot"></span>
              STARTS IN 25 MIN
            </span>
            <span className="sch-time-tag">Today · 07:00 PM</span>
          </div>

          <div className="sch-mentor-profile">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80" 
              alt="Stella Fernandez" 
              className="sch-avatar" 
            />
            <div className="sch-m-details">
              <h4>Stella Fernandez</h4>
              <p>Growth & Product Marketing · 30m</p>
              <div className="sch-topic-pill">
                <span>Topic: Deck Storytelling & Positioning</span>
              </div>
            </div>
          </div>

          <div className="sch-hero-actions">
            <button className="btn-sch-join">
              <Video size={15} />
              <span>Join Video Call</span>
            </button>
            <button className="btn-sch-reschedule">
              Reschedule
            </button>
          </div>
        </div>

        {/* 3. Next Sessions List */}
        <div className="sch-sec-header">
          <h4 className="sch-sec-title">Upcoming Schedule</h4>
          <span className="sch-sync-btn">Sync Calendar</span>
        </div>

        <div className="sch-list">
          {/* Item 1 */}
          <div className="sch-list-card">
            <div className="sch-date-badge">
              <span className="sch-db-day">THU</span>
              <span className="sch-db-num">15</span>
            </div>
            <div className="sch-list-info">
              <div className="sch-li-title">
                <h5>Andrew Garfield</h5>
                <span className="sch-li-time">10:00 AM</span>
              </div>
              <p className="sch-li-desc">Startup Angel Investing & Cap Table</p>
            </div>
            <button className="sch-more-btn">
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Item 2 */}
          <div className="sch-list-card">
            <div className="sch-date-badge">
              <span className="sch-db-day">SUN</span>
              <span className="sch-db-num">18</span>
            </div>
            <div className="sch-list-info">
              <div className="sch-li-title">
                <h5>Arjun Mehta</h5>
                <span className="sch-li-time">08:30 PM</span>
              </div>
              <p className="sch-li-desc">System Design & Mock Tech Interview</p>
            </div>
            <button className="sch-more-btn">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Bottom Navigation Bar */}
      <nav className="home-bottom-nav">
        <button className="nav-tab-btn">
          <Home size={20} />
          <span>Home</span>
        </button>
        <button className="nav-tab-btn">
          <Search size={20} />
          <span>Search</span>
        </button>
        <button className="nav-tab-btn active">
          <Calendar size={20} />
          <span>Schedule</span>
        </button>
        <button className="nav-tab-btn">
          <MessageSquare size={20} />
          <span>Chat</span>
        </button>
        <button className="nav-tab-btn">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80" 
            alt="Profile" 
            className="nav-avatar-icon" 
          />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default ScheduleScreen;
