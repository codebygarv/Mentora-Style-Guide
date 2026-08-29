import React from 'react';
import { Sparkles, Bookmark, CreditCard, Bell, ChevronRight, LogOut, Home, Search, Calendar, MessageSquare, User, Award, Zap } from 'lucide-react';
import Avatar from '../../components/Avatar';
import Pill from '../../components/Pill';
import StatRow from '../../components/StatRow';
import './styles.css';

const ProfileScreen = () => {
  return (
    <div className="profile-screen no-scrollbar">
      {/* 1. Profile Header */}
      <div className="prof-header">
        <div className="prof-avatar-wrap">
          <Avatar name="Sakura Hime" size={64} shape="circle" />
          <div className="prof-pro-badge">PRO</div>
        </div>

        <h3 className="prof-name">Sakura Hime</h3>
        <p className="prof-email">sakura.hime@example.com</p>

        <Pill variant="field" icon={<Sparkles size={12} />}>Goal: Growth Marketing Lead</Pill>
      </div>

      <div className="prof-scroll-body no-scrollbar">
        {/* 2. Stat Counts */}
        <StatRow
          layout="divided"
          items={[
            { value: '8', label: 'Sessions' },
            { value: '4', label: 'Mentors' },
            { value: '65%', label: 'Goal Done' },
          ]}
        />

        {/* 3. Pro Status Banner */}
        <div className="prof-pro-card">
          <div className="prof-pc-left">
            <div className="prof-pc-icon">
              <Zap size={18} color="#FFFFFF" />
            </div>
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
          <User size={20} />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default ProfileScreen;
