import React from 'react';
import { ArrowLeft, Flame, Award, Trophy, Star, Target, Zap, Lock, ChevronRight } from 'lucide-react';
import './styles.css';

const GamificationBadgesScreen = () => {
  const badges = [
    {
      id: 1,
      icon: '🚀',
      title: 'First Step',
      desc: 'Completed first 1:1 mentorship call',
      unlocked: true
    },
    {
      id: 2,
      icon: '🎯',
      title: 'Path Finder',
      desc: 'Created customized career roadmap',
      unlocked: true
    },
    {
      id: 3,
      icon: '🏆',
      title: 'Streak Master',
      desc: 'Maintained 14-day learning consistency',
      unlocked: true
    },
    {
      id: 4,
      icon: '⭐',
      title: 'Top Reviewer',
      desc: 'Left 5 verified ratings and takeaways',
      unlocked: true
    },
    {
      id: 5,
      icon: '💎',
      title: 'Mastermind',
      desc: 'Complete 10 sessions (8/10 completed)',
      unlocked: false,
      progress: '8/10'
    },
    {
      id: 6,
      icon: '👑',
      title: 'Top 1% Learner',
      desc: 'Reach Top 10 on community leaderboard',
      unlocked: false
    }
  ];

  return (
    <div className="game-screen no-scrollbar">
      {/* 1. Header */}
      <div className="game-header">
        <button className="game-back-btn" aria-label="Back">
          <ArrowLeft size={18} color="#0F172A" />
        </button>
        <h3 className="game-title">Achievements & Streaks</h3>
        <div style={{ width: 36 }}></div>
      </div>

      <div className="game-scroll-body no-scrollbar">
        {/* 2. Streak Card */}
        <div className="game-streak-card">
          <div className="game-sc-top">
            <div className="game-flame-icon">🔥</div>
            <div className="game-streak-info">
              <span className="game-streak-days">14 Day Streak!</span>
              <span className="game-streak-sub">You are in the top 5% of active learners</span>
            </div>
          </div>

          <div className="game-week-row">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <div key={i} className="game-day-node active">
                <span className="game-node-dot">✓</span>
                <span className="game-node-lbl">{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Badges Grid */}
        <div className="game-sec-header">
          <h4 className="game-sec-title">Earned Badges</h4>
          <span className="game-sec-count">4/6 Unlocked</span>
        </div>

        <div className="game-badges-grid">
          {badges.map((b) => (
            <div key={b.id} className={`game-badge-box ${b.unlocked ? 'unlocked' : 'locked'}`}>
              <div className="game-badge-emoji">{b.icon}</div>
              <h5>{b.title}</h5>
              <p>{b.desc}</p>
              {b.unlocked ? (
                <span className="game-status-tag">Unlocked</span>
              ) : (
                <span className="game-status-tag locked">
                  <Lock size={10} /> {b.progress || 'Locked'}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* 4. Leaderboard Card */}
        <div className="game-lead-card">
          <div className="game-lc-top">
            <Trophy size={16} color="#F59E0B" />
            <span className="game-lc-rank">Leaderboard Rank #4</span>
          </div>
          <span className="game-lc-xp">2,450 XP this month</span>
        </div>
      </div>
    </div>
  );
};

export default GamificationBadgesScreen;
