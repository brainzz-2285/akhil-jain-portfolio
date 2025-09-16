import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold hover:text-slate-300 transition-colors"
            >
              AKHIL JAIN
            </button>
            <p className="text-slate-400 mt-2">
              Algorithmic Trading Expert
            </p>
          </div>

          <div className="text-center">
            <p className="text-slate-400 text-sm">
              Designed & Built with{' '}
              <Heart size={16} className="inline mx-1 text-red-400" />{' '}
              and{' '}
              <Code size={16} className="inline mx-1 text-blue-400" />
            </p>
          </div>

          <div className="text-right">
            <p className="text-slate-400 text-sm">
              © {currentYear} Akhil Jain
            </p>
            <p className="text-slate-500 text-xs mt-1">
              All rights reserved
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            "Building innovative solutions that bridge technology and business success"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;