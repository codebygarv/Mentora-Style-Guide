import React, { useState } from 'react';
import { Clock, Star, Calendar, GraduationCap, Briefcase, MessageSquare } from 'lucide-react';
import ScreenHeader from '../../components/ScreenHeader';
import Avatar from '../../components/Avatar';
import Pill from '../../components/Pill';
import StatRow from '../../components/StatRow';
import SegmentedTabs from '../../components/SegmentedTabs';
import BottomActionBar from '../../components/BottomActionBar';
import './styles.css';

const MentorProfile = () => {
  const [activeTab, setActiveTab] = useState('Reviews');

  const reviews = [
    {
      id: 1,
      name: 'Lola Thung',
      rating: 5,
      time: '1 Days Ago',
      comment: "What stood out was the mentor's genuine care and experience—this wasn't just theory, it was lived wisdom."
    },
    {
      id: 2,
      name: 'Jose Barkley',
      rating: 5,
      time: '2 Days Ago',
      comment: "Incredibly insightful! I left feeling more confident and focused on my next steps in growth marketing and branding."
    }
  ];

  return (
    <div className="mentor-profile-screen no-scrollbar">
      {/* 1. Top Navigation Bar */}
      <ScreenHeader rightAction={<Clock size={18} color="#0F172A" />} />

      <div className="mp-scrollable-body no-scrollbar">
        {/* 2. Mentor Hero Showcase */}
        <div className="mp-hero-card">
          <div className="mp-hero-info">
            <Pill variant="field" icon={<Briefcase size={12} />}>Marketing</Pill>

            <h1 className="mp-mentor-name">
              Stella<br />Fernandez
            </h1>

            <div className="mp-price-row">
              <span className="mp-price-num">$16</span>
              <span className="mp-price-unit">/session</span>
            </div>

            <StatRow
              layout="boxed"
              items={[
                { value: '5 Years', label: 'Experience', icon: <Clock size={11} color="#EF4444" /> },
                { value: '4.9', label: 'Ratings', icon: <Star size={11} fill="#F59E0B" color="#F59E0B" /> },
              ]}
            />
          </div>

          <div className="mp-hero-photo-wrap">
            <Avatar name="Stella Fernandez" size={132} shape="rounded" />
          </div>
        </div>

        {/* 3. Segmented Navigation Tabs */}
        <SegmentedTabs
          tabs={[
            { key: 'Schedule', label: 'Schedule', icon: <Calendar size={15} /> },
            { key: 'Education', label: 'Education', icon: <GraduationCap size={15} /> },
            { key: 'Reviews', label: 'Reviews', icon: <Star size={15} fill={activeTab === 'Reviews' ? '#FFFFFF' : 'none'} /> },
          ]}
          activeKey={activeTab}
          onChange={setActiveTab}
        />

        {/* 4. Reviews List */}
        <div className="mp-reviews-list">
          {reviews.map((rev) => (
            <div key={rev.id} className="mp-review-card">
              <div className="mp-rev-header">
                <div className="mp-rev-user">
                  <Avatar name={rev.name} size={36} shape="circle" />
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
      <BottomActionBar
        primary={{ label: 'Book Now' }}
        secondary={{ icon: <MessageSquare size={20} color="#FFFFFF" />, ariaLabel: 'Send Message' }}
      />
    </div>
  );
};

export default MentorProfile;
