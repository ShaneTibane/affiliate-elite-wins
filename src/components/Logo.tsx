import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        className={`${sizeClasses[size]} drop-shadow-lg`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFED4E" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
        </defs>
        
        {/* Freehand Crown Drawing */}
        <g transform="translate(50, 50)">
          {/* Crown Base - slightly curved line */}
          <path
            d="M-25 15 Q-20 17 -15 15 Q-10 13 -5 15 Q0 17 5 15 Q10 13 15 15 Q20 17 25 15"
            stroke="url(#crownGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Crown Points - hand-drawn style with slight irregularities */}
          <path
            d="M-25 15 L-22 -5 Q-20 -8 -18 -5 L-12 8 Q-10 5 -8 8 L-2 -12 Q0 -15 2 -12 L8 8 Q10 5 12 8 L18 -5 Q20 -8 22 -5 L25 15"
            stroke="url(#crownGradient)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Small decorative dots/jewels - hand-drawn style */}
          <circle
            cx="0"
            cy="-10"
            r="1.5"
            fill="url(#crownGradient)"
          />
          
          <circle
            cx="-20"
            cy="-2"
            r="1"
            fill="url(#crownGradient)"
            opacity="0.8"
          />
          
          <circle
            cx="20"
            cy="-2"
            r="1"
            fill="url(#crownGradient)"
            opacity="0.8"
          />
          
          {/* Additional small accent marks for hand-drawn feel */}
          <path
            d="M-15 2 Q-13 0 -11 2"
            stroke="url(#crownGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
          
          <path
            d="M11 2 Q13 0 15 2"
            stroke="url(#crownGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;