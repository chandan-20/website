import React from "react";

const IndiaMap = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto p-8">
      <div className="relative">
        {/* India Map Image */}
        <img 
          src="/lovable-uploads/75058c1d-b7c7-430b-b680-0178e035400e.png" 
          alt="India Map showing our operations"
          className="w-full h-auto max-w-lg mx-auto"
        />
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