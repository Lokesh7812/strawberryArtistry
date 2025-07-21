import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollAnimations from '../components/ScrollAnimations';
import ParallaxSection from '../components/ParallaxSection';
import g6 from '../assets/g6.jpg'
import g5 from '../assets/g5.jpg'
import g11 from '../assets/g11.jpg'
import g15 from '../assets/g15.jpg'
import g16 from '../assets/g16.jpg'
import g3 from '../assets/g3.jpg'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Bride",
      image:g6,
      content: "I felt absolutely gorgeous on my wedding day thanks to Strawberryartistry's talented team! The bridal makeup was flawless and lasted the entire day. Every guest complimented my look.",
      rating: 5,
      location: "Madurai"
    },
    {
      id: 2,
      name: "Janani Krishnan",
      role: "Beauty Course Student",
      image:g5,
      content: "Their beautician course changed my career path and gave me confidence! The training was comprehensive and the instructors were incredibly supportive. Now I have my own salon!",
      rating: 5,
      location: "Madurai"
    },
    {
      id: 3,
      name: "Divya Reddy",
      role: "Regular Customer",
      image: g11,
      content: "I love how natural my hair extensions look! The quality is amazing and the application was so professional. I've been a loyal customer for 2 years now.",
      rating: 5,
      location: "Madurai"
    },
    {
      id: 4,
      name: "Meera Patel",
      role: "Bride",
      image: g15,
      content: "The microblading service was exceptional! My eyebrows look perfect every morning. The artist was skilled and made me feel comfortable throughout the process.",
      rating: 5,
      location: "Madurai"
    },
    {
      id: 5,
      name: "Kavya Nair",
      role: "Working Professional",
      image: g16,
      content: "The nail art here is incredible! I get compliments everywhere I go. The designs are creative and the service is always professional. Highly recommended!",
      rating: 5,
      location: "Madurai"
    },
    {
      id: 6,
      name: "Aishwarya Kumar",
      role: "Bride",
      image: g3,
      content: "My wedding photos turned out amazing thanks to their skilled makeup artists! The attention to detail was incredible and they made my special day perfect.",
      rating: 5,
      location: "Madurai"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

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
    <div id="testimonials" className="py-12 sm:py-16 lg:py-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-strawberry-50 to-rose-gold-50 py-12 sm:py-16 lg:py-20 animate-gradient-shift">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimations animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-gradient">What Our Clients Say</h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Don't just take our word for it. Hear from our satisfied clients who have experienced 
              the magic of Strawberry Artistry. Their stories inspire us to continue delivering excellence.
              </p>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Featured Testimonial Slider */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimations animation="scaleIn">
            <div className="max-w-4xl mx-auto relative">
              <div className="bg-gradient-to-br from-strawberry-50 to-rose-gold-50 rounded-3xl p-6 sm:p-8 lg:p-12 hover-lift hover-glow">
              <div className="text-center mb-6 sm:mb-8">
                  <Quote className="w-12 h-12 text-strawberry-600 mx-auto mb-4 animate-heartbeat" />
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 italic leading-relaxed mb-4 sm:mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                      className="w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover hover-scale"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{testimonials[currentIndex].role}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 flex justify-center">
                  <StarRating rating={testimonials[currentIndex].rating} />
                </div>
              </div>
              </div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
                className="absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 sm:-translate-x-4 bg-white rounded-full p-2 sm:p-3 shadow-lg hover-lift hover-glow text-strawberry-600 hover:text-strawberry-700"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextTestimonial}
                className="absolute right-2 sm:right-0 top-1/2 transform -translate-y-1/2 sm:translate-x-4 bg-white rounded-full p-2 sm:p-3 shadow-lg hover-lift hover-glow text-strawberry-600 hover:text-strawberry-700"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                        ? 'bg-strawberry-600 scale-125 animate-pulse-glow'
                        : 'bg-gray-300 hover:bg-strawberry-400 hover-scale'
                  }`}
                />
              ))}
            </div>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-champagne-50 to-rose-gold-50 animate-gradient-shift">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimations animation="fadeIn">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-gradient">More Happy Clients</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have transformed their look with us
              </p>
            </div>
          </ScrollAnimations>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <ScrollAnimations
                key={testimonial.id}
                animation="scaleIn"
                delay={(testimonial.id % 6) * 100}
              >
                <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover-lift hover-glow group cursor-pointer">
                  <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-strawberry-600 transition-colors duration-300">{testimonial.name}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                  </div>
                  <StarRating rating={testimonial.rating} />
                  <p className="text-sm sm:text-base text-gray-700 mt-3 sm:mt-4 italic">"{testimonial.content}"</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">{testimonial.location}</p>
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <ScrollAnimations animation="bounceIn" delay={0}>
              <div className="hover-scale cursor-pointer">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 animate-pulse-glow">500+</div>
              <p className="text-strawberry-100 text-sm sm:text-base">Happy Brides</p>
              </div>
            </ScrollAnimations>
            
            <ScrollAnimations animation="bounceIn" delay={200}>
              <div className="hover-scale cursor-pointer">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 animate-pulse-glow">98%</div>
              <p className="text-strawberry-100 text-sm sm:text-base">Customer Satisfaction</p>
              </div>
            </ScrollAnimations>
            
            <ScrollAnimations animation="bounceIn" delay={400}>
              <div className="hover-scale cursor-pointer">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 animate-pulse-glow">1000+</div>
              <p className="text-strawberry-100 text-sm sm:text-base">Transformations</p>
              </div>
            </ScrollAnimations>
            
            <ScrollAnimations animation="bounceIn" delay={600}>
              <div className="hover-scale cursor-pointer">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 animate-pulse-glow">200+</div>
              <p className="text-strawberry-100 text-sm sm:text-base">Trained Students</p>
              </div>
            </ScrollAnimations>
          </div>
        </div>
        </ParallaxSection>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimations animation="fadeIn">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-gradient">Ready to Join Our Happy Clients?</h2>
          </ScrollAnimations>
          
          <ScrollAnimations animation="fadeIn" delay={200}>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Experience the same exceptional service that has made our clients so happy. 
            Book your appointment today and let us create your success story.
            </p>
          </ScrollAnimations>
          
          <ScrollAnimations animation="scaleIn" delay={400}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto bg-gradient-to-r from-strawberry-600 to-berry-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover-lift hover-glow animate-pulse-glow"
            >
              Contact Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto border-2 border-strawberry-600 text-strawberry-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-strawberry-600 hover:text-white hover-lift"
            >
              View Services
            </button>
            </div>
          </ScrollAnimations>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;