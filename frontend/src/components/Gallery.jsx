import React, { useState } from 'react';
import { Card } from './ui/card';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1761971976282-b2bb051a5474?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBneW0lMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzU2NTU0NDN8MA&ixlib=rb-4.1.0&q=85',
      title: 'Cardio Zone',
      description: 'State-of-the-art cardio equipment'
    },
    {
      url: 'https://images.unsplash.com/photo-1760031670160-4da44e9596d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBneW0lMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzU2NTU0NDN8MA&ixlib=rb-4.1.0&q=85',
      title: 'Cycling Studio',
      description: 'Indoor cycling with modern bikes'
    },
    {
      url: 'https://images.unsplash.com/photo-1674834727206-4bc272bfd8da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHw0fHxmaXRuZXNzJTIwZXF1aXBtZW50fGVufDB8fHx8MTc3NTY1NTQ0OHww&ixlib=rb-4.1.0&q=85',
      title: 'Weight Training',
      description: 'Professional weight training area'
    },
    {
      url: 'https://images.pexels.com/photos/13863730/pexels-photo-13863730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Free Weights',
      description: 'Extensive free weights section'
    },
    {
      url: 'https://images.unsplash.com/photo-1761971975858-c487bc10daab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBneW0lMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzU2NTU0NDN8MA&ixlib=rb-4.1.0&q=85',
      title: 'Yoga Studio',
      description: 'Peaceful yoga and meditation space'
    },
    {
      url: 'https://images.pexels.com/photos/7031709/pexels-photo-7031709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Premium Equipment',
      description: 'Latest fitness technology'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-600">Facility</span>
          </h2>
          <p className="text-xl text-gray-600">
            Take a virtual tour of our world-class fitness facility
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-80"
              onClick={() => setSelectedImage(image)}
            >
              <div className="absolute inset-0">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors text-4xl font-light"
              >
                ×
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 text-lg">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
