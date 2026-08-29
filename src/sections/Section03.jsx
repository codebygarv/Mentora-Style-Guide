import React from 'react';
import HomeScreen from '../pages/HomeScreen';
import MentorProfile from '../pages/MentorProfile';
import BookingCalendar from '../pages/BookingCalendar';
import Payment from '../pages/Payment';
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
      <h1>Mentee Discovery, Profile & Booking</h1>
      <p>
        The end-to-end mentorship funnel: discover mentors by professional fields (Marketing, Finance, Investing), inspect detailed credentials & community reviews, select tailored calendar slots, and checkout securely.
      </p>
    </div>

    <div className="device-row" id="section-03-screens">
      {/* 1. Mentor Profile Screen (Stella Fernandez) */}
      <ScreenPresentation
        title="Mentor Profile (Stella Fernandez)"
        description="Detailed credentials with 5 Years Experience and 4.9 Ratings stat chips, segmented tabs (Schedule, Education, Reviews), verified testimonials, and full-width Book Now CTA."
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

      {/* 3. Booking Calendar */}
      <ScreenPresentation
        title="Booking Calendar & Slot Selection"
        description="Interactive date pills, duration picker (15m, 30m, 60m), time slots, and structured discussion topic input."
      >
        <BookingCalendar />
      </ScreenPresentation>

      {/* 4. Payment Checkout */}
      <ScreenPresentation
        title="Payment & Order Confirmation"
        description="Transparent checkout with Apple Pay / Card selectors, session summary, zero hidden fees, and money-back guarantee."
      >
        <Payment />
      </ScreenPresentation>
    </div>
  </div>
);

export default Section03;
