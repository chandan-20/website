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
    <div className={`${sizes[size]} ${className} flex items-center justify-center`}>
      <svg 
        viewBox="0 0 80 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Circle */}
        <circle 
          cx="40" 
          cy="40" 
          r="35" 
          stroke="url(#gradient1)" 
          strokeWidth="3" 
          fill="none"
        />
        
        {/* Inner hexagon for precision/engineering */}
        <path 
          d="M40 15 L55 25 L55 45 L40 55 L25 45 L25 25 Z" 
          stroke="url(#gradient2)" 
          strokeWidth="2.5" 
          fill="url(#gradient3)"
          opacity="0.1"
        />
        
        {/* SVA Letters */}
        <g fill="url(#gradient2)" className="font-bold">
          {/* S */}
          <path d="M20 25 Q20 20 25 20 L30 20 Q35 20 35 25 Q35 30 30 30 L25 30 Q20 30 20 35 Q20 40 25 40 L30 40" 
                stroke="url(#gradient2)" 
                strokeWidth="2.5" 
                fill="none" 
                strokeLinecap="round"
          />
          
          {/* V */}
          <path d="M37 20 L40 40 L43 20" 
                stroke="url(#gradient2)" 
                strokeWidth="2.5" 
                fill="none" 
                strokeLinecap="round"
          />
          
          {/* A */}
          <path d="M45 40 L47.5 20 L50 40 M46.5 32 L48.5 32" 
                stroke="url(#gradient2)" 
                strokeWidth="2.5" 
                fill="none" 
                strokeLinecap="round"
          />
        </g>
        
        {/* Precision dots around the logo */}
        <circle cx="40" cy="8" r="1.5" fill="url(#gradient2)" />
        <circle cx="64" cy="25" r="1.5" fill="url(#gradient2)" />
        <circle cx="64" cy="55" r="1.5" fill="url(#gradient2)" />
        <circle cx="40" cy="72" r="1.5" fill="url(#gradient2)" />
        <circle cx="16" cy="55" r="1.5" fill="url(#gradient2)" />
        <circle cx="16" cy="25" r="1.5" fill="url(#gradient2)" />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(220, 70%, 25%)" />
            <stop offset="100%" stopColor="hsl(195, 85%, 45%)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(220, 70%, 25%)" />
            <stop offset="100%" stopColor="hsl(195, 85%, 45%)" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(220, 70%, 25%)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(195, 85%, 45%)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;