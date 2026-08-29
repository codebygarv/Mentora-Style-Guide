import React from 'react';
import StyleGuidePhone from './StyleGuidePhone';
import './Section01.css';

const Section01 = () => (
  <div className="presentation-canvas" id="section-01">
    <div className="presentation-text">
      <h4>SECTION 01</h4>
      <h1>Design System & Interactive Tokens</h1>
      <p>
        Side-by-side Light & Dark mode token architectures. Examine typography hierarchy, chromatic indigo scales, interactive button feedback, and status indicators.
      </p>
    </div>

    <div className="device-row">
      <div className="screen-presentation">
        <StyleGuidePhone theme="light" title="Light Theme System" />
        <div className="screen-info">
          <h3 className="screen-title">Light Mode Tokens</h3>
          <p className="screen-desc">Clean porcelain surfaces, high-contrast typography, and vibrant Royal Indigo interactive actions.</p>
        </div>
      </div>

      <div className="screen-presentation">
        <StyleGuidePhone theme="dark" title="Dark Theme System" />
        <div className="screen-info">
          <h3 className="screen-title">Dark Mode Tokens</h3>
          <p className="screen-desc">Deep midnight slate background (`#0B0F19`) with glowing purple accents and eye-friendly contrast ratios.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Section01;
