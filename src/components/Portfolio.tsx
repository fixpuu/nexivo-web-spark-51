import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Sparkles, Zap, Star } from 'lucide-react';

const Portfolio = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Giogioxii.com',
      description: 'Sito web per content creator gaming con design moderno e community digitale',
      image: '/lovable-uploads/e48f6d34-36da-48df-937b-a7c72334c9d0.png',
      tags: ['Gaming', 'Content Creator', 'Community'],
      url: 'https://giogioxii.com',
      gradient: 'from-purple-600 via-pink-600 to-red-600',
      stats: [
        { label: 'Design Pages', value: '8+' },
        { label: 'Load Time', value: '<2s' },
        { label: 'Performance', value: '95+' }
      ]
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        setMousePosition({ x, y });

        // Calcola rotazione 3D basata sulla posizione del mouse
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -15; // Invertito per effetto naturale
        const rotateY = ((x - centerX) / centerX) * 15;
        
        setRotation({ x: rotateX, y: rotateY });
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      return () => card.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-full h-full"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)',
            animation: 'pulse 8s ease-in-out infinite',
          }}
        />
        
        {/* Floating shapes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
            style={{
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              background: `linear-gradient(135deg, ${i % 2 === 0 ? '#8b5cf6' : '#ec4899'}, transparent)`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${10 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full animate-bounce-in">
            <Sparkles className="w-4 h-4 text-purple-600 animate-spin-slow" />
            <span className="text-purple-600 font-semibold text-sm">Portfolio</span>
            <Star className="w-4 h-4 text-pink-600 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform hover:scale-105 transition-transform duration-300">
            I miei progetti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Esempi dei miei lavori web più recenti
          </p>
        </div>
        
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={cardRef}
              className="group cursor-pointer animate-scale-in max-w-2xl w-full"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                perspective: '1500px',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                setRotation({ x: 0, y: 0 });
              }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div 
                  className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700"
                  style={{
                    transform: isHovered 
                      ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05) translateZ(50px)` 
                      : 'rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Gradient border effect multiplo */}
                  <div 
                    className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700`}
                    style={{
                      animation: isHovered ? 'rotate 4s linear infinite' : 'none',
                    }}
                  />
                  
                  {/* Spotlight effect che segue il mouse */}
                  {isHovered && (
                    <div
                      className="absolute inset-0 z-10 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent)`,
                      }}
                    />
                  )}
                  
                  <div className="relative bg-white rounded-3xl overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
                    {/* Image container con effetto 3D avanzato */}
                    <div className="relative overflow-hidden h-96">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700"
                        style={{
                          transform: isHovered ? 'scale(1.15) rotate(3deg)' : 'scale(1) rotate(0deg)',
                          filter: isHovered ? 'brightness(0.85) saturate(1.2)' : 'brightness(1) saturate(1)',
                        }}
                      />
                      
                      {/* Particelle animate sull'immagine */}
                      {isHovered && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          {[...Array(20)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-2 h-2 bg-white rounded-full animate-sparkle"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${1.5 + Math.random()}s`,
                              }}
                            />
                          ))}
                        </div>
                      )}
                      
                      {/* Overlay con content */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-t ${project.gradient} transition-all duration-700 flex flex-col items-center justify-center p-8 text-white`}
                        style={{
                          opacity: isHovered ? 0.97 : 0,
                          transform: isHovered ? 'translateZ(100px)' : 'translateZ(0px)',
                        }}
                      >
                        <div 
                          className="transform transition-all duration-700"
                          style={{
                            transform: isHovered ? 'translateY(0) scale(1) translateZ(50px)' : 'translateY(30px) scale(0.9) translateZ(0px)',
                            opacity: isHovered ? 1 : 0,
                            transformStyle: 'preserve-3d',
                          }}
                        >
                          {/* Icon animato */}
                          <div className="mb-6 relative">
                            <ExternalLink className="w-20 h-20 mx-auto animate-bounce-gentle" />
                            <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-30 animate-ping" />
                          </div>
                          
                          <h3 className="text-4xl font-bold mb-4 drop-shadow-lg">
                            {project.title}
                          </h3>
                          <p className="text-xl mb-6 text-white/95 drop-shadow-md">
                            {project.description}
                          </p>
                          
                          {/* Stats animati */}
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            {project.stats.map((stat, i) => (
                              <div 
                                key={i}
                                className="text-center transform transition-all duration-500"
                                style={{
                                  transitionDelay: `${i * 100}ms`,
                                  transform: isHovered ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
                                }}
                              >
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-xs opacity-90">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-lg rounded-full border-2 border-white/40 font-semibold hover:bg-white/30 transition-all duration-300 shadow-2xl group-hover:scale-110">
                            <Zap className="w-5 h-5 animate-pulse" />
                            <span>Visita il sito</span>
                            <ExternalLink className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </div>

                      {/* Border glow animato */}
                      {isHovered && (
                        <div className="absolute inset-0 border-4 border-white/30 rounded-t-3xl animate-border-glow" />
                      )}
                    </div>
                    
                    {/* Project info */}
                    <div className="p-8 relative" style={{ transform: 'translateZ(20px)' }}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl`}
                            style={{
                              transform: isHovered ? `translateY(-5px) rotate(${(tagIndex - 1) * 5}deg)` : 'translateY(0) rotate(0deg)',
                              transitionDelay: `${tagIndex * 50}ms`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -bottom-2 -right-2 w-32 h-32 opacity-10">
                        <div 
                          className={`w-full h-full rounded-full bg-gradient-to-br ${project.gradient}`}
                          style={{
                            transform: isHovered ? 'scale(1.5) rotate(180deg)' : 'scale(1) rotate(0deg)',
                            transition: 'transform 0.8s ease',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0px) translateX(20px); }
          75% { transform: translateY(-15px) translateX(10px); }
        }

        @keyframes sparkle {
          0%, 100% { 
            opacity: 0;
            transform: scale(0) translateY(0); 
          }
          50% { 
            opacity: 1;
            transform: scale(1.5) translateY(-20px); 
          }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes border-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(-20px);
          }
          50% {
            transform: scale(1.05) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
