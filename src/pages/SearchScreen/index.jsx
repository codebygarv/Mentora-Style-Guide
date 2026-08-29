import React, { useState } from 'react';
import { Search, SlidersHorizontal, Star, Home, Calendar, MessageSquare, User, Clock } from 'lucide-react';
import Avatar from '../../components/Avatar';
import Pill from '../../components/Pill';
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
            <Pill
              key={t}
              variant="toggle"
              active={selectedTag === t}
              onClick={() => setSelectedTag(t)}
            >
              {t}
            </Pill>
          ))}
        </div>

        {/* 3. Applied Filters Bar */}
        <div className="srch-applied-bar">
          <span className="srch-count">Showing 3 Mentors</span>
          <div className="srch-filter-chips">
            <Pill variant="tag">Under $25</Pill>
            <Pill variant="rating" icon={<Star size={11} fill="#F59E0B" color="#F59E0B" />}>4.8+</Pill>
          </div>
        </div>

        {/* 4. Results List */}
        <div className="srch-results-list">
          {results.map((mentor) => (
            <div key={mentor.id} className="srch-mentor-card">
              <div className="srch-mc-top">
                <Avatar name={mentor.name} size={44} shape="rounded" />
                <div className="srch-mc-info">
                  <div className="srch-mc-name-row">
                    <h4>{mentor.name}</h4>
                    <Pill variant="rating" icon={<Star size={11} fill="#F59E0B" color="#F59E0B" />}>
                      {mentor.rating}
                    </Pill>
                  </div>
                  <p className="srch-mc-sub">{mentor.title} · {mentor.company}</p>
                  <div className="srch-badge-row">
                    <Pill variant="field">{mentor.field}</Pill>
                    <Pill variant="tag">{mentor.exp}</Pill>
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
          <User size={20} />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default SearchScreen;
