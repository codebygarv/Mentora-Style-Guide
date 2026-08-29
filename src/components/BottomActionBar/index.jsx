import React from 'react';
import './styles.css';

// Consolidates the fixed bottom obsidian-pill CTA bar that was hand-defined
// with `background: #18181B` in 14 separate page stylesheets.
const BottomActionBar = ({ primary, secondary }) => (
  <div className="bottom-action-bar">
    <button className="btn-bottom-primary" onClick={primary?.onClick}>
      {primary?.label}
    </button>
    {secondary && (
      <button
        className="btn-bottom-secondary"
        onClick={secondary.onClick}
        aria-label={secondary.ariaLabel || 'Secondary action'}
      >
        {secondary.icon}
      </button>
    )}
  </div>
);

export default BottomActionBar;
