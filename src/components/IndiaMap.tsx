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
          {/* India outline (simplified) */}
          <path 
            d="M200 50 C210 45 220 50 230 60 L240 70 C250 80 260 90 270 100 L280 120 C285 140 290 160 295 180 L300 200 C305 220 310 240 315 260 L320 280 C325 300 330 320 335 340 L340 360 C345 380 340 400 330 420 L320 440 C310 450 300 460 290 470 L280 480 C270 485 260 490 250 485 L240 480 C230 475 220 470 210 465 L200 460 C190 455 180 450 170 445 L160 440 C150 435 140 430 130 425 L120 420 C110 415 100 410 95 400 L90 390 C85 380 80 370 75 360 L70 350 C65 340 60 330 55 320 L50 310 C45 300 40 290 35 280 L30 270 C25 260 30 250 35 240 L40 230 C45 220 50 210 55 200 L60 190 C65 180 70 170 75 160 L80 150 C85 140 90 130 95 120 L100 110 C105 100 110 90 115 80 L120 70 C125 60 130 50 140 45 L150 40 C160 35 170 40 180 45 L190 50 Z"
            fill="hsl(var(--muted))"
            stroke="hsl(var(--border))"
            strokeWidth="2"
            className="transition-all duration-300 hover:fill-primary/10"
          />
          
          {/* Gujarat highlight */}
          <circle 
            cx="120" 
            cy="220" 
            r="8" 
            fill="hsl(var(--confidence-blue))"
            className="animate-pulse"
          />
          <text 
            x="105" 
            y="245" 
            className="text-xs font-semibold fill-primary"
          >
            Gujarat
          </text>
          
          {/* Karnataka highlight */}
          <circle 
            cx="200" 
            cy="320" 
            r="8" 
            fill="hsl(var(--courage-cyan))"
            className="animate-pulse"
          />
          <text 
            x="180" 
            y="345" 
            className="text-xs font-semibold fill-primary"
          >
            Karnataka
          </text>
          
          {/* Connection line between states */}
          <line 
            x1="120" 
            y1="220" 
            x2="200" 
            y2="320" 
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
        </svg>
        
        {/* Floating icons */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <MapPin className="h-6 w-6 text-confidence-blue" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
          <MapPin className="h-6 w-6 text-courage-cyan" />
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-6 flex justify-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-confidence-blue rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Gujarat Operations</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-courage-cyan rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Karnataka Operations</span>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;