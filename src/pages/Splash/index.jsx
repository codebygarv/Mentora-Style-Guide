import React from 'react';
import MentoraLogo from '../../components/MentoraLogo';
import './styles.css';

const Splash = () => (
  <div className="splash-screen no-scrollbar">
    <div className="splash-lockup">
      <MentoraLogo size={38} />
      <span className="splash-name">Mentora</span>
    </div>
  </div>
);

export default Splash;
