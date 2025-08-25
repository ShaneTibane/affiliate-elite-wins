import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        className={`${sizeClasses[size]} drop-shadow-lg`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle with Gradient */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF8C00" />
          </linearGradient>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#F0F0F0" />
            <stop offset="100%" stopColor="#E0E0E0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer Ring */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#goldGradient)"
          stroke="#B8860B"
          strokeWidth="2"
          filter="url(#glow)"
        />
        
        {/* Inner Circle */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="rgba(0, 0, 0, 0.8)"
          stroke="url(#goldGradient)"
          strokeWidth="1"
        />
        
        {/* Crown Base */}
        <path
          d="M25 45 L75 45 L70 65 L30 65 Z"
          fill="url(#crownGradient)"
          stroke="#B8860B"
          strokeWidth="1"
        />
        
        {/* Crown Points */}
        <path
          d="M30 45 L35 30 L40 40 L45 25 L50 35 L55 25 L60 40 L65 30 L70 45"
          fill="url(#crownGradient)"
          stroke="#B8860B"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        
        {/* Crown Jewels */}
        <circle cx="40" cy="38" r="2" fill="#FF0000" />
        <circle cx="50" cy="32" r="2.5" fill="#0000FF" />
        <circle cx="60" cy="38" r="2" fill="#FF0000" />
        
        {/* Elite "E" */}
        <path
          d="M35 50 L35 60 L45 60 M35 55 L42 55 M35 50 L45 50"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Wins "W" */}
        <path
          d="M52 50 L54 60 L56 55 L58 60 L60 50"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Decorative Stars */}
        <g fill="url(#goldGradient)" opacity="0.7">
          <path d="M20 25 L21 27 L23 27 L21.5 28.5 L22 30.5 L20 29 L18 30.5 L18.5 28.5 L17 27 L19 27 Z" />
          <path d="M80 25 L81 27 L83 27 L81.5 28.5 L82 30.5 L80 29 L78 30.5 L78.5 28.5 L77 27 L79 27 Z" />
          <path d="M20 75 L21 77 L23 77 L21.5 78.5 L22 80.5 L20 79 L18 80.5 L18.5 78.5 L17 77 L19 77 Z" />
          <path d="M80 75 L81 77 L83 77 L81.5 78.5 L82 80.5 L80 79 L78 80.5 L78.5 78.5 L77 77 L79 77 Z" />
        </g>
      </svg>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-yellow-400 opacity-20 blur-xl rounded-full animate-pulse"></div>
    </div>
  );
};

export default Logo;