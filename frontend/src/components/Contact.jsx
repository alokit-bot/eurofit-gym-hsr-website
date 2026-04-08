import React from 'react';
import { Phone, MapPin, Clock, Mail, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 80737 34314',
      link: 'tel:+918073734314',
      linkText: 'Call Now'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: '#176, Hosur Rd, 5th Phase, Sector 6, HSR Layout, Bengaluru, Karnataka 560102',
      link: 'https://www.google.com/maps/search/?api=1&query=EUROFIT+GYM+HSR+Layout+Bengaluru',
      linkText: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Open Daily',
      subContent: 'Monday - Sunday: 6:00 AM - 11:00 PM'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@eurofitgym.com',
      link: 'mailto:info@eurofitgym.com',
      linkText: 'Send Email'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-orange-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600">
            Ready to start your fitness journey? Contact us today for a free consultation
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mr-6 flex-shrink-0">
                      <Icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-gray-700 mb-2 leading-relaxed">{info.content}</p>
                      {info.subContent && (
                        <p className="text-sm text-gray-600 mb-3">{info.subContent}</p>
                      )}
                      {info.link && (
                        <a href={info.link} target={info.icon === MapPin ? '_blank' : undefined} rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}>
                          <Button
                            variant="link"
                            className="text-orange-600 hover:text-orange-700 p-0 h-auto font-semibold"
                          >
                            {info.linkText}
                            {info.icon === MapPin && <ExternalLink className="ml-1 w-4 h-4" />}
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Map Section */}
        <div className="max-w-5xl mx-auto">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 bg-gray-200">
                <iframe
                  title="EUROFIT GYM Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d77.64!3d12.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzM5LjYiTiA3N8KwMzgnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Life?
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              Call us now to book your free trial session and experience EUROFIT GYM
            </p>
            <a href="tel:+918073734314">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Phone className="mr-2 h-5 w-5" />
                Call +91 80737 34314
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
