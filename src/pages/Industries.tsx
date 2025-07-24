import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Car, Plane, Heart, Factory } from 'lucide-react';
import IndiaMap from '../components/IndiaMap';

const Industries = () => {
  const scrollRef = useScrollAnimation();

  const industries = [
    {
      icon: Car,
      title: "Automotive",
      description: "Precision components for engines, transmissions, and chassis systems",
      applications: ["Engine blocks", "Transmission parts", "Brake components", "Suspension systems"]
    },
    {
      icon: Plane,
      title: "Aerospace",
      description: "Critical components meeting stringent aerospace standards",
      applications: ["Aircraft components", "Engine parts", "Landing gear", "Control systems"]
    },
    {
      icon: Heart,
      title: "Medical Devices",
      description: "High-precision medical equipment components",
      applications: ["Surgical instruments", "Implant components", "Diagnostic equipment", "Lab instruments"]
    },
    {
      icon: Factory,
      title: "Industrial Equipment",
      description: "Heavy-duty components for industrial machinery",
      applications: ["Machine tools", "Hydraulic systems", "Processing equipment", "Automation parts"]
    }
  ];

  return (
    <div ref={scrollRef} className="min-h-screen pt-16" style={{ background: 'var(--gradient-card)' }}>
      {/* Hero Section */}
      <section className="section-professional py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-industrial" style={{ color: 'hsl(var(--primary-blue))' }}>
              Industries We Serve
            </h1>
            <p className="text-lg mb-8 text-industrial" style={{ color: 'hsl(var(--professional-grey))' }}>
              Delivering precision CNC machining solutions across diverse industries with 
              uncompromising quality and reliability for over 23 years.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="scroll-reveal card-industrial p-6 text-center" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex justify-center mb-4">
                  <industry.icon className="h-16 w-16" style={{ color: 'hsl(var(--accent-teal))' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'hsl(var(--primary-blue))' }}>{industry.title}</h3>
                <p className="text-sm mb-4" style={{ color: 'hsl(var(--professional-grey))' }}>{industry.description}</p>
                <ul className="text-xs space-y-1">
                  {industry.applications.map((app, appIndex) => (
                    <li key={appIndex} style={{ color: 'hsl(var(--professional-grey))' }}>• {app}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India Map Section */}
      <section className="py-16 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 heading-industrial" style={{ color: 'hsl(var(--primary-blue))' }}>
              Our Manufacturing & Shipping Network
            </h2>
            <p className="text-lg" style={{ color: 'hsl(var(--professional-grey))' }}>
              We manufacture and ship precision components to clients across Gujarat and Karnataka
            </p>
          </div>
          <IndiaMap />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 scroll-reveal" style={{ background: 'var(--gradient-accent)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="scroll-reveal">
              <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--text-light))' }}>500+</div>
              <div className="text-sm" style={{ color: 'hsl(var(--text-light))' }}>Automotive Components</div>
            </div>
            <div className="scroll-reveal">
              <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--text-light))' }}>200+</div>
              <div className="text-sm" style={{ color: 'hsl(var(--text-light))' }}>Aerospace Parts</div>
            </div>
            <div className="scroll-reveal">
              <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--text-light))' }}>150+</div>
              <div className="text-sm" style={{ color: 'hsl(var(--text-light))' }}>Medical Devices</div>
            </div>
            <div className="scroll-reveal">
              <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--text-light))' }}>300+</div>
              <div className="text-sm" style={{ color: 'hsl(var(--text-light))' }}>Industrial Equipment</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;