import React, { useState } from 'react';
import MentoraLogo from '../../components/MentoraLogo';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import './styles.css';

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.58.65-1.08 1.72-.94 2.74 1 .08 2.04-.51 2.66-1.24z"/>
  </svg>
);

const SignIn = ({ hasError = false }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-screen no-scrollbar">
      <div className="auth-header">
        <div className="auth-brand-badge">
          <MentoraLogo size={32} />
        </div>
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Sign in to manage your 1:1 sessions and mentors</p>
      </div>

      <div className="auth-form-body">
        <div className={`auth-field-group ${hasError ? 'has-error' : ''}`}>
          <label className="auth-label">Email Address</label>
          <input 
            type="email" 
            className="auth-input" 
            placeholder="sakura@example.com"
            defaultValue={hasError ? "sakura@invalid-email" : "sakura@example.com"}
          />
          {hasError && (
            <div className="auth-error-msg">
              <AlertCircle size={13} />
              <span>Please enter a valid email address</span>
            </div>
          )}
        </div>

        <div className={`auth-field-group ${hasError ? 'has-error' : ''}`}>
          <div className="auth-label-row">
            <label className="auth-label">Password</label>
            <span className="auth-forgot-link">Forgot?</span>
          </div>
          <div className="auth-password-wrap">
            <input 
              type={showPassword ? "text" : "password"} 
              className="auth-input" 
              placeholder="••••••••"
              defaultValue="password123"
            />
            <button 
              type="button" 
              className="auth-eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <button className="btn-auth-primary">
          Sign In
        </button>

        <div className="auth-divider-row">
          <span>or continue with</span>
        </div>

        <div className="auth-social-row">
          <button className="auth-social-btn">
            <GoogleIcon />
            <span>Google</span>
          </button>
          <button className="auth-social-btn">
            <AppleIcon />
            <span>Apple</span>
          </button>
        </div>
      </div>

      <div className="auth-footer-text">
        <span>Don't have an account? </span>
        <span className="auth-switch-link">Sign Up</span>
      </div>
    </div>
  );
};

export default SignIn;
