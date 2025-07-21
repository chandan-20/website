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
  Zap
} from "lucide-react";

const Home = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2">
              Trusted CNC Manufacturing Partner
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-industrial">
              Precision CNC Machining
              <span className="block text-orange-400">Trusted for Over 23 Years</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 text-industrial">
              Delivering excellence in precision manufacturing with state-of-the-art 
              CNC technology for automotive, aerospace, and industrial applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-precision text-lg px-8 py-6">
                <Link to="/contact">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-900">
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 section-industrial">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-industrial text-primary">
              Why Choose Shree Varshitha Automates?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that precision, quality, and decades of expertise make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-industrial text-center p-6 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
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
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-orange-400">
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-industrial text-primary">
                Precision Manufacturing Excellence Since 2000
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Shree Varshitha Automates has been at the forefront of precision CNC machining 
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
              <Button asChild className="btn-industrial">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Settings className="h-24 w-24 mx-auto mb-4 opacity-50" />
                <p className="text-lg">CNC Manufacturing Facility</p>
                <p className="text-sm">State-of-the-art Equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 section-steel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-industrial text-primary">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering precision solutions across diverse sectors with specialized expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="card-industrial p-6 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/industries">
                Explore All Industries <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-industrial">
            Ready to Start Your Precision Manufacturing Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with our expert team for a consultation and detailed quote 
            tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/contact">
                Request Quote Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-orange-600">
              <Link to="/gallery">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;