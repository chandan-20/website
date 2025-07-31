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
    description: "Engine components, transmission parts"
  }, {
    name: "Aerospace",
    description: "Critical flight components, landing gear"
  }, {
    name: "Medical",
    description: "Surgical instruments, implants"
  }, {
    name: "Industrial",
    description: "Machinery parts, tooling components"
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
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 shadow-lg"
              >
                <Target className="w-5 h-5" />
                Request a Quote
              </Button>
              <Button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
              >
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
              
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-modern group">
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="scroll-reveal">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="CNC Manufacturing Facility" className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
              </div>
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
          
          <div className="relative max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="card-modern group cursor-pointer scroll-reveal hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Cog className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-black group-hover:text-primary transition-colors duration-300">
                        CNC Milling
                      </h3>
                      <p className="text-black/70 mb-6 leading-relaxed text-lg">
                        High-precision 3, 4, and 5-axis CNC milling for complex geometries and tight tolerances
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-3 text-black/60">
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            3-axis to 5-axis machining capabilities
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            Tolerance up to ±0.001mm
                          </li>
                        </ul>
                        <ul className="space-y-3 text-black/60">
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            Materials: Aluminum, Steel, Stainless Steel, Titanium
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            Complex geometries and intricate designs
                          </li>
                        </ul>
                      </div>
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium text-black/80 mb-2">Applications:</p>
                        <p className="text-sm text-black/60">Aerospace components, automotive parts, medical devices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-modern group cursor-pointer scroll-reveal hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-primary/20 relative overflow-hidden transform translate-x-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <RotateCcw className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-black group-hover:text-primary transition-colors duration-300">
                        CNC Turning
                      </h3>
                      <p className="text-black/70 mb-6 leading-relaxed text-lg">
                        Precision turning operations for cylindrical components with superior surface finish
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-3 text-black/60">
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            Multi-spindle turning centers
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            Live tooling capabilities
                          </li>
                        </ul>
                        <ul className="space-y-3 text-black/60">
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            Diameter range: 0.5mm to 500mm
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            Surface finish Ra 0.1μm
                          </li>
                        </ul>
                      </div>
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium text-black/80 mb-2">Applications:</p>
                        <p className="text-sm text-black/60">Shafts, pins, fasteners, hydraulic components</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-modern group cursor-pointer scroll-reveal hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-primary/20 relative overflow-hidden transform translate-x-16">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Layers className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-black group-hover:text-primary transition-colors duration-300">
                        TRAUB Manufacturing
                      </h3>
                      <p className="text-black/70 mb-6 leading-relaxed text-lg">
                        Specialized TRAUB component manufacturing with precision Swiss-type machining
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-3 text-black/60">
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            Swiss-type automatic lathes
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            Multi-spindle capabilities
                          </li>
                        </ul>
                        <ul className="space-y-3 text-black/60">
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            High-volume production
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            Micro-machining capabilities
                          </li>
                        </ul>
                      </div>
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium text-black/80 mb-2">Applications:</p>
                        <p className="text-sm text-black/60">Precision screws, connectors, electronic components</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      


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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => <div key={index} className="card-modern text-center group cursor-pointer scroll-reveal">
                <h3 className="text-xl font-semibold mb-4 text-black group-hover:text-primary transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-black/70">
                  {industry.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>


      {/* Contact CTA Section */}
      <section id="contact" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 animate-float">
            <Sparkles className="h-16 w-16 text-white" />
          </div>
          <div className="absolute bottom-10 right-1/4 animate-float" style={{
          animationDelay: '1.5s'
        }}>
            <Target className="h-16 w-16 text-white" />
          </div>
        </div>
        
        <div className="container-modern text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Get a quote today and experience precision manufacturing excellence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center scroll-reveal">
              <button onClick={() => window.location.href = 'mailto:info@svaautomats.com'} className="bg-white text-primary px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 shadow-lg mx-auto">
                <Target className="w-5 h-5" />
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;