import React from 'react';
import './styles.css';

// Consolidates the ~8 one-off tag/toggle/rating chip classes that used to
// be hand-duplicated per screen (field-tag-badge, filter/category/date/
// duration pills, rating chips) into one component with a small variant set.
const Pill = ({
  variant = 'tag',   // 'tag' | 'field' | 'toggle' | 'rating'
  icon,
  active = false,
  onClick,
  children,
}) => {
  const Tag = onClick ? 'button' : 'span';
  const classes = ['pill', `pill-${variant}`, active && 'active']
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} onClick={onClick} type={onClick ? 'button' : undefined}>
      {icon && <span className="pill-icon">{icon}</span>}
      <span>{children}</span>
    </Tag>
  );
};

export default Pill;
