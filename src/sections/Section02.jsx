import React from 'react';
import Splash from '../pages/Splash';
import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import VerifyCode from '../pages/VerifyCode';
import ResetPassword from '../pages/ResetPassword';
import DeviceMockup from '../components/DeviceMockup';
import './Section02.css';

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

const Section02 = () => (
  <div className="presentation-canvas bg-alt" id="section-02">
    <div className="presentation-text centered-header">
      <h4>SECTION 02</h4>
      <h1>Authentication & Onboarding Suite</h1>
      <p>
        A smooth, frictionless entry experience into Mentora. Includes the brand splash, onboarding carousel, sign-in with validation states, sign-up with role and career goal toggles, 6-digit OTP verification, and password recovery.
      </p>
    </div>

    <div className="device-row" id="section-02-screens">
      {/* 1. Splash */}
      <ScreenPresentation
        title="Splash Screen"
        description="The initial launch experience featuring Mentora's electric gradient, pulsing spark badge, and Connect · Learn · Grow tagline."
      >
        <Splash />
      </ScreenPresentation>

      {/* 2. Welcome */}
      <ScreenPresentation
        title="Welcome & Value Props"
        description="Engaging onboarding card with verified mentor badges, carousel value propositions, and high-contrast CTA buttons."
      >
        <Welcome />
      </ScreenPresentation>

      {/* 3. Sign In */}
      <ScreenPresentation
        title="Sign In"
        description="Minimalist credential entry with social Google/Apple login buttons, password visibility toggles, and direct forgot password link."
      >
        <SignIn />
      </ScreenPresentation>

      {/* 4. Sign In (Error) */}
      <ScreenPresentation
        title="Sign In (Validation Error)"
        description="Clear inline feedback for incorrect credentials or incomplete email addresses while preserving form state."
      >
        <SignIn hasError={true} />
      </ScreenPresentation>

      {/* 5. Sign Up */}
      <ScreenPresentation
        title="Sign Up (Role & Goals)"
        description="Frictionless registration allowing users to toggle Learner vs Mentor and select their primary career roadmap goal."
      >
        <SignUp />
      </ScreenPresentation>

      {/* 6. Sign Up (Error) */}
      <ScreenPresentation
        title="Sign Up (Duplicate Error)"
        description="Clear validation highlighting existing user accounts with a quick prompt to switch to login."
      >
        <SignUp hasError={true} />
      </ScreenPresentation>

      {/* 7. Verify OTP */}
      <ScreenPresentation
        title="Verify OTP Code"
        description="6-digit verification code with focused box states, active cursor, and countdown timer for resend requests."
      >
        <VerifyCode />
      </ScreenPresentation>

      {/* 8. Reset Password */}
      <ScreenPresentation
        title="Reset Password"
        description="Single-input password recovery flow to seamlessly generate a reset link without distractions."
      >
        <ResetPassword />
      </ScreenPresentation>
    </div>
  </div>
);

export default Section02;
