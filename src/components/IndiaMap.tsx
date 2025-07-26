import React from "react";

const IndiaMap = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto p-8">
      <div className="relative">
        {/* SVG Map of India - Based on provided image */}
        <svg 
          viewBox="0 0 300 380" 
          className="w-full h-auto"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* India outline - More accurate representation */}
          <path 
            d="M150 30 L165 25 L175 30 L185 40 L200 50 L210 60 L220 75 L235 85 L245 100 L255 120 L265 140 L270 160 L275 180 L280 200 L275 220 L270 240 L265 260 L260 280 L250 300 L240 315 L225 325 L210 330 L195 335 L180 340 L165 342 L150 340 L135 335 L120 330 L105 320 L90 305 L80 285 L75 265 L70 245 L65 225 L60 205 L55 185 L50 165 L45 145 L40 125 L50 110 L65 95 L80 85 L95 75 L110 65 L125 55 L140 45 L150 30 Z"
            fill="hsl(var(--brand-dark-blue))"
            opacity="0.7"
            className="transition-all duration-500 hover:opacity-0.9 cursor-pointer"
          />
          
          {/* Gujarat marker - Western India */}
          <g>
            <circle 
              cx="85" 
              cy="180" 
              r="8" 
              fill="hsl(var(--brand-blue-light))"
              className="pulse-slow cursor-pointer"
            />
            <circle 
              cx="85" 
              cy="180" 
              r="12" 
              fill="hsl(var(--brand-blue-light))"
              opacity="0.3"
              className="animate-ping"
            />
          </g>
          <text 
            x="65" 
            y="205" 
            className="text-sm font-bold"
            fill="hsl(var(--brand-dark-blue))"
          >
            Gujarat
          </text>
          
          {/* Karnataka marker - Southern India */}
          <g style={{ animationDelay: '1s' }}>
            <circle 
              cx="180" 
              cy="280" 
              r="8" 
              fill="hsl(var(--brand-blue-light))"
              className="pulse-slow cursor-pointer"
            />
            <circle 
              cx="180" 
              cy="280" 
              r="12" 
              fill="hsl(var(--brand-blue-light))"
              opacity="0.3"
              className="animate-ping"
            />
          </g>
          <text 
            x="155" 
            y="305" 
            className="text-sm font-bold"
            fill="hsl(var(--brand-dark-blue))"
          >
            Karnataka
          </text>
          
          {/* Connection line between states */}
          <line 
            x1="85" 
            y1="180" 
            x2="180" 
            y2="280" 
            stroke="hsl(var(--brand-blue-light))"
            strokeWidth="2"
            strokeDasharray="6,3"
            opacity="0.6"
            className="pulse-slow"
          />
        </svg>
      </div>
      
      {/* Legend */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center space-x-6 p-4 rounded-lg border border-border" style={{ background: 'var(--gradient-card)' }}>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full" style={{ background: 'hsl(var(--brand-blue-light))' }}></div>
            <span className="text-sm font-medium" style={{ color: 'hsl(var(--brand-dark-blue))' }}>Manufacturing & Shipping Locations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;