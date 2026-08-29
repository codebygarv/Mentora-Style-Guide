import React, { useState } from 'react';
import { ArrowLeft, Video, Phone, Send, Paperclip, FileText, CheckCheck, Home, Search, Calendar, MessageSquare, User } from 'lucide-react';
import './styles.css';

const ChatScreen = () => {
  const [inputText, setInputText] = useState('');

  return (
    <div className="chat-screen no-scrollbar">
      {/* 1. Top Bar */}
      <div className="chat-top-header">
        <div className="chat-mentor-user">
          <div className="chat-avatar-wrap">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" 
              alt="Stella Fernandez" 
              className="chat-header-avatar" 
            />
            <span className="chat-online-badge"></span>
          </div>
          <div className="chat-mentor-meta">
            <h4 className="chat-name">Stella Fernandez</h4>
            <span className="chat-status">Active now · Marketing Lead</span>
          </div>
        </div>

        <div className="chat-header-actions">
          <button className="chat-action-btn" aria-label="Audio Call">
            <Phone size={16} color="#0F172A" />
          </button>
          <button className="chat-action-btn" aria-label="Video Call">
            <Video size={16} color="#1D75FE" />
          </button>
        </div>
      </div>

      {/* 2. Message History Stream */}
      <div className="chat-messages-body no-scrollbar">
        <div className="chat-timestamp-badge">Today, 06:15 PM</div>

        {/* Message 1 from Mentor */}
        <div className="chat-bubble-row mentor">
          <div className="chat-bubble">
            <p>Hi Sakura! 👋 Looking forward to our growth marketing roadmap session today at 7:00 PM.</p>
            <span className="chat-bubble-time">06:15 PM</span>
          </div>
        </div>

        {/* Message 2 from Mentee */}
        <div className="chat-bubble-row mentee">
          <div className="chat-bubble">
            <p>Hi Stella! So excited. I have prepared our current customer funnel metrics and deck.</p>
            <div className="chat-status-time">
              <span>06:18 PM</span>
              <CheckCheck size={13} color="#1D75FE" />
            </div>
          </div>
        </div>

        {/* Document Attachment */}
        <div className="chat-bubble-row mentee">
          <div className="chat-doc-card">
            <div className="chat-doc-icon">
              <FileText size={18} color="#1D75FE" />
            </div>
            <div className="chat-doc-info">
              <span className="chat-doc-name">Marketing_Deck_v2.pdf</span>
              <span className="chat-doc-size">1.4 MB · PDF Document</span>
            </div>
          </div>
        </div>

        {/* Message 3 from Mentor */}
        <div className="chat-bubble-row mentor">
          <div className="chat-bubble">
            <p>Awesome! Just reviewed slide 4. We will focus specifically on value proposition clarity and CAC optimization.</p>
            <span className="chat-bubble-time">06:22 PM</span>
          </div>
        </div>
      </div>

      {/* 3. Input Bar */}
      <div className="chat-input-bar">
        <button className="chat-attach-btn" aria-label="Attach File">
          <Paperclip size={16} color="#64748B" />
        </button>
        <input 
          type="text" 
          className="chat-text-input" 
          placeholder="Send a message to Stella..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="chat-send-btn" aria-label="Send">
          <Send size={15} color="#FFFFFF" />
        </button>
      </div>

      {/* 4. Bottom Nav */}
      <nav className="home-bottom-nav">
        <button className="nav-tab-btn">
          <Home size={20} />
          <span>Home</span>
        </button>
        <button className="nav-tab-btn">
          <Search size={20} />
          <span>Search</span>
        </button>
        <button className="nav-tab-btn">
          <Calendar size={20} />
          <span>Schedule</span>
        </button>
        <button className="nav-tab-btn active">
          <MessageSquare size={20} />
          <span>Chat</span>
        </button>
        <button className="nav-tab-btn">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80" 
            alt="Profile" 
            className="nav-avatar-icon" 
          />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default ChatScreen;
