import React from 'react';
import { User, Sparkles, Bookmark, CreditCard, Bell, Shield, ChevronRight, LogOut, Home, Search, Calendar, MessageSquare, Award } from 'lucide-react';
import './styles.css';

const ProfileScreen = () => {
  return (
    <div className="profile-screen no-scrollbar">
      {/* 1. Profile Header */}
      <div className="prof-header">
        <div className="prof-avatar-wrap">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&auto=format&fit=crop&q=80" 
            alt="Sakura Hime" 
            className="prof-avatar" 
          />
          <div className="prof-pro-badge">PRO</div>
        </div>

        <h3 className="prof-name">Sakura Hime</h3>
        <p className="prof-email">sakura.hime@example.com</p>

        <div className="prof-goal-pill">
          <Sparkles size={12} color="#1D75FE" />
          <span>Goal: Growth Marketing Lead</span>
        </div>
      </div>

      <div className="prof-scroll-body no-scrollbar">
        {/* 2. Stat Counts */}
        <div className="prof-stats-grid">
          <div className="prof-stat-box">
            <span className="prof-stat-num">8</span>
            <span className="prof-stat-lbl">Sessions</span>
          </div>
          <div className="prof-stat-sep"></div>
          <div className="prof-stat-box">
            <span className="prof-stat-num">4</span>
            <span className="prof-stat-lbl">Mentors</span>
          </div>
          <div className="prof-stat-sep"></div>
          <div className="prof-stat-box">
            <span className="prof-stat-num">65%</span>
            <span className="prof-stat-lbl">Goal Done</span>
          </div>
        </div>

        {/* 3. Pro Status Banner */}
        <div className="prof-pro-card">
          <div className="prof-pc-left">
            <div className="prof-pc-icon">🚀</div>
            <div>
              <span className="prof-pc-title">Mentora Pro Active</span>
              <span className="prof-pc-sub">Priority booking & discounts enabled</span>
            </div>
          </div>
          <span className="prof-manage-tag">Manage</span>
        </div>

        {/* 4. Menu Settings Group */}
        <div className="prof-menu-group">
          <div className="prof-menu-item">
            <div className="prof-mi-left">
              <div className="prof-icon-box blue">
                <Bookmark size={15} />
              </div>
              <span>Saved Mentors</span>
            </div>
            <div className="prof-mi-right">
              <span className="prof-count-badge">4</span>
              <ChevronRight size={14} color="#94A3B8" />
            </div>
          </div>

          <div className="prof-menu-item">
            <div className="prof-mi-left">
              <div className="prof-icon-box amber">
                <Award size={15} />
              </div>
              <span>Career Roadmap & Badges</span>
            </div>
            <ChevronRight size={14} color="#94A3B8" />
          </div>

          <div className="prof-menu-item">
            <div className="prof-mi-left">
              <div className="prof-icon-box dark">
                <CreditCard size={15} />
              </div>
              <span>Payment Methods</span>
            </div>
            <ChevronRight size={14} color="#94A3B8" />
          </div>

          <div className="prof-menu-item">
            <div className="prof-mi-left">
              <div className="prof-icon-box gray">
                <Bell size={15} />
              </div>
              <span>Notifications & Reminders</span>
            </div>
            <ChevronRight size={14} color="#94A3B8" />
          </div>
        </div>

        {/* 5. Logout */}
        <div className="prof-logout-btn">
          <LogOut size={14} color="#EF4444" />
          <span>Log Out</span>
        </div>
      </div>

      {/* 6. Bottom Navigation Bar */}
      <nav className="home-bottom-nav">
        <button className="nav-tab-btn">
          <Home size={20} />
          <span>Home</span>
        </button>
        <button className="nav-tab-btn">
          <Search size={20} />
          <span>Search</span>
        </button>
        <button className="nav-tab-btn">
          <Calendar size={20} />
          <span>Schedule</span>
        </button>
        <button className="nav-tab-btn">
          <MessageSquare size={20} />
          <span>Chat</span>
        </button>
        <button className="nav-tab-btn active">
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

export default ProfileScreen;
