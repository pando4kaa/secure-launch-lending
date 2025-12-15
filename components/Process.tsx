import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">4 кроки до безпечного запуску</h2>
        </div>

        <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="relative z-10 bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-brand-blue transition-colors duration-300">
                <div className="text-5xl font-extrabold text-gray-800 mb-4 absolute -top-6 -right-2 select-none opacity-50">
                    {step.number}
                </div>
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-4 text-white font-bold text-xl shadow-lg shadow-blue-500/20">
                    {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;