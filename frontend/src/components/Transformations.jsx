import React from 'react';
import { TrendingDown, Award, Timer } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export const Transformations = () => {
  const transformations = [
    {
      name: 'Rajesh Kumar',
      age: 35,
      program: 'Weight Loss',
      duration: '12 weeks',
      lost: '18 kg',
      achievement: 'Lost 18kg, gained confidence',
      quote: 'I never thought I could lose this much weight. The trainers at EUROFIT made it possible with their personalized approach and constant motivation.',
      stats: { weight: '95kg → 77kg', waist: '42" → 34"', bodyfat: '32% → 18%' }
    },
    {
      name: 'Anjali Reddy',
      age: 28,
      program: 'Muscle Building',
      duration: '16 weeks',
      lost: 'Gained 8kg muscle',
      achievement: 'Built lean muscle mass',
      quote: 'From skinny to strong! The strength training program helped me build muscle I never knew I could have. Feeling powerful and confident!',
      stats: { weight: '52kg → 60kg', muscle: '+8kg', strength: '+150%' }
    },
    {
      name: 'Vikram Malhotra',
      age: 42,
      program: 'Functional Fitness',
      duration: '10 weeks',
      lost: '12 kg',
      achievement: 'Reversed prediabetes',
      quote: 'Not just weight loss, but complete lifestyle transformation. My doctor was amazed at my health improvements. Thank you EUROFIT!',
      stats: { weight: '88kg → 76kg', bp: '145/90 → 120/80', hba1c: '6.2% → 5.4%' }
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider bg-orange-100 px-4 py-2 rounded-full">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real People, Real <span className="text-orange-600">Results</span>
          </h2>
          <p className="text-xl text-gray-600">
            These incredible transformations prove that with dedication and the right guidance, anything is possible.
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {transformations.map((story, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <CardContent className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{story.name}</h3>
                      <p className="text-gray-600">Age {story.age}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      <Award className="w-3 h-3 mr-1" />
                      Success
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                      {story.program}
                    </Badge>
                    <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                      <Timer className="w-3 h-3 mr-1" />
                      {story.duration}
                    </Badge>
                  </div>
                </div>

                {/* Achievement */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 mb-6">
                  <div className="flex items-center mb-2">
                    <TrendingDown className="w-6 h-6 text-orange-600 mr-2" />
                    <span className="text-3xl font-bold text-orange-600">{story.lost}</span>
                  </div>
                  <p className="text-gray-700 font-semibold">{story.achievement}</p>
                </div>

                {/* Stats */}
                <div className="space-y-3 mb-6">
                  {Object.entries(story.stats).map(([key, value], idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600 capitalize text-sm font-medium">{key}</span>
                      <span className="text-gray-900 font-bold">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 italic leading-relaxed border-l-4 border-orange-600 pl-4">
                  "{story.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-orange-100 text-lg mb-6 max-w-2xl">Join thousands of members who have transformed their lives at EUROFIT GYM</p>
            <a href="tel:+918073734314">
              <button className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                Start Your Transformation Today
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformations;
