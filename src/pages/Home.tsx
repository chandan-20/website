import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cog, 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Settings,
  Zap,
  Target,
  Heart,
  Sparkles
} from "lucide-react";
import IndiaMap from "@/components/IndiaMap";
import ClientShowcase from "@/components/ClientShowcase";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUpAnimation } from "@/hooks/useCountUpAnimation";
import cncHeroImage from "@/assets/cnc-manufacturing-hero.jpg";

const Home = () => {
  const scrollRef = useScrollAnimation();
  const yearsCount = useCountUpAnimation(23);
  const projectsCount = useCountUpAnimation(5000);
  const clientsCount = useCountUpAnimation(150);
  const qualityCount = useCountUpAnimation(99.9);
  const features = [
    {
      icon: Cog,
      title: "Precision Machining",
      description: "State-of-the-art CNC equipment delivering micron-level accuracy"
    },
    {
      icon: Award,
      title: "23+ Years Experience",
      description: "Proven track record in delivering quality solutions across industries"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "ISO certified processes ensuring consistent quality and reliability"
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Efficient production processes meeting tight deadlines"
    }
  ];

  const industries = [
    { name: "Automotive", description: "Engine components, transmission parts" },
    { name: "Aerospace", description: "Critical flight components, landing gear" },
    { name: "Medical", description: "Surgical instruments, implants" },
    { name: "Industrial", description: "Machinery parts, tooling components" }
  ];

  const stats = [
    { number: "23+", label: "Years of Excellence" },
    { number: "5000+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "99.9%", label: "Quality Rate" }
  ];

  return (
    <div ref={scrollRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-background to-neutral-100">
        <div className="container-modern relative z-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 font-medium px-4 py-2 rounded-full text-sm mb-8 border border-emerald-500/20">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
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
              <Link to="/contact">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 shadow-lg">
                  <Target className="w-5 h-5" />
                  Request a Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                  View Our Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowRight className="h-6 w-6 text-muted-foreground/60 rotate-90" />
          </div>
        </div>
      </section>

      {/* Features Section - Multi-Card Animation */}
      <section className="section-modern bg-gradient-to-b from-background to-neutral-50/50">
        <div className="container-modern">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-block bg-emerald-500/10 text-emerald-600 font-medium px-4 py-2 rounded-full text-sm mb-6">
              Our Excellence
            </div>
            <h2 className="heading-elegant mb-6">Why Choose Shree Varshitha Automats?</h2>
            <p className="text-modern max-w-3xl mx-auto">
              Built on courage, determination, confidence, and unwavering trust
            </p>
          </div>
          
          <div className="relative">
            {features.map((feature, index) => (
              <div
                key={index}
                className="sticky top-20 mb-4"
                style={{
                  zIndex: features.length - index,
                }}
              >
                <div 
                  className="card-modern text-center group cursor-pointer scroll-reveal bg-gradient-to-br from-white to-neutral-50/80 border border-neutral-200/50 hover:border-emerald-500/30 hover:shadow-2xl transition-all duration-500"
                  style={{
                    transform: `scale(${1 - index * 0.03}) translateY(${index * 15}px)`,
                  }}
                >
                  <div className="mb-8 flex justify-center">
                    <div className="relative">
                      <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-500/20 rounded-2xl group-hover:from-emerald-500/20 group-hover:to-emerald-500/30 transition-all duration-300">
                        <feature.icon className="h-8 w-8 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-emerald-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-repeat bg-center" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}></div>
        </div>
        
        <div className="container-modern">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center scroll-reveal group">
              <div className="relative" ref={yearsCount.ref}>
                <div className="text-5xl lg:text-6xl font-bold mb-3 text-white group-hover:scale-110 transition-transform duration-300">
                  {yearsCount.count}+
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="text-white/80 text-lg font-medium mt-4">Years of Excellence</div>
            </div>
            
            <div className="text-center scroll-reveal group">
              <div className="relative" ref={projectsCount.ref}>
                <div className="text-5xl lg:text-6xl font-bold mb-3 text-white group-hover:scale-110 transition-transform duration-300">
                  {projectsCount.count}+
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="text-white/80 text-lg font-medium mt-4">Projects Completed</div>
            </div>
            
            <div className="text-center scroll-reveal group">
              <div className="relative" ref={clientsCount.ref}>
                <div className="text-5xl lg:text-6xl font-bold mb-3 text-white group-hover:scale-110 transition-transform duration-300">
                  {clientsCount.count}+
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="text-white/80 text-lg font-medium mt-4">Happy Clients</div>
            </div>
            
            <div className="text-center scroll-reveal group">
              <div className="relative" ref={qualityCount.ref}>
                <div className="text-5xl lg:text-6xl font-bold mb-3 text-white group-hover:scale-110 transition-transform duration-300">
                  {qualityCount.count}%
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="text-white/80 text-lg font-medium mt-4">Quality Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-modern">
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
                {[
                  "Advanced CNC milling and turning capabilities",
                  "Specialized TRAUB component manufacturing",
                  "ISO certified quality management systems",
                  "Expert engineering and design support",
                  "On-time delivery with competitive pricing"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/about">
                <button className="btn-modern group">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
            
            <div className="scroll-reveal">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  alt="CNC Manufacturing Facility" 
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
              </div>
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

      {/* Client Showcase */}
      <ClientShowcase />

      {/* Industries Section */}
      <section className="section-modern">
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
            {industries.map((industry, index) => (
              <div key={index} className="card-modern text-center group cursor-pointer scroll-reveal">
                <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-primary/80 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 scroll-reveal">
            <Link to="/industries">
              <button className="btn-outline-modern group">
                Explore All Industries
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 animate-float">
            <Sparkles className="h-16 w-16 text-white" />
          </div>
          <div className="absolute bottom-10 right-1/4 animate-float" style={{ animationDelay: '1.5s' }}>
            <Target className="h-16 w-16 text-white" />
          </div>
        </div>
        
        <div className="container-modern text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground scroll-reveal">
              Ready to Start Your Precision Manufacturing Project?
            </h2>
            <p className="text-xl mb-12 text-primary-foreground/90 max-w-2xl mx-auto scroll-reveal">
              Partner with us for engineering excellence. Get a consultation and detailed quote 
              tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center scroll-reveal">
              <Link to="/contact">
                <button className="bg-white text-primary hover:bg-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 shadow-lg">
                  <Heart className="w-5 h-5" />
                  Request Quote Now
                </button>
              </Link>
              <Link to="/services">
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                  View Our Work
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;