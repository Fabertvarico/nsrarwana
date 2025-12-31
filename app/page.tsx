"use client";

import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const ArowanaLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-red-600 font-bold text-2xl flex items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white mr-2">
                  <span className="text-xl">🐉</span>
                </div>
                Nama Toko
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition">
                Home
              </button>
              <button onClick={() => scrollToSection('validation')} className="text-gray-700 hover:text-red-600 transition">
                Chip Code Validation
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-red-600 transition">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition">
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-red-50">
                Home
              </button>
              <button onClick={() => scrollToSection('validation')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-red-50">
                Chip Code Validation
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-red-50">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-red-50">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
        {/* Background Image Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Nama Toko
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            We sell and provide Super Red of selected arowana fish with the best quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('gallery')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105"
            >
              View Gallery
            </button>
            <a 
              href="tel:081289667711"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105"
            >
              081289667711
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Nama Toko Arowana Farm
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">About Nama Toko</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <span className="font-semibold">Nama Toko</span> is an expert breeder of the endemic super red arowana fish native to Ketungau, Kalimantan since 1970.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                With over 50 years of experience, we have dedicated our lives to breeding and maintaining the highest quality Super Red Arowana specimens. Our farm is recognized internationally for producing champion-grade fish with exceptional color, form, and genetics.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">50+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">1000+</div>
                  <div className="text-gray-700">Happy Customers</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🐉</div>
                    <p className="text-lg">Nama Toko</p>
                    <p className="text-sm">Master Breeder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chip Validation Section */}
      <section id="validation" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Chip Code Validation
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Verify the authenticity of your arowana fish by entering the chip code
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Enter Chip Code
              </label>
              <input 
                type="text" 
                placeholder="e.g., AR-2024-001234"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
              />
            </div>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
              Validate Chip Code
            </button>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Each of our premium arowana fish comes with a unique microchip for authentication and tracking purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Our Gallery
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Premium Super Red Arowana Collection
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <video 
                className="w-full h-full object-cover aspect-square"
                controls
                preload="metadata"
              >
                <source src="/BUTTERFLY 2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Butterfly Arowana</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <video 
                className="w-full h-full object-cover aspect-square"
                controls
                preload="metadata"
              >
                <source src="/copy_3E749131-0576-4AB0-9E1D-83A07A7636E0.MOV" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Super Red Arowana</p>
              </div>
            </div>

            {/* Placeholder items */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-red-200 to-orange-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🐉</div>
                    <p className="text-gray-600 font-semibold">Super Red #{item}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Contact Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="text-red-500 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:081289667711" className="text-gray-300 hover:text-red-500 transition">
                      081289667711
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-red-500 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@test.com" className="text-gray-300 hover:text-red-500 transition">
                      info@test.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-red-500 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">
                      Ketungau, Kalimantan, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none transition"
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none transition"
                />
                <textarea 
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none transition resize-none"
                ></textarea>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Nama Toko. All rights reserved.</p>
          <p className="mt-2">Expert Breeder of Super Red Arowana since 1970</p>
        </div>
      </footer>
    </div>
  );
};

export default ArowanaLanding;