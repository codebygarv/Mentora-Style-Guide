import React from 'react';
import HomeScreen from '../pages/HomeScreen';
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
      <h1>Mentee Discovery & Booking Flow</h1>
      <p>Seamless discovery by professional fields (Marketing, Finance, Investing), smart mentor profiles, and real-time review feedback.</p>
    </div>
    <div className="device-row" id="section-03-screens">
      <ScreenPresentation
        title="Home Screen (Field Discovery)"
        description="Sakura Hime's landing view: Pro upgrade banner, field categories, filter chips, and verified mentor cards with instant $16 booking."
      >
        <HomeScreen />
      </ScreenPresentation>
    </div>
  </div>
);

export default Section03;
