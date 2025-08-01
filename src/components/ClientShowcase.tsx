import React from "react";
import { useCountUpAnimation } from "@/hooks/useCountUpAnimation";
const ClientShowcase = () => {
  const yearsAnimation = useCountUpAnimation(23);
  const projectsAnimation = useCountUpAnimation(5000);
  const clientsAnimation = useCountUpAnimation(150);
  const qualityAnimation = useCountUpAnimation(99.9);
  const clients = [{
    name: "Tata Motors",
    logo: "TM"
  }, {
    name: "Mahindra",
    logo: "MH"
  }, {
    name: "Bajaj Auto",
    logo: "BA"
  }, {
    name: "TVS Motors",
    logo: "TVS"
  }, {
    name: "Hero MotoCorp",
    logo: "HM"
  }, {
    name: "Maruti Suzuki",
    logo: "MS"
  }, {
    name: "Ashok Leyland",
    logo: "AL"
  }, {
    name: "Force Motors",
    logo: "FM"
  }, {
    name: "Eicher Motors",
    logo: "EM"
  }, {
    name: "Kirloskar",
    logo: "KL"
  }, {
    name: "L&T",
    logo: "L&T"
  }, {
    name: "BHEL",
    logo: "BHEL"
  }];
  return <div className="relative overflow-hidden bg-gradient-to-r from-muted/50 to-background py-12">
      
      
      {/* Statistics */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-4">
        <div className="text-center fade-in-up" ref={clientsAnimation.ref}>
          <div className="text-3xl font-bold text-primary mb-2">{clientsAnimation.count}+</div>
          <div className="text-sm text-muted-foreground">Happy Clients</div>
        </div>
        <div className="text-center fade-in-up" style={{
        animationDelay: '0.1s'
      }} ref={projectsAnimation.ref}>
          <div className="text-3xl font-bold text-courage-cyan mb-2">{projectsAnimation.count}+</div>
          <div className="text-sm text-muted-foreground">Projects Completed</div>
        </div>
        <div className="text-center fade-in-up" style={{
        animationDelay: '0.2s'
      }} ref={qualityAnimation.ref}>
          <div className="text-3xl font-bold text-success-emerald mb-2">{qualityAnimation.count}%</div>
          <div className="text-sm text-muted-foreground">Quality Rate</div>
        </div>
        <div className="text-center fade-in-up" style={{
        animationDelay: '0.3s'
      }} ref={yearsAnimation.ref}>
          <div className="text-3xl font-bold text-primary mb-2">{yearsAnimation.count}+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
      </div>
    </div>;
};
export default ClientShowcase;