import React from 'react';
import { Flame, Target, Dumbbell, Users, Heart, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

export const Programs = () => {
  const programs = [
    {
      icon: Flame,
      title: 'Weight Loss Program',
      duration: '12 Weeks',
      level: 'All Levels',
      description: 'Scientifically designed program combining HIIT workouts, strength training, and personalized nutrition to help you lose 8-15 kg safely.',
      highlights: ['Customized meal plans', '24 PT sessions', 'Weekly progress tracking', 'Nutrition coaching'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Muscle Building',
      duration: '16 Weeks',
      level: 'Intermediate',
      description: 'Advanced strength training program focused on hypertrophy and muscle gain with expert guidance on progressive overload.',
      highlights: ['Strength training focus', 'Supplement guidance', 'Form correction', 'Body composition analysis'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Dumbbell,
      title: 'Athletic Performance',
      duration: '8 Weeks',
      level: 'Advanced',
      description: 'Elite training for athletes focusing on power, speed, agility, and sport-specific conditioning.',
      highlights: ['Sport-specific drills', 'Agility training', 'Performance metrics', 'Recovery protocols'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Functional Fitness',
      duration: '10 Weeks',
      level: 'All Levels',
      description: 'Improve everyday movement patterns, flexibility, and core strength through functional training exercises.',
      highlights: ['Mobility work', 'Core strengthening', 'Balance training', 'Injury prevention'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Senior Fitness',
      duration: '12 Weeks',
      level: 'Beginner',
      description: 'Gentle yet effective program designed for seniors (55+) focusing on strength, balance, and cardiovascular health.',
      highlights: ['Low-impact exercises', 'Joint-friendly workouts', 'Fall prevention', 'Health monitoring'],
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Zap,
      title: 'HIIT & Conditioning',
      duration: '6 Weeks',
      level: 'Intermediate',
      description: 'High-intensity interval training program for maximum calorie burn and cardiovascular conditioning.',
      highlights: ['Metabolic conditioning', 'Fat burning focus', 'Endurance building', 'Group energy'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider bg-orange-100 px-4 py-2 rounded-full">
              Our Programs
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Specialized <span className="text-orange-600">Fitness Programs</span>
          </h2>
          <p className="text-xl text-gray-600">
            Choose from our expertly designed programs tailored to your specific goals and fitness level
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white overflow-hidden"
              >
                <CardHeader className="p-0">
                  <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                  <div className="p-8 pb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 mb-2">
                          {program.duration}
                        </Badge>
                        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 block">
                          {program.level}
                        </Badge>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="space-y-3">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
