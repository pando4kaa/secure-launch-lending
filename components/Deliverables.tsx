import React from 'react';
import { DELIVERABLES } from '../constants';
import { FileCode, FileJson, Presentation } from 'lucide-react';

const icons = [FileCode, FileJson, Presentation];

const Deliverables: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                    Результат, який ви отримаєте
                </h2>
                <p className="text-lg text-gray-600 mb-10">
                    Матеріалізація послуги. Ми не даємо порад "взагалі", ми даємо конкретні інструкції.
                </p>

                <div className="space-y-8">
                    {DELIVERABLES.map((item, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <div key={index} className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-brand-blue">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                                    <p className="mt-1 text-base text-gray-500">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="lg:w-1/2 w-full">
                {/* Mockup of a Report/Dashboard */}
                <div className="bg-gray-900 rounded-xl shadow-2xl p-6 border border-gray-800 rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="flex space-x-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-4 font-mono text-sm">
                        <div className="flex justify-between text-gray-400 border-b border-gray-700 pb-2">
                            <span>Vulnerability Report</span>
                            <span>CONFIDENTIAL</span>
                        </div>
                        <div className="p-3 bg-red-900/20 border-l-4 border-red-500 text-red-100">
                            <span className="font-bold block text-red-400">CRITICAL: SQL Injection found in /api/v1/auth</span>
                            <span className="text-xs opacity-70">Status: Verified | Risk: High</span>
                        </div>
                         <div className="p-3 bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-100">
                            <span className="font-bold block text-yellow-400">MEDIUM: IDOR in user profile settings</span>
                            <span className="text-xs opacity-70">Status: Verified | Risk: Medium</span>
                        </div>
                        <div className="h-32 bg-gray-800 rounded animate-pulse opacity-50"></div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Deliverables;