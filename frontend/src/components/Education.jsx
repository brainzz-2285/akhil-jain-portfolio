import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = ({ data }) => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
            Education
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A strong academic foundation in Computer Science that paved the way for a successful technology career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((education, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={20} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {education.degree}
                  </h3>
                  <h4 className="text-lg text-slate-600 mb-2">
                    {education.institution}
                  </h4>
                  <div className="flex items-center text-slate-500 mb-2">
                    <span className="text-sm">
                      {education.university || education.board}
                    </span>
                  </div>
                  <div className="flex items-center text-slate-400">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{education.year}</span>
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

export default Education;