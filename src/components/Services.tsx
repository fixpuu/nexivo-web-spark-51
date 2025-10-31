import { Monitor, FileText, Globe } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Monitor,
      title: 'Design su misura',
      description: 'Layout personalizzati e compatibili con ogni dispositivo. Design unico che rispecchia la tua identità aziendale.',
      color: 'from-blue-500 to-cyan-500',
      delay: 0,
    },
    {
      icon: FileText,
      title: 'Contenuti inclusi',
      description: 'Inserisco testi, immagini, logo e tutto il necessario per rendere il tuo sito completo e professionale.',
      color: 'from-purple-500 to-pink-500',
      delay: 200,
    },
    {
      icon: Globe,
      title: 'Pubblicazione online',
      description: 'Ti aiuto a mettere online il sito con il tuo dominio. Supporto completo dalla creazione alla pubblicazione.',
      color: 'from-orange-500 to-red-500',
      delay: 400,
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

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              I miei servizi
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
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
              {/* 3D Card effect */}
              <div 
                className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 relative"
                style={{
                  transform: hoveredIndex === index 
                    ? 'translateY(-20px) rotateX(5deg) rotateY(5deg) scale(1.05)' 
                    : 'translateY(0) rotateX(0) rotateY(0) scale(1)',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                {/* Glow effect */}
                <div 
                  className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                  style={{ zIndex: -1 }}
                />
                
                {/* Icon container with 3D effect */}
                <div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden bg-gradient-to-r ${service.color}`}
                  style={{
                    transform: hoveredIndex === index ? 'translateZ(50px) rotateY(360deg)' : 'translateZ(0) rotateY(0deg)',
                    transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  <service.icon className="w-8 h-8 text-white relative z-10" />
                  
                  {/* Particles effect */}
                  {hoveredIndex === index && (
                    <>
                      <div 
                        className="absolute w-2 h-2 bg-white rounded-full opacity-80"
                        style={{
                          animation: 'particle1 1s ease-out infinite',
                        }}
                      />
                      <div 
                        className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                        style={{
                          animation: 'particle2 1.2s ease-out infinite',
                        }}
                      />
                      <div 
                        className="absolute w-2 h-2 bg-white rounded-full opacity-40"
                        style={{
                          animation: 'particle3 1.4s ease-out infinite',
                        }}
                      />
                    </>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative corner elements */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20 opacity-10"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${service.color.includes('blue') ? '#1E90FF' : service.color.includes('purple') ? '#9333EA' : '#F97316'} 50%)`,
                    transform: hoveredIndex === index ? 'scale(1.5) rotate(45deg)' : 'scale(1) rotate(0deg)',
                    transition: 'transform 0.5s ease',
                  }}
                />
              </div>
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
          100% { transform: translate(20px, -20px) scale(0); opacity: 0; }
        }
        
        @keyframes particle2 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          100% { transform: translate(-15px, -25px) scale(0); opacity: 0; }
        }
        
        @keyframes particle3 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          100% { transform: translate(10px, -30px) scale(0); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Services;
