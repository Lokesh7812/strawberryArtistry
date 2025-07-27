import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'gallery', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-xl sm:text-2xl font-bold text-strawberry-600 hover:text-strawberry-700 transition-colors"
            >
              Strawberry Artistry
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-sm xl:text-base font-medium transition-colors hover:text-strawberry-600 ${
                    activeSection === item.href.substring(1) ? 'text-strawberry-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-strawberry-600"></span>
                  )}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-strawberry-600 transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left text-base font-medium transition-colors hover:text-strawberry-600 py-3 px-1 ${
                      activeSection === item.href.substring(1) ? 'text-strawberry-600' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-[70px] sm:pt-[90px]">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-strawberry-400 mb-3 sm:mb-4">
                Strawberryartistry
              </h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Your premium beauty haven in Madurai, specializing in breathtaking bridal makeovers and
                professional beauty education.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/strawberry__artistry?igsh=ZXp2OWZ1a3lpMDA="
                  className="text-gray-400 hover:text-strawberry-400 transition-colors"
                >
                  <Instagram size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.facebook.com/share/1BczAR6Tho/"
                  className="text-gray-400 hover:text-strawberry-400 transition-colors"
                >
                  <Facebook size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://youtube.com/@strawberryartistry5232?si=NNColYWPKr5OwV3o"
                  className="text-gray-400 hover:text-strawberry-400 transition-colors"
                >
                  <Youtube size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="hover:text-strawberry-400 transition-colors"
                  >
                    Bridal Makeup
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="hover:text-strawberry-400 transition-colors"
                  >
                    Beauty Courses
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="hover:text-strawberry-400 transition-colors"
                  >
                    Hair Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="hover:text-strawberry-400 transition-colors"
                  >
                    Microblading service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="hover:text-strawberry-400 transition-colors"
                  >
                    boutique
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="flex-shrink-0" />
                  <span>+91 9080925492</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="flex-shrink-0" />
                  <span>Madurai, Tamil Nadu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="flex-shrink-0" />
                  <span>Mon - Sun: 9 AM - 9 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>
                  <button
                    onClick={() => scrollToSection('#about')}
                    className="hover:text-strawberry-400 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#gallery')}
                    className="hover:text-strawberry-400 transition-colors"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#testimonials')}
                    className="hover:text-strawberry-400 transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="hover:text-strawberry-400 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2025 Strawberryartistry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
