import React from 'react';
import LiveVideo from '../pages/LiveVideo';
import SessionNotes from '../pages/SessionNotes';
import MentorDashboard from '../pages/MentorDashboard';
import DeviceMockup from '../components/DeviceMockup';
import './Section04.css';

const ScreenPresentation = ({ title, description, children, theme = "light" }) => (
  <div className="screen-presentation">
    <DeviceMockup theme={theme}>
      {children}
    </DeviceMockup>
    <div className="screen-info">
      <h3 className="screen-title">{title}</h3>
      <p className="screen-desc">{description}</p>
    </div>
  </div>
);

const Section04 = () => (
  <div className="presentation-canvas" id="section-04">
    <div className="presentation-text centered-header">
      <h4>SECTION 04</h4>
      <h1>Live Mentorship & Mentor Tools</h1>
      <p>
        Real-time high-definition video mentorship, interactive post-session takeaway checklists with ratings, and mentor-side earnings analytics with scheduled appointment management.
      </p>
    </div>

    <div className="device-row" id="section-04-screens">
      {/* 1. Live Video */}
      <ScreenPresentation
        title="Live 1:1 Video Mentorship"
        description="Full-screen video stream with participant Picture-in-Picture (PIP), countdown timer, live chat toggle, and floating control bar."
        theme="dark"
      >
        <LiveVideo />
      </ScreenPresentation>

      {/* 2. Session Notes & Review */}
      <ScreenPresentation
        title="Post-Session Action Notes & Rating"
        description="Structured takeaway checklist, 5-star rating widget, and testimonial feedback form with instant PDF notes export."
        theme="light"
      >
        <SessionNotes />
      </ScreenPresentation>

      {/* 3. Mentor Dashboard */}
      <ScreenPresentation
        title="Mentor Earnings & Schedule Hub"
        description="Mentor workspace with instant online booking toggle, monthly revenue analytics, growth percentage, and today's session timeline."
        theme="light"
      >
        <MentorDashboard />
      </ScreenPresentation>
    </div>
  </div>
);

export default Section04;
