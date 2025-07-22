import React from "react";
import { MapPin } from "lucide-react";

const IndiaMap = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto p-8">
      <div className="relative">
        {/* SVG Map of India */}
        <svg 
          viewBox="0 0 400 500" 
          className="w-full h-auto"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* India outline - Accurate representation */}
          <path 
            d="M200 40 C210 35 220 40 235 50 L250 65 C265 75 280 90 290 110 L300 130 C305 150 310 170 315 190 L320 210 C325 230 330 250 335 270 L340 290 C345 310 350 330 355 350 L360 370 C365 390 360 410 350 430 L340 450 C330 465 315 475 300 480 L285 485 C270 488 255 485 240 480 L225 475 C210 470 195 465 180 460 L165 455 C150 450 135 445 125 435 L115 425 C105 415 95 405 90 390 L85 375 C80 360 75 345 70 330 L65 315 C60 300 55 285 50 270 L45 255 C40 240 45 225 50 210 L55 195 C60 180 65 165 70 150 L75 135 C80 120 85 105 95 95 L105 85 C115 75 125 65 135 55 L145 45 C155 35 170 35 185 40 L200 40 Z"
            fill="hsl(var(--muted))"
            stroke="hsl(var(--courage-orange))"
            strokeWidth="2"
            className="transition-all duration-500 hover:fill-courage-orange/10 cursor-pointer"
          />
          
          {/* Gujarat highlight - Western India */}
          <g className="glow">
            <circle 
              cx="110" 
              cy="200" 
              r="10" 
              fill="hsl(var(--confidence-blue))"
              className="pulse-slow cursor-pointer"
            />
            <circle 
              cx="110" 
              cy="200" 
              r="15" 
              fill="hsl(var(--confidence-blue))"
              opacity="0.3"
              className="animate-ping"
            />
          </g>
          <text 
            x="85" 
            y="230" 
            className="text-sm font-bold fill-confidence-blue"
          >
            Gujarat
          </text>
          
          {/* Karnataka highlight - Southern India */}
          <g className="glow" style={{ animationDelay: '1s' }}>
            <circle 
              cx="220" 
              cy="350" 
              r="10" 
              fill="hsl(var(--courage-orange))"
              className="pulse-slow cursor-pointer"
            />
            <circle 
              cx="220" 
              cy="350" 
              r="15" 
              fill="hsl(var(--courage-orange))"
              opacity="0.3"
              className="animate-ping"
            />
          </g>
          <text 
            x="190" 
            y="380" 
            className="text-sm font-bold fill-courage-orange"
          >
            Karnataka
          </text>
          
          {/* Connection line between states */}
          <line 
            x1="110" 
            y1="200" 
            x2="220" 
            y2="350" 
            stroke="url(#connectionGradient)"
            strokeWidth="3"
            strokeDasharray="8,4"
            className="pulse-slow"
          />
          
          {/* Additional gradient definition */}
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(232, 67%, 28%)" />
              <stop offset="100%" stopColor="hsl(14, 85%, 55%)" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Floating precision markers */}
        <div className="absolute top-1/4 left-1/4 animate-float bounce-gentle">
          <MapPin className="h-8 w-8 text-confidence-blue drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-float" style={{ animationDelay: '1.5s' }}>
          <MapPin className="h-8 w-8 text-courage-orange drop-shadow-lg" />
        </div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-slow opacity-30">
          <div className="w-32 h-32 border-2 border-dashed border-determination-steel rounded-full"></div>
        </div>
      </div>
      
      {/* Enhanced Legend */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
        <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border shadow-lg card-industrial">
          <div className="w-6 h-6 bg-confidence-blue rounded-full glow flex-shrink-0"></div>
          <div>
            <span className="font-semibold text-confidence-blue">Gujarat Operations</span>
            <p className="text-xs text-muted-foreground">Western Manufacturing Hub</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border shadow-lg card-industrial">
          <div className="w-6 h-6 bg-courage-orange rounded-full glow flex-shrink-0"></div>
          <div>
            <span className="font-semibold text-courage-orange">Karnataka Operations</span>
            <p className="text-xs text-muted-foreground">Southern Technology Center</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;