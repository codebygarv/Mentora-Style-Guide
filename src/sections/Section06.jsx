import React from 'react';
import MentorScheduleView from '../pages/MentorScheduleView';
import MentorEducationView from '../pages/MentorEducationView';
import MentorAvailabilityManager from '../pages/MentorAvailabilityManager';
import MentorEarningsWithdraw from '../pages/MentorEarningsWithdraw';
import DeviceMockup from '../components/DeviceMockup';
import './Section06.css';

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

const Section06 = () => (
  <div className="presentation-canvas" id="section-06">
    <div className="presentation-text centered-header">
      <h4>SECTION 06</h4>
      <h1>Mentor Profile Tabs & Host Management Hub</h1>
      <p>
        Extended mentor profile states and host-side management tools: in-profile weekly slot picker (Schedule Tab), verified career credentials and Stanford degree (Education Tab), customized working hours & buffer rules, and instant payout withdrawals to bank accounts.
      </p>
    </div>

    <div className="device-row" id="section-06-screens">
      {/* 1. Schedule Tab */}
      <ScreenPresentation
        title="Mentor Profile: Schedule Tab View"
        description="Direct slot selector inside Stella's profile: interactive date switcher (Mon-Fri) and categorized Morning/Evening time slot chips."
      >
        <MentorScheduleView />
      </ScreenPresentation>

      {/* 2. Education Tab */}
      <ScreenPresentation
        title="Mentor Profile: Education & Experience"
        description="Comprehensive pedigree review: Senior Director of Growth @ Stripe, Product Marketing @ Uber, and Stanford University M.S. degree."
      >
        <MentorEducationView />
      </ScreenPresentation>

      {/* 3. Availability Manager */}
      <ScreenPresentation
        title="Mentor Availability & Schedule Rules"
        description="Mentor settings: instant booking toggle, weekly active day circles, customized working hours, buffer duration, and minimum notice."
      >
        <MentorAvailabilityManager />
      </ScreenPresentation>

      {/* 4. Earnings & Payout */}
      <ScreenPresentation
        title="Revenue Analytics & Bank Payouts"
        description="Earnings hub with $1,840 available balance, Chase bank link, 10% fee breakdown, and real-time transaction ledger."
      >
        <MentorEarningsWithdraw />
      </ScreenPresentation>
    </div>
  </div>
);

export default Section06;
