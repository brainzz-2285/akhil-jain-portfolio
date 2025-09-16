import React from 'react';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { Badge } from './ui/badge';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A journey through technology leadership, innovation, and impactful solutions across diverse industries.
          </p>
        </div>

        <div className="space-y-12">
          {data.map((job, index) => (
            <div key={job.id} className="relative">
              {/* Timeline line */}
              {index !== data.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>
              )}
              
              <div className="grid md:grid-cols-12 gap-6 items-start">
                {/* Timeline dot */}
                <div className="hidden md:flex md:col-span-1 justify-center">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-11 bg-slate-50 p-8 rounded-lg hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                        {job.title}
                      </h3>
                      <h4 className="text-xl text-slate-600 mb-3">
                        {job.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col lg:items-end space-y-2">
                      <Badge variant="outline" className="w-fit">
                        {job.type}
                      </Badge>
                      <div className="flex items-center text-slate-500 text-sm">
                        <Calendar size={16} className="mr-2" />
                        {job.period}
                      </div>
                      <div className="flex items-center text-slate-500 text-sm">
                        <MapPin size={16} className="mr-2" />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-slate-800 mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-slate-600">{achievement}</span>
                        </li>
                      ))}
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

export default Experience;