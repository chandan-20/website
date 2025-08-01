import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, Award, Users, Clock, CheckCircle, ArrowRight, Shield, Settings, Zap, Target, Heart, Sparkles, RotateCcw, Factory, Layers } from "lucide-react";
import IndiaMap from "@/components/IndiaMap";
import ClientShowcase from "@/components/ClientShowcase";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUpAnimation } from "@/hooks/useCountUpAnimation";
import cncHeroImage from "@/assets/cnc-manufacturing-hero.jpg";
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo";
import WorkShowcase from "@/components/WorkShowcase";
import AnimatedServiceCard from "@/components/AnimatedServiceCard";
import IndustryCard from "@/components/IndustryCard";
const Home = () => {
  const scrollRef = useScrollAnimation();
  const yearsCount = useCountUpAnimation(23);
  const projectsCount = useCountUpAnimation(5000);
  const clientsCount = useCountUpAnimation(150);
  const qualityCount = useCountUpAnimation(99.9);
  const features = [{
    icon: Cog,
    title: "Precision Machining",
    description: "State-of-the-art CNC equipment delivering micron-level accuracy"
  }, {
    icon: Award,
    title: "23+ Years Experience",
    description: "Proven track record in delivering quality solutions across industries"
  }, {
    icon: Shield,
    title: "Quality Assured",
    description: "ISO certified processes ensuring consistent quality and reliability"
  }, {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Efficient production processes meeting tight deadlines"
  }];
  const industries = [{
    name: "Automotive",
    description: "Engine components, transmission parts",
    icon: <Factory className="w-12 h-12" />
  }, {
    name: "Aerospace", 
    description: "Critical flight components, landing gear",
    icon: <Zap className="w-12 h-12" />
  }, {
    name: "Medical",
    description: "Surgical instruments, implants",
    icon: <Heart className="w-12 h-12" />
  }, {
    name: "Hydraulics",
    description: "Hydraulic cylinders, valve components",
    icon: <Settings className="w-12 h-12" />
  }];
  const stats = [{
    number: "23+",
    label: "Years of Excellence"
  }, {
    number: "5000+",
    label: "Projects Completed"
  }, {
    number: "150+",
    label: "Happy Clients"
  }, {
    number: "99.9%",
    label: "Quality Rate"
  }];
  return <div ref={scrollRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-background to-neutral-100">
        <div className="container-modern relative z-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-8 border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Trusted CNC Manufacturing Partner Since 2001
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              Precision CNC & TRAUB Manufacturing
              <span className="block text-primary">Solutions</span>
            </h1>
            
            <p className="text-xl mb-12 max-w-3xl mx-auto text-muted-foreground">
              Engineering precision for over 23 years with cutting-edge CNC and TRAUB technology, 
              delivering unmatched quality and reliability across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })} className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 shadow-lg">
                <Target className="w-5 h-5" />
                Request a Quote
              </Button>
              <Button onClick={() => document.getElementById('services')?.scrollIntoView({
              behavior: 'smooth'
            })} variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                View Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowRight className="h-6 w-6 text-muted-foreground/60 rotate-90" />
          </div>
        </div>
      </section>

      {/* About Section - Moved to first position */}
      <section id="about" className="section-modern">
        <div className="container-modern">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="scroll-reveal space-y-8">
              <div>
                <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
                  About SVA CNC
                </div>
                <h2 className="heading-elegant mb-6">
                  Precision Engineering
                  <span className="block text-primary">Since 2000</span>
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-modern leading-relaxed">
                  Shree Varshitha Automats has been at the forefront of precision CNC and TRAUB machining 
                  for over two decades. We manufacture both high-precision CNC components and specialized TRAUB parts. 
                  Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner across multiple industries.
                </p>
              </div>
              
              <div className="space-y-4">
                {["Advanced CNC milling and turning capabilities", "Specialized TRAUB component manufacturing", "ISO certified quality management systems", "Expert engineering and design support", "On-time delivery with competitive pricing"].map((item, index) => <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>)}
              </div>
              
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })} className="btn-modern group">
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="scroll-reveal">
              <WorkShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Moved up after About */}
      <section id="services" className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
              Our Services
            </div>
            <h2 className="heading-elegant mb-6">Precision CNC Machining Services</h2>
            <p className="text-modern max-w-2xl mx-auto">
              Advanced manufacturing capabilities designed to meet your precise specifications
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-5xl mx-auto">
            <AnimatedServiceCard
              title="CNC Milling"
              content="High-precision 3, 4, and 5-axis CNC milling for complex geometries with tolerances up to ±0.001mm."
              icon={<Cog className="w-12 h-12" />}
              className="scroll-reveal"
            />
            <AnimatedServiceCard
              title="CNC Turning"
              content="Precision turning operations for cylindrical components with superior surface finish and live tooling capabilities."
              icon={<RotateCcw className="w-12 h-12" />}
              className="scroll-reveal md:mt-8"
            />
            <AnimatedServiceCard
              title="TRAUB Manufacturing"
              content="Specialized TRAUB component manufacturing with precision Swiss-type machining for high-volume production."
              icon={<Layers className="w-12 h-12" />}
              className="scroll-reveal md:mt-16"
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
              Industries
            </div>
            <h2 className="heading-elegant mb-6">Industries We Serve</h2>
            <p className="text-modern max-w-2xl mx-auto">
              Delivering precision solutions across diverse sectors with specialized expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                title={industry.name}
                description={industry.description}
                icon={industry.icon}
                className="scroll-reveal"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-modern bg-gradient-to-b from-muted/20 to-background">
        <div className="container-modern">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center scroll-reveal">
              <div ref={clientsCount.ref} className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {clientsCount.count}+
              </div>
              <p className="text-muted-foreground font-medium">Happy Clients</p>
            </div>
            <div className="text-center scroll-reveal">
              <div ref={projectsCount.ref} className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {projectsCount.count}+
              </div>
              <p className="text-muted-foreground font-medium">Projects Completed</p>
            </div>
            <div className="text-center scroll-reveal">
              <div ref={qualityCount.ref} className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {qualityCount.count}%
              </div>
              <p className="text-muted-foreground font-medium">Quality Rate</p>
            </div>
            <div className="text-center scroll-reveal">
              <div ref={yearsCount.ref} className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {yearsCount.count}+
              </div>
              <p className="text-muted-foreground font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* India Map Section */}
      <section className="section-modern bg-gradient-to-b from-muted/20 to-background">
        <div className="container-modern">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
              Our Reach
            </div>
            <h2 className="heading-elegant mb-6">Our Operations Across India</h2>
            <p className="text-modern max-w-2xl mx-auto">
              Serving clients across Gujarat and Karnataka with excellence and precision
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto scroll-reveal">
            <div className="card-modern">
              <IndiaMap />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <AnimatedTestimonialsDemo />

      {/* Client Showcase */}
      <ClientShowcase />



      {/* Contact CTA Section */}
      
    </div>;
};
export default Home;