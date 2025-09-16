import React from 'react';
import { Users, TrendingUp } from 'lucide-react';
import { Badge } from './ui/badge';

const Projects = ({ data }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Production':
        return <TrendingUp size={16} className="text-green-600" />;
      default:
        return <TrendingUp size={16} className="text-slate-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transforming complex algorithmic trading challenges into scalable, production-ready solutions that drive real business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-slate-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(project.status)}
                      <Badge 
                        variant="secondary" 
                        className={getStatusColor(project.status)}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-medium text-slate-800 mb-3">Key Highlights:</h4>
                  <div className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center">
                        <Users size={14} className="text-slate-400 mr-2" />
                        <span className="text-sm text-slate-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-slate-800 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
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

export default Projects;