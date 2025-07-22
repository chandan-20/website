import React from "react";

const ClientShowcase = () => {
  const clients = [
    { name: "Tata Motors", logo: "TM" },
    { name: "Mahindra", logo: "MH" },
    { name: "Bajaj Auto", logo: "BA" },
    { name: "TVS Motors", logo: "TVS" },
    { name: "Hero MotoCorp", logo: "HM" },
    { name: "Maruti Suzuki", logo: "MS" },
    { name: "Ashok Leyland", logo: "AL" },
    { name: "Force Motors", logo: "FM" },
    { name: "Eicher Motors", logo: "EM" },
    { name: "Kirloskar", logo: "KL" },
    { name: "L&T", logo: "L&T" },
    { name: "BHEL", logo: "BHEL" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-muted/50 to-background py-12">
      <div className="relative">
        <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">
          Trusted by Industry Leaders
        </h3>
        
        {/* Scrolling client logos */}
        <div className="flex space-x-12 client-slide">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-24 h-24 bg-card rounded-xl shadow-lg border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
            >
              <div className="text-center">
                <div className="text-lg font-bold text-primary mb-1">
                  {client.logo}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
      </div>
      
      {/* Statistics */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-4">
        <div className="text-center fade-in-up">
          <div className="text-3xl font-bold text-primary mb-2">150+</div>
          <div className="text-sm text-muted-foreground">Happy Clients</div>
        </div>
        <div className="text-center fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="text-3xl font-bold text-courage-cyan mb-2">5000+</div>
          <div className="text-sm text-muted-foreground">Projects Completed</div>
        </div>
        <div className="text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-3xl font-bold text-success-emerald mb-2">99.9%</div>
          <div className="text-sm text-muted-foreground">Quality Rate</div>
        </div>
        <div className="text-center fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-3xl font-bold text-primary mb-2">23+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
      </div>
    </div>
  );
};

export default ClientShowcase;