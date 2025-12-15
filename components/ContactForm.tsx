import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-blue relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Готові перевірити свій продукт на міцність?
            </h2>
            <p className="text-gray-600">
                Залиште заявку на консультацію з експертами IT Specialist. <br/>
                Ми оцінимо ризики та розробимо індивідуальний план захисту.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ім'я</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                        placeholder="Олександр"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Робочий Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                        placeholder="alex@startup.com"
                    />
                </div>
            </div>
            
            <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Посилання на сайт/продукт</label>
                <input 
                    type="text" 
                    id="website" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    placeholder="https://mysaaS.com"
                />
            </div>

            <div className="pt-4">
                <button 
                    type="submit" 
                    className="w-full bg-brand-dark text-white font-bold py-4 rounded-lg hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl transform active:scale-95 duration-200"
                >
                    Отримати консультацію
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                    Натискаючи кнопку, ви погоджуєтесь з політикою конфіденційності. Ваші дані під захистом NDA.
                </p>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;