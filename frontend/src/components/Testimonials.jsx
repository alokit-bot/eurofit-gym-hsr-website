import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Software Engineer',
      rating: 5,
      text: 'EUROFIT GYM has completely transformed my fitness journey. The trainers are incredibly knowledgeable and the equipment is top-notch. Lost 15kg in 6 months!',
      initials: 'RS'
    },
    {
      name: 'Priya Reddy',
      role: 'Marketing Manager',
      rating: 5,
      text: 'Best gym in HSR Layout! The atmosphere is so motivating and the staff is always friendly and helpful. The group classes are my favorite part.',
      initials: 'PR'
    },
    {
      name: 'Amit Patel',
      role: 'Entrepreneur',
      rating: 5,
      text: 'Been a member for 3 years now. The personal training sessions helped me achieve my fitness goals faster than I ever imagined. Highly recommended!',
      initials: 'AP'
    },
    {
      name: 'Sneha Kumar',
      role: 'Doctor',
      rating: 5,
      text: 'Clean, well-maintained facility with excellent equipment. The nutrition guidance from the trainers has been invaluable. Worth every rupee!',
      initials: 'SK'
    },
    {
      name: 'Vikram Singh',
      role: 'Fitness Enthusiast',
      rating: 5,
      text: 'The variety of equipment and workout options is amazing. From CrossFit to Yoga, they have it all. The community here is incredibly supportive.',
      initials: 'VS'
    },
    {
      name: 'Divya Iyer',
      role: 'Teacher',
      rating: 5,
      text: 'Started my fitness journey here 2 years ago. The trainers genuinely care about your progress and push you to be your best. Love this place!',
      initials: 'DI'
    }
  ];

  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/35215421/pexels-photo-35215421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/85"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-orange-500">Members Say</span>
          </h2>
          <p className="text-xl text-gray-300">
            Join over 5000+ satisfied members who trust EUROFIT GYM for their fitness journey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-orange-600 opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-orange-600 text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
