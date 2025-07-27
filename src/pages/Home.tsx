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

const Home = () => {
  const scrollRef = useScrollAnimation();
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              // Fallback to gradient background if video fails
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.parentElement?.querySelector('.video-fallback') as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          >
            <source src="https://cdn.pixabay.com/video/2022/04/26/116479-702724209_large.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-man-working-in-a-mechanical-workshop-4784-large.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-industrial-worker-operating-a-machine-4783-large.mp4" type="video/mp4" />
          </video>
          {/* Fallback gradient background */}
          <div className="video-fallback absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" style={{ display: 'none' }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          </div>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40"></div>
        </div>
        
        <div className="container-modern">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-8 border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Trusted CNC Manufacturing Partner Since 2000
            </div>
            
            <h1 className="heading-modern mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
              Precision CNC Manufacturing
              <span className="block text-primary">Solutions</span>
            </h1>
            
            <p className="text-modern mb-12 max-w-3xl mx-auto text-xl">
              Engineering precision for over 23 years with cutting-edge CNC technology, 
              delivering unmatched quality and reliability across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <button className="btn-modern group">
                  <Target className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Request a Quote
                </button>
              </Link>
              <Link to="/services">
                <button className="btn-outline-modern group">
                  View Our Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
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

      {/* Features Section */}
      <section className="section-modern bg-gradient-to-b from-background to-muted/20">
        <div className="container-modern">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
              Our Excellence
            </div>
            <h2 className="heading-elegant mb-6">Why Choose Shree Varshitha Automats?</h2>
            <p className="text-modern max-w-3xl mx-auto">
              Built on courage, determination, confidence, and unwavering trust
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-modern text-center group cursor-pointer scroll-reveal">
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                      <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-repeat bg-center" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}></div>
        </div>
        
        <div className="container-modern">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scroll-reveal group">
                <div className="relative">
                  <div className="text-5xl lg:text-6xl font-bold mb-3 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary-foreground/30 rounded-full group-hover:w-16 transition-all duration-300"></div>
                </div>
                <div className="text-primary-foreground/80 text-lg font-medium mt-4">{stat.label}</div>
              </div>
            ))}
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
                  Shree Varshitha Automats has been at the forefront of precision CNC machining 
                  for over two decades. Our commitment to quality, innovation, and customer 
                  satisfaction has made us a trusted partner across multiple industries.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Advanced CNC milling and turning capabilities",
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