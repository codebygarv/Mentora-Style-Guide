import React, { useState } from 'react';
import { ArrowLeft, Clock, Calendar, Check, Save, ShieldAlert, Sparkles, Moon } from 'lucide-react';
import './styles.css';

const MentorAvailabilityManager = () => {
  const [days, setDays] = useState([
    { name: 'M', full: 'Monday', active: true, hours: '09:00 AM - 06:00 PM' },
    { name: 'T', full: 'Tuesday', active: true, hours: '09:00 AM - 06:00 PM' },
    { name: 'W', full: 'Wednesday', active: true, hours: '09:00 AM - 06:00 PM' },
    { name: 'T', full: 'Thursday', active: true, hours: '09:00 AM - 06:00 PM' },
    { name: 'F', full: 'Friday', active: true, hours: '09:00 AM - 04:00 PM' },
    { name: 'S', full: 'Saturday', active: false, hours: 'Off' },
    { name: 'S', full: 'Sunday', active: false, hours: 'Off' }
  ]);

  const toggleDay = (idx) => {
    const updated = [...days];
    updated[idx].active = !updated[idx].active;
    setDays(updated);
  };

  return (
    <div className="avail-screen no-scrollbar">
      {/* 1. Header */}
      <div className="avail-header">
        <button className="avail-back-btn" aria-label="Back">
          <ArrowLeft size={18} color="#0F172A" />
        </button>
        <h3 className="avail-title">Availability Settings</h3>
        <div style={{ width: 36 }}></div>
      </div>

      <div className="avail-scroll-body no-scrollbar">
        {/* 2. Vacation / Auto Mode Card */}
        <div className="avail-status-card">
          <div className="avail-sc-left">
            <div className="avail-pulse-dot"></div>
            <div>
              <span className="avail-sc-title">Accepting Instant Sessions</span>
              <span className="avail-sc-sub">Your profile is visible on search</span>
            </div>
          </div>
          <span className="avail-status-pill">Active</span>
        </div>

        {/* 3. Working Days Matrix */}
        <div className="avail-block">
          <span className="avail-block-label">Weekly Active Days</span>
          <div className="avail-days-row">
            {days.map((d, i) => (
              <button 
                key={i} 
                className={`avail-day-circle ${d.active ? 'active' : ''}`}
                onClick={() => toggleDay(i)}
              >
                <span>{d.name}</span>
              </button>
            ))}
          </div>

          <div className="avail-days-detail-list">
            {days.filter(d => d.active).map((d, i) => (
              <div key={i} className="avail-day-item">
                <span className="avail-di-name">{d.full}</span>
                <span className="avail-di-hours">{d.hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Session Buffer & Notice Rules */}
        <div className="avail-block">
          <span className="avail-block-label">Booking Preferences</span>

          <div className="avail-pref-row">
            <div className="avail-pref-info">
              <strong>Buffer Between Sessions</strong>
              <span>Prevent back-to-back burnout</span>
            </div>
            <span className="avail-pref-val">15 mins</span>
          </div>

          <div className="avail-pref-row">
            <div className="avail-pref-info">
              <strong>Minimum Booking Notice</strong>
              <span>Time required before new calls</span>
            </div>
            <span className="avail-pref-val">2 hours</span>
          </div>
        </div>
      </div>

      {/* 5. Fixed Save CTA */}
      <div className="avail-bottom-bar">
        <button className="btn-avail-save">
          <Save size={15} />
          <span>Save Availability</span>
        </button>
      </div>
    </div>
  );
};

export default MentorAvailabilityManager;
