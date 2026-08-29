import React from 'react';
import { ArrowLeft, Sparkles, CheckCircle2, Circle, Clock, ChevronRight, Zap, Target, BookOpen } from 'lucide-react';
import './styles.css';

const CareerRoadmapScreen = () => {
  const steps = [
    {
      id: 1,
      title: 'Growth Marketing & Storytelling',
      status: 'completed',
      mentor: 'Stella Fernandez',
      date: 'Completed Oct 10',
      desc: 'Mastered value proposition frameworks and pitch deck narrative.'
    },
    {
      id: 2,
      title: 'Customer Acquisition & CAC Optimization',
      status: 'in-progress',
      mentor: 'Stella Fernandez',
      date: 'Scheduled Today 07:00 PM',
      desc: 'Deep-dive into multi-channel paid ads, referral loops, and funnel conversion.'
    },
    {
      id: 3,
      title: 'Startup Cap Table & Seed Fundraising',
      status: 'upcoming',
      mentor: 'Andrew Garfield',
      date: 'Recommended Next',
      desc: 'Term sheets, valuation models, and investor due diligence readiness.'
    },
    {
      id: 4,
      title: 'Leadership & Team Scaling',
      status: 'upcoming',
      mentor: 'Arjun Mehta',
      date: 'Goal: November 2026',
      desc: 'Hiring senior talent, OKRs, and executive operational cadence.'
    }
  ];

  return (
    <div className="crm-screen no-scrollbar">
      {/* 1. Header */}
      <div className="crm-header">
        <button className="crm-back-btn" aria-label="Back">
          <ArrowLeft size={18} color="#0F172A" />
        </button>
        <h3 className="crm-title">Career Roadmap</h3>
        <div style={{ width: 36 }}></div>
      </div>

      <div className="crm-scroll-body no-scrollbar">
        {/* 2. AI Goal Overview Card */}
        <div className="crm-goal-card">
          <div className="crm-gc-top">
            <div className="crm-ai-tag">
              <Sparkles size={12} />
              <span>AI Tailored Pathway</span>
            </div>
            <span className="crm-pct-badge">50% Completed</span>
          </div>

          <h4 className="crm-goal-title">Growth Marketing Lead & Startup Founder</h4>
          <p className="crm-goal-sub">4 Milestones · Curated with Stripe & Founders Fund mentors</p>

          <div className="crm-progress-track">
            <div className="crm-progress-fill" style={{ width: '50%' }}></div>
          </div>
        </div>

        {/* 3. Milestones Timeline */}
        <div className="crm-sec-header">
          <h4 className="crm-sec-title">Milestone Roadmap</h4>
          <span className="crm-sec-hint">Step 2 Active</span>
        </div>

        <div className="crm-timeline">
          {steps.map((step, idx) => (
            <div key={step.id} className={`crm-step-card ${step.status}`}>
              <div className="crm-step-left">
                <div className={`crm-step-circle ${step.status}`}>
                  {step.status === 'completed' ? (
                    <CheckCircle2 size={16} />
                  ) : step.status === 'in-progress' ? (
                    <Zap size={14} />
                  ) : (
                    <span>{idx + 1}</span>
                  )}
                </div>
                {idx < steps.length - 1 && <div className="crm-step-line"></div>}
              </div>

              <div className="crm-step-content">
                <div className="crm-sc-top">
                  <h5>{step.title}</h5>
                  <span className={`crm-status-pill ${step.status}`}>{step.status}</span>
                </div>

                <p className="crm-sc-desc">{step.desc}</p>

                <div className="crm-sc-meta">
                  <span className="crm-meta-mentor">👤 {step.mentor}</span>
                  <span className="crm-meta-date">{step.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Bottom CTA */}
      <div className="crm-bottom-bar">
        <button className="btn-crm-action">
          <Sparkles size={15} />
          <span>Regenerate AI Milestones</span>
        </button>
      </div>
    </div>
  );
};

export default CareerRoadmapScreen;
