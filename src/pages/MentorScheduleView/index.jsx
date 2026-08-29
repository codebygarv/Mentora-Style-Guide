import React, { useState } from 'react';
import { Clock, Star, Calendar, GraduationCap, Briefcase, MessageSquare } from 'lucide-react';
import ScreenHeader from '../../components/ScreenHeader';
import Avatar from '../../components/Avatar';
import Pill from '../../components/Pill';
import StatRow from '../../components/StatRow';
import SegmentedTabs from '../../components/SegmentedTabs';
import BottomActionBar from '../../components/BottomActionBar';
import './styles.css';

const MentorScheduleView = () => {
  const [selectedDay, setSelectedDay] = useState('Tue 13');
  const [selectedSlot, setSelectedSlot] = useState('07:00 PM');

  const days = [
    { day: 'Mon', num: '12' },
    { day: 'Tue', num: '13' },
    { day: 'Wed', num: '14' },
    { day: 'Thu', num: '15' },
    { day: 'Fri', num: '16' }
  ];

  const morningSlots = ['10:00 AM', '11:30 AM'];
  const eveningSlots = ['06:00 PM', '07:00 PM', '08:30 PM'];

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

        {/* 3. Segmented Navigation Tabs (Schedule Active) */}
        <SegmentedTabs
          tabs={[
            { key: 'Schedule', label: 'Schedule', icon: <Calendar size={15} /> },
            { key: 'Education', label: 'Education', icon: <GraduationCap size={15} /> },
            { key: 'Reviews', label: 'Reviews', icon: <Star size={15} /> },
          ]}
          activeKey="Schedule"
          onChange={() => {}}
        />

        {/* 4. Schedule Slot View */}
        <div className="mps-schedule-container">
          <div className="mps-days-bar">
            {days.map(d => {
              const key = `${d.day} ${d.num}`;
              const isSel = selectedDay === key;
              return (
                <button
                  key={key}
                  className={`mps-day-btn ${isSel ? 'selected' : ''}`}
                  onClick={() => setSelectedDay(key)}
                >
                  <span className="mps-day-txt">{d.day}</span>
                  <span className="mps-num-txt">{d.num}</span>
                </button>
              );
            })}
          </div>

          {/* Morning Slots */}
          <div className="mps-slot-section">
            <span className="mps-sec-title">Morning (10:00 AM - 01:00 PM)</span>
            <div className="mps-slots-row">
              {morningSlots.map(s => (
                <Pill
                  key={s}
                  variant="toggle"
                  active={selectedSlot === s}
                  onClick={() => setSelectedSlot(s)}
                >
                  {s}
                </Pill>
              ))}
            </div>
          </div>

          {/* Evening Slots */}
          <div className="mps-slot-section">
            <span className="mps-sec-title">Evening (06:00 PM - 09:30 PM)</span>
            <div className="mps-slots-row">
              {eveningSlots.map(s => (
                <Pill
                  key={s}
                  variant="toggle"
                  active={selectedSlot === s}
                  onClick={() => setSelectedSlot(s)}
                >
                  {s}
                </Pill>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Fixed Bottom CTA */}
      <BottomActionBar
        primary={{ label: `Book Selected Slot (${selectedSlot})` }}
        secondary={{ icon: <MessageSquare size={20} color="#FFFFFF" />, ariaLabel: 'Send Message' }}
      />
    </div>
  );
};

export default MentorScheduleView;
