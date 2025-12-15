import React from 'react';
import { Shield } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="flex items-center mb-4 md:mb-0">
                <Shield className="h-6 w-6 text-brand-blue mr-2" />
                <span className="text-white font-bold text-lg">{COMPANY_NAME}</span>
            </div>

            <div className="text-sm text-center md:text-right">
                <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Всі права захищені.</p>
                <p className="mt-2 text-xs">
                    Безпечна інтеграція в майбутнє.
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;