import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              EUROFIT <span className="text-orange-500">GYM</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Bengaluru's premier fitness destination. Transform your body, transform your life.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <a href="tel:+918073734314" className="text-gray-400 hover:text-orange-500 transition-colors">
                  +91 80737 34314
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:info@eurofitgym.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                  info@eurofitgym.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  #176, Hosur Rd, 5th Phase, HSR Layout, Bengaluru
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block font-semibold text-white mb-1">Monday - Sunday</span>
                6:00 AM - 11:00 PM
              </li>
              <li className="text-gray-400 mt-4">
                <span className="block font-semibold text-white mb-1">Public Holidays</span>
                Open Daily
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} EUROFIT GYM. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
