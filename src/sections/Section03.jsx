import React from 'react';
import HomeScreen from '../pages/HomeScreen';
import MentorProfile from '../pages/MentorProfile';
import DeviceMockup from '../components/DeviceMockup';
import './Section03.css';

export const ScreenPresentation = ({ title, description, children, theme = "light" }) => (
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

const Section03 = () => (
  <div className="presentation-canvas" id="section-03">
    <div className="presentation-text centered-header">
      <h4>SECTION 03</h4>
      <h1>Mentee Discovery & Mentor Profile</h1>
      <p>
        The core mobile mentorship experience. Seamless discovery by professional fields (Marketing, Finance, Investing), dynamic Pro membership upgrades, verified mentor profiles, and real-time community reviews.
      </p>
    </div>

    <div className="device-row" id="section-03-screens">
      {/* 1. Mentor Profile Screen (Stella Fernandez) */}
      <ScreenPresentation
        title="Mentor Profile (Stella Fernandez)"
        description="Detailed mentor card with 5 Years Experience and 4.9 Ratings stat chips, segmented tabs (Schedule, Education, Reviews), verified testimonials, and full-width Book Now CTA."
      >
        <MentorProfile />
      </ScreenPresentation>

      {/* 2. Home Screen (Field Discovery) */}
      <ScreenPresentation
        title="Home Screen (Field Discovery)"
        description="Sakura Hime's landing hub: Pro upgrade banner with mentor network, horizontal field cards, filter chips, and verified mentor cards with instant $16 booking."
      >
        <HomeScreen />
      </ScreenPresentation>
    </div>
  </div>
);

export default Section03;
