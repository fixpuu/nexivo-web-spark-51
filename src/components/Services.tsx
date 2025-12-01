import { Monitor, FileText, Globe, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: Monitor,
      title: 'Design su misura',
      description: 'Layout personalizzati e compatibili con ogni dispositivo. Design unico che rispecchia la tua identità aziendale.',
      color: 'from-blue-500 to-cyan-500',
      accentColor: '#1E90FF',
      delay: 0,
      features: ['Responsive Design', 'UI/UX Professionale', 'Brand Identity']
    },
    {
      icon: FileText,
      title: 'Contenuti inclusi',
      description: 'Inserisco testi, immagini, logo e tutto il necessario per rendere il tuo sito completo e professionale.',
      color: 'from-purple-500 to-pink-500',
      accentColor: '#9333EA',
      delay: 200,
      features: ['Copywriting', 'Ottimizzazione SEO', 'Media Management']
    },
    {
      icon: Globe,
      title: 'Pubblicazione online',
      description: 'Ti aiuto a mettere online il sito con il tuo dominio. Supporto completo dalla creazione alla pubblicazione.',
      color: 'from-orange-500 to-red-500',
      accentColor: '#F97316',
      delay: 400,
      features: ['Hosting Setup', 'Domain Configuration', 'SSL Certificate']
    }
  ];

  return (
    <section id="servizi" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(30, 144, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(30, 144, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridScroll 20s linear infinite',
          }}
        />
      </div>

      {/* Floating orbs interattivi */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 rounded-full opacity-20 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${services[i % 3].accentColor}40 0%, transparent 70%)`,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              transform: `translate(${mousePosition.x * 0.01 * (i + 1)}px, ${mousePosition.y * 0.01 * (i + 1)}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-blue-600 font-semibold text-sm">I miei servizi</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform hover:scale-105 transition-transform duration-300">
            Cosa offro
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Servizi completi per la tua presenza online, dalla progettazione alla pubblicazione
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative group"
              style={{ 
                animationDelay: `${service.delay}ms`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* 3D Card effect avanzato */}
              <div 
                className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-700 relative overflow-hidden"
                style={{
                  transform: hoveredIndex === index 
                    ? 'translateY(-30px) rotateX(10deg) rotateY(10deg) scale(1.08)' 
                    : 'translateY(0) rotateX(0) rotateY(0) scale(1)',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                {/* Glow effect multiplo */}
                <div 
                  className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                  style={{ zIndex: -1 }}
                />
                
                {/* Particelle animate all'hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-particle-float"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
                
                {/* Icon container con effetto 3D avanzato */}
                <div 
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden bg-gradient-to-r ${service.color} shadow-2xl`}
                  style={{
                    transform: hoveredIndex === index ? 'translateZ(80px) rotateY(360deg) scale(1.2)' : 'translateZ(0) rotateY(0deg) scale(1)',
                    transition: 'transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  <service.icon className="w-10 h-10 text-white relative z-10" />
                  
                  {/* Effetto shimmer */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                    style={{
                      animation: hoveredIndex === index ? 'shimmer 2s ease-in-out infinite' : 'none',
                    }}
                  />

                  {/* Particles nel cerchio */}
                  {hoveredIndex === index && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <div 
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full opacity-80"
                          style={{
                            animation: `particle${(i % 3) + 1} ${1 + Math.random() * 0.5}s ease-out infinite`,
                            animationDelay: `${i * 0.15}s`,
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li 
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-500 transform transition-all duration-300"
                      style={{
                        opacity: hoveredIndex === index ? 1 : 0.7,
                        transform: hoveredIndex === index ? `translateX(${i * 5}px)` : 'translateX(0)',
                        transitionDelay: `${i * 50}ms`,
                      }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Decorative corner elements animati */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${service.accentColor} 50%)`,
                    transform: hoveredIndex === index ? 'scale(2) rotate(90deg)' : 'scale(1) rotate(0deg)',
                  }}
                />
                
                {/* Linea di luce animata */}
                {hoveredIndex === index && (
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-70"
                    style={{
                      backgroundImage: `linear-gradient(to right, transparent, ${service.accentColor}, transparent)`,
                      animation: 'slideLight 2s ease-in-out infinite',
                    }}
                  />
                )}
              </div>

              {/* Shadow 3D sotto la card */}
              <div 
                className="absolute -bottom-4 left-4 right-4 h-4 bg-gray-900 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)',
                  transition: 'all 0.5s ease',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gridScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        
        @keyframes particle1 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          100% { transform: translate(25px, -30px) scale(0); opacity: 0; }
        }
        
        @keyframes particle2 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          100% { transform: translate(-20px, -35px) scale(0); opacity: 0; }
        }
        
        @keyframes particle3 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          100% { transform: translate(15px, -40px) scale(0); opacity: 0; }
        }

        @keyframes particle-float {
          0%, 100% { 
            transform: translate(0, 0) scale(0); 
            opacity: 0; 
          }
          50% { 
            transform: translate(calc(var(--random-x, 0) * 50px), calc(var(--random-y, 0) * -50px)) scale(1); 
            opacity: 1; 
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes slideLight {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-particle-float {
          --random-x: ${Math.random()};
          --random-y: ${Math.random()};
        }
      `}</style>
    </section>
  );
};

export default Services;
