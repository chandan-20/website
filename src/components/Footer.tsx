import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white font-bold">
                SVA
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-black">Shree Varshitha</span>
                <span className="text-sm text-gray-600">Automats</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Over 23 years of precision CNC and TRAUB machining excellence, delivering 
              quality solutions across automotive, aerospace, and industrial sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-gray-600 hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><a href="tel:+91-XXX-XXX-XXXX" className="text-sm text-gray-600 hover:text-primary transition-colors">Call Now</a></li>
              <li><a href="mailto:shreevarshithaautomats@gmail.com" className="text-sm text-gray-600 hover:text-primary transition-colors">Email Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">CNC Milling</li>
              <li className="text-sm text-gray-600">CNC Turning</li>
              <li className="text-sm text-gray-600">TRAUB Manufacturing</li>
              <li className="text-sm text-gray-600">Prototype Development</li>
              <li className="text-sm text-gray-600">High-Volume Production</li>
              <li className="text-sm text-gray-600">Quality Inspection</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-600" />
                <a href="tel:+91-XXX-XXX-XXXX" className="text-sm text-gray-600 hover:text-primary transition-colors">+91-XXX-XXX-XXXX</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-600" />
                <a href="mailto:shreevarshithaautomats@gmail.com" className="text-sm text-gray-600 hover:text-primary transition-colors">shreevarshithaautomats@gmail.com</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-600 mt-0.5" />
                <span className="text-sm text-gray-600">
                  Industrial Area, Bangalore<br />
                  Karnataka, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">Mon-Sat: 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024 Shree Varshitha Automats. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 mt-2 md:mt-0">
            Precision CNC & TRAUB Manufacturing • Quality • Reliability
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;