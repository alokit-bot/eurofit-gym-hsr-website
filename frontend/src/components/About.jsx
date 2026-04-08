import React from 'react';
import { Award, Users, Dumbbell, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const About = () => {
  const stats = [
    {
      icon: Award,
      number: '15+',
      label: 'Years of Excellence',
      color: 'text-orange-600'
    },
    {
      icon: Users,
      number: '5000+',
      label: 'Active Members',
      color: 'text-orange-600'
    },
    {
      icon: Dumbbell,
      number: '50+',
      label: 'Expert Trainers',
      color: 'text-orange-600'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Access Available',
      color: 'text-orange-600'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-600">EUROFIT GYM</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Since our establishment, EUROFIT GYM has been the cornerstone of fitness excellence in Bengaluru. We're not just a gym – we're a community dedicated to helping you achieve your health and wellness goals.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-orange-50/30 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Located in the heart of HSR Layout, <strong className="text-orange-600">EUROFIT GYM</strong> has been transforming lives for over 15 years. What started as a vision to create a world-class fitness facility has grown into one of Bengaluru's most trusted and celebrated gyms with over 5,000 active members.
              </p>
              <p>
                Our state-of-the-art facility features cutting-edge equipment from leading international brands, spacious workout areas designed by fitness architects, and a team of 50+ certified trainers who are passionate about your success. Whether you're a beginner taking your first steps toward fitness or an elite athlete pushing your limits, EUROFIT GYM provides the perfect environment.
              </p>
              <p>
                With a <strong className="text-orange-600">4.7-star rating</strong> and over 1200 positive reviews on Google, our members consistently praise our welcoming atmosphere, professional guidance, and results-driven approach. We're more than just a gym – we're your partner in achieving the healthiest, strongest, and most confident version of yourself. Join us and experience the EUROFIT difference!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
