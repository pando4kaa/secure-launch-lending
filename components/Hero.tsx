import React, { useEffect, useState } from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import { HERO, HERO_BG_IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    // Rotate images every 5 seconds
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % HERO_BG_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-brand-dark min-h-[600px] flex flex-col justify-start">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 bg-black">
        {HERO_BG_IMAGES.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={`Security Background ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentBgIndex ? 'opacity-40' : 'opacity-0'
            }`}
          />
        ))}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left h-full flex flex-col justify-center">
        <div className="lg:w-2/3">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-brand-blue mb-6">
                <span className="flex h-2 w-2 rounded-full bg-brand-blue mr-2 animate-pulse"></span>
                <span className="text-sm font-semibold uppercase tracking-wide">Secure Launch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Втратити довіру — <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    один SQL-запит.
                </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                {HERO.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                    href="#contact" 
                    className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-brand-blue hover:bg-blue-700 transition-all duration-300 shadow-[0_0_20px_rgba(0,159,227,0.3)] hover:shadow-[0_0_30px_rgba(0,159,227,0.5)] transform hover:-translate-y-1 whitespace-nowrap"
                >
                    {HERO.cta}
                    <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                    href="#process" 
                    className="inline-flex justify-center items-center px-8 py-4 border border-gray-600 text-base font-bold rounded-lg text-gray-300 hover:text-white hover:border-gray-400 transition-all duration-300 bg-transparent whitespace-nowrap"
                >
                    Як це працює
                </a>
            </div>

            {/* Trust Bar */}
            <div className="mt-12 pt-8 border-t border-gray-800">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Стандарти, за якими працюємо</p>
                <div className="flex flex-wrap items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 justify-center lg:justify-start">
                   <div className="flex items-center space-x-2">
                        <ShieldCheck className="h-6 w-6 text-white" />
                        <span className="text-xl font-bold text-white tracking-widest">OWASP</span>
                   </div>
                   <div className="flex items-center space-x-2">
                        <div className="h-6 w-1 bg-white"></div>
                        <span className="text-xl font-bold text-white tracking-tighter">NIST</span>
                   </div>
                   <div className="border border-white px-2 py-1">
                        <span className="text-sm font-bold text-white">ISO 27001</span>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;