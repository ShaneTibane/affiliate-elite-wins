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
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
        </defs>
        
        {/* Main Circle Background */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="rgba(0, 0, 0, 0.9)"
          stroke="url(#crownGradient)"
          strokeWidth="2"
        />
        
        {/* Minimal Crown */}
        <g transform="translate(50, 50)">
          {/* Crown Base */}
          <rect
            x="-18"
            y="8"
            width="36"
            height="4"
            fill="url(#crownGradient)"
            rx="2"
          />
          
          {/* Crown Points */}
          <path
            d="M-18 8 L-12 -8 L-6 4 L0 -12 L6 4 L12 -8 L18 8 Z"
            fill="url(#crownGradient)"
            stroke="none"
          />
          
          {/* Center Jewel */}
          <circle
            cx="0"
            cy="-8"
            r="2"
            fill="#FFFFFF"
            opacity="0.9"
          />
          
          {/* Side Jewels */}
          <circle
            cx="-12"
            cy="-4"
            r="1.5"
            fill="#FFFFFF"
            opacity="0.7"
          />
          <circle
            cx="12"
            cy="-4"
            r="1.5"
            fill="#FFFFFF"
            opacity="0.7"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;