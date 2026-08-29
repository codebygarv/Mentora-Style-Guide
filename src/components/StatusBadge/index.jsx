import React from 'react';
import './styles.css';

// Consolidates the 3 near-identical pulsing-dot "live/status" badges
// (ScheduleScreen, MenteeDashboard upcoming-session card, LiveVideo overlay)
// into one component + one shared @keyframes definition.
const StatusBadge = ({ label, tone = 'live' }) => (
  <span className={`status-badge tone-${tone}`}>
    <span className="status-badge-dot" />
    {label}
  </span>
);

export default StatusBadge;
