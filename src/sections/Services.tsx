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
  ShoppingBag,
  Crown,
  Award,
  RefreshCw,
  Target,
  BookOpen
} from 'lucide-react';
import {
  clip,
  golden,
  silkhairtopper,
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
  BeautyCoursesImg,
  Dandruff,
  jewelleryrentimg,
  jewellerysaleimg,
  Lippigmentation,
  Scalp,
  Dressrent,
  Dresssale,
   buns,
  scalpTopper,
  wigs,
permanenthairextension,
ponytail,
bands,
  sidepatches,
  streakcoloured,
} from '../assets';


interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'hair' | 'skin' | 'creative'|'boutique';
  details: string;
  image?: string;
}

const services: Service[] = [
  {
    id: 'hair-extensions',
    title: 'Hair Extensions',
    description: 'Add length & volume with premium quality extensions made from 100% real natural human hair. Transform your look instantly with our premium extensions, available in various lengths, colors, and textures to perfectly match your natural hair.',
    icon: <Crown className="w-6 h-6" />,
    category: 'hair',
    details: 'Transform your look instantly with our premium hair extensions. We offer various lengths, colours, and textures to match your natural hair perfectly.',
    image: HairImg
  },
 
  {
    id: 'microblading-eyebrow',
    title: 'Eyebrow Microblading',
    description: 'Achieve the perfect eyebrows with our semi-permanent, customized microblading technique. Designed to create natural-looking, defined brows that suit your face shape. Ideal for those with sparse, uneven, or thin brows.',
    icon: <Target className="w-6 h-6" />,
    category: 'skin',
    details: 'Eyebrow microblading involves implanting pigments into the skin using fine strokes to mimic natural hairs. This creates fuller, well-shaped brows that last 1–2 years. The procedure is safe, painless, and fully customized for your features. Perfect for effortless beauty every day.',
    image: MicrobladingImg
},
{
    id: 'microblading-scalp',
    title: 'Scalp Pigmentation',
    description: 'Restore the look of natural hair density with our customized scalp pigmentation technique. Ideal for men and women experiencing thinning hair or bald spots. Creates a realistic illusion of fuller hair instantly.',
    icon: <Target className="w-6 h-6" />,
    category: 'skin',
    details: 'Scalp micropigmentation is a non-surgical, customized procedure that deposits pigment into the scalp, simulating hair follicles. It provides a natural, clean look and improves confidence. Long-lasting, low-maintenance, and suitable for all hair types. Perfect for thinning hair solutions.',
    image: Scalp
},

  {
    id: 'microblading-lip',
    title: 'Lip Pigmentation',
    description: 'Enhance your lips with a soft, natural tint through semi-permanent lip pigmentation. Achieve symmetrical, fuller-looking lips without the need for constant lipstick application. Safe and long-lasting technique.',
    icon: <Target className="w-6 h-6" />,
    category: 'skin',
    details: 'Lip pigmentation microblading enhances your lip color and shape with natural pigments. It helps correct asymmetry and adds definition for a youthful look. The results last for months and require minimal upkeep. Perfect for anyone who desires effortless, beautiful lips every day.',
    image: Lippigmentation
  },
  {
    id: 'hair-spa',
    title: 'Hair Spa',
    description: 'Indulge in a luxurious hair spa for deep nourishment and relaxation. Designed to repair damage, improve scalp health, and restore shine. Perfect for all hair types, including chemically treated hair.',
    icon: <Droplets className="w-6 h-6" />,
    category: 'hair',
    details: 'Our hair spa treatment includes deep conditioning, scalp massage, and steam therapy for complete rejuvenation. It strengthens the roots, adds softness, and improves circulation for healthy growth. Ideal for dry, frizzy, or damaged hair in need of intense care.',
    image: HairSpaImg
  },
  {
    id: 'keratin',
    title: 'Keratin Treatment',
    description: 'Transform frizzy, unmanageable hair into silky smooth locks with our keratin treatment. A long-lasting solution for soft, shiny, and straight hair that stays frizz-free for months.',
    icon: <Sparkles className="w-6 h-6" />,
    category: 'hair',
    details: 'Keratin treatment coats your hair with natural proteins that eliminate frizz and restore smoothness. It strengthens hair, adds shine, and makes styling easy. The results last up to 3–4 months with proper maintenance. Perfect for a salon-smooth finish every day.',
    image: KeratinTreatmentImg
  },
  {
    id: 'hair-colouring',
    title: 'Hair Colouring',
    description: 'Discover a range of vibrant and natural hair color options with our professional coloring services. Whether you want bold highlights or a complete transformation, we have the perfect shade for you.',
    icon: <Palette className="w-6 h-6" />,
    category: 'hair',
    details: 'Our experts use premium, ammonia-free colors to ensure healthy and shiny results. From trendy balayage to classic global coloring, we create shades that complement your style and skin tone. Long-lasting color with zero damage to your hair’s texture and health.',
    image: HairColoringImg
  },
  {
    id: 'hair-botox',
    title: 'Hair Botox',
    description: 'Revive dull, damaged hair with our advanced hair botox treatment. Deeply nourishes strands, repairs split ends, and restores elasticity for a youthful, healthy look.',
    icon: <Heart className="w-6 h-6" />,
    category: 'hair',
    details: 'Hair Botox is a chemical-free, deep-conditioning treatment that smooths and strengthens your hair from within. It repairs damage caused by heat, pollution, and chemicals. Leaves hair soft, manageable, and frizz-free for weeks. Perfect for restoring shine and vitality.',
    image: HairBotoxImg
  },
  {
    id: 'hair-smoothening',
    title: 'Hair Smoothening Treatment',
    description: 'Get soft, silky, and straight hair with our professional smoothening service. Tames frizz, reduces volume, and makes your hair easy to manage without damaging chemicals.',
    icon: <Zap className="w-6 h-6" />,
    category: 'hair',
    details: 'Hair smoothening uses safe solutions to relax hair bonds and achieve a natural straight look. It eliminates frizz, adds shine, and keeps your hair manageable for weeks. Perfect for those who want sleek hair without harsh treatments like rebonding.',
    image: HairSmootheningImg
  },
  {
    id: 'hair-dandruff-treatment',
    title: 'Hair Dandruff Treatment',
    description: 'Say goodbye to dandruff and itchy scalp with our specialized dandruff care. Soothes irritation, removes flakes, and restores scalp health for stronger, healthier hair.',
    icon: <Zap className="w-6 h-6" />,
    category: 'hair',
    details: 'Our dandruff treatment targets the root cause of scalp flakes using medicated solutions and scalp therapy. It relieves dryness, reduces inflammation, and promotes a healthy scalp environment. Regular sessions ensure lasting results and beautiful, dandruff-free hair.',
    image: Dandruff
  },
  {
    id: 'hair-growth',
    title: 'Hair Growth Treatment',
    description: 'Boost natural hair growth with our proven therapy sessions. Strengthens roots, reduces hair fall, and promotes thicker, healthier strands over time.',
    icon: <RefreshCw className="w-6 h-6" />,
    category: 'hair',
    details: 'Our hair growth treatment combines advanced scalp therapy, nourishing serums, and lifestyle guidance to improve follicle strength. It stimulates growth and prevents thinning. Suitable for both men and women looking for a natural, long-term hair solution.',
    image: HairGrowthImg
  },
  {
    id: 'global-colouring',
    title: 'Global Hair Coloring',
    description: 'Experience a complete color makeover with our global coloring service, customized to complement your skin tone. Perfect for those looking for a bold transformation or a rich, uniform shade across all strands.',
    icon: <PaintBucket className="w-6 h-6" />,
    category: 'hair',
    details: 'Global coloring provides full-head coverage in your desired shade, from natural tones to vibrant colors. We carefully choose and style colors that enhance your unique skin tone for a flattering, personalized look. Our process uses high-quality, ammonia-free products that protect your hair. Get a stunning new look with long-lasting shine and minimal maintenance.',
    image: GlobalColoringImg
},

  {
    id: 'hydra-facial',
    title: 'Hydra Facial',
    description: 'Rejuvenate your skin with our hydra facial that deeply cleanses, exfoliates, and hydrates. Perfect for achieving an instant glow for all skin types.',
    icon: <Sun className="w-6 h-6" />,
    category: 'skin',
    details: 'Our hydra facial treatment combines cleansing, exfoliation, hydration, and antioxidant protection in one session. It removes impurities, unclogs pores, and restores radiance. Gentle yet effective, it leaves your skin refreshed, plump, and glowing instantly.',
    image: HydraFacialImg
  },
  {
    id: 'chemical-peel',
    title: 'Chemical Peel Treatment',
    description: 'Reveal youthful, radiant skin with our professional chemical peel treatments. Helps reduce dark spots, scars, and uneven texture for smoother skin.',
    icon: <Star className="w-6 h-6" />,
    category: 'skin',
    details: 'Chemical peels exfoliate the top layers of your skin to remove dead cells and promote regeneration. This reduces pigmentation, acne scars, and fine lines. Suitable for all skin types, with customized strength levels for safe and effective results.',
    image: ChemicalPeelImg
  },
  {
    id: 'skin-brightening',
    title: 'Skin Brightening Treatment',
    description: 'Get an even, radiant complexion with our skin brightening treatments. Reduces dark spots and dullness for a glowing, healthy look.',
    icon: <Sparkles className="w-6 h-6" />,
    category: 'skin',
    details: 'Our skin brightening therapy targets pigmentation and uneven tone using safe, dermatologist-approved products. It enhances natural glow, improves clarity, and reduces tanning effects. Perfect for restoring your skin’s brightness and confidence.',
    image: SkinBrighteningImg
  },
  {
    id: 'nail-art',
    title: 'Nail Art & Care',
    description: 'Express your creativity with our stylish nail art and care services. Includes manicures, nail extensions, and beautiful designs for every occasion.',
    icon: <Brush className="w-6 h-6" />,
    category: 'creative',
    details: 'Our nail care services include cutting, shaping, polishing, and unique nail art designs. We use premium products for durability and shine. Choose from trendy designs or customize your own for a personalized look. Perfect for parties, weddings, or everyday style.',
    image: NailArtImg
  },
  {
    id: 'tattoo',
    title: 'Tattoos Design',
    description: 'Get stunning, custom-designed tattoos by skilled professionals. From minimalistic to bold artwork, we create designs that tell your story.',
    icon: <Award className="w-6 h-6" />,
    category: 'creative',
    details: 'Our tattoo artists specialize in creating unique, personalized designs using safe and hygienic techniques. From small, delicate patterns to detailed masterpieces, we ensure precision and creativity. Long-lasting ink and pain-minimized procedures for a comfortable experience.',
    image: TattooDesignImg
  },
  {
    id: 'manicure-pedicure',
    title: 'Manicure & Pedicure',
    description: 'Pamper your hands and feet with our professional manicure and pedicure services. Includes nail care, exfoliation, and relaxing massage.',
    icon: <Heart className="w-6 h-6" />,
    category: 'creative',
    details: 'Our manicure and pedicure service ensures complete nail care, including shaping, cuticle cleaning, and hydrating treatments. We also provide soothing massages and premium polish options for a perfect finish. Ideal for maintaining healthy and beautiful hands and feet.',
    image: ManicurePedicureImg
  },
  {
    id: 'dress-sale',
    title: 'Dress Sales',
    description: 'Shop exclusive boutique dresses, including designer gowns, lehengas, and sarees. Perfect for weddings, parties, and special occasions.',
    icon: <ShoppingBag className="w-6 h-6" />,
    category: 'boutique',
    details: 'Explore a wide range of traditional and modern outfits crafted with premium fabrics. From bridal lehengas to party gowns, we offer elegant designs that fit every style and occasion. Each piece is made to enhance your grace and sophistication.',
    image: Dresssale
  },
  {
    id: 'dress-rental',
    title: 'Dress Rental',
    description: 'Rent exquisite boutique dresses for weddings, receptions, and parties. Affordable, stylish, and available in various sizes.',
    icon: <ShoppingBag className="w-6 h-6" />,
    category: 'boutique',
    details: 'Choose from our premium collection of lehengas, gowns, and bridal outfits available for rent. Perfect for those who want a luxurious look without spending too much. Clean, well-maintained, and ready for your special day.',
    image: Dressrent
  },
  {
    id: 'jewellery-sale',
    title: 'Jewellery Sales',
    description: 'Shop exquisite bridal and party jewelry sets crafted with premium quality. Includes traditional and contemporary designs.',
    icon: <ShoppingBag className="w-6 h-6" />,
    category: 'boutique',
    details: 'Our jewelry collection features bridal sets, earrings, chokers, and temple jewelry designed to elevate your look. Each piece is crafted with attention to detail for timeless elegance. Perfect for weddings and festive occasions.',
    image: jewellerysaleimg
  },
  {
    id: 'jewellery-rental',
    title: 'Jewellery Rental',
    description: 'Rent stunning jewelry pieces for weddings and events. Affordable, stylish, and available in various traditional designs.',
    icon: <ShoppingBag className="w-6 h-6" />,
    category: 'boutique',
    details: 'Our rental jewelry collection offers luxurious designs for every occasion at a fraction of the cost. Choose from bridal sets, earrings, and statement pieces that complete your outfit. High-quality, sanitized, and delivered ready to wear.',
    image: jewelleryrentimg
  },
  {
    id: 'courses',
    title: 'Beauty Courses',
    description: 'Learn professional beauty techniques with our certified training programs. Perfect for aspiring makeup artists and beauty professionals.',
    icon: <BookOpen className="w-6 h-6" />,
    category: 'creative',
    details: 'Our courses cover hairstyling, skincare, nail art, and advanced makeup techniques. Certified trainers ensure hands-on practice and industry-ready skills. Ideal for beginners and professionals looking to upgrade their expertise and start a successful beauty career.',
    image: BeautyCoursesImg
  }

];

const categories = [
  { id: 'all', label: 'All Services', icon: <Star className="w-4 h-4" /> },
  { id: 'hair', label: 'Hair Care', icon: <Scissors className="w-4 h-4" /> },
  { id: 'skin', label: 'Skin Care', icon: <Sun className="w-4 h-4" /> },
  { id: 'creative', label: 'Creative', icon: <Brush className="w-4 h-4" /> },
  { id: 'boutique', label: 'Boutique', icon: <ShoppingBag className="w-4 h-4" /> }

];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <>
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
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center text-pink-600 group-hover:text-pink-800 transition-colours duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-700 transition-colours duration-300">
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
                    className="flex-1 bg-pink-100 text-pink-700 py-3 px-4 rounded-xl font-medium hover:bg-pink-200 transition-colours duration-300"
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
   {/* Products Section */}
<section id="products" className="py-20 bg-gradient-to-br from-white via-pink-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">Products</span>
      </h2>
      <p className="text-xl text-pink-700 max-w-3xl mx-auto leading-relaxed">
        Explore our premium hair extension products designed for elegance and comfort.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          id: 1,
          name: "l-Tip Permanent Hair Extension",
          desc: "Experience natural-looking length and volume that blends seamlessly with your real hair. Crafted from 100% human hair, these extensions ensure a flawless finish.",
          img: permanenthairextension
        },
        {
          id: 2,
          name: "Scalp Topper",
          desc: "Perfect for thinning crown areas, our scalp topper mimics a real scalp and gives a fuller appearance. It’s breathable, lightweight, and blends naturally.",
          img: scalpTopper
        },
        {
          id: 3,
          name: "Volumizers",
          desc: "Instantly enhance hair volume with our clip-in volumizers. Made with real human hair for a natural bounce and easy daily use.",
          img: clip
        },
        {
          id: 4,
          name: "Side Patches",
          desc: "Add subtle volume to the sides or cover thinning areas effortlessly. Side patches offer a natural look and are simple to wear daily.",
          img: sidepatches
        },
        {
          id: 5,
          name: "Hair Wigs",
          desc: "Transform your look instantly with premium human hair wigs. Styled for elegance, comfort, and a natural hairline.",
          img: wigs
        },
        {
          id: 6,
          name: "Hair Bangs",
          desc: "Switch up your style with trendy, clip-in bangs. No cutting needed – just clip and go for a fresh, youthful look.",
          img: bands
        },
        {
          id: 7,
          name: "Ponytails",
          desc: "Achieve a sleek, polished look with our easy-to-wear ponytail extensions. Perfect for casual or festive looks.",
          img: ponytail
        },
        {
          id: 8,
          name: "Streaks - Coloured Hair Extension",
          desc: "Add pops of color without any dye damage. Available in multiple vibrant shades to match your personality.",
          img: streakcoloured
        },
        {
          id: 9,
          name: "Hair Buns",
          desc: "Create elegant hairstyles in seconds with our stylish bun extensions – ideal for weddings, parties, or everyday wear.",
          img: buns
        },
        {
          id: 10,
          name: "Silk Hair Topper",
          desc: "This silk base topper offers premium coverage for thinning crowns. It mimics the scalp perfectly for a discreet finish.",
          img: silkhairtopper
        },
        {
          id: 11,
          name: "Golden Blonde Single Clip Highlight",
          desc: "Brighten your hair with golden blonde streaks using our reusable clip-in highlight – no chemical treatments required.",
          img: golden
        }
      ].map((product, index) => (
        <div
          key={product.id}
          className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-pink-100"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <img src={product.img} alt={product.name} className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-pink-700 text-sm mb-4 leading-relaxed">{product.desc}</p>
            <a
              href={`https://wa.me/919080925492?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(product.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gradient-to-r from-pink-500 to-pink-700 text-white py-3 rounded-xl font-medium hover:from-pink-600 hover:to-pink-800 transform hover:scale-105 transition-all duration-300"
            >
              Order Now
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



    </>
  );
}
