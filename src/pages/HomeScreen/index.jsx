import React, { useState } from 'react';
import { Bell, Briefcase, DollarSign, BarChart3, Home, Search, Calendar, MessageSquare, User, Zap } from 'lucide-react';
import Avatar from '../../components/Avatar';
import Pill from '../../components/Pill';
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
          <Avatar name="Sakura Hime" size={44} shape="circle" />
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
              <Zap size={16} color="#1D75FE" />
            </div>
            <h3 className="pro-banner-title">Upgrade to Pro</h3>
            <p className="pro-banner-desc">Get more out of your mentoring journey.</p>
            <button className="btn-pro-try">
              Try Now
            </button>
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
            <Pill variant="field" icon={<Briefcase size={12} />}>Marketing</Pill>
            <span className="field-mentors-count">48 Mentors available</span>
          </div>

          {/* Card 2: Finance */}
          <div className="field-card">
            <Pill variant="field" icon={<DollarSign size={12} />}>Finance</Pill>
            <span className="field-mentors-count">48 Mentors available</span>
          </div>

          {/* Card 3: Investing */}
          <div className="field-card">
            <Pill variant="field" icon={<BarChart3 size={12} />}>Investing</Pill>
            <span className="field-mentors-count">48 Mentors available</span>
          </div>
        </div>

        {/* 5. Filter Chips */}
        <div className="filter-chips-row no-scrollbar">
          {filters.map((f) => (
            <Pill
              key={f}
              variant="toggle"
              active={activeFilter === f}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </Pill>
          ))}
        </div>

        {/* 6. Mentors Showcase Row */}
        <div className="mentors-cards-scroll no-scrollbar">
          {/* Mentor Card 1: Stella Fernandez */}
          <div className="mentor-showcase-card">
            <div className="msc-details">
              <Pill variant="field" icon={<Briefcase size={11} />}>Marketing</Pill>
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
              <Avatar name="Stella Fernandez" size={95} shape="rounded" />
            </div>
          </div>

          {/* Mentor Card 2: Andrew Garfield */}
          <div className="mentor-showcase-card">
            <div className="msc-details">
              <Pill variant="field" icon={<BarChart3 size={11} />}>Investing</Pill>
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
              <Avatar name="Andrew Garfield" size={95} shape="rounded" />
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
          <User size={20} />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default HomeScreen;
