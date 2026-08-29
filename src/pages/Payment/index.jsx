import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, Check, CreditCard, Sparkles } from 'lucide-react';
import './styles.css';

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('applepay');

  return (
    <div className="payment-screen no-scrollbar">
      {/* 1. Header */}
      <div className="pay-header">
        <button className="pay-back-btn" aria-label="Back">
          <ArrowLeft size={18} color="#0F172A" />
        </button>
        <h3 className="pay-title">Checkout</h3>
        <div style={{ width: 36 }}></div>
      </div>

      <div className="pay-scroll-body no-scrollbar">
        {/* 2. Session Summary Card */}
        <div className="pay-summary-card">
          <div className="pay-card-top">
            <span className="pay-card-badge">
              <Sparkles size={11} />
              <span>Confirmed Slot</span>
            </span>
            <span className="pay-time-badge">Tue 13 · 07:00 PM</span>
          </div>

          <div className="pay-mentor-row">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80" 
              alt="Stella Fernandez" 
              className="pay-avatar" 
            />
            <div className="pay-mentor-meta">
              <h4>Stella Fernandez</h4>
              <p>Growth & Product Marketing · 30m</p>
            </div>
            <div className="pay-mentor-rate">
              <span>$16.00</span>
            </div>
          </div>
        </div>

        {/* 3. Payment Methods */}
        <div className="pay-section-block">
          <span className="pay-sec-label">Payment Method</span>

          {/* Apple Pay */}
          <div 
            className={`pay-method-card ${selectedMethod === 'applepay' ? 'active' : ''}`}
            onClick={() => setSelectedMethod('applepay')}
          >
            <div className="pay-method-left">
              <div className="pay-icon-box dark">
                <span>Pay</span>
              </div>
              <div className="pay-method-info">
                <span className="pay-method-title">Apple Pay</span>
                <span className="pay-method-sub">Default payment card</span>
              </div>
            </div>
            <div className={`pay-check-circle ${selectedMethod === 'applepay' ? 'checked' : ''}`}>
              {selectedMethod === 'applepay' && <Check size={12} color="#FFFFFF" />}
            </div>
          </div>

          {/* Credit Card */}
          <div 
            className={`pay-method-card ${selectedMethod === 'card' ? 'active' : ''}`}
            onClick={() => setSelectedMethod('card')}
          >
            <div className="pay-method-left">
              <div className="pay-icon-box blue">
                <CreditCard size={16} />
              </div>
              <div className="pay-method-info">
                <span className="pay-method-title">Mastercard ···· 4242</span>
                <span className="pay-method-sub">Expires 09/28</span>
              </div>
            </div>
            <div className={`pay-check-circle ${selectedMethod === 'card' ? 'checked' : ''}`}>
              {selectedMethod === 'card' && <Check size={12} color="#FFFFFF" />}
            </div>
          </div>
        </div>

        {/* 4. Cost Breakdown */}
        <div className="pay-section-block">
          <span className="pay-sec-label">Price Summary</span>
          <div className="pay-breakdown-card">
            <div className="pay-row">
              <span className="pay-label">1:1 Mentorship Session (30m)</span>
              <span className="pay-val">$16.00</span>
            </div>
            <div className="pay-row">
              <span className="pay-label">Platform & Booking Fee</span>
              <span className="pay-val green">FREE</span>
            </div>
            <div className="pay-divider"></div>
            <div className="pay-row total">
              <span className="pay-label-total">Total Amount</span>
              <span className="pay-val-total">$16.00</span>
            </div>
          </div>
        </div>

        {/* 5. Trust Guarantee */}
        <div className="pay-trust-badge">
          <ShieldCheck size={15} color="#10B981" />
          <span>100% Satisfaction or Full Refund Guarantee</span>
        </div>
      </div>

      {/* 6. Bottom Confirmation CTA */}
      <div className="pay-bottom-bar">
        <button className="btn-pay-confirm">
          Pay $16.00 & Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Payment;
