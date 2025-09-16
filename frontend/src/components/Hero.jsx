import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data }) => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-light text-slate-800 mb-6 tracking-tight">
            {data.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-600 mb-8 font-light tracking-wide">
            {data.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('#projects')}
              className="bg-slate-800 text-white hover:bg-slate-700 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('#contact')}
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={() => scrollToSection('#about')}
        >
          <ChevronDown size={32} className="text-slate-400 hover:text-slate-600 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Hero;