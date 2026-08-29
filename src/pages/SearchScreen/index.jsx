import React, { useState } from 'react';
import { Search, SlidersHorizontal, Star, Briefcase, BarChart3, Code, ArrowRight, Home, Calendar, MessageSquare, User, Clock } from 'lucide-react';
import './styles.css';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('Growth Marketing');
  const [selectedTag, setSelectedTag] = useState('Marketing');

  const tags = ['Marketing', 'Investing', 'Full-Stack', 'AI/ML', 'Design', 'Finance'];

  const results = [
    {
      id: 1,
      name: 'Stella Fernandez',
      title: 'Senior Growth & Brand Lead',
      company: 'Ex-Stripe',
      rating: '4.9',
      reviews: 120,
      rate: '$16',
      exp: '5 Years',
      field: 'Marketing',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      available: 'Today 7:00 PM'
    },
    {
      id: 2,
      name: 'Andrew Garfield',
      title: 'Investment Strategist & Angel',
      company: 'Founders Fund',
      rating: '5.0',
      reviews: 86,
      rate: '$20',
      exp: '8 Years',
      field: 'Investing',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      available: 'Tomorrow 10:00 AM'
    },
    {
      id: 3,
      name: 'Arjun Mehta',
      title: 'Staff Full-Stack Engineer',
      company: 'Microsoft',
      rating: '4.9',
      reviews: 142,
      rate: '$18',
      exp: '7 Years',
      field: 'Full-Stack',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      available: 'Today 8:30 PM'
    }
  ];

  return (
    <div className="search-screen no-scrollbar">
      {/* 1. Header */}
      <div className="srch-header">
        <h2 className="srch-title">Explore Mentors</h2>
        <div className="srch-input-wrapper">
          <Search size={16} className="srch-icon" />
          <input 
            type="text" 
            className="srch-input" 
            placeholder="Search by skill, name or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="srch-filter-btn" aria-label="Filters">
            <SlidersHorizontal size={14} />
          </button>
        </div>
      </div>

      <div className="srch-scroll-body no-scrollbar">
        {/* 2. Horizontal Skill Tags */}
        <div className="srch-tags-row no-scrollbar">
          {tags.map((t) => (
            <button 
              key={t} 
              className={`srch-tag-pill ${selectedTag === t ? 'active' : ''}`}
              onClick={() => setSelectedTag(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* 3. Applied Filters Bar */}
        <div className="srch-applied-bar">
          <span className="srch-count">Showing 3 Mentors</span>
          <div className="srch-filter-chips">
            <span className="srch-active-chip">Under $25</span>
            <span className="srch-active-chip">⭐ 4.8+</span>
          </div>
        </div>

        {/* 4. Results List */}
        <div className="srch-results-list">
          {results.map((mentor) => (
            <div key={mentor.id} className="srch-mentor-card">
              <div className="srch-mc-top">
                <img src={mentor.avatar} alt={mentor.name} className="srch-mc-avatar" />
                <div className="srch-mc-info">
                  <div className="srch-mc-name-row">
                    <h4>{mentor.name}</h4>
                    <div className="srch-rating-chip">
                      <Star size={11} fill="#F59E0B" color="#F59E0B" />
                      <span>{mentor.rating}</span>
                    </div>
                  </div>
                  <p className="srch-mc-sub">{mentor.title} · {mentor.company}</p>
                  <div className="srch-badge-row">
                    <span className="field-tag-badge">{mentor.field}</span>
                    <span className="srch-exp-tag">{mentor.exp}</span>
                  </div>
                </div>
              </div>

              <div className="srch-mc-bottom">
                <div className="srch-slot-info">
                  <Clock size={11} color="#10B981" />
                  <span>{mentor.available}</span>
                </div>
                <div className="srch-mc-action">
                  <span className="srch-rate">{mentor.rate}<small>/session</small></span>
                  <button className="btn-srch-book">Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Bottom Navigation Bar */}
      <nav className="home-bottom-nav">
        <button className="nav-tab-btn">
          <Home size={20} />
          <span>Home</span>
        </button>
        <button className="nav-tab-btn active">
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

export default SearchScreen;
