import React from 'react';
import './styles.css';

// Consolidates the 3 byte-for-byte duplicated Schedule/Education/Reviews
// tab blocks (MentorProfile, MentorEducationView, MentorScheduleView) into
// one interactive component — also fixes the two screens whose tabs were
// previously hardcoded/non-functional.
const SegmentedTabs = ({ tabs, activeKey, onChange }) => (
  <div className="segmented-tabs">
    {tabs.map((tab) => (
      <button
        key={tab.key}
        className={`segmented-tab ${activeKey === tab.key ? 'active' : ''}`}
        onClick={() => onChange?.(tab.key)}
        type="button"
      >
        {tab.icon}
        <span>{tab.label}</span>
      </button>
    ))}
  </div>
);

export default SegmentedTabs;
