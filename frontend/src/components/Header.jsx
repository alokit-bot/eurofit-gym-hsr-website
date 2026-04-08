import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className={`text-2xl lg:text-3xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
              }`}
            >
              EUROFIT <span className="text-orange-600">GYM</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
            <a href="tel:+918073734314">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white transition-all duration-300 hover:scale-105">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-gray-700 font-medium hover:text-orange-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-gray-700 font-medium hover:text-orange-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left text-gray-700 font-medium hover:text-orange-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-left text-gray-700 font-medium hover:text-orange-600 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-left text-gray-700 font-medium hover:text-orange-600 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-gray-700 font-medium hover:text-orange-600 transition-colors"
            >
              Contact
            </button>
            <a href="tel:+918073734314" className="block">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
