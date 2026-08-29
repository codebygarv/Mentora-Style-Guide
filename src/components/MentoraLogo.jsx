import React from 'react';

export const MentoraLogo = ({ size = 28, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="mentoraGrad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1D75FE" />
        </linearGradient>
        <linearGradient id="mentoraSpark" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>

      {/* Background Rounded Squircle */}
      <rect width="32" height="32" rx="9" fill="url(#mentoraGrad)" />

      {/* Connected 'M' Growth Knot & Mentorship Arch */}
      <path 
        d="M8 22V13.5C8 11.567 9.567 10 11.5 10C13.433 10 15 11.567 15 13.5V20.5C15 21.8807 16.1193 23 17.5 23C18.8807 23 20 21.8807 20 20.5V13.5C20 11.567 21.567 10 23.5 10C24.3284 10 25.0934 10.2885 25.6983 10.7719" 
        stroke="white" 
        strokeWidth="2.75" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Ascending Insight & North Star Dot */}
      <circle cx="24" cy="7.5" r="2" fill="url(#mentoraSpark)" />
    </svg>
  );
};

export default MentoraLogo;
