import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Factory,
  Lightbulb,
  Shield
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every component meets exact specifications with micron-level accuracy"
    },
    {
      icon: Shield,
      title: "Quality",
      description: "ISO certified processes ensuring consistent excellence in every project"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuous investment in latest CNC technology and manufacturing methods"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships through reliable service and support"
    }
  ];

  const milestones = [
    { year: "2000", title: "Company Founded", description: "Started with a vision for precision manufacturing" },
    { year: "2005", title: "ISO Certification", description: "Achieved ISO 9001:2015 quality certification" },
    { year: "2010", title: "Expansion", description: "Expanded facility and added advanced CNC equipment" },
    { year: "2015", title: "Aerospace Entry", description: "Began serving aerospace industry with critical components" },
    { year: "2020", title: "Digital Transformation", description: "Implemented Industry 4.0 technologies" },
    { year: "2024", title: "Market Leadership", description: "Recognized as leading CNC manufacturer in region" }
  ];

  const leadership = [
    {
      name: "Rajesh Kumar",
      position: "Managing Director",
      experience: "25+ years in precision manufacturing",
      expertise: "Strategic planning, quality management"
    },
    {
      name: "Priya Sharma",
      position: "Operations Director",
      experience: "20+ years in CNC operations",
      expertise: "Production optimization, lean manufacturing"
    },
    {
      name: "Arun Patel",
      position: "Technical Director",
      experience: "18+ years in engineering",
      expertise: "CAD/CAM programming, process engineering"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-professional py-20 text-white fade-in-up" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-courage-orange hover:bg-courage-orange text-white px-4 py-2 slide-up">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-industrial">
              About Shree Varshitha Automats
            </h1>
            <p className="text-xl opacity-90 text-industrial">
              Over two decades of precision manufacturing excellence, innovation, 
              and unwavering commitment to quality and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-industrial p-8">
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To deliver world-class precision manufacturing solutions that exceed 
                  customer expectations through innovative CNC technology, exceptional 
                  quality, and reliable service. We are committed to being the trusted 
                  partner for industries requiring critical components with uncompromising precision.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-industrial p-8">
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be the leading precision manufacturing company in India, recognized 
                  globally for innovation, quality, and reliability. We envision a future 
                  where our advanced manufacturing capabilities drive technological progress 
                  across automotive, aerospace, and industrial sectors.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 section-steel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-industrial text-primary">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="card-industrial text-center p-6 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-industrial text-primary">
              Our Journey of Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped Shree Varshitha Automats into the industry leader we are today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="card-industrial p-6 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <Badge className="w-fit bg-orange-500 text-white mb-4">
                    {milestone.year}
                  </Badge>
                  <CardTitle className="text-xl">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {milestone.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 section-industrial">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-industrial text-primary">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals driving innovation and excellence in precision manufacturing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="card-industrial p-6 text-center hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-600" />
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-orange-600 font-medium">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong>Experience:</strong> {leader.experience}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Expertise:</strong> {leader.expertise}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 text-white section-professional" style={{ background: 'var(--gradient-trust)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-courage-orange glow">23+</div>
              <div className="text-lg opacity-90">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-courage-orange glow">5000+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-courage-orange glow">150+</div>
              <div className="text-lg opacity-90">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-courage-orange glow">99.9%</div>
              <div className="text-lg opacity-90">Quality Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="card-industrial p-12 text-center">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Partner with Experience You Can Trust
              </CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                Discover how our 23+ years of precision manufacturing expertise 
                can solve your most challenging CNC machining requirements.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-precision text-lg px-8 py-6">
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link to="/services">
                    View Our Capabilities
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;