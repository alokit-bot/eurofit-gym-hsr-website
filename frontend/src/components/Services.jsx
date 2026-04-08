import React from 'react';
import { Dumbbell, Heart, Users, Zap, Trophy, Timer } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export const Services = () => {
  const membershipPlans = [
    {
      name: 'Monthly',
      price: '₹2,499',
      period: 'per month',
      features: [
        'Full gym access',
        'Cardio equipment',
        'Weight training area',
        'Locker facility',
        'Free fitness assessment'
      ],
      popular: false
    },
    {
      name: 'Quarterly',
      price: '₹6,999',
      period: '3 months',
      features: [
        'All Monthly features',
        '2 personal training sessions',
        'Nutrition guidance',
        'Group fitness classes',
        'Steam & sauna access',
        'Workout plan'
      ],
      popular: true
    },
    {
      name: 'Annual',
      price: '₹24,999',
      period: 'per year',
      features: [
        'All Quarterly features',
        '12 personal training sessions',
        'Customized diet plan',
        'Priority booking',
        'Guest passes (4/year)',
        'Free gym merchandise',
        'Body composition analysis'
      ],
      popular: false
    }
  ];

  const services = [
    {
      icon: Dumbbell,
      title: 'Weight Training',
      description: 'Professional weight training area with free weights, machines, and expert guidance.'
    },
    {
      icon: Heart,
      title: 'Cardio Zone',
      description: 'Modern cardio equipment including treadmills, bikes, and ellipticals with entertainment systems.'
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Energizing group fitness classes including Zumba, Yoga, Aerobics, and more.'
    },
    {
      icon: Zap,
      title: 'Personal Training',
      description: 'One-on-one training sessions with certified trainers for personalized fitness goals.'
    },
    {
      icon: Trophy,
      title: 'CrossFit Training',
      description: 'High-intensity functional fitness training for strength and conditioning.'
    },
    {
      icon: Timer,
      title: 'HIIT Workouts',
      description: 'High-intensity interval training for maximum calorie burn and endurance.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Membership <span className="text-orange-600">Plans</span>
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan that fits your fitness journey and budget
          </p>
        </div>

        {/* Membership Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
          {membershipPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'border-orange-600 border-2 shadow-2xl'
                  : 'border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-600 text-white px-4 py-1 text-sm font-semibold">
                    MOST POPULAR
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </CardTitle>
                <div>
                  <span className="text-5xl font-bold text-orange-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ {plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="tel:+918073734314" className="block">
                  <Button
                    className={`w-full py-6 text-base font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-orange-600 hover:bg-orange-700 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    Call to Join
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our <span className="text-orange-600">Services</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
