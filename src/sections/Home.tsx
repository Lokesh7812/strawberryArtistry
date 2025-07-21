import React, { useEffect, useState } from 'react';
import {
  Sparkles,
  Users,
  Award,
  Calendar,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import FloatingParticles from '../components/FloatingParticles';
import ParallaxSection from '../components/ParallaxSection';
import ScrollAnimations from '../components/ScrollAnimations';
import AnimatedBackground from '../components/AnimatedBackground';
import bgImage from '../assets/backgroundimg.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Bridal Makeups',
      description: 'Stunning bridal transformations'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Beauty Courses',
      description: 'Professional training programs'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Hair Extensions',
      description: 'Premium quality extensions'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Microblading',
      description: 'Perfect eyebrow sculpting'
    }
  ];

  const stats = [
    { number: 500, label: 'Happy Brides', suffix: '+' },
    { number: 1000, label: 'Transformations', suffix: '+' },
    { number: 50, label: 'Beauty Experts', suffix: '+' },
    { number: 5, label: 'Years Experience', suffix: '+' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div
  id="home"
  className="relative overflow-hidden w-full max-w-[100vw] overflow-x-hidden"
>

      <FloatingParticles />
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-strawberry-50 via-rose-gold-50 to-champagne-50 px-4 sm:px-6 lg:px-8 parallax">
        <ParallaxSection speed={0.3} className="absolute inset-0 w-full max-w-[100vw] overflow-x-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20 w-full h-full"
    style={{ backgroundImage: `url(${bgImage})` }}
  ></div>
</ParallaxSection>


        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          <ScrollAnimations animation="fadeIn" delay={200}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gradient leading-tight animate-fade-in-up break-words">
              Strawberry Artistry
            </h1>
          </ScrollAnimations>

          <ScrollAnimations animation="fadeIn" delay={400}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-2 px-2">
              Where Artistry Meets Luxury in Beauty & Beyond
            </p>
          </ScrollAnimations>

          <ScrollAnimations animation="fadeIn" delay={600}>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0 animate-fade-in-up stagger-3">
              Welcome to your premium beauty haven in Madurai, specializing in
              breathtaking bridal makeovers, high-end beauty treatments, and
              professional beauty education.
            </p>
          </ScrollAnimations>

          <ScrollAnimations animation="scaleIn" delay={800}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-0">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto bg-gradient-to-r from-strawberry-600 to-berry-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover-lift hover-glow animate-pulse-glow flex items-center justify-center group"
              >
                Contact Us
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={18} />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto bg-white text-strawberry-600 border-2 border-strawberry-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-strawberry-600 hover:text-white hover-lift transition-all duration-500"
              >
                Explore Services
              </button>
            </div>
          </ScrollAnimations>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-pulse-glow">
          <div className="w-6 h-10 border-2 border-strawberry-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-strawberry-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimations animation="fadeIn">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-gradient text-center">
                Our Specialties
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
                From transformative services to artistic expressions, we craft beauty with passion and precision
              </p>
            </div>
          </ScrollAnimations>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ScrollAnimations
                key={index}
                animation={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}
                delay={index * 100}
              >
                <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-strawberry-50 to-rose-gold-50 hover-lift hover-glow group cursor-pointer">
                  <div className="text-strawberry-600 mb-4 flex justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-heartbeat">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-strawberry-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              </ScrollAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-strawberry-600 to-berry-600 text-white parallax">
        <ParallaxSection speed={0.2}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <ScrollAnimations key={index} animation="bounceIn" delay={index * 200}>
                  <div className="text-center hover-scale cursor-pointer">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 animate-pulse-glow">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <p className="text-strawberry-100 text-sm sm:text-base lg:text-lg">
                      {stat.label}
                    </p>
                  </div>
                </ScrollAnimations>
              ))}
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-champagne-50 to-rose-gold-50 animate-gradient-shift">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimations animation="fadeIn">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-gradient">
              Ready to Transform Your Beauty?
            </h2>
          </ScrollAnimations>

          <ScrollAnimations animation="fadeIn" delay={200}>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Join thousands of satisfied clients who have experienced the magic of Strawberry Artistry
            </p>
          </ScrollAnimations>

          <ScrollAnimations animation="scaleIn" delay={400}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto px-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto bg-gradient-to-r from-strawberry-600 to-berry-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover-lift hover-glow animate-pulse-glow"
              >
                Book Consultation
              </button>
              <a
                href="https://wa.me/919080925492"
                className="w-full sm:w-auto bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-green-700 hover-lift flex items-center justify-center"
              >
                <MessageCircle className="mr-2" size={18} />
                WhatsApp Us
              </a>
            </div>
          </ScrollAnimations>
        </div>
      </section>
    </div>
  );
};

export default Home;