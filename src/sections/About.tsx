import React from 'react';
import { Award, Users, Heart, Star } from 'lucide-react';
import ScrollAnimations from '../components/ScrollAnimations';
import ParallaxSection from '../components/ParallaxSection';
import profile from '../assets/g2.jpg'

const About = () => {
  const team = [
    // {
    //   name: "Priya Sharma",
    //   role: "Founder & Lead Artist",
    //   image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    //   bio: "10+ years in bridal makeup artistry"
    // },
    // {
    //   name: "Meera Krishnan",
    //   role: "Hair Styling Expert",
    //   image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    //   bio: "Specialized in traditional & modern styles"
    // },
    // // {
    //   name: "Anita Rajesh",
    //   role: "Beauty Educator",
    //   image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    //   bio: "Certified trainer with 8+ years experience"
    // },
    // {
    //   name: "Kavya Reddy",
    //   role: "Microblading Specialist",
    //   image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    //   bio: "Expert in eyebrow sculpting & enhancement"
    // }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every service we provide"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Empowering women through beauty and education"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Beauty isn't just our work—it's our passion"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Innovation",
      description: "Staying ahead with latest trends and techniques"
    }
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
    <div id="about" className="py-12 sm:py-16 lg:py-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-strawberry-50 to-rose-gold-50 py-12 sm:py-16 lg:py-20 animate-gradient-shift">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimations animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-gradient">About Strawberry Artistry</h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              At Strawberry Artistry, beauty isn't just a service—it's a work of art. Our team of seasoned 
              professionals brings creativity, passion, and meticulous skill to every transformation. We're 
              committed to empowering women in Madurai through beauty and education, blending artistry with luxury.
              </p>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollAnimations animation="slideInLeft">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-shimmer">Our Story</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Founded in 2012, Strawberry Artistry began as a dream to create a space where beauty meets 
                artistry. What started as a small beauty parlour in Madurai has grown into a comprehensive 
                beauty destination and academy, serving hundreds of brides and students.
                </p>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Our journey has been marked by countless transformations, not just in appearance but in 
                confidence and self-expression. We believe that every woman deserves to feel beautiful and 
                empowered, and we're here to make that happen.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center p-4 bg-strawberry-50 rounded-lg hover-lift hover-glow">
                  <div className="text-xl sm:text-2xl font-bold text-strawberry-600">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Happy Brides</div>
                  </div>
                  <div className="text-center p-4 bg-rose-gold-50 rounded-lg hover-lift hover-glow">
                  <div className="text-xl sm:text-2xl font-bold text-strawberry-600">200+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Trained Students</div>
                  </div>
                </div>
              </div>
            </ScrollAnimations>
            
            <ScrollAnimations animation="slideInRight" className="relative order-first lg:order-last">
              <ParallaxSection speed={0.1}>
              <img
                src= {profile}
                alt="Strawberryartistry salon interior"
                  className="w-full rounded-2xl shadow-lg hover-lift hover-glow"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-strawberry-600/20 to-transparent rounded-2xl"></div>
              </ParallaxSection>
            </ScrollAnimations>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-champagne-50 to-rose-gold-50 animate-gradient-shift">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimations animation="fadeIn">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-gradient">Our Values</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at Strawberryartistry
              </p>
            </div>
          </ScrollAnimations>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <ScrollAnimations 
                key={index} 
                animation="bounceIn" 
                delay={index * 150}
              >
                <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover-lift hover-glow group cursor-pointer">
                  <div className="text-strawberry-600 mb-4 flex justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-heartbeat">
                  {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-strawberry-600 transition-colors duration-300">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                </div>
              </ScrollAnimations>
            ))}
          </div>
        </div>
      </section>

     

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-strawberry-600 to-berry-600 text-white parallax">
        <ParallaxSection speed={0.2}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimations animation="fadeIn">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 animate-pulse-glow">Join the Strawberryartistry Family</h2>
          </ScrollAnimations>
          
          <ScrollAnimations animation="fadeIn" delay={200}>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Whether you're looking for a stunning transformation or want to learn the art of beauty, 
            we're here to help you shine.
            </p>
          </ScrollAnimations>
          
          <ScrollAnimations animation="scaleIn" delay={400}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <button 
              onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto bg-white text-strawberry-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 hover-lift"
            >
              Contact Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-strawberry-600 hover-lift"
            >
              View Services
            </button>
            </div>
          </ScrollAnimations>
        </div>
        </ParallaxSection>
      </section>
    </div>
  );
};

export default About;