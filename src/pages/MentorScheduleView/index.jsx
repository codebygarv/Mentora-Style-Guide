import React, { useState } from 'react';
import { ArrowLeft, Clock, Star, Calendar, GraduationCap, MessageSquare, Briefcase, ChevronRight } from 'lucide-react';
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
      <div className="mp-top-nav">
        <button className="mp-nav-circle-btn" aria-label="Back">
          <ArrowLeft size={18} color="#0F172A" />
        </button>
        <button className="mp-nav-circle-btn" aria-label="Details">
          <Clock size={18} color="#0F172A" />
        </button>
      </div>

      <div className="mp-scrollable-body no-scrollbar">
        {/* 2. Mentor Hero Card */}
        <div className="mp-hero-card">
          <div className="mp-hero-info">
            <div className="field-tag-badge">
              <Briefcase size={12} className="field-icon" />
              <span>Marketing</span>
            </div>

            <h1 className="mp-mentor-name">
              Stella<br />Fernandez
            </h1>

            <div className="mp-price-row">
              <span className="mp-price-num">$16</span>
              <span className="mp-price-unit">/session</span>
            </div>

            <div className="mp-stats-container">
              <div className="mp-stat-box">
                <div className="mp-stat-header">
                  <span className="mp-stat-value">5 Years</span>
                  <div className="mp-stat-icon-wrap red">
                    <Clock size={11} color="#EF4444" />
                  </div>
                </div>
                <span className="mp-stat-label">Experience</span>
              </div>

              <div className="mp-stat-box">
                <div className="mp-stat-header">
                  <span className="mp-stat-value">4.9</span>
                  <div className="mp-stat-icon-wrap amber">
                    <Star size={11} fill="#F59E0B" color="#F59E0B" />
                  </div>
                </div>
                <span className="mp-stat-label">Ratings</span>
              </div>
            </div>
          </div>

          <div className="mp-hero-photo-wrap">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=450&auto=format&fit=crop&q=80" 
              alt="Stella Fernandez" 
              className="mp-hero-photo" 
            />
          </div>
        </div>

        {/* 3. Segmented Navigation Tabs (Schedule Active) */}
        <div className="mp-segmented-tabs">
          <button className="mp-seg-tab active">
            <Calendar size={15} />
            <span>Schedule</span>
          </button>

          <button className="mp-seg-tab">
            <GraduationCap size={15} />
            <span>Education</span>
          </button>

          <button className="mp-seg-tab">
            <Star size={15} />
            <span>Reviews</span>
          </button>
        </div>

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
                <button 
                  key={s} 
                  className={`mps-slot-chip ${selectedSlot === s ? 'active' : ''}`}
                  onClick={() => setSelectedSlot(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Evening Slots */}
          <div className="mps-slot-section">
            <span className="mps-sec-title">Evening (06:00 PM - 09:30 PM)</span>
            <div className="mps-slots-row">
              {eveningSlots.map(s => (
                <button 
                  key={s} 
                  className={`mps-slot-chip ${selectedSlot === s ? 'active' : ''}`}
                  onClick={() => setSelectedSlot(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Fixed Bottom CTA */}
      <div className="mp-bottom-cta-bar">
        <button className="btn-mp-book-now">
          Book Selected Slot ({selectedSlot})
        </button>
        <button className="btn-mp-chat-float" aria-label="Send Message">
          <MessageSquare size={20} color="#FFFFFF" />
        </button>
      </div>
    </div>
  );
};

export default MentorScheduleView;
