import React, { useState } from 'react';
import {
  Scissors,
  Sparkles,
  Palette,
  Heart,
  Star,
  Zap,
  Droplets,
  Sun,
  PaintBucket,
  Brush,
  Crown,
  Award,
  RefreshCw,
  Target,
  BookOpen
} from 'lucide-react';
import {
  HairImg,
  MicrobladingImg,
  HairSpaImg,
  KeratinTreatmentImg,
  HairColoringImg,
  HairBotoxImg,
  HairSmootheningImg,
  HairGrowthImg,
  GlobalColoringImg,
  HydraFacialImg,
  ChemicalPeelImg,
  SkinBrighteningImg,
  NailArtImg,
  TattooDesignImg,
  ManicurePedicureImg,
  BeautyCoursesImg
} from '../assets';


interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'hair' | 'skin' | 'creative';
  details: string;
  image?: string;
}

const services: Service[] = [
  {
    id: 'hair-extensions',
    title: 'Hair Extensions',
    description: 'Add length & volume with premium quality extensions',
    icon: <Crown className="w-6 h-6" />,
    category: 'hair',
    details: 'Transform your look instantly with our premium hair extensions. We offer various lengths, colors, and textures to match your natural hair perfectly.',
    image: HairImg
  },
  {
    id: 'microblading',
    title: 'Microblading',
    description: 'Perfect eyebrows with semi-permanent technique',
    icon: <Target className="w-6 h-6" />,
    category: 'skin',
    details: 'Achieve perfectly shaped eyebrows with our expert microblading service. Semi-permanent results that last 1-2 years.',
    image:MicrobladingImg
  },
  {
    id: 'hair-spa',
    title: 'Hair Spa',
    description: 'Deep conditioning & relaxation treatment',
    icon: <Droplets className="w-6 h-6" />,
    category: 'hair',
    details: 'Rejuvenate your hair and scalp with our luxurious spa treatment. Includes deep conditioning, massage, and steam therapy.',
    image: HairSpaImg
  },
  {
    id: 'keratin',
    title: 'Keratin Treatment',
    description: 'Smooth, frizz-free hair transformation',
    icon: <Sparkles className="w-6 h-6" />,
    category: 'hair',
    details: 'Eliminate frizz and achieve silky smooth hair with our professional keratin treatment. Results last 3-4 months.',
    image: KeratinTreatmentImg
  },
  {
    id: 'hair-coloring',
    title: 'Hair Coloring',
    description: 'Trendy or classic shades to suit your style',
    icon: <Palette className="w-6 h-6" />,
    category: 'hair',
    details: 'Express yourself with vibrant colors or classic tones. Our colorists use premium products for long-lasting, healthy results.',
    image: HairColoringImg
  },
  {
    id: 'hair-botox',
    title: 'Hair Botox',
    description: 'Revive damaged hair with intensive repair',
    icon: <Heart className="w-6 h-6" />,
    category: 'hair',
    details: 'Restore your hair\'s health and shine with our intensive hair botox treatment. Perfect for damaged or chemically treated hair.',
    image: HairBotoxImg
  },
  {
    id: 'hair-smoothening',
    title: 'Hair Smoothening / Dandruff',
    description: 'Straighten & shine for manageable hair',
    icon: <Zap className="w-6 h-6" />,
    category: 'hair',
    details: 'Achieve straight, manageable hair with our advanced smoothening treatments. Say goodbye to daily styling struggles.',
    image: HairSmootheningImg
  },
  {
    id: 'hair-growth',
    title: 'Hair Growth Treatment',
    description: 'Boost density naturally with proven methods',
    icon: <RefreshCw className="w-6 h-6" />,
    category: 'hair',
    details: 'Stimulate natural hair growth with our specialized treatments. Combines scalp therapy, nutrition, and advanced techniques.',
    image: HairGrowthImg
  },
  {
    id: 'global-coloring',
    title: 'Global Hair Coloring',
    description: 'Full-head color change for dramatic transformation',
    icon: <PaintBucket className="w-6 h-6" />,
    category: 'hair',
    details: 'Complete color transformation with our global coloring service. Perfect for those ready for a bold new look.',
    image: GlobalColoringImg
  },
  {
    id: 'hydra-facial',
    title: 'Hydra Facial',
    description: 'Hydration, cleansing & instant glow',
    icon: <Sun className="w-6 h-6" />,
    category: 'skin',
    details: 'Experience the ultimate facial treatment that cleanses, hydrates, and reveals radiant skin in just one session.',
    image: HydraFacialImg
  },
  {
    id: 'chemical-peel',
    title: 'Chemical Peel',
    description: 'Skin resurfacing & rejuvenation therapy',
    icon: <Star className="w-6 h-6" />,
    category: 'skin',
    details: 'Reveal fresh, youthful skin with our professional chemical peel treatments. Various strengths available for all skin types.',
    image: ChemicalPeelImg
  },
  {
    id: 'skin-brightening',
    title: 'Skin Brightening',
    description: 'Even tone and enhanced radiance',
    icon: <Sparkles className="w-6 h-6" />,
    category: 'skin',
    details: 'Achieve luminous, even-toned skin with our specialized brightening treatments. Reduces dark spots and enhances natural glow.',
    image: SkinBrighteningImg
  },
  {
    id: 'nail-art',
    title: 'Nail Art & Care',
    description: 'Creative nail designs & professional care',
    icon: <Brush className="w-6 h-6" />,
    category: 'creative',
    details: 'Express your creativity with stunning nail art designs. Includes professional manicure and long-lasting polish application.',
    image: NailArtImg
  },
  {
    id: 'tattoo',
    title: 'Tattoo Design',
    description: 'Permanent body art by skilled artists',
    icon: <Award className="w-6 h-6" />,
    category: 'creative',
    details: 'Custom tattoo designs created by our experienced artists. From small delicate pieces to large detailed artwork.',
    image: TattooDesignImg
  },
  {
    id: 'manicure-pedicure',
    title: 'Manicure & Pedicure',
    description: 'Full hand & foot care treatment',
    icon: <Heart className="w-6 h-6" />,
    category: 'creative',
    details: 'Complete nail care including cutting, shaping, cuticle care, and relaxing hand and foot massage.',
    image: ManicurePedicureImg
  },
  {
    id: 'courses',
    title: 'Beauty Courses',
    description: 'Professional beauty training programs',
    icon: <BookOpen className="w-6 h-6" />,
    category: 'creative',
    details: 'Learn professional beauty techniques with our certified training courses. Perfect for aspiring beauty professionals.',
    image: BeautyCoursesImg
  }
];

const categories = [
  { id: 'all', label: 'All Services', icon: <Star className="w-4 h-4" /> },
  { id: 'hair', label: 'Hair Care', icon: <Scissors className="w-4 h-4" /> },
  { id: 'skin', label: 'Skin Care', icon: <Sun className="w-4 h-4" /> },
  { id: 'creative', label: 'Creative', icon: <Brush className="w-4 h-4" /> }
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">Premium</span> Services
          </h2>
          <p className="text-xl text-pink-700 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of beauty services designed to enhance your natural beauty and boost your confidence with expert care and premium products.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-pink-700 text-white shadow-lg transform scale-105'
                  : 'bg-white text-pink-600 border border-pink-300 hover:border-pink-500 hover:text-pink-700 hover:shadow-md'
              }`}
            >
              <span
                className={`transition-transform duration-300 ${
                  activeCategory === category.id ? 'rotate-12' : 'group-hover:rotate-12'
                }`}
              >
                {category.icon}
              </span>
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative p-6 pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center text-pink-600 group-hover:text-pink-800 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-pink-700 text-sm leading-relaxed mb-4">{service.description}</p>
              </div>
              <div className="px-6 pb-6">
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white py-3 px-4 rounded-xl font-medium hover:from-pink-600 hover:to-pink-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Learn More
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-pink-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Modal with Image */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-md w-full mx-auto shadow-2xl transform animate-in zoom-in duration-300">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center text-pink-600">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedService.title}</h3>
                </div>

                {selectedService.image && (
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                )}

                <p className="text-pink-700 leading-relaxed mb-6">{selectedService.details}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 bg-pink-100 text-pink-700 py-3 px-4 rounded-xl font-medium hover:bg-pink-200 transition-colors duration-300"
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
