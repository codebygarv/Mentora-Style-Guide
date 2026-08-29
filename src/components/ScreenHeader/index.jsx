import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './styles.css';

// Consolidates the header chrome hand-duplicated across every screen
// (circular back button + optional title + optional right action).
const ScreenHeader = ({ onBack, title, rightAction }) => (
  <div className="screen-header">
    <button className="screen-header-btn" onClick={onBack} aria-label="Back">
      <ArrowLeft size={18} color="#0F172A" />
    </button>
    {title && <h3 className="screen-header-title">{title}</h3>}
    {rightAction ? (
      <button className="screen-header-btn" aria-label="Action">
        {rightAction}
      </button>
    ) : (
      <div className="screen-header-spacer" />
    )}
  </div>
);

export default ScreenHeader;
