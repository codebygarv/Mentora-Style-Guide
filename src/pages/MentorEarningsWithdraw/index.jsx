import React from 'react';
import { ArrowLeft, DollarSign, ArrowUpRight, ArrowDownLeft, Building2, CheckCircle2, TrendingUp, Download, ShieldCheck } from 'lucide-react';
import './styles.css';

const MentorEarningsWithdraw = () => {
  return (
    <div className="earn-screen no-scrollbar">
      {/* 1. Header */}
      <div className="earn-header">
        <button className="earn-back-btn" aria-label="Back">
          <ArrowLeft size={18} color="#0F172A" />
        </button>
        <h3 className="earn-title">Payouts & Revenue</h3>
        <button className="earn-icon-btn" aria-label="Download Statement">
          <Download size={16} color="#0F172A" />
        </button>
      </div>

      <div className="earn-scroll-body no-scrollbar">
        {/* 2. Payout Card */}
        <div className="earn-balance-card">
          <span className="earn-bc-label">Available for Instant Payout</span>
          <div className="earn-bc-amount">$1,840.00</div>

          <div className="earn-bank-pill">
            <Building2 size={13} color="#94A3B8" />
            <span>Chase Bank ···· 8492</span>
          </div>

          <button className="btn-instant-withdraw">
            <ArrowUpRight size={16} />
            <span>Withdraw to Bank Account</span>
          </button>
        </div>

        {/* 3. Revenue Breakdown */}
        <div className="earn-block">
          <span className="earn-block-label">Monthly Breakdown (October)</span>

          <div className="earn-row">
            <span>Gross Bookings (42 Sessions)</span>
            <strong>$2,450.00</strong>
          </div>

          <div className="earn-row fee">
            <span>Platform Service Fee (10%)</span>
            <strong>-$245.00</strong>
          </div>

          <div className="earn-row total">
            <span>Net Take-Home Revenue</span>
            <strong>$2,205.00</strong>
          </div>
        </div>

        {/* 4. Recent Transactions */}
        <div className="earn-block">
          <span className="earn-block-label">Recent Transactions</span>

          <div className="earn-tx-item">
            <div className="earn-tx-icon in">
              <ArrowDownLeft size={15} />
            </div>
            <div className="earn-tx-info">
              <strong>1:1 Session · Sakura Hime</strong>
              <span>Today, 07:30 PM</span>
            </div>
            <span className="earn-tx-amount in">+$16.00</span>
          </div>

          <div className="earn-tx-item">
            <div className="earn-tx-icon in">
              <ArrowDownLeft size={15} />
            </div>
            <div className="earn-tx-info">
              <strong>1:1 Session · Jose Barkley</strong>
              <span>Yesterday, 04:00 PM</span>
            </div>
            <span className="earn-tx-amount in">+$16.00</span>
          </div>

          <div className="earn-tx-item">
            <div className="earn-tx-icon out">
              <ArrowUpRight size={15} />
            </div>
            <div className="earn-tx-info">
              <strong>Bank Transfer to Chase</strong>
              <span>Oct 10, 2026</span>
            </div>
            <span className="earn-tx-amount out">-$580.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorEarningsWithdraw;
