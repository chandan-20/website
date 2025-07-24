import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white" style={{ background: 'var(--gradient-footer)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded text-white font-bold" style={{ background: 'var(--gradient-accent)' }}>
                SVA
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">Shree Varshitha</span>
                <span className="text-sm opacity-90 text-white">Automats</span>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed text-white">
              Over 23 years of precision CNC machining excellence, delivering 
              quality solutions across automotive, aerospace, and industrial sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity text-white">About Us</Link></li>
              <li><Link to="/services" className="text-sm opacity-90 hover:opacity-100 transition-opacity text-white">Our Services</Link></li>
              <li><Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity text-white">Contact Us</Link></li>
              <li><a href="tel:+91-XXX-XXX-XXXX" className="text-sm opacity-90 hover:opacity-100 transition-opacity text-white">Call Now</a></li>
              <li><a href="mailto:shreevarshithaautomats@gmail.com" className="text-sm opacity-90 hover:opacity-100 transition-opacity text-white">Email Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-90 text-white">CNC Milling</li>
              <li className="text-sm opacity-90 text-white">CNC Turning</li>
              <li className="text-sm opacity-90 text-white">Prototype Development</li>
              <li className="text-sm opacity-90 text-white">High-Volume Production</li>
              <li className="text-sm opacity-90 text-white">Quality Inspection</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 opacity-90 text-white" />
                <a href="tel:+91-XXX-XXX-XXXX" className="text-sm opacity-90 hover:opacity-100 transition-opacity text-white">+91-XXX-XXX-XXXX</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 opacity-90 text-white" />
                <a href="mailto:shreevarshithaautomats@gmail.com" className="text-sm opacity-90 hover:opacity-100 transition-opacity text-white">shreevarshithaautomats@gmail.com</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 opacity-90 mt-0.5 text-white" />
                <span className="text-sm opacity-90 text-white">
                  Industrial Area, Bangalore<br />
                  Karnataka, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 opacity-90 text-white" />
                <span className="text-sm opacity-90 text-white">Mon-Sat: 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-90 text-white">
            © 2024 Shree Varshitha Automats. All rights reserved.
          </p>
          <p className="text-sm opacity-90 mt-2 md:mt-0 text-white">
            Precision CNC Machining • Quality • Reliability
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;