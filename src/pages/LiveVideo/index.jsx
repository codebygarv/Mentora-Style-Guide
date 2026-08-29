import React, { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, MessageSquare, Share2, MoreVertical, Shield } from 'lucide-react';
import './styles.css';

const LiveVideo = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  return (
    <div className="live-video-screen no-scrollbar">
      {/* 1. Mentor Main Video Stream */}
      <div className="live-main-stream">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80" 
          alt="Stella Fernandez" 
          className="live-mentor-video" 
        />
        <div className="live-video-vignette"></div>

        {/* Top Floating Overlay */}
        <div className="live-top-bar">
          <div className="live-pill-tag">
            <span className="live-dot"></span>
            <span>24:18 left</span>
          </div>

          <div className="live-mentor-tag">
            <span>Stella Fernandez · Marketing</span>
          </div>

          <button className="live-icon-circle-btn">
            <MoreVertical size={16} color="#FFFFFF" />
          </button>
        </div>

        {/* Floating Mentee PIP Window */}
        <div className="live-pip-window">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80" 
            alt="Sakura Hime" 
            className="live-pip-img" 
          />
          <span className="live-pip-label">You</span>
        </div>

        {/* Encryption Badge */}
        <div className="live-secure-badge">
          <Shield size={11} color="#10B981" />
          <span>End-to-End Encrypted HD Call</span>
        </div>
      </div>

      {/* 2. Floating Video Controls Bar */}
      <div className="live-controls-bar">
        <button 
          className={`live-ctrl-btn ${isMuted ? 'active-mute' : ''}`}
          onClick={() => setIsMuted(!isMuted)}
          aria-label="Mute"
        >
          {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
        </button>

        <button 
          className={`live-ctrl-btn ${isVideoOff ? 'active-mute' : ''}`}
          onClick={() => setIsVideoOff(!isVideoOff)}
          aria-label="Camera"
        >
          {isVideoOff ? <VideoOff size={18} /> : <Video size={18} />}
        </button>

        <button className="live-ctrl-btn" aria-label="Screen Share">
          <Share2 size={18} />
        </button>

        <button className="live-ctrl-btn" aria-label="In-Call Chat">
          <MessageSquare size={18} />
        </button>

        <button className="live-ctrl-btn end-call" aria-label="End Session">
          <PhoneOff size={18} color="#FFFFFF" />
        </button>
      </div>
    </div>
  );
};

export default LiveVideo;
