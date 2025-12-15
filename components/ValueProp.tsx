import React from 'react';
import { WHY_US } from '../constants';

const ValueProp: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm">Чому IT Specialist</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-6">
            Вашу систему перевіряє Red Team, <br/> а не просто сканер.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Ми діємо на випередження: імітуємо реальні кібератаки, щоб знайти приховані вразливості бізнес-логіки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_US.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-start">
              <div className="flex-shrink-0 mt-1">
                <feature.icon className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;