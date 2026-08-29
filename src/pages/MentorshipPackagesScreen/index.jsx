import React, { useState } from 'react';
import { ArrowLeft, Check, Sparkles, Shield, Zap, Star } from 'lucide-react';
import './styles.css';

const MentorshipPackagesScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState('accelerator');

  const plans = [
    {
      id: 'starter',
      name: 'Starter Pack',
      price: '$30',
      sessions: '2 Sessions',
      discount: 'Save 10%',
      desc: 'Perfect for single pitch deck review or initial portfolio critique.',
      features: ['2 × 30-min 1:1 Live Video calls', 'Shared session takeaway notes', 'Direct mentor chat before calls']
    },
    {
      id: 'accelerator',
      name: 'Growth Accelerator',
      badge: 'MOST POPULAR',
      price: '$58',
      sessions: '4 Sessions',
      discount: 'Save 15%',
      desc: 'Structured monthly roadmap covering strategy, acquisition, and feedback.',
      features: ['4 × 30-min 1:1 Live Video calls', 'Personalized AI Milestone Checklist', 'Async Slack-style chat access', 'Priority calendar slot booking']
    },
    {
      id: 'mastery',
      name: 'Executive Mastery',
      price: '$110',
      sessions: '8 Sessions',
      discount: 'Save 25%',
      desc: 'Complete career transformation and direct access to senior industry leaders.',
      features: ['8 × 45-min Deep Dive sessions', 'Custom Notion Hub & Cap Table templates', '24/7 VIP Async Voice & Video notes', 'Mock Angel Investor pitch trial']
    }
  ];

  return (
    <div className="pkg-screen no-scrollbar">
      {/* 1. Header */}
      <div className="pkg-header">
        <button className="pkg-back-btn" aria-label="Back">
          <ArrowLeft size={18} color="#0F172A" />
        </button>
        <h3 className="pkg-title">Mentorship Bundles</h3>
        <div style={{ width: 36 }}></div>
      </div>

      <div className="pkg-scroll-body no-scrollbar">
        <div className="pkg-intro">
          <h4>Accelerate Your Growth</h4>
          <p>Book multiple sessions in advance and save up to 25% on verified mentors.</p>
        </div>

        {/* 2. Package Cards List */}
        <div className="pkg-list">
          {plans.map((p) => {
            const isSel = selectedPlan === p.id;
            return (
              <div 
                key={p.id} 
                className={`pkg-card ${isSel ? 'selected' : ''}`}
                onClick={() => setSelectedPlan(p.id)}
              >
                {p.badge && <span className="pkg-card-badge">{p.badge}</span>}

                <div className="pkg-card-top">
                  <div>
                    <h5>{p.name}</h5>
                    <span className="pkg-sessions-count">{p.sessions}</span>
                  </div>
                  <div className="pkg-price-col">
                    <span className="pkg-price-num">{p.price}</span>
                    <span className="pkg-disc-tag">{p.discount}</span>
                  </div>
                </div>

                <p className="pkg-desc">{p.desc}</p>

                <div className="pkg-features-list">
                  {p.features.map((feat, idx) => (
                    <div key={idx} className="pkg-feat-item">
                      <Check size={13} color={isSel ? '#1D75FE' : '#10B981'} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Bottom CTA */}
      <div className="pkg-bottom-bar">
        <button className="btn-pkg-checkout">
          <span>Continue with Selected Bundle</span>
        </button>
      </div>
    </div>
  );
};

export default MentorshipPackagesScreen;
