import React from 'react';
import CareerRoadmapScreen from '../pages/CareerRoadmapScreen';
import MentorshipPackagesScreen from '../pages/MentorshipPackagesScreen';
import GamificationBadgesScreen from '../pages/GamificationBadgesScreen';
import DeviceMockup from '../components/DeviceMockup';
import './Section07.css';

const ScreenPresentation = ({ title, description, children, theme = "light" }) => (
  <div className="screen-presentation">
    <DeviceMockup theme={theme}>
      {children}
    </DeviceMockup>
    <div className="screen-info">
      <h3 className="screen-title">{title}</h3>
      <p className="screen-desc">{description}</p>
    </div>
  </div>
);

const Section07 = () => (
  <div className="presentation-canvas" id="section-07">
    <div className="presentation-text centered-header">
      <h4>SECTION 07</h4>
      <h1>AI Roadmaps, Bundles & Gamification</h1>
      <p>
        Long-term mentee acceleration features: dynamic AI milestone progression toward career goals, high-value multi-session bundle packages (Starter, Accelerator, Mastery), and gamified learning streaks with unlockable achievement badges.
      </p>
    </div>

    <div className="device-row" id="section-07-screens">
      {/* 1. AI Roadmap */}
      <ScreenPresentation
        title="AI Career Roadmap & Milestones"
        description="Personalized goal pathway: 50% completion track, connected milestones with mentor assignment, step status badges, and AI regeneration."
      >
        <CareerRoadmapScreen />
      </ScreenPresentation>

      {/* 2. Mentorship Packages */}
      <ScreenPresentation
        title="Mentorship Bundles & Subscriptions"
        description="Multi-session packages (Starter Pack $30, Growth Accelerator $58, Executive Mastery $110) with feature comparison and bulk savings."
      >
        <MentorshipPackagesScreen />
      </ScreenPresentation>

      {/* 3. Badges & Streaks */}
      <ScreenPresentation
        title="Achievements & 14-Day Streak"
        description="Gamified learner dashboard: 14-day consecutive streak tracker, weekly check-in nodes, unlockable achievement badges, and XP leaderboard."
      >
        <GamificationBadgesScreen />
      </ScreenPresentation>
    </div>
  </div>
);

export default Section07;
