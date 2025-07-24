import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Cog, 
  RotateCcw, 
  Zap, 
  Factory, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Gauge,
  Wrench,
  Shield,
  Clock,
  Award
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const scrollRef = useScrollAnimation();
  const services = [
    {
      icon: Cog,
      title: "CNC Milling",
      description: "High-precision 3, 4, and 5-axis CNC milling for complex geometries and tight tolerances",
      features: [
        "3-axis to 5-axis machining capabilities",
        "Tolerance up to ±0.001mm",
        "Materials: Aluminum, Steel, Stainless Steel, Titanium",
        "Complex geometries and intricate designs"
      ],
      applications: "Aerospace components, automotive parts, medical devices"
    },
    {
      icon: RotateCcw,
      title: "CNC Turning",
      description: "Precision turning operations for cylindrical components with superior surface finish",
      features: [
        "Multi-spindle turning centers",
        "Live tooling capabilities",
        "Diameter range: 5mm to 500mm",
        "Length up to 2000mm"
      ],
      applications: "Shafts, pins, bushings, automotive components"
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Fast turnaround prototype development for design validation and testing",
      features: [
        "Quick quote and production",
        "Single piece to small batch",
        "Design optimization support",
        "Material selection guidance"
      ],
      applications: "Product development, design validation, testing"
    },
    {
      icon: Factory,
      title: "High-Volume Production",
      description: "Scalable manufacturing solutions for large quantity requirements",
      features: [
        "Automated production lines",
        "Consistent quality control",
        "Cost-effective pricing",
        "Just-in-time delivery"
      ],
      applications: "Automotive series production, industrial equipment"
    },
    {
      icon: Settings,
      title: "Custom Tooling",
      description: "Specialized tooling and fixture design for unique manufacturing requirements",
      features: [
        "Custom jig and fixture design",
        "Tooling optimization",
        "Workholding solutions",
        "Process improvement"
      ],
      applications: "Special applications, complex assemblies"
    },
    {
      icon: Gauge,
      title: "Quality Inspection",
      description: "Comprehensive quality control with advanced measurement technology",
      features: [
        "CMM inspection services",
        "First article inspection",
        "In-process quality control",
        "Certification and documentation"
      ],
      applications: "Critical components, aerospace, medical"
    }
  ];

  const capabilities = [
    {
      category: "Machine Capabilities",
      specs: [
        "CNC Machining Centers: 10+ units",
        "Turning Centers: 8+ units",
        "5-axis Machining: Available",
        "Maximum Part Size: 2000mm x 1500mm x 1000mm"
      ]
    },
    {
      category: "Precision Standards",
      specs: [
        "Tolerance: ±0.001mm achievable",
        "Surface Finish: Ra 0.1μm",
        "Geometric Tolerances: GD&T compliant",
        "CMM Inspection: Zeiss equipment"
      ]
    },
    {
      category: "Material Expertise",
      specs: [
        "Aluminum Alloys: 6061, 7075, 2024",
        "Steel: Carbon, Alloy, Tool Steel",
        "Stainless Steel: 304, 316, 17-4PH",
        "Exotic Materials: Titanium, Inconel"
      ]
    },
    {
      category: "Quality Systems",
      specs: [
        "ISO 9001:2015 Certified",
        "AS9100 Aerospace Standard",
        "Statistical Process Control",
        "Traceability Documentation"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Technical review of drawings and requirements"
    },
    {
      step: "02",
      title: "Quotation",
      description: "Detailed pricing and timeline estimation"
    },
    {
      step: "03",
      title: "Programming",
      description: "CAM programming and toolpath optimization"
    },
    {
      step: "04",
      title: "Production",
      description: "Precision machining with quality control"
    },
    {
      step: "05",
      title: "Inspection",
      description: "Final quality verification and documentation"
    },
    {
      step: "06",
      title: "Delivery",
      description: "Packaging and on-time delivery"
    }
  ];

  return (
    <div ref={scrollRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="section-professional py-20 text-white" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground px-4 py-2">
              CNC Manufacturing Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-industrial">
              Comprehensive CNC Machining Solutions
            </h1>
            <p className="text-xl opacity-90 text-industrial">
              From prototype to production, we deliver precision machining services 
              that meet the most demanding requirements across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-industrial text-primary">
              Our CNC Machining Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced manufacturing capabilities designed to meet your precise specifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-industrial hover:shadow-xl transition-all duration-300 scroll-reveal">
                  <CardHeader>
                    <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Applications:</h4>
                      <p className="text-sm text-muted-foreground">{service.applications}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 section-steel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-industrial text-primary">
              Technical Capabilities & Specifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art equipment and expertise delivering precision manufacturing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="card-industrial p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-center text-primary">
                    {capability.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {capability.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-industrial text-primary">
              Our Manufacturing Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Streamlined workflow ensuring quality, efficiency, and on-time delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="card-industrial text-center p-6 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 text-white section-professional" style={{ background: 'var(--gradient-trust)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-premium rounded-full flex items-center justify-center glow">
              <Award className="h-10 w-10 text-white" />
            </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-industrial">
              Quality Guaranteed
            </h2>
            <p className="text-xl mb-8 opacity-90">
              ISO 9001:2015 certified processes ensure every component meets your exact 
              specifications with documented traceability and comprehensive inspection reports.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-precision-gold glow mb-2">±0.001mm</div>
                <div className="text-sm opacity-90">Tolerance Capability</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-precision-gold glow mb-2">99.9%</div>
                <div className="text-sm opacity-90">Quality Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-precision-gold glow mb-2">100%</div>
                <div className="text-sm opacity-90">Inspection</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-precision-gold glow mb-2">ISO</div>
                <div className="text-sm opacity-90">Certified</div>
              </div>
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
                Ready to Start Your CNC Project?
              </CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                From concept to completion, our expert team is ready to deliver 
                precision machining solutions that exceed your expectations.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-precision text-lg px-8 py-6">
                  <Link to="/contact">
                    Get Quote Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link to="/gallery">
                    View Our Work
                  </Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Fast Turnaround</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Quality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span>ISO Certified</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;