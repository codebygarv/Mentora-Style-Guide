import React from 'react';
import { KeyRound, ArrowLeft } from 'lucide-react';
import './styles.css';

const ResetPassword = () => {
  return (
    <div className="auth-screen no-scrollbar">
      <div className="auth-header">
        <div className="auth-brand-badge">
          <KeyRound size={22} color="#1D75FE" />
        </div>
        <h2 className="auth-title">Forgot Password?</h2>
        <p className="auth-subtitle">
          Don't worry! Enter your registered email address and we will send a password reset code.
        </p>
      </div>

      <div className="auth-form-body">
        <div className="auth-field-group">
          <label className="auth-label">Email Address</label>
          <input 
            type="email" 
            className="auth-input" 
            placeholder="sakura@example.com" 
            defaultValue="sakura@example.com"
          />
        </div>

        <button className="btn-auth-primary">
          Send Recovery Code
        </button>
      </div>

      <div className="auth-footer-text">
        <span className="auth-switch-link">← Back to Sign In</span>
      </div>
    </div>
  );
};

export default ResetPassword;
