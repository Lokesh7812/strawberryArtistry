import React, { useState } from 'react';
import { X } from 'lucide-react';
import ScrollAnimations from '../components/ScrollAnimations';
import ParallaxSection from '../components/ParallaxSection';
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
import g4 from '../assets/g4.jpg';
import g5 from '../assets/g5.jpg';
import g6 from '../assets/g6.jpg';
import g7 from '../assets/g7.jpg';
import g8 from '../assets/g8.jpg';
import g9 from '../assets/g9.jpg';
import g10 from '../assets/g10.jpg';
import g11 from '../assets/g11.jpg';
import g12 from '../assets/g12.jpg';
import g13 from '../assets/g13.jpg';
import g14 from '../assets/g14.jpg';
import g15 from '../assets/g15.jpg';
import g16 from '../assets/g16.jpg';
import g17 from '../assets/g17.jpg';
import course1 from '../assets/course1.jpg';

import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";
import course5 from "../assets/course5.jpg";
import course6 from '../assets/course6.jpg';
import course7 from '../assets/course7.jpg';
import course8 from "../assets/course8.jpg";
import course9 from "../assets/course9.jpg";
import course10 from "../assets/course10.jpg";
import ab1 from '../assets/ab1.jpg';
import ab2 from '../assets/ab2.jpg';
import ab3 from '../assets/ab3.jpg';
import a4 from '../assets/a4.jpg';
import ab5 from '../assets/ab5.jpg'
import ab6 from '../assets/ab6.jpg';
import ab7 from '../assets/ab7.jpg'
import ab8 from '../assets/ab8.jpg'
import ab9 from '../assets/ab9.jpg'
import ab10 from '../assets/ab10.jpg'
import ab11 from '../assets/ab11.jpg'
import ab12 from '../assets/ab12.jpg'
import ab13 from '../assets/ab13.jpg'
import ab14 from '../assets/ab14.jpg'
import ab15 from '../assets/ab15.jpg'
import ab16 from '../assets/ab16.jpg'
import ab17 from '../assets/ab17.jpg'
import ab18 from '../assets/ab18.jpg'
import ab19 from '../assets/ab19.jpg'
import ab20 from '../assets/ab20.jpg'
import ab21 from '../assets/ab21.jpg'
import bot1 from '../assets/bot1.jpg'
import bot2 from '../assets/bot2.jpg'
import bot3 from '../assets/bot3.jpg'
import bot4 from '../assets/bot4.jpg'
import bot5 from '../assets/bot5.jpg'
import bot6 from '../assets/bot6.jpg'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'bridal', name: 'Bridal' },
    { id: 'hair', name: 'Hair' },
    { id: 'academy', name: 'Academy' },
    {id:'boutique',name:'Boutique'}
  ];

  const images = [
  { id: 1, src: g2, category: "bridal" },
  { id: 2, src: g1, category: "bridal" },
  { id: 3, src: g3, category: "bridal" },
  { id: 4, src: g4, category: "hair" },
  { id: 5, src: g5, category: "bridal" },
  { id: 6, src: g6, category: "hair" },
  { id: 7, src: g7, category: "bridal" },
  { id: 8, src: g8, category: "hair" },
  { id: 9, src: g9, category: "bridal" },
  { id: 10, src: g10, category: "bridal" },
  { id: 11, src: g11, category: "hair" },
  { id: 12, src: g17, category: "bridal" },
  { id: 13, src: g13, category: "bridal" },
  { id: 14, src: g14, category: "academy" },
  { id: 15, src: g15, category: "bridal" },
  { id: 16, src: g16, category: "bridal" },
  { id: 17, src: g12, category: "bridal" },
  { id: 18, src: course1, category: "academy" },

  { id: 20, src: course3, category: "academy" },
  { id: 21, src: course4, category: "academy" },
  { id: 22, src: course5, category: "academy" },
  { id: 23, src: course6, category: "academy" },
  { id: 24, src: course7, category: "academy" },
  { id: 25, src: course8, category: "academy" },
  { id: 26, src: course9, category: "academy" },
  { id: 27, src: course10, category: "academy" }, 
  { id: 28, src: bot1, category: "boutique" }, 
  { id: 29, src: bot2, category: "boutique" }, 
  { id: 30, src: bot3, category: "boutique" }, 
  { id: 31, src: bot4, category: "boutique" }, 
  { id: 32, src: bot5, category: "boutique" }, 
  { id: 33, src: bot6, category: "boutique" }, 

  
];

const afterBefore=[
  
  { id: 1, src: ab1, category: "bridal" },
  { id: 2, src: ab2, category: "bridal" },
  { id: 3, src: ab3, category: "bridal" },
  { id: 4, src: a4, category: "hair" },
  { id: 5, src: ab5, category: "bridal" },
  { id: 6, src: ab6, category: "bridal" },
  { id: 7, src: ab7, category: "hair" },
  { id: 8, src: ab8, category: "bridal" },
  {id:9,src:ab9,category:""},
  {id:11,src:ab11,category:""},
  
  { id: 10, src: ab10, category: "bridal" },
 
  { id: 12, src: ab12, category: "bridal" },
  { id: 13, src: ab13, category: "" },
  { id: 14, src: ab14, category: "" },
  { id: 15, src: ab15, category: "" },
  { id: 16, src: ab16, category: "" },
  { id: 17, src: ab17, category: "" },
  { id: 18, src: ab18, category: "" },
  { id: 19, src: ab19, category: "" },
  { id: 20, src: ab20, category: "" },
  { id: 21, src: ab21, category: "" }

  
]
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

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
    <div id="gallery" className="py-12 sm:py-16 lg:py-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-strawberry-50 to-rose-gold-50 py-12 sm:py-16 lg:py-20 animate-gradient-shift">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimations animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-gradient">Our Gallery</h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Explore our portfolio of stunning transformations and artistic creations. 
              Each image tells a story of beauty, confidence, and artistry.
              </p>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimations animation="fadeIn">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                      ? 'bg-gradient-to-r from-strawberry-600 to-berry-600 text-white shadow-lg animate-pulse-glow'
                      : 'bg-gray-100 text-gray-700 hover:bg-strawberry-50 hover:text-strawberry-600 hover-lift'
                }`}
              >
                {category.name}
              </button>
            ))}
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-12 sm:pb-16 lg:pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredImages.map((image) => (
              <ScrollAnimations
                key={image.id}
                animation="scaleIn"
                delay={(image.id % 8) * 100}
              >
                <div
                  className="group relative overflow-hidden rounded-2xl cursor-pointer hover-lift hover-glow"
                  // onClick={() => setSelectedImage(image.src)}
                >
                  <ParallaxSection speed={0.05}>
                    <img
                      src={image.src}
                      
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </ParallaxSection>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                      {/* <h3 className="text-base sm:text-lg font-semibold">{image.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-200">{image.description}</p> */}
                    </div>
                  </div>
                </div>
              </ScrollAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white hover:text-gray-300 transition-colours z-10 p-2"
            >
              <X size={24} className="sm:w-8 sm:h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

     
     {/* Before/After Section */}
<section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-champagne-50 to-rose-gold-50 animate-gradient-shift">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <ScrollAnimations animation="fadeIn">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-gradient">Before & After</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          See the incredible transformations our clients have experienced
        </p>
      </div>
    </ScrollAnimations>

   <section className="pb-12 sm:pb-16 lg:pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {afterBefore.map((afterBefore) => (
              <ScrollAnimations
                key={afterBefore.id}
                animation="scaleIn"
                delay={(afterBefore.id % 8) * 100}
              >
                <div
                  className="group relative overflow-hidden rounded-2xl cursor-pointer hover-lift hover-glow"
                  // onClick={() => setSelectedImage(image.src)}
                >
                  <ParallaxSection speed={0.05}>
                    <img
                      src={afterBefore.src}
                      
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </ParallaxSection>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                      {/* <h3 className="text-base sm:text-lg font-semibold">{image.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-200">{image.description}</p> */}
                    </div>
                  </div>
                </div>
              </ScrollAnimations>
            ))}
          </div>
        </div>
      </section>
  </div>
</section>


      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-strawberry-600 to-berry-600 text-white parallax">
        <ParallaxSection speed={0.2}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimations animation="fadeIn">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 animate-pulse-glow">Ready for Your Transformation?</h2>
          </ScrollAnimations>
          
          <ScrollAnimations animation="fadeIn" delay={200}>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Book your appointment today and let us create your next stunning look
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

export default Gallery;