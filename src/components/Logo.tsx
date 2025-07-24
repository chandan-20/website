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
        {/* Rotating Gear behind SVA */}
        <g className="gear-rotate" style={{ transformOrigin: '90px 30px' }}>
          {/* Gear teeth - 8 teeth around circle */}
          <g fill="hsl(var(--brand-dark-blue))" opacity="0.8">
            <rect x="88" y="15" width="4" height="6" rx="1" />
            <rect x="95" y="18" width="6" height="4" rx="1" transform="rotate(45 98 20)" />
            <rect x="98" y="28" width="6" height="4" rx="1" />
            <rect x="95" y="38" width="6" height="4" rx="1" transform="rotate(-45 98 40)" />
            <rect x="88" y="45" width="4" height="6" rx="1" />
            <rect x="78" y="38" width="6" height="4" rx="1" transform="rotate(45 81 40)" />
            <rect x="75" y="28" width="6" height="4" rx="1" />
            <rect x="78" y="18" width="6" height="4" rx="1" transform="rotate(-45 81 20)" />
          </g>
          {/* Center gear circle */}
          <circle cx="90" cy="30" r="8" fill="none" stroke="hsl(var(--brand-dark-blue))" strokeWidth="2" />
          <circle cx="90" cy="30" r="4" fill="hsl(var(--brand-dark-blue))" />
        </g>
        
        {/* SVA Letters - Bold and Professional */}
        <g>
          {/* S */}
          <path 
            d="M10 22 Q10 18 14 18 L24 18 Q28 18 28 22 Q28 26 24 26 L20 26 Q16 26 16 30 Q16 34 20 34 L28 34 Q32 34 32 38 Q32 42 28 42 L18 42 Q14 42 14 38" 
            stroke="hsl(var(--brand-dark-blue))" 
            strokeWidth="3" 
            fill="hsl(var(--brand-dark-blue))"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* V */}
          <path 
            d="M38 18 L45 42 L52 18" 
            stroke="hsl(var(--brand-dark-blue))" 
            strokeWidth="3" 
            fill="none" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* A */}
          <path 
            d="M58 42 L65 18 L72 42 M61 34 L69 34" 
            stroke="hsl(var(--brand-dark-blue))" 
            strokeWidth="3" 
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