import React from "react";

const IndiaMap = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto p-8">
      <div className="relative">
        {/* SVG Map of India - Based on provided image */}
        <svg 
          viewBox="0 0 400 500" 
          className="w-full h-auto"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Accurate India outline */}
          <path 
            d="M200 50 L220 45 L240 50 L260 60 L280 75 L300 95 L315 115 L325 135 L330 155 L335 175 L340 195 L345 215 L350 235 L355 255 L360 275 L365 295 L370 315 L375 335 L380 355 L375 375 L370 395 L360 410 L345 420 L325 425 L305 430 L285 435 L265 440 L245 445 L225 450 L205 455 L185 460 L165 465 L145 470 L125 475 L105 480 L85 475 L65 465 L50 450 L40 430 L35 410 L30 390 L25 370 L20 350 L15 330 L10 310 L8 290 L12 270 L18 250 L25 230 L35 210 L50 195 L70 185 L95 180 L120 175 L145 170 L170 165 L195 160 L220 155 L245 150 L270 145 L295 140 L315 130 L330 115 L340 95 L345 75 L340 55 L330 40 L315 30 L295 25 L275 20 L255 18 L235 20 L215 25 L200 35 L190 50 L185 70 L190 90 L200 110 L215 125 L235 135 L255 140 L275 145 L295 150 L315 160 L330 175 L340 195 L345 215 L350 235 L345 255 L335 275 L320 290 L300 300 L280 305 L260 310 L240 315 L220 320 L200 325 L180 330 L160 335 L140 340 L120 345 L100 350 L80 355 L60 360 L45 370 L35 385 L30 405 L35 425 L45 440 L60 450 L80 455 L100 460 L120 465 L140 470 L160 475 L180 480 L200 485 L220 490 L240 485 L260 480 L280 475 L300 470 L320 465 L340 460 L360 455 L375 445 L385 430 L390 410 L385 390 L375 375 L360 365 L340 360 L320 355 L300 350 L280 345 L260 340 L240 335 L220 330 L200 325 Z"
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