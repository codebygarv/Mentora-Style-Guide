import React from 'react';
import Splash from '../pages/Splash';
import './Section02.css';

export const ScreenPresentation = ({ title, description, children, theme = "light" }) => (
  <div className="screen-presentation">
    <div className="device-mockup" data-theme={theme}>
      <div className="device-hardware">
        <div className="dynamic-island">
          <div className="dynamic-island-cam"></div>
          <div className="dynamic-island-sensor"></div>
        </div>
        <div className="device-screen custom-scrollbar">
          {children}
        </div>
        <div className="btn-mute"></div>
        <div className="btn-vol-up"></div>
        <div className="btn-vol-down"></div>
        <div className="btn-power"></div>
      </div>
    </div>
    <div className="screen-info">
      <h3 className="screen-title">{title}</h3>
      <p className="screen-desc">{description}</p>
    </div>
  </div>
);

const Section02 = () => (
  <div className="presentation-canvas bg-alt" id="section-02">
    <div className="presentation-text centered-header">
      <h4>SECTION 02</h4>
      <h1>Authentication & Onboarding Flow</h1>
      <p>A clean, frictionless entry into Mentora. Explore the splash screen, onboarding carousel, sign-in, registration with career goals, OTP verification, and password recovery states.</p>
    </div>

    <div className="device-row">
      <ScreenPresentation
        title="Splash Screen"
        description="The initial launch experience. Features Mentora's electric gradient, pulsing spark badge, and Connect · Learn · Grow tagline."
      >
        <Splash />
      </ScreenPresentation>
    </div>
  </div>
);

export default Section02;
