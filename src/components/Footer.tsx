import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-professional" style={{ background: 'var(--gradient-footer)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-primary text-white font-bold glow">
                SVA
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Shree Varshitha</span>
                <span className="text-sm opacity-90">Automats</span>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Over 23 years of precision CNC machining excellence, delivering 
              quality solutions across automotive, aerospace, and industrial sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/services" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Our Services</Link></li>
              <li><Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Contact Us</Link></li>
              <li><a href="tel:+91-XXX-XXX-XXXX" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Call Now</a></li>
              <li><a href="mailto:shreevarshithaautomats@gmail.com" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Email Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-90">CNC Milling</li>
              <li className="text-sm opacity-90">CNC Turning</li>
              <li className="text-sm opacity-90">Prototype Development</li>
              <li className="text-sm opacity-90">High-Volume Production</li>
              <li className="text-sm opacity-90">Quality Inspection</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 opacity-90" />
                <a href="tel:+91-XXX-XXX-XXXX" className="text-sm opacity-90 hover:opacity-100 transition-opacity">+91-XXX-XXX-XXXX</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 opacity-90" />
                <a href="mailto:shreevarshithaautomats@gmail.com" className="text-sm opacity-90 hover:opacity-100 transition-opacity">shreevarshithaautomats@gmail.com</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 opacity-90 mt-0.5" />
                <span className="text-sm opacity-90">
                  Industrial Area, Bangalore<br />
                  Karnataka, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 opacity-90" />
                <span className="text-sm opacity-90">Mon-Sat: 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-90">
            © 2024 Shree Varshitha Automats. All rights reserved.
          </p>
          <p className="text-sm opacity-90 mt-2 md:mt-0">
            Precision CNC Machining • Quality • Reliability
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;