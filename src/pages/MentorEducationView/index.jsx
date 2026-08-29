import React from 'react';
import { Clock, Star, Calendar, GraduationCap, MessageSquare, Briefcase } from 'lucide-react';
import ScreenHeader from '../../components/ScreenHeader';
import Avatar from '../../components/Avatar';
import Pill from '../../components/Pill';
import StatRow from '../../components/StatRow';
import SegmentedTabs from '../../components/SegmentedTabs';
import BottomActionBar from '../../components/BottomActionBar';
import './styles.css';

const MentorEducationView = () => {
  return (
    <div className="mentor-profile-screen no-scrollbar">
      {/* 1. Top Bar */}
      <ScreenHeader rightAction={<Clock size={18} color="#0F172A" />} />

      <div className="mp-scrollable-body no-scrollbar">
        {/* 2. Mentor Hero Card */}
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

        {/* 3. Segmented Navigation Tabs (Education Active) */}
        <SegmentedTabs
          tabs={[
            { key: 'Schedule', label: 'Schedule', icon: <Calendar size={15} /> },
            { key: 'Education', label: 'Education', icon: <GraduationCap size={15} /> },
            { key: 'Reviews', label: 'Reviews', icon: <Star size={15} /> },
          ]}
          activeKey="Education"
          onChange={() => {}}
        />

        {/* 4. Experience & Education Cards */}
        <div className="mpe-body-stack">
          {/* Work History */}
          <div className="mpe-block">
            <div className="mpe-block-title">
              <Briefcase size={14} color="#1D75FE" />
              <span>Work Experience</span>
            </div>

            <div className="mpe-item">
              <div className="mpe-item-header">
                <strong>Senior Director of Growth</strong>
                <span className="mpe-year">2021 - Present</span>
              </div>
              <p className="mpe-company">Stripe · San Francisco, CA</p>
              <p className="mpe-desc">Led user acquisition funnels and scaled global onboarding conversion by 34%.</p>
            </div>

            <div className="mpe-item">
              <div className="mpe-item-header">
                <strong>Product Marketing Lead</strong>
                <span className="mpe-year">2018 - 2021</span>
              </div>
              <p className="mpe-company">Uber · San Francisco, CA</p>
              <p className="mpe-desc">Managed driver marketplace campaigns and localized growth strategies.</p>
            </div>
          </div>

          {/* Education */}
          <div className="mpe-block">
            <div className="mpe-block-title">
              <GraduationCap size={14} color="#1D75FE" />
              <span>Degrees & Education</span>
            </div>

            <div className="mpe-item">
              <div className="mpe-item-header">
                <strong>M.S. in Marketing & Strategy</strong>
                <span className="mpe-year">2016 - 2018</span>
              </div>
              <p className="mpe-company">Stanford University</p>
            </div>

            <div className="mpe-item">
              <div className="mpe-item-header">
                <strong>B.A. in Economics</strong>
                <span className="mpe-year">2012 - 2016</span>
              </div>
              <p className="mpe-company">UC Berkeley</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Fixed Bottom CTA */}
      <BottomActionBar
        primary={{ label: 'Book Now' }}
        secondary={{ icon: <MessageSquare size={20} color="#FFFFFF" />, ariaLabel: 'Send Message' }}
      />
    </div>
  );
};

export default MentorEducationView;
