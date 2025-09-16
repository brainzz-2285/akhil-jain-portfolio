import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-8">
              {data.title}
            </h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed">
              {data.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Key Achievements</h3>
            <div className="space-y-4">
              {data.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-slate-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;