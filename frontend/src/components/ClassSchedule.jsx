import React from 'react';
import { Clock, Users, Flame } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export const ClassSchedule = () => {
  const schedule = {
    monday: [
      { time: '6:00 AM', class: 'HIIT Bootcamp', trainer: 'Rahul Singh', duration: '45 min', intensity: 'High', spots: 12 },
      { time: '7:00 AM', class: 'Yoga Flow', trainer: 'Priya Sharma', duration: '60 min', intensity: 'Low', spots: 20 },
      { time: '9:00 AM', class: 'CrossFit WOD', trainer: 'Vikram Patel', duration: '60 min', intensity: 'High', spots: 15 },
      { time: '5:00 PM', class: 'Zumba Dance', trainer: 'Sneha Kumar', duration: '45 min', intensity: 'Medium', spots: 25 },
      { time: '6:30 PM', class: 'Strength Training', trainer: 'Amit Reddy', duration: '60 min', intensity: 'Medium', spots: 18 },
      { time: '8:00 PM', class: 'Boxing Fitness', trainer: 'Arjun Nair', duration: '45 min', intensity: 'High', spots: 15 }
    ],
    wednesday: [
      { time: '6:00 AM', class: 'Spin Class', trainer: 'Meera Iyer', duration: '45 min', intensity: 'High', spots: 20 },
      { time: '7:00 AM', class: 'Power Yoga', trainer: 'Priya Sharma', duration: '60 min', intensity: 'Medium', spots: 20 },
      { time: '9:00 AM', class: 'Functional Training', trainer: 'Rahul Singh', duration: '60 min', intensity: 'Medium', spots: 16 },
      { time: '5:00 PM', class: 'Pilates', trainer: 'Divya Menon', duration: '45 min', intensity: 'Low', spots: 15 },
      { time: '6:30 PM', class: 'Circuit Training', trainer: 'Vikram Patel', duration: '45 min', intensity: 'High', spots: 18 },
      { time: '8:00 PM', class: 'Kickboxing', trainer: 'Arjun Nair', duration: '60 min', intensity: 'High', spots: 15 }
    ],
    saturday: [
      { time: '7:00 AM', class: 'HIIT & Abs', trainer: 'Rahul Singh', duration: '45 min', intensity: 'High', spots: 20 },
      { time: '9:00 AM', class: 'Vinyasa Yoga', trainer: 'Priya Sharma', duration: '75 min', intensity: 'Low', spots: 25 },
      { time: '10:30 AM', class: 'CrossFit Open Gym', trainer: 'Vikram Patel', duration: '90 min', intensity: 'High', spots: 20 },
      { time: '4:00 PM', class: 'Dance Cardio', trainer: 'Sneha Kumar', duration: '60 min', intensity: 'Medium', spots: 30 },
      { time: '6:00 PM', class: 'Strength & Conditioning', trainer: 'Amit Reddy', duration: '60 min', intensity: 'Medium', spots: 18 }
    ]
  };

  const getIntensityColor = (intensity) => {
    switch(intensity) {
      case 'High': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-orange-100 text-orange-700';
      case 'Low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider bg-orange-100 px-4 py-2 rounded-full">
              Class Schedule
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Weekly <span className="text-orange-600">Group Classes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Join our energizing group fitness classes led by certified trainers. All classes are included in your membership!
          </p>
        </div>

        {/* Schedule Tabs */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="monday" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-xl h-auto">
              <TabsTrigger value="monday" className="text-base font-semibold py-3 data-[state=active]:bg-orange-600 data-[state=active]:text-white rounded-lg transition-all">
                Monday
              </TabsTrigger>
              <TabsTrigger value="wednesday" className="text-base font-semibold py-3 data-[state=active]:bg-orange-600 data-[state=active]:text-white rounded-lg transition-all">
                Wednesday
              </TabsTrigger>
              <TabsTrigger value="saturday" className="text-base font-semibold py-3 data-[state=active]:bg-orange-600 data-[state=active]:text-white rounded-lg transition-all">
                Saturday
              </TabsTrigger>
            </TabsList>

            {Object.keys(schedule).map((day) => (
              <TabsContent key={day} value={day} className="space-y-4">
                {schedule[day].map((session, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-6 flex-1">
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-lg">{session.time}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{session.class}</h3>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-1 text-orange-600" />
                                <span className="font-medium">{session.trainer}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1 text-orange-600" />
                                <span>{session.duration}</span>
                              </div>
                              <Badge className={getIntensityColor(session.intensity)}>
                                <Flame className="w-3 h-3 mr-1" />
                                {session.intensity}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-orange-600">{session.spots}</div>
                            <div className="text-xs text-gray-600 font-medium">Spots Available</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>

          {/* Call to Action */}
          <div className="mt-12 text-center bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong className="text-orange-600">New to group fitness?</strong> Try your first class FREE! Call us to book your spot.
            </p>
            <a href="tel:+918073734314" className="inline-block">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Call to Book Your Spot
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;
