import React, { useState } from 'react';
import MentoraLogo from '../../components/MentoraLogo';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import './styles.css';

const SignUp = ({ hasError = false }) => {
  const [role, setRole] = useState('Learner');
  const [goal, setGoal] = useState('Get my first job');

  const goals = ['Get my first job', 'Switch career', 'Build startup', 'Technical interview'];

  return (
    <div className="auth-screen no-scrollbar">
      <div className="auth-header">
        <div className="auth-brand-badge">
          <MentoraLogo size={32} />
        </div>
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Join Mentora to accelerate your career growth</p>
      </div>

      <div className="auth-form-body">
        {/* Role Picker */}
        <div className="signup-role-toggle">
          <button 
            className={`signup-role-btn ${role === 'Learner' ? 'active' : ''}`}
            onClick={() => setRole('Learner')}
          >
            I'm a Learner
          </button>
          <button 
            className={`signup-role-btn ${role === 'Mentor' ? 'active' : ''}`}
            onClick={() => setRole('Mentor')}
          >
            I'm a Mentor
          </button>
        </div>

        <div className="auth-field-group">
          <label className="auth-label">Full Name</label>
          <input 
            type="text" 
            className="auth-input" 
            placeholder="Sakura Hime" 
            defaultValue="Sakura Hime" 
          />
        </div>

        <div className={`auth-field-group ${hasError ? 'has-error' : ''}`}>
          <label className="auth-label">Work / Personal Email</label>
          <input 
            type="email" 
            className="auth-input" 
            placeholder="sakura@example.com" 
            defaultValue={hasError ? "sakura@already-registered.com" : "sakura@example.com"}
          />
          {hasError && (
            <div className="auth-error-msg">
              <AlertCircle size={13} />
              <span>An account with this email already exists</span>
            </div>
          )}
        </div>

        <div className="auth-field-group">
          <label className="auth-label">Primary Career Goal</label>
          <select 
            className="auth-input auth-select"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            {goals.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        <div className="auth-terms-note">
          By continuing, you agree to Mentora's Terms of Service & Privacy Policy.
        </div>

        <button className="btn-auth-primary">
          Create Free Account
        </button>
      </div>

      <div className="auth-footer-text">
        <span>Already have an account? </span>
        <span className="auth-switch-link">Sign In</span>
      </div>
    </div>
  );
};

export default SignUp;
