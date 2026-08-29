import React, { useState } from 'react';
import { DollarSign, Calendar, Clock, Video, ChevronRight, TrendingUp, Users, Settings } from 'lucide-react';
import './styles.css';

const MentorDashboard = () => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="mentor-dash-screen no-scrollbar">
      {/* 1. Header */}
      <div className="md-header">
        <div className="md-user-info">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80" 
            alt="Stella" 
            className="md-avatar" 
          />
          <div>
            <span className="md-welcome">Mentor Workspace</span>
            <h3 className="md-title">Stella Fernandez</h3>
          </div>
        </div>

        <button className="md-settings-btn" aria-label="Settings">
          <Settings size={18} color="#0F172A" />
        </button>
      </div>

      <div className="md-scroll-body no-scrollbar">
        {/* 2. Availability Live Toggle */}
        <div className="md-toggle-card">
          <div className="md-toggle-text">
            <span className="md-toggle-title">Instant Booking Status</span>
            <span className="md-toggle-sub">
              {isOnline ? '🟢 Visible in discovery & accepting 1:1 sessions' : '⚪ Paused'}
            </span>
          </div>
          <button 
            className={`md-switch ${isOnline ? 'on' : ''}`}
            onClick={() => setIsOnline(!isOnline)}
          >
            <div className="md-switch-thumb"></div>
          </button>
        </div>

        {/* 3. Earnings & Stats Card */}
        <div className="md-earnings-card">
          <div className="md-ec-top">
            <span className="md-ec-label">This Month Earnings</span>
            <div className="md-growth-badge">
              <TrendingUp size={12} />
              <span>+24.8%</span>
            </div>
          </div>

          <div className="md-ec-amount">$2,450.00</div>

          <div className="md-ec-grid">
            <div className="md-ec-stat">
              <span className="md-ec-stat-num">42</span>
              <span className="md-ec-stat-label">Sessions Done</span>
            </div>
            <div className="md-ec-divider"></div>
            <div className="md-ec-stat">
              <span className="md-ec-stat-num">$380.00</span>
              <span className="md-ec-stat-label">Next Payout</span>
            </div>
            <div className="md-ec-divider"></div>
            <div className="md-ec-stat">
              <span className="md-ec-stat-num">4.9 ★</span>
              <span className="md-ec-stat-label">Rating</span>
            </div>
          </div>
        </div>

        {/* 4. Today's Upcoming Sessions */}
        <div className="md-sec-header">
          <h4 className="md-sec-title">Today's Sessions</h4>
          <span className="md-badge-count">2 Confirmed</span>
        </div>

        <div className="md-session-timeline">
          {/* Appointment 1 */}
          <div className="md-appt-card active">
            <div className="md-appt-time">
              <span className="md-time-bold">07:00 PM</span>
              <span className="md-dur">30 mins</span>
            </div>
            <div className="md-appt-divider"></div>
            <div className="md-appt-body">
              <div className="md-appt-mentee">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80" 
                  alt="Sakura Hime" 
                  className="md-mentee-avatar" 
                />
                <div>
                  <h5>Sakura Hime</h5>
                  <p>Growth Marketing Strategy</p>
                </div>
              </div>
              <button className="btn-start-room">
                <Video size={13} />
                <span>Join Room</span>
              </button>
            </div>
          </div>

          {/* Appointment 2 */}
          <div className="md-appt-card">
            <div className="md-appt-time">
              <span className="md-time-bold">08:30 PM</span>
              <span className="md-dur">45 mins</span>
            </div>
            <div className="md-appt-divider"></div>
            <div className="md-appt-body">
              <div className="md-appt-mentee">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80" 
                  alt="Jose Barkley" 
                  className="md-mentee-avatar" 
                />
                <div>
                  <h5>Jose Barkley</h5>
                  <p>Portfolio & Deck Feedback</p>
                </div>
              </div>
              <span className="md-pending-badge">Upcoming</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Bottom Manage CTA */}
      <div className="md-bottom-bar">
        <button className="btn-md-manage">
          <Calendar size={16} />
          <span>Manage Weekly Availability</span>
        </button>
      </div>
    </div>
  );
};

export default MentorDashboard;
