import React, { useEffect, useState } from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import { HERO } from '../constants';
import { generateHeroImage } from '../services/geminiService';

const Hero: React.FC = () => {
  const [bgImage, setBgImage] = useState<string | null>(null);

  useEffect(() => {
    // Attempt to generate image if API key is present, otherwise fallback is handled by CSS
    if (process.env.API_KEY) {
        generateHeroImage().then(img => {
            if (img) setBgImage(img);
        });
    }
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-dark min-h-screen flex flex-col justify-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {bgImage ? (
             <img src={bgImage} alt="AI Generated Cyber Security Background" className="w-full h-full object-cover opacity-30" />
        ) : (
            // Fallback gradient matching brand colors
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-black"></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:w-2/3">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-brand-blue mb-8">
                <span className="flex h-2 w-2 rounded-full bg-brand-blue mr-2 animate-pulse"></span>
                <span className="text-sm font-semibold uppercase tracking-wide">Secure Launch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Втратити довіру — <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    один SQL-запит.
                </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                {HERO.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                    href="#contact" 
                    className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-brand-blue hover:bg-blue-700 transition-all duration-300 shadow-[0_0_20px_rgba(0,159,227,0.3)] hover:shadow-[0_0_30px_rgba(0,159,227,0.5)] transform hover:-translate-y-1"
                >
                    {HERO.cta}
                    <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                    href="#process" 
                    className="inline-flex justify-center items-center px-8 py-4 border border-gray-600 text-base font-bold rounded-lg text-gray-300 hover:text-white hover:border-gray-400 transition-all duration-300 bg-transparent"
                >
                    Як це працює
                </a>
            </div>

            {/* Trust Bar */}
            <div className="mt-16 pt-8 border-t border-gray-800">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Стандарти, за якими працюємо</p>
                <div className="flex flex-wrap items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                   {/* Creating text-based logos for standards to avoid external image dependencies breaking */}
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