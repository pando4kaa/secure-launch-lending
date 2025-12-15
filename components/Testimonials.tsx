import React, { useRef } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Що кажуть наші клієнти
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
             Досвід тих, хто вже захистив свій бізнес разом з нами.
          </p>
        </div>

        <div className="relative group">
            {/* Scroll Buttons */}
            <button 
                onClick={() => scroll('left')} 
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-white p-3 rounded-full shadow-lg text-brand-dark hover:text-brand-blue transition-colors focus:outline-none hidden md:block"
                aria-label="Previous testimonial"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={() => scroll('right')} 
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-white p-3 rounded-full shadow-lg text-brand-dark hover:text-brand-blue transition-colors focus:outline-none hidden md:block"
                aria-label="Next testimonial"
            >
                <ChevronRight size={24} />
            </button>

            {/* Carousel Container */}
            <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {TESTIMONIALS.map((testimonial, index) => (
                    <div 
                        key={index} 
                        className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                             <div className="flex items-center mb-6">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
                                />
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                                    <span className="text-sm text-brand-blue font-medium">{testimonial.role}</span>
                                </div>
                            </div>
                            
                            <div className="flex-grow">
                                <Quote size={24} className="text-brand-blue/20 mb-2" />
                                <p className="text-gray-700 italic leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center">
                                <div className="flex text-yellow-400 text-sm">
                                    {'★'.repeat(5)}
                                </div>
                                <span className="text-xs text-gray-400 ml-2">Verified Review</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Mobile Swipe Hint */}
            <div className="md:hidden flex justify-center mt-4 space-x-1">
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;