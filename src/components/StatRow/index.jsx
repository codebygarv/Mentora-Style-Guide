import React from 'react';
import './styles.css';

// Consolidates the 5 hand-duplicated "stat trio/pair with dividers or
// boxes" implementations (Hero metrics bar, MentorProfile stat boxes,
// dashboard stat rows, profile stat grid) into one component.
const StatRow = ({ items, layout = 'divided' }) => (
  <div className={`stat-row stat-row-${layout}`}>
    {items.map((item, i) => (
      <React.Fragment key={item.label}>
        {layout === 'boxed' ? (
          <div className="stat-box">
            <div className="stat-box-top">
              <span className={`stat-value${item.highlight ? ' highlight' : ''}`}>{item.value}</span>
              {item.icon && <span className={`stat-icon-wrap${item.tone ? ` tone-${item.tone}` : ''}`}>{item.icon}</span>}
            </div>
            <span className="stat-label">{item.label}</span>
          </div>
        ) : (
          <div className="stat-item">
            <span className={`stat-value${item.highlight ? ' highlight' : ''}`}>{item.value}</span>
            <span className="stat-label">{item.label}</span>
          </div>
        )}
        {layout === 'divided' && i < items.length - 1 && <div className="stat-divider" />}
      </React.Fragment>
    ))}
  </div>
);

export default StatRow;
