import React from 'react';
import { Shield, Award, Users2, Zap, Heart, TrendingUp, Clock, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Certified Trainers',
      description: 'All our trainers are internationally certified with 10+ years of experience in fitness coaching.'
    },
    {
      icon: Award,
      title: 'Award-Winning Facility',
      description: 'Recognized as Best Gym in Bengaluru 2024 with state-of-the-art equipment and amenities.'
    },
    {
      icon: Users2,
      title: 'Community Support',
      description: 'Join a motivated community of 5000+ members who inspire and support each other daily.'
    },
    {
      icon: Zap,
      title: 'Results-Driven Programs',
      description: 'Proven workout programs designed to deliver visible results within 8-12 weeks.'
    },
    {
      icon: Heart,
      title: 'Personalized Nutrition',
      description: 'Custom meal plans and nutrition guidance from certified dietitians included in membership.'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Advanced body composition analysis and regular assessments to track your transformation.'
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Open from 6 AM to 11 PM daily, with 24/7 access available for annual members.'
    },
    {
      icon: Sparkles,
      title: 'Premium Amenities',
      description: 'Luxury locker rooms, steam, sauna, smoothie bar, and relaxation zone for total wellness.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider bg-orange-100 px-4 py-2 rounded-full">
              Why EUROFIT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-orange-600">EUROFIT GYM?</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're not just another gym – we're your complete fitness transformation partner with everything you need to succeed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-orange-500 mb-2">15+</div>
                <div className="text-gray-300 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-orange-500 mb-2">5000+</div>
                <div className="text-gray-300 font-medium">Active Members</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-orange-500 mb-2">98%</div>
                <div className="text-gray-300 font-medium">Success Rate</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-orange-500 mb-2">4.7★</div>
                <div className="text-gray-300 font-medium">Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
