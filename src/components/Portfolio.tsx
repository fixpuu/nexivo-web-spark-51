import { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    {
      title: 'Giogioxii.com',
      description: 'Sito web per content creator gaming con design moderno e community digitale',
      image: '/lovable-uploads/e48f6d34-36da-48df-937b-a7c72334c9d0.png',
      tags: ['Gaming', 'Content Creator', 'Community'],
      url: 'https://giogioxii.com',
      gradient: 'from-purple-600 via-pink-600 to-red-600',
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-full h-full"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)',
            animation: 'pulse 8s ease-in-out infinite',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-purple-600 font-semibold text-sm">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            I miei progetti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Esempi dei miei lavori web più recenti
          </p>
        </div>
        
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer animate-scale-in max-w-2xl block w-full"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                {/* Gradient border effect */}
                <div 
                  className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700`}
                  style={{
                    animation: isHovered ? 'rotate 4s linear infinite' : 'none',
                  }}
                />
                
                <div className="relative bg-white rounded-3xl overflow-hidden">
                  {/* Image container with 3D effect */}
                  <div className="relative overflow-hidden h-96">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700"
                      style={{
                        transform: isHovered ? 'scale(1.1) rotate(2deg)' : 'scale(1) rotate(0deg)',
                        filter: isHovered ? 'brightness(0.9)' : 'brightness(1)',
                      }}
                    />
                    
                    {/* Overlay with content */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} transition-all duration-500`}
                      style={{
                        opacity: isHovered ? 0.95 : 0,
                      }}
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                        <div 
                          className="transform transition-all duration-500"
                          style={{
                            transform: isHovered ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                            opacity: isHovered ? 1 : 0,
                          }}
                        >
                          <ExternalLink className="w-16 h-16 mb-6 mx-auto animate-bounce" />
                          <h3 className="text-3xl font-bold mb-4">
                            {project.title}
                          </h3>
                          <p className="text-lg mb-6 text-white/90">
                            {project.description}
                          </p>
                          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 font-semibold hover:bg-white/30 transition-all duration-300">
                            <span>Visita il sito</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project info */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-full`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
