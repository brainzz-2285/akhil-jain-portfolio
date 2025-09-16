import React from 'react';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

const Contact = ({ data }) => {
  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'LinkedIn':
        return <Linkedin size={20} />;
      case 'GitHub':
        return <Github size={20} />;
      default:
        return <MessageCircle size={20} />;
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
            {data.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="max-w-md w-full">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Email</h4>
                    <a 
                      href={`mailto:${data.email}`}
                      className="text-slate-600 hover:text-slate-800 transition-colors"
                    >
                      {data.email}
                    </a>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <h4 className="font-medium text-slate-800 mb-4 text-center">Connect with me</h4>
                  <div className="flex justify-center space-x-4">
                    {data.social.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-800 hover:text-white transition-all duration-300 hover:scale-110"
                      >
                        {getSocialIcon(social.platform)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;