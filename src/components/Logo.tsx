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
        viewBox="0 0 120 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Gear behind SVA */}
        <g className="gear-rotate" style={{ transformOrigin: '85px 30px' }}>
          <path 
            d="M85 18 L87 15 L93 15 L95 18 L98 20 L95 22 L95 28 L93 30 L87 30 L85 28 L82 30 L80 28 L80 22 L82 20 Z" 
            fill="hsl(var(--primary-blue))"
            opacity="0.3"
          />
          <circle cx="85" cy="23" r="6" fill="hsl(var(--accent-teal))" opacity="0.4" />
          <circle cx="85" cy="23" r="3" fill="none" stroke="hsl(var(--primary-blue))" strokeWidth="1" />
        </g>
        
        {/* SVA Letters - Bold and Clean */}
        <g className="font-bold">
          {/* S */}
          <path 
            d="M15 35 Q15 30 20 30 L30 30 Q35 30 35 35 Q35 40 30 40 L25 40 Q20 40 20 45 Q20 50 25 50 L35 50" 
            stroke="hsl(var(--primary-blue))" 
            strokeWidth="4" 
            fill="none" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* V */}
          <path 
            d="M45 30 L52 50 L59 30" 
            stroke="hsl(var(--primary-blue))" 
            strokeWidth="4" 
            fill="none" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* A */}
          <path 
            d="M69 50 L76 30 L83 50 M72 42 L80 42" 
            stroke="hsl(var(--primary-blue))" 
            strokeWidth="4" 
            fill="none" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;