import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Star, Download, Sparkles, FileText, CheckSquare, Square } from 'lucide-react';
import './styles.css';

const SessionNotes = () => {
  const [rating, setRating] = useState(5);
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Refine value proposition for marketing deck', done: true },
    { id: 2, text: 'Target early adopters via LinkedIn outreach', done: true },
    { id: 3, text: 'Design 3-tier pricing strategy with trials', done: false }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div className="notes-screen no-scrollbar">
      {/* 1. Header */}
      <div className="notes-header">
        <button className="notes-back-btn" aria-label="Back">
          <ArrowLeft size={18} color="#0F172A" />
        </button>
        <h3 className="notes-title">Session Complete</h3>
        <div style={{ width: 36 }}></div>
      </div>

      <div className="notes-scroll-body no-scrollbar">
        {/* 2. Success Banner */}
        <div className="notes-success-card">
          <div className="notes-check-circle">
            <CheckCircle2 size={24} color="#10B981" />
          </div>
          <h4 className="notes-success-title">Great Session!</h4>
          <p className="notes-success-sub">30 mins completed with Stella Fernandez</p>
        </div>

        {/* 3. Action Items Checklist */}
        <div className="notes-block">
          <div className="notes-block-header">
            <span className="notes-sec-label">Key Action Items</span>
            <span className="notes-task-count">2/3 Done</span>
          </div>

          <div className="notes-tasks-list">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                className={`notes-task-item ${task.done ? 'done' : ''}`}
                onClick={() => toggleTask(task.id)}
              >
                {task.done ? (
                  <CheckSquare size={16} color="#1D75FE" />
                ) : (
                  <Square size={16} color="#94A3B8" />
                )}
                <span className="notes-task-text">{task.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Rating & Review */}
        <div className="notes-block">
          <span className="notes-sec-label">Rate Your Experience</span>
          <div className="notes-stars-row">
            {[1, 2, 3, 4, 5].map((s) => (
              <button
                key={s}
                className="notes-star-btn"
                onClick={() => setRating(s)}
              >
                <Star 
                  size={24} 
                  fill={s <= rating ? '#F59E0B' : 'none'} 
                  color={s <= rating ? '#F59E0B' : '#CBD5E1'} 
                />
              </button>
            ))}
          </div>

          <textarea 
            className="notes-feedback-textarea" 
            placeholder="Share what was most helpful during this session..."
            defaultValue="Stella's insights into customer acquisition channels and deck storytelling were spot on. Left with crystal clear next steps!"
            rows={3}
          />
        </div>
      </div>

      {/* 5. Bottom Submission CTA */}
      <div className="notes-bottom-bar">
        <button className="btn-notes-submit">
          <Download size={15} />
          <span>Submit & Save Notes</span>
        </button>
      </div>
    </div>
  );
};

export default SessionNotes;
