"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Award, Shield, Star, ChevronRight, Play } from 'lucide-react';

const NSRArowanaLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const galleryVideos = [
    { id: "xsk5sOy5Nhk", title: "Super Red Essence", category: "Elite Collection" },
    { id: "0GidTxvAPZc", title: "Super Red Essence", category: "Elite Collection" },
    { id: "4BAUzhVz9QI", title: "NSR Masterpiece", category: "Featured Video" },
    { id: "0uCYa8t6-Rg", title: "Super Red Essence", category: "Rare Specimen" },
    { id: "r1M61jVS7s4", title: "Adult Super Red", category: "Export Quality" },
    { id: "rFc-Cw5cGY8", title: "Pure Kapuas Hulu Bloodline", category: "Breeder Select" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-red-900 selection:text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-red-500/20 shadow-lg shadow-red-500/10">
                <img src="/Logo NSR.png" alt="NSR Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-[0.2em] text-white leading-none"><span className="italic font-serif bg-gradient-to-r from-red-500 via-red-400 to-amber-400 bg-clip-text text-transparent">
              NSR Arwana
            </span></span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500/80 mt-1">Premium Breeder</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10">
              {['Home', 'About', 'Collection', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-[11px] uppercase tracking-[0.2em] text-slate-300 hover:text-red-500 transition-all duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-red-500 transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10"></div>
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none brightness-[0.7] contrast-[1.1]"
            src="https://www.youtube.com/embed/4BAUzhVz9QI?autoplay=1&mute=1&loop=1&playlist=4BAUzhVz9QI&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 border border-amber-500/30 rounded-full mb-8 bg-amber-500/5 backdrop-blur-sm">
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-400 font-semibold">Exotic Kalimantan Heritage</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-8 drop-shadow-2xl">
            Pure <br />
            <span className="italic font-serif bg-gradient-to-r from-red-500 via-red-400 to-amber-400 bg-clip-text text-transparent">
              Super Red
            </span>
          </h1>
          
          <p className="text-sm md:text-lg tracking-[0.2em] uppercase text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => scrollToSection('collection')}
              className="px-12 py-5 bg-red-600 text-white text-[11px] uppercase tracking-widest font-bold hover:bg-red-700 transition-all duration-500 shadow-xl shadow-red-900/20"
            >
              Explore Collection
            </button>
            <a 
              href="https://wa.me/6285252219988"
              className="px-12 py-5 bg-white/5 backdrop-blur-md border border-white/20 text-white text-[11px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-3"
            >
              <Phone size={14} /> WhatsApp Admin
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
          <span className="text-[9px] uppercase tracking-[0.4em] text-slate-500 rotate-90 mb-4">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-red-500 to-transparent"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                  src="/Foto Jichong.jpeg" 
                  alt="Founder Eddy"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[2s]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-red-600 p-8 rounded-xl shadow-2xl">
                <p className="text-4xl font-serif italic text-white leading-none">Eddy</p>
                <p className="text-[10px] uppercase tracking-widest text-red-100 mt-2">Founder</p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-red-600"></div>
                  <span className="text-xs uppercase tracking-[0.4em] text-red-500 font-bold">The Heritage</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">Authentic <span className="text-red-500 italic font-serif">Kapuas Hulu</span></h2>
                <p className="text-slate-400 leading-relaxed text-lg font-light">
                  NSR Arwana adalah peternak spesialis Arwana Super Red endemik dari Kapuas Hulu, Kalimantan Barat. Kami berkomitmen menyediakan spesimen dengan anatomi sempurna yang intens.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
                <div className="space-y-2">
                  <h4 className="text-3xl font-serif text-white">7+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Years Excellence</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-serif text-white">Global</h4>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Shipping Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <span className="text-xs uppercase tracking-[0.5em] text-amber-500 font-bold">Premium Selection</span>
            <h2 className="text-4xl font-light text-white tracking-tight uppercase">Masterpiece <span className="text-red-600">Collection</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Super Red', color: 'Deep Crimson', desc: 'Warna merah darah pekat dengan ring tebal.' },
              { title: 'Butterfly', color: 'Classic Legend', desc: 'Bentuk tubuh ideal dengan genetik Kalimantan murni.' }
            ].map((item, idx) => (
              <div key={idx} className="group p-12 bg-[#0c0c0c] border border-white/5 hover:border-red-500/30 transition-all duration-500 rounded-3xl">
                <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold block mb-4">{item.color}</span>
                <h3 className="text-3xl font-light text-white uppercase tracking-wider mb-6">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{item.desc}</p>
                <div className="w-12 h-1 bg-red-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - VIDEO GRID */}
      <section id="gallery" className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.4em] text-red-500 font-bold">Cinematic Display</span>
              <h2 className="text-4xl font-light text-white tracking-tight uppercase">The Gallery</h2>
            </div>
            <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] max-w-xs leading-loose text-right">
              Keindahan Super Red Arwana dalam gerakan sinematik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryVideos.map((video, index) => (
              <div key={index} className="group relative space-y-4">
                <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl transition-all duration-500 group-hover:border-red-500/50">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </div>
                <div className="px-2">
                  <p className="text-white font-medium uppercase tracking-widest text-xs">{video.title}</p>
                  <p className="text-amber-500 text-[9px] uppercase tracking-widest mt-1">{video.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0c0c0c] to-black rounded-[40px] p-12 md:p-20 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-16">
              <div className="space-y-10">
                <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">Inquiry & <br/><span className="text-red-500 italic font-serif">Consultation</span></h2>
                <p className="text-slate-400 text-lg font-light leading-relaxed">
                  Bawa pulang simbol keberuntungan dan kemewahan. Kami melayani pengiriman seluruh dunia dengan standar keamanan tertinggi.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                      <Phone size={20} />
                    </div>
                    <a href="https://wa.me/6281289667711" className="text-white font-medium hover:text-red-500 transition tracking-widest text-sm">+62 852-5221-9988</a>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                      <Mail size={20} />
                    </div>
                    <a href="mailto:fabymotor889@gmail.com" className="text-white font-medium hover:text-red-500 transition tracking-widest text-sm">fabymotor889@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center text-red-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium tracking-wider text-sm">Putusibau Kapuas Hulu</p>
                    <p className="text-slate-500 text-xs mt-1 uppercase tracking-widest leading-loose">Kalimantan Barat, Indonesia</p>
                  </div>
                </div>

                {/* MAPS INTEGRATION */}
                <div className="aspect-video w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11839.142635753098!2d112.92837850733697!3d0.8469682973308277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3201ea6a83ff27d9%3A0x87452ab659f2e349!2sPutussibau%2C%20Tanjung%20Jati%2C%20Putussibau%20Selatan%2C%20Kapuas%20Hulu%20Regency%2C%20West%20Kalimantan!5e1!3m2!1sen!2sid!4v1767163901773!5m2!1sen!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale contrast-[1.1] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-10">
          <div className="flex items-center space-x-3 opacity-80">
            <div className="w-10 h-10 rounded overflow-hidden border border-red-500/30">
              <img src="/Logo NSR.png" alt="NSR Logo" className="w-full h-full object-contain" />
            </div>
            <span className="italic font-serif bg-gradient-to-r from-red-500 via-red-400 to-amber-400 bg-clip-text text-transparent">
              NSR Arwana
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {['Home', 'About', 'Collection', 'Gallery', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors">{item}</button>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-slate-700 max-w-md leading-[2.5]">
            Established 2017 — NSR Arwana Prestige Breeding. <br />
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NSRArowanaLanding;