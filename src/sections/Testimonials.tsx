import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollAnimations from '../components/ScrollAnimations';
import ParallaxSection from '../components/ParallaxSection';
import g1 from '../assets/g1.jpg';
import g3 from '../assets/g3.jpg';
import g4 from '../assets/g4.jpg';
import g5 from '../assets/g5.jpg';
import g6 from '../assets/g6.jpg';
import g7 from '../assets/g7.jpg';
import g8 from '../assets/g8.jpg';
import g9 from '../assets/g9.jpg';
import g11 from '../assets/g11.jpg';
import g12 from '../assets/g12.jpg';
import g13 from '../assets/g13.jpg';
import g14 from '../assets/g14.jpg';
import g15 from '../assets/g15.jpg';
import g16 from '../assets/g16.jpg';


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Bride",
    image: g1,
    content: "Strawberryartistry made me feel like a queen on my wedding day. The makeup lasted through the tears, dances, and joy!",
    rating: 5,
    location: "Madurai"
  },
  {
    id: 2,
    name: "Janani Krishnan",
    role: "Beauty Course Student",
    image: g3,
    content: "The beautician course gave me real-world skills and confidence. I now proudly run my own salon in my hometown!",
    rating: 5,
    location: "Madurai"
  },
  {
    id: 3,
    name: "Divya Reddy",
    role: "Regular Customer",
    image: g4,
    content: "Their hair extensions look so natural, I constantly get compliments. It’s been 2 years and I won’t go anywhere else!",
    rating: 5,
    location: "Madurai"
  },
  {
    id: 4,
    name: "Meera Patel",
    role: "Bride",
    image: g5,
    content: "The microblading artist was so skilled and gentle. My brows look perfect every single morning with no effort!",
    rating: 5,
    location: "Madurai"
  },
  {
    id: 5,
    name: "Kavya Nair",
    role: "Working Professional",
    image: g6,
    content: "Their nail art is unbelievably creative and long-lasting. It’s my stress-buster visit every month!",
    rating: 5,
    location: "Madurai"
  },
  {
    id: 6,
    name: "Aishwarya Kumar",
    role: "Bride",
    image: g7,
    content: "My bridal photos turned out stunning thanks to their flawless makeup. They made me feel calm and pampered too!",
    rating: 5,
    location: "Madurai"
  },
  {
    id: 7,
    name: "Sneha Raj",
    role: "Model",
    image: g8,
    content: "The makeup stayed flawless through multiple shoots. Their artists understand camera-ready looks perfectly!",
    rating: 5,
    location: "Chennai"
  },
  {
    id: 8,
    name: "Anitha Mohan",
    role: "Corporate Trainer",
    image: g9,
    content: "The facial glow I got before my big seminar was unbeatable. Strawberryartistry is now my go-to for skin prep!",
    rating: 5,
    location: "Trichy"
  },
  {
    id: 9,
    name: "Revathi Iyer",
    role: "Bride",
    image: g11,
    content: "From consultation to finish, their bridal package was seamless. I felt truly special and heard throughout!",
    rating: 5,
    location: "Coimbatore"
  },
  {
    id: 10,
    name: "Deepika Balan",
    role: "Beauty Student",
    image: g12,
    content: "The trainers are friendly yet professional. I now take freelance makeup bookings with total confidence!",
    rating: 5,
    location: "Madurai"
  },
  {
    id: 11,
    name: "Sowmya Ravi",
    role: "Bride",
    image: g13,
    content: "Mehendi, facial, and saree draping — everything was done with love. Their bridal care is holistic and stress-free!",
    rating: 5,
    location: "Salem"
  },
  {
    id: 12,
    name: "Sandhya Vinod",
    role: "Doctor",
    image: g14,
    content: "Even after long hospital shifts, their services bring me peace. The staff is warm, and the ambiance is so calming!",
    rating: 5,
    location: "Madurai"
  },
  {
    id: 13,
    name: "Haritha Sen",
    role: "Fashion Blogger",
    image: g15,
    content: "Every shoot I’ve done post their makeup has gone viral. They truly enhance your natural features beautifully!",
    rating: 5,
    location: "Tirunelveli"
  },
  {
    id: 14,
    name: "Lakshmi Menon",
    role: "Teacher",
    image: g16,
    content: "Even on short notice, they deliver magic. I always leave their salon feeling more confident and vibrant!",
    rating: 5,
    location: "Theni"
  },
  {
    id: 15,
    name: "Bhavya Suresh",
    role: "Bride",
    image: g1,
    content: "From pre-wedding glow to the final touch-up, everything was perfect. Thank you for making me shine, truly!",
    rating: 5,
    location: "Dindigul"
  },
  {
    id: 16,
    name: "Nisha Varun",
    role: "Makeup Artist",
    image: g3,
    content: "The advanced makeup course helped me land gigs in the film industry. Strawberryartistry truly changed my life!",
    rating: 5,
    location: "Madurai"
  },
  {
    id: 17,
    name: "Aaradhana Nair",
    role: "Student",
    image: g4,
    content: "I joined the summer internship, and it was career-changing. Real clients, real feedback, real growth!",
    rating: 5,
    location: "Virudhunagar"
  },
  {
    id: 18,
    name: "Smitha Ravikumar",
    role: "Fashion Designer",
    image: g5,
    content: "Their hairstylists are absolute geniuses! I always get my look exactly how I imagined — or better!",
    rating: 5,
    location: "Karaikudi"
  },
  {
    id: 19,
    name: "Gayathri Rajan",
    role: "Bride",
    image: g6,
    content: "Bridal makeup, saree tying, and even helping calm my nerves — their team goes above and beyond!",
    rating: 5,
    location: "Tiruppur"
  },
  {
    id: 20,
    name: "Dhanya Priya",
    role: "Housewife",
    image: g7,
    content: "Their skin treatments are pure magic. I feel younger, fresher, and happier after every visit!",
    rating: 5,
    location: "Kovilpatti"
  },
  {
    id: 21,
    name: "Rithika Srinivasan",
    role: "Event Host",
    image: g8,
    content: "I host 3–4 shows a week and they are my styling saviors. Always on time, always on point!",
    rating: 5,
    location: "Erode"
  },
  {
    id: 22,
    name: "Vaishnavi Manoj",
    role: "Bride",
    image: g9,
    content: "Booked them for both engagement and reception. Never felt so pretty and comfortable at once!",
    rating: 5,
    location: "Karur"
  },
  {
    id: 23,
    name: "Yamini Selvan",
    role: "Salon Owner",
    image: g11,
    content: "Trainers are humble and experienced. I now train my own staff using the same methods they taught me!",
    rating: 5,
    location: "Sivakasi"
  },
  {
    id: 24,
    name: "Renu Haridas",
    role: "IT Employee",
    image: g12,
    content: "The only place I trust after long work weeks. Their massages and facials are true therapy!",
    rating: 5,
    location: "Chennai"
  },
  {
    id: 25,
    name: "Anjali Prabhu",
    role: "Bride",
    image: g13,
    content: "They prepped my skin like a pro before the big day. My glow was natural and radiant in every photo!",
    rating: 5,
    location: "Madurai"
  },
  {
    id: 26,
    name: "Kirthika Uday",
    role: "Fashion Influencer",
    image: g14,
    content: "Each makeup session with them becomes content for my followers! Truly Insta-worthy transformations!",
    rating: 5,
    location: "Trichy"
  },
  {
    id: 27,
    name: "Harshita Balaji",
    role: "College Student",
    image: g15,
    content: "I now do my own makeup confidently after their beginner’s workshop. Affordable and empowering!",
    rating: 5,
    location: "Madurai"
  },
  {
    id: 28,
    name: "Varshini Gopal",
    role: "Bride",
    image: g16,
    content: "Traditional saree draping and soft glam makeup — just the vibe I wanted for my South Indian wedding!",
    rating: 5,
    location: "Sivagangai"
  },
  {
    id: 29,
    name: "Shruthi Ramesh",
    role: "HR Executive",
    image: g5,
    content: "I always look forward to their weekend beauty services. Best place to recharge and glow!",
    rating: 5,
    location: "Madurai"
  },
  {
    id: 30,
    name: "Pooja Arul",
    role: "Bride",
    image: g1,
    content: "Reception night was magical thanks to their elegant styling. Every photo looks like a dream!",
    rating: 5,
    location: "Thanjavur"
  },
  {
    id: 31,
    name: "Geetha Lakshmi",
    role: "Makeup Enthusiast",
    image: g9,
    content: "Strawberryartistry helped me turn passion into profession. I now do bridal makeup part-time confidently!",
    rating: 5,
    location: "Madurai"
  },
  {
  id: 32,
  name: "Nivetha Saran",
  role: "Bride",
  image: g4,
  content: "The team understood exactly what I wanted for my bridal look. Every detail was perfect from eyes to lips!",
  rating: 5,
  location: "Madurai"
},
{
  id: 33,
  name: "Ishwarya Ilango",
  role: "Beauty Course Graduate",
  image: g13,
  content: "Their hands-on training and live demos boosted my skills. Now I confidently take bridal and party makeup bookings!",
  rating: 5,
  location: "Tuticorin"
},
{
  id: 34,
  name: "Sneha Murugan",
  role: "Teacher",
  image: g1,
  content: "The makeover they gave me for my anniversary was stunning. My students didn’t stop complimenting me!",
  rating: 5,
  location: "Dindigul"
},
{
  id: 35,
  name: "Keerthana Raj",
  role: "Bride",
  image: g6,
  content: "From trial to the big day, their patience and creativity stood out. I looked and felt like royalty!",
  rating: 5,
  location: "Salem"
},
{
  id: 36,
  name: "Lavanya Menon",
  role: "Entrepreneur",
  image: g17,
  content: "Booked a full makeover package before a launch event. Everyone asked who styled me. Highly recommend!",
  rating: 5,
  location: "Coimbatore"
},
{
  id: 37,
  name: "Meenakshi Duraikannan",
  role: "Bride",
  image: g16,
  content: "They understood my vision better than I did! Every look was timeless and elegant. Thank you!",
  rating: 5,
  location: "Namakkal"
},
{
  id: 38,
  name: "Soundarya Vel",
  role: "Nurse",
  image: g3,
  content: "After hectic shifts, their relaxing facials are all I need. So soothing and effective!",
  rating: 5,
  location: "Ramanathapuram"
},
{
  id: 39,
  name: "Sowmya Karthik",
  role: "Bride",
  image: g8,
  content: "They made both me and my mother look stunning. The photos still make me smile!",
  rating: 5,
  location: "Kumbakonam"
},
{
  id: 40,
  name: "Vidhya Suresh",
  role: "College Lecturer",
  image: g12,
  content: "Attended their 2-day workshop — absolutely worth it! Learned techniques I now use daily.",
  rating: 5,
  location: "Tirunelveli"
},
{
  id: 41,
  name: "Sangeetha Elumalai",
  role: "Home Baker",
  image: g13,
  content: "They did my shoot makeup for my baking brand — I looked delicious too! Great vibe and team!",
  rating: 5,
  location: "Virudhunagar"
},
{
  id: 42,
  name: "Rajalakshmi Devi",
  role: "Mother of the Bride",
  image: g15,
  content: "My daughter and I both got ready here. We felt pampered, elegant, and very special!",
  rating: 5,
  location: "Cuddalore"
},
{
  id: 43,
  name: "Priyanka Ravi",
  role: "YouTuber",
  image: g16,
  content: "Their transformations are so cinematic — my followers loved my bridal vlog thanks to them!",
  rating: 5,
  location: "Pollachi"
},
{
  id: 44,
  name: "Deepa Narayan",
  role: "Bride",
  image: g7,
  content: "Soft glam, classic draping, perfect timing — couldn’t ask for more. They’re the best in town!",
  rating: 5,
  location: "Perambalur"
},
{
  id: 45,
  name: "Aishwarya Mani",
  role: "Corporate Trainer",
  image: g1,
  content: "I book their services before any keynote event — they know how to balance professionalism and elegance.",
  rating: 5,
  location: "Vellore"
},
{
  id: 46,
  name: "Divya Sri",
  role: "Bride",
  image: g3,
  content: "From hairstyle trials to flawless makeup — they made my wedding stress-free and beautiful.",
  rating: 5,
  location: "Pudukkottai"
},
{
  id: 47,
  name: "Monika Bharathi",
  role: "Boutique Owner",
  image: g11,
  content: "Their styling services help my models stand out in photoshoots. Very creative and detail-focused!",
  rating: 5,
  location: "Nagapattinam"
},
{
  id: 48,
  name: "Janani Vasanth",
  role: "Bride",
  image: g15,
  content: "They made me glow without overdoing anything. Subtle, fresh, and picture-perfect!",
  rating: 5,
  location: "Thoothukudi"
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
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-strawberry-600 transition-colours duration-300">{testimonial.name}</h3>
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