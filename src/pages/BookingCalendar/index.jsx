import React, { useState } from 'react';
import { ArrowLeft, Clock, Calendar, Briefcase, CheckCircle2, ChevronRight } from 'lucide-react';
import './styles.css';

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('Tue 13');
  const [selectedSlot, setSelectedSlot] = useState('07:00 PM');
  const [selectedDuration, setSelectedDuration] = useState('30 min');

  const days = [
    { day: 'Mon', date: '12' },
    { day: 'Tue', date: '13' },
    { day: 'Wed', date: '14' },
    { day: 'Thu', date: '15' },
    { day: 'Fri', date: '16' },
  ];

  const slots = ['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '07:00 PM', '08:30 PM'];

  return (
    <div className="booking-screen no-scrollbar">
      {/* 1. Header */}
      <div className="bk-header">
        <button className="bk-back-btn" aria-label="Back">
          <ArrowLeft size={18} color="#0F172A" />
        </button>
        <h3 className="bk-title">Book Mentorship</h3>
        <div style={{ width: 36 }}></div>
      </div>

      <div className="bk-scroll-body no-scrollbar">
        {/* 2. Mentor Summary Pill */}
        <div className="bk-mentor-card">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80" 
            alt="Stella Fernandez" 
            className="bk-avatar" 
          />
          <div className="bk-mentor-info">
            <div className="field-tag-badge">
              <Briefcase size={10} className="field-icon" />
              <span>Marketing</span>
            </div>
            <h4 className="bk-mentor-name">Stella Fernandez</h4>
            <span className="bk-rate">$16.00 / 30 mins session</span>
          </div>
        </div>

        {/* 3. Date Picker Row */}
        <div className="bk-section-block">
          <span className="bk-sec-label">Select Date</span>
          <div className="bk-dates-row">
            {days.map((item) => {
              const key = `${item.day} ${item.date}`;
              const isActive = selectedDate === key;
              return (
                <button
                  key={key}
                  className={`bk-date-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedDate(key)}
                >
                  <span className="bk-date-day">{item.day}</span>
                  <span className="bk-date-num">{item.date}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Session Duration */}
        <div className="bk-section-block">
          <span className="bk-sec-label">Session Duration</span>
          <div className="bk-duration-row">
            {['15 min ($10)', '30 min ($16)', '60 min ($30)'].map((dur) => (
              <button
                key={dur}
                className={`bk-dur-pill ${selectedDuration === dur.split(' ')[0] + ' ' + dur.split(' ')[1] ? 'active' : ''}`}
                onClick={() => setSelectedDuration(dur.split(' ')[0] + ' ' + dur.split(' ')[1])}
              >
                {dur}
              </button>
            ))}
          </div>
        </div>

        {/* 5. Time Slots Grid */}
        <div className="bk-section-block">
          <span className="bk-sec-label">Available Slots</span>
          <div className="bk-slots-grid">
            {slots.map((slot) => (
              <button
                key={slot}
                className={`bk-slot-btn ${selectedSlot === slot ? 'active' : ''}`}
                onClick={() => setSelectedSlot(slot)}
              >
                <Clock size={12} />
                <span>{slot}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 6. Discussion Topic Input */}
        <div className="bk-section-block">
          <span className="bk-sec-label">What would you like to discuss?</span>
          <textarea 
            className="bk-topic-textarea" 
            placeholder="I want guidance on growth marketing strategies, portfolio positioning, and career roadmap..."
            defaultValue="I want guidance on growth marketing strategies, portfolio positioning, and career roadmap..."
            rows={3}
          />
        </div>
      </div>

      {/* 7. Bottom CTA */}
      <div className="bk-bottom-bar">
        <button className="btn-bk-proceed">
          <span>Continue to Checkout · $16.00</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default BookingCalendar;
