import React from 'react';
import { getAvatarStyle } from './utils';
import './styles.css';

// Replaces stock-photo <img> avatars app-wide with a deterministic,
// fully custom illustrated monogram: same name always renders the same
// mark, different names land on visibly distinct, on-brand gradients.
const Avatar = ({ name, size = 40, shape = 'circle', status }) => {
  const { initials, gradient } = getAvatarStyle(name);
  const fontSize = Math.max(11, Math.round(size * 0.38));

  return (
    <div
      className={`avatar-wrap avatar-${shape}`}
      style={{ width: size, height: size }}
    >
      <div
        className="avatar-mark"
        style={{ background: gradient, fontSize }}
        aria-label={name}
        role="img"
      >
        {initials}
      </div>
      {status && <span className={`avatar-status-dot avatar-status-${status}`} />}
    </div>
  );
};

export default Avatar;
