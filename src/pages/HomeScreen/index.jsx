import React, { useState } from 'react';
import { Bell, Briefcase, DollarSign, BarChart3, Home, Search, Calendar, MessageSquare, ChevronRight } from 'lucide-react';
import './styles.css';

const HomeScreen = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeTab, setActiveTab] = useState('Home');

  const filters = ['All', 'Startups', 'Career', 'Leadership', 'Mindset'];

  return (
    <div className="app-home-screen no-scrollbar">
      {/* 1. Header Bar */}
      <header className="home-header">
        <div className="home-user-profile">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80" 
            alt="Sakura Hime" 
            className="home-user-avatar" 
          />
          <div className="home-user-text">
            <span className="home-welcome-sub">Hi, Welcome Back!</span>
            <h2 className="home-user-name">Sakura Hime</h2>
          </div>
        </div>

        <button className="home-bell-btn" aria-label="Notifications">
          <Bell size={18} color="#0F172A" />
        </button>
      </header>

      <div className="home-scrollable-body no-scrollbar">
        {/* 2. Upgrade to Pro Banner */}
        <div className="pro-banner-card">
          <div className="pro-banner-content">
            <div className="pro-rocket-badge">
              <span className="pro-rocket-emoji">🚀</span>
            </div>
            <h3 className="pro-banner-title">Upgrade to Pro</h3>
            <p className="pro-banner-desc">Get more out of your mentoring journey.</p>
            <button className="btn-pro-try">
              Try Now
            </button>
          </div>
          <div className="pro-banner-img-wrap">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=260&auto=format&fit=crop&q=80" 
              alt="Mentors Pro" 
              className="pro-mentors-img" 
            />
          </div>
        </div>

        {/* 3. Section: Choose a Professional on Field */}
        <div className="home-section-head">
          <h2 className="home-section-title">
            Choose a Professional<br />on Field
          </h2>
        </div>

        {/* 4. Horizontal Category Field Cards */}
        <div className="field-cards-scroll no-scrollbar">
          {/* Card 1: Marketing */}
          <div className="field-card">
            <div className="field-tag-badge">
              <Briefcase size={12} className="field-icon" />
              <span>Marketing</span>
            </div>
            <span className="field-mentors-count">48 Mentors available</span>
          </div>

          {/* Card 2: Finance */}
          <div className="field-card">
            <div className="field-tag-badge">
              <DollarSign size={12} className="field-icon" />
              <span>Finance</span>
            </div>
            <span className="field-mentors-count">48 Mentors available</span>
          </div>

          {/* Card 3: Investing */}
          <div className="field-card">
            <div className="field-tag-badge">
              <BarChart3 size={12} className="field-icon" />
              <span>Investing</span>
            </div>
            <span className="field-mentors-count">48 Mentors available</span>
          </div>
        </div>

        {/* 5. Filter Chips */}
        <div className="filter-chips-row no-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-chip ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* 6. Mentors Showcase Row */}
        <div className="mentors-cards-scroll no-scrollbar">
          {/* Mentor Card 1: Stella Fernandez */}
          <div className="mentor-showcase-card">
            <div className="msc-details">
              <div className="field-tag-badge">
                <Briefcase size={11} className="field-icon" />
                <span>Marketing</span>
              </div>
              <h4 className="msc-name">Stella<br />Fernandez</h4>
              <div className="msc-price-row">
                <span className="msc-price">$16</span>
                <span className="msc-per">/session</span>
              </div>
              <button className="btn-msc-book">
                Book Now
              </button>
            </div>
            <div className="msc-photo-wrap">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=320&auto=format&fit=crop&q=80" 
                alt="Stella Fernandez" 
                className="msc-photo orange-sweater" 
              />
            </div>
          </div>

          {/* Mentor Card 2: Andrew Garfield */}
          <div className="mentor-showcase-card">
            <div className="msc-details">
              <div className="field-tag-badge">
                <BarChart3 size={11} className="field-icon" />
                <span>Investing</span>
              </div>
              <h4 className="msc-name">Andrew<br />Garfield</h4>
              <div className="msc-price-row">
                <span className="msc-price">$20</span>
                <span className="msc-per">/session</span>
              </div>
              <button className="btn-msc-book muted">
                Book Now
              </button>
            </div>
            <div className="msc-photo-wrap">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=320&auto=format&fit=crop&q=80" 
                alt="Andrew Garfield" 
                className="msc-photo blue-attire" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* 7. Bottom Tab Navigation */}
      <nav className="home-bottom-nav">
        <button 
          className={`nav-tab-btn ${activeTab === 'Home' ? 'active' : ''}`}
          onClick={() => setActiveTab('Home')}
        >
          <Home size={20} />
          <span>Home</span>
        </button>

        <button 
          className={`nav-tab-btn ${activeTab === 'Search' ? 'active' : ''}`}
          onClick={() => setActiveTab('Search')}
        >
          <Search size={20} />
          <span>Search</span>
        </button>

        <button 
          className={`nav-tab-btn ${activeTab === 'Schedule' ? 'active' : ''}`}
          onClick={() => setActiveTab('Schedule')}
        >
          <Calendar size={20} />
          <span>Schedule</span>
        </button>

        <button 
          className={`nav-tab-btn ${activeTab === 'Chat' ? 'active' : ''}`}
          onClick={() => setActiveTab('Chat')}
        >
          <MessageSquare size={20} />
          <span>Chat</span>
        </button>

        <button 
          className={`nav-tab-btn ${activeTab === 'Profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('Profile')}
        >
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

export default HomeScreen;
