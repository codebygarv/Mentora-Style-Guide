import React from 'react';
import DocHeader from './components/DocHeader';
import HeroSection from './sections/HeroSection';
import Section01 from './sections/Section01';
import Section02 from './sections/Section02';
import Section03 from './sections/Section03';
import Section04 from './sections/Section04';
import Section05 from './sections/Section05';

import './global.css';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <DocHeader />
      <HeroSection />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
    </div>
  );
}

export default App;
