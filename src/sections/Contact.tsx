import React from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';
import ScrollAnimations from '../components/ScrollAnimations';

const Contact = () => {
  return (
    <div id="contact" className="py-12 sm:py-16 lg:py-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-strawberry-50 to-rose-gold-50 py-12 sm:py-16 lg:py-20 animate-gradient-shift">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimations animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-gradient">
                Get in Touch
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Ready to transform your look or start your beauty journey? We're here to help you every step of the way.
                Contact us today to book your appointment or learn more about our services.
              </p>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollAnimations animation="fadeIn">
              <div>
                <h2 className="text-1xl sm:text-1xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-gradient text-center">
                  Contact Information
                </h2>

                <div className="space-y-6 sm:space-y-8">
                  {/* Address */}
                  <div className="flex items-start space-x-4 hover-lift group">
                    <div className="bg-strawberry-100 p-3 rounded-lg group-hover:bg-strawberry-200 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-strawberry-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        123 Beauty Street<br />
                        Anna Nagar, Madurai<br />
                        Tamil Nadu 625020
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 hover-lift group">
                    <div className="bg-strawberry-100 p-3 rounded-lg group-hover:bg-strawberry-200 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-strawberry-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600 text-sm sm:text-base">+91 9876543210</p>
                      <p className="text-gray-600 text-sm sm:text-base">+91 9876543211</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 hover-lift group">
                    <div className="bg-strawberry-100 p-3 rounded-lg group-hover:bg-strawberry-200 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-strawberry-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600 text-sm sm:text-base">info@strawberryartistry.com</p>
                      <p className="text-gray-600 text-sm sm:text-base">bookings@strawberryartistry.com</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start space-x-4 hover-lift group">
                    <div className="bg-strawberry-100 p-3 rounded-lg group-hover:bg-strawberry-200 transition-colors duration-300">
                      <Clock className="w-6 h-6 text-strawberry-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Working Hours</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Monday - Sunday</p>
                      <p className="text-gray-600 text-sm sm:text-base">9:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
                  <a
                    href="https://wa.me/919080925492"
                    className="w-full sm:w-auto bg-green-600 text-white py-3 px-6 rounded-lg text-base font-semibold hover:bg-green-700 hover-lift hover-glow flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2" size={18} />
                    WhatsApp Us
                  </a>
                  <a
                    href="tel:+919080925492"
                    className="w-full sm:w-auto border-2 border-strawberry-600 text-strawberry-600 py-3 px-6 rounded-lg text-base font-semibold hover:bg-strawberry-600 hover:text-white hover-lift flex items-center justify-center"
                  >
                    <Phone className="mr-2" size={18} />
                    Call Now
                  </a>
                </div>
              </div>
            </ScrollAnimations>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
