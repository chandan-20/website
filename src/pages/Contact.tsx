import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  User,
  Building,
  MessageSquare,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      // For demo purposes, we'll just show a success toast
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
      description: "Mon-Sat: 9:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email",
      content: "shreevarshithaautomats@gmail.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Industrial Area, Phase 2, Bangalore",
      description: "Karnataka, India - 560099"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Saturday",
      description: "9:00 AM to 6:00 PM IST"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-professional py-20 fade-in-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-courage-orange hover:bg-courage-orange text-white px-4 py-2 slide-up">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-industrial text-primary scale-in">
              Contact Shree Varshitha Automats
            </h1>
            <p className="text-xl text-muted-foreground text-industrial fade-in-up" style={{ animationDelay: '0.2s' }}>
              Ready to discuss your CNC machining requirements? Our expert team is here to 
              provide precision solutions tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-industrial p-8 fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl mb-2 text-primary">Send Us a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you with a detailed quote and timeline.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>Full Name *</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Phone Number *</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 98765 43210"
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Email Address *</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@company.com"
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="flex items-center space-x-2">
                        <Building className="h-4 w-4" />
                        <span>Company Name</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4" />
                      <span>Project Details *</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Please describe your CNC machining requirements, materials, quantities, tolerances, and any specific deadlines..."
                      rows={6}
                      className="transition-all duration-300 focus:scale-[1.01] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-professional text-lg py-6 transition-all duration-500 hover:shadow-2xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl font-bold mb-4 heading-industrial text-primary fade-in-up">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground fade-in-up" style={{ animationDelay: '0.1s' }}>
                  Multiple ways to reach our precision manufacturing experts
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="card-industrial p-6 hover:shadow-xl transition-all duration-500 fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                      <CardContent className="flex items-start space-x-4 p-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 glow">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-primary mb-1">{info.title}</h3>
                          <p className="font-medium text-foreground mb-1">{info.content}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Quick Response Promise */}
              <Card className="card-premium p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-premium rounded-full flex items-center justify-center glow">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Quick Response Guarantee</h3>
                  <p className="text-muted-foreground">
                    We respond to all inquiries within 4 business hours with detailed 
                    technical consultation and competitive pricing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 section-trust">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-industrial text-primary">
              Our Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategically located across India to serve your manufacturing needs efficiently
            </p>
          </div>
          
          <Card className="card-industrial p-8 text-center">
            <CardContent className="p-0">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Manufacturing Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-confidence-blue">Karnataka Operations</h4>
                  <p className="text-muted-foreground">
                    Main manufacturing facility with advanced CNC equipment
                  </p>
                  <p className="text-sm font-medium">Bangalore, Karnataka</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-courage-orange">Gujarat Operations</h4>
                  <p className="text-muted-foreground">
                    Secondary facility specializing in high-volume production
                  </p>
                  <p className="text-sm font-medium">Gujarat Industrial Area</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;