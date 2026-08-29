import React from 'react';
import { Wifi, Battery } from 'lucide-react';
import './DeviceMockup.css';

const CellularIcon = () => (
  <svg width="15" height="11" viewBox="0 0 17 11" fill="currentColor">
    <rect x="0" y="8" width="3" height="3" rx="0.8" />
    <rect x="4.5" y="5.5" width="3" height="5.5" rx="0.8" />
    <rect x="9" y="3" width="3" height="8" rx="0.8" />
    <rect x="13.5" y="0" width="3" height="11" rx="0.8" />
  </svg>
);

const DeviceMockup = ({ children, theme = 'light' }) => {
  return (
    <div className="device-mockup" data-theme={theme}>
      <div className="device-hardware">
        {/* iOS Status Bar */}
        <div className="status-bar-row">
          <span className="status-time">9:41</span>
          <div className="status-icons">
            <CellularIcon />
            <Wifi size={13} strokeWidth={2.5} />
            <Battery size={16} strokeWidth={2} />
          </div>
        </div>

        {/* Dynamic Island */}
        <div className="dynamic-island">
          <div className="dynamic-island-cam"></div>
          <div className="dynamic-island-sensor"></div>
        </div>

        {/* Inner Screen */}
        <div className="device-screen custom-scrollbar">
          {children}
        </div>

        {/* Home Indicator */}
        <div className="home-indicator-bar"></div>

        {/* Hardware Keys */}
        <div className="btn-mute"></div>
        <div className="btn-vol-up"></div>
        <div className="btn-vol-down"></div>
        <div className="btn-power"></div>
      </div>
    </div>
  );
};

export default DeviceMockup;
