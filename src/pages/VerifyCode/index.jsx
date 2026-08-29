import React from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import './styles.css';

const VerifyCode = ({ step = "active" }) => {
  return (
    <div className="auth-screen no-scrollbar">
      <div className="auth-header">
        <div className="auth-brand-badge">
          <Mail size={22} color="#1D75FE" />
        </div>
        <h2 className="auth-title">Verify Code</h2>
        <p className="auth-subtitle">
          We sent a 6-digit confirmation code to <strong>sakura@example.com</strong>
        </p>
      </div>

      <div className="auth-form-body">
        <div className="otp-inputs-grid">
          <div className="otp-box filled">5</div>
          <div className="otp-box filled">8</div>
          <div className="otp-box filled">2</div>
          <div className="otp-box active">
            <span>4</span>
            <span className="otp-cursor"></span>
          </div>
          <div className="otp-box empty"></div>
          <div className="otp-box empty"></div>
        </div>

        <div className="otp-resend-row">
          <span>Didn't receive code? </span>
          <span className="otp-resend-link">Resend in 00:42</span>
        </div>

        <button className="btn-auth-primary">
          Verify & Continue
        </button>
      </div>

      <div className="auth-footer-text">
        <span className="auth-switch-link">Back to Sign In</span>
      </div>
    </div>
  );
};

export default VerifyCode;
