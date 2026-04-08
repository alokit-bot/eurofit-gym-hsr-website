import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Programs from '../components/Programs';
import Services from '../components/Services';
import ClassSchedule from '../components/ClassSchedule';
import Gallery from '../components/Gallery';
import Transformations from '../components/Transformations';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
      <Header scrolled={scrolled} />
      <Hero />
      <About />
      <WhyChooseUs />
      <Programs />
      <Services />
      <ClassSchedule />
      <Gallery />
      <Transformations />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
