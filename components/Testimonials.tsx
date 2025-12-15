import React from 'react';
import { PERSONAS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="audience" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Для кого це рішення?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
             Ми розуміємо ваші болі та розмовляємо вашою мовою, чи ви інженер, чи бізнесмен.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PERSONAS.map((persona, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col h-full relative overflow-hidden">
               <div className="absolute top-0 right-0 -mt-4 -mr-4 text-gray-100">
                   <Quote size={120} />
               </div>
               
               <div className="relative z-10">
                   <div className="flex items-center mb-6">
                       {/* Use a colored placeholder div instead of external image for stability if network fails, or the actual image */}
                       <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-blue-800 flex items-center justify-center text-white text-xl font-bold shadow-md">
                            {persona.name.charAt(0)}
                       </div>
                       <div className="ml-4">
                           <h4 className="text-xl font-bold text-gray-900">{persona.name}</h4>
                           <span className="text-brand-blue font-medium">{persona.role}</span>
                       </div>
                   </div>
                   
                   <blockquote className="text-xl italic text-gray-700 mb-6 font-medium">
                       "{persona.quote}"
                   </blockquote>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
                       <div>
                           <h5 className="text-xs font-bold text-red-500 uppercase tracking-wide mb-2">Страхи (Pains)</h5>
                           <ul className="text-sm text-gray-600 space-y-2">
                               {persona.pains.map((p, i) => <li key={i}>• {p}</li>)}
                           </ul>
                       </div>
                       <div>
                           <h5 className="text-xs font-bold text-green-600 uppercase tracking-wide mb-2">Очікування</h5>
                            <ul className="text-sm text-gray-600 space-y-2">
                               {persona.expectations.map((e, i) => <li key={i}>• {e}</li>)}
                           </ul>
                       </div>
                   </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;