import React from 'react';
import './DeviceMockup.css';

const DeviceMockup = ({ children, theme = 'light' }) => {
  return (
    <div className="device-mockup" data-theme={theme}>
      <div className="device-hardware">
        <div className="dynamic-island">
          <div className="dynamic-island-cam"></div>
          <div className="dynamic-island-sensor"></div>
        </div>
        <div className="device-screen custom-scrollbar">
          {children}
        </div>
        {/* Hardware side keys */}
        <div className="btn-mute"></div>
        <div className="btn-vol-up"></div>
        <div className="btn-vol-down"></div>
        <div className="btn-power"></div>
      </div>
    </div>
  );
};

export default DeviceMockup;
