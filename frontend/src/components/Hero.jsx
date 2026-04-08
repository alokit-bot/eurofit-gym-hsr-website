import React from 'react';
import { Star, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzU2NTU0NDN8MA&ixlib=rb-4.1.0&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <div className="mb-8 animate-fade-in-up">
            <Badge className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 text-sm font-medium">
              <Star className="w-4 h-4 fill-white mr-1 inline" />
              4.7 Rating • 1200+ Reviews
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-100">
            Transform Your Body,
            <span className="block text-orange-500 mt-2">Transform Your Life</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up animation-delay-200">
            Join Bengaluru's premier fitness destination. State-of-the-art equipment, expert trainers, and a community that motivates you every day.
          </p>

          {/* Location */}
          <div className="flex items-center text-gray-300 mb-12 animate-fade-in-up animation-delay-300">
            <MapPin className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" />
            <span className="text-base">HSR Layout, Bengaluru • Open Daily</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <a href="tel:+918073734314">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Call to Book Now
              </Button>
            </a>
            <Button
              onClick={() => scrollToSection('services')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              View Membership Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
