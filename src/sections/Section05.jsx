import React from 'react';
import SearchScreen from '../pages/SearchScreen';
import ScheduleScreen from '../pages/ScheduleScreen';
import ChatScreen from '../pages/ChatScreen';
import ProfileScreen from '../pages/ProfileScreen';
import DeviceMockup from '../components/DeviceMockup';
import './Section05.css';

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

const Section05 = () => (
  <div className="presentation-canvas bg-alt" id="section-05">
    <div className="presentation-text centered-header">
      <h4>SECTION 05</h4>
      <h1>Primary Mobile Tab Navigation Suite</h1>
      <p>
        The core everyday workspace for mentees: dynamic search with applied filter badges, upcoming sessions calendar with instant room join, 1:1 real-time chat with document sharing, and personal profile with career roadmap progress.
      </p>
    </div>

    <div className="device-row" id="section-05-screens">
      {/* 1. Search Screen */}
      <ScreenPresentation
        title="Search & Explore Mentors (Search Tab)"
        description="Live search query input with filter chips (Marketing, Investing, Full-Stack), applied filter tags (Under $25, 4.8+★), and instant booking CTA."
      >
        <SearchScreen />
      </ScreenPresentation>

      {/* 2. Schedule Screen */}
      <ScreenPresentation
        title="Schedule & My Sessions (Schedule Tab)"
        description="Live urgent appointment banner with 25m countdown, direct Join Video Call trigger, and upcoming appointments calendar."
      >
        <ScheduleScreen />
      </ScreenPresentation>

      {/* 3. Chat Screen */}
      <ScreenPresentation
        title="In-App Direct Chat (Chat Tab)"
        description="Active 1:1 messaging feed with Stella Fernandez, PDF deck attachment cards, delivery receipts, audio/video call shortcuts, and bottom input bar."
      >
        <ChatScreen />
      </ScreenPresentation>

      {/* 4. Profile Screen */}
      <ScreenPresentation
        title="Mentee Profile & Roadmaps (Profile Tab)"
        description="Sakura Hime's profile hub: Pro badge, career goal tracker, stats counters, saved mentor bookmarks, and settings menu."
      >
        <ProfileScreen />
      </ScreenPresentation>
    </div>
  </div>
);

export default Section05;
