import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  return (
    <div className={`${sizes[size]} ${className} flex items-center justify-center group`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-500 group-hover:scale-110"
      >
        {/* Outer Industrial Ring */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          stroke="url(#outerGradient)" 
          strokeWidth="3" 
          fill="none"
          className="rotate-slow"
          strokeDasharray="3,2"
        />
        
        {/* Inner Precision Circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="38" 
          stroke="url(#innerGradient)" 
          strokeWidth="2" 
          fill="url(#backgroundGradient)"
          opacity="0.9"
        />
        
        {/* Precision Hexagonal Frame */}
        <path 
          d="M50 20 L70 30 L70 50 L70 70 L50 80 L30 70 L30 50 L30 30 Z" 
          stroke="url(#frameGradient)" 
          strokeWidth="1.5" 
          fill="none"
          opacity="0.3"
        />
        
        {/* SVA Letters - Modern Industrial Style */}
        <g className="font-bold" transform="translate(0, 2)">
          {/* S - Stylized with industrial curves */}
          <path 
            d="M28 32 Q28 28 32 28 L38 28 Q42 28 42 32 Q42 36 38 36 L32 36 Q28 36 28 40 Q28 44 32 44 L38 44" 
            stroke="url(#letterGradient)" 
            strokeWidth="3" 
            fill="none" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* V - Sharp precision angles */}
          <path 
            d="M45 28 L50 50 L55 28" 
            stroke="url(#letterGradient)" 
            strokeWidth="3" 
            fill="none" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* A - Engineering triangle */}
          <path 
            d="M58 50 L62 28 L66 50 M60 42 L64 42" 
            stroke="url(#letterGradient)" 
            strokeWidth="3" 
            fill="none" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        
        {/* Industrial Elements - Precision markers */}
        <g className="pulse-slow">
          <circle cx="50" cy="10" r="2" fill="url(#accentGradient)" />
          <circle cx="85" cy="35" r="2" fill="url(#accentGradient)" />
          <circle cx="85" cy="65" r="2" fill="url(#accentGradient)" />
          <circle cx="50" cy="90" r="2" fill="url(#accentGradient)" />
          <circle cx="15" cy="65" r="2" fill="url(#accentGradient)" />
          <circle cx="15" cy="35" r="2" fill="url(#accentGradient)" />
        </g>
        
        {/* Precision Lines */}
        <g stroke="url(#accentGradient)" strokeWidth="1" opacity="0.4">
          <line x1="50" y1="8" x2="50" y2="15" />
          <line x1="87" y1="35" x2="80" y2="35" />
          <line x1="87" y1="65" x2="80" y2="65" />
          <line x1="50" y1="92" x2="50" y2="85" />
          <line x1="13" y1="65" x2="20" y2="65" />
          <line x1="13" y1="35" x2="20" y2="35" />
        </g>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(232, 67%, 28%)" />
            <stop offset="50%" stopColor="hsl(14, 85%, 55%)" />
            <stop offset="100%" stopColor="hsl(45, 95%, 65%)" />
          </linearGradient>
          <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(232, 67%, 28%)" />
            <stop offset="100%" stopColor="hsl(14, 85%, 55%)" />
          </linearGradient>
          <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(232, 12%, 55%)" />
            <stop offset="100%" stopColor="hsl(232, 8%, 82%)" />
          </linearGradient>
          <linearGradient id="letterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(232, 67%, 28%)" />
            <stop offset="100%" stopColor="hsl(14, 85%, 55%)" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45, 95%, 65%)" />
            <stop offset="100%" stopColor="hsl(14, 85%, 55%)" />
          </linearGradient>
          <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(232, 67%, 28%)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="hsl(14, 85%, 55%)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;