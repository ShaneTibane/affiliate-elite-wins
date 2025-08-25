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
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F5F5F5" />
          </linearGradient>
        </defs>
        
        {/* Main Circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#primaryGradient)"
          stroke="none"
        />
        
        {/* Inner Circle */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="rgba(0, 0, 0, 0.9)"
          stroke="none"
        />
        
        {/* Letter E */}
        <path
          d="M35 35 L35 65 M35 35 L50 35 M35 50 L47 50 M35 65 L50 65"
          stroke="url(#primaryGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Letter W */}
        <path
          d="M55 35 L58 65 L62 50 L66 65 L69 35"
          stroke="url(#primaryGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Minimal accent dot */}
        <circle
          cx="52"
          cy="30"
          r="2"
          fill="url(#primaryGradient)"
        />
      </svg>
    </div>
  );
};

export default Logo;