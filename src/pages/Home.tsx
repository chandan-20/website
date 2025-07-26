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
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ background: 'var(--gradient-hero)' }}
        ></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold rounded-full">
              <Sparkles className="mr-2 h-4 w-4" />
              Trusted CNC Manufacturing Partner
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-industrial text-foreground">
              Precision CNC Machining
              <span className="block text-primary">
                Built on Trust & Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground text-industrial">
              Engineering precision for over 23 years with cutting-edge CNC technology, 
              delivering unmatched quality and reliability across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-professional text-lg px-8 py-6">
                <Link to="/contact">
                  <Target className="mr-2 h-5 w-5" />
                  Request a Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/services">
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float opacity-30">
          <Cog className="h-8 w-8 text-primary" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float opacity-30" style={{ animationDelay: '2s' }}>
          <Settings className="h-8 w-8 text-courage-cyan" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 section-professional">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-industrial text-primary">
              Why Choose Shree Varshitha Automats?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on courage, determination, confidence, and unwavering trust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-professional text-center p-6 group scroll-reveal">
                  <CardHeader>
                    <div 
                      className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'var(--gradient-primary)' }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="py-16 text-white relative overflow-hidden"
        style={{ background: 'var(--gradient-primary)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 animate-float">
            <Heart className="h-12 w-12" />
          </div>
          <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: '1s' }}>
            <Target className="h-12 w-12" />
          </div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scroll-reveal">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-foreground">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-industrial text-primary">
                Precision Manufacturing Excellence Since 2000
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Shree Varshitha Automats has been at the forefront of precision CNC machining 
                for over two decades. Our commitment to quality, innovation, and customer 
                satisfaction has made us a trusted partner across multiple industries.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Advanced CNC milling and turning capabilities",
                  "ISO certified quality management systems",
                  "Expert engineering and design support",
                  "On-time delivery with competitive pricing"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="btn-professional">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="scroll-reveal rounded-lg p-8 h-96 flex items-center justify-center" style={{ background: 'var(--gradient-card)' }}>
              <div className="text-center text-primary">
                <Settings className="h-24 w-24 mx-auto mb-4 opacity-50" />
                <p className="text-lg">CNC Manufacturing Facility</p>
                <p className="text-sm">State-of-the-art Equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* India Map Section */}
      <section className="py-20 section-professional">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-industrial text-primary">
              Our Operations Across India
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serving clients across Gujarat and Karnataka with excellence and precision
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto scroll-reveal">
            <IndiaMap />
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <ClientShowcase />

      {/* Industries Section */}
      <section className="py-20 section-professional">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-industrial text-primary">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering precision solutions across diverse sectors with specialized expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="card-professional p-6 group scroll-reveal">
                <CardHeader>
                  <CardTitle className="text-xl text-center text-primary group-hover:text-secondary transition-colors duration-300">
                    {industry.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 scroll-reveal">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/industries">
                Explore All Industries <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 text-white relative overflow-hidden"
        style={{ background: 'var(--gradient-primary)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 animate-float">
            <Sparkles className="h-16 w-16" />
          </div>
          <div className="absolute bottom-10 right-1/4 animate-float" style={{ animationDelay: '1.5s' }}>
            <Target className="h-16 w-16" />
          </div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-industrial scroll-reveal">
            Ready to Start Your Precision Manufacturing Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto scroll-reveal">
            Partner with us for engineering excellence. Get a consultation and detailed quote 
            tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-primary hover:bg-background">
              <Link to="/contact">
                <Heart className="mr-2 h-5 w-5" />
                Request Quote Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/gallery">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;