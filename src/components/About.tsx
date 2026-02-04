import { useState, useEffect, useRef } from 'react';
import { Sparkles, Zap, Code, Palette } from 'lucide-react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isImageHovered, setIsImageHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="chi-sono" 
      className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
    >
      {/* Animated background elements POTENZIATI */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #1E90FF 0%, transparent 70%)',
            top: '20%',
            right: '-10%',
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg) scale(${isImageHovered ? 1.2 : 1})`,
            transition: 'transform 0.5s ease-out',
            animation: 'float 15s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #FF1E90 0%, transparent 70%)',
            bottom: '10%',
            left: '-5%',
            transform: `translateY(${-scrollY * 0.2}px) rotate(${-scrollY * 0.15}deg) scale(${isImageHovered ? 1.15 : 1})`,
            transition: 'transform 0.5s ease-out',
            animation: 'float 18s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.08}deg)`,
            animation: 'float 20s ease-in-out infinite',
          }}
        />
      </div>

      {/* Interactive spotlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(30,144,255,0.15), transparent)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div 
            className="animate-fade-in"
            style={{
              transform: `translateX(${-scrollY * 0.05}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            {/* Badge animato */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 rounded-full border border-blue-200 animate-bounce-in">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 animate-pulse" />
              <span className="text-blue-600 font-semibold text-xs sm:text-sm">Chi sono</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-nexivo-dark mb-4 sm:mb-6 leading-tight">
              Una mente giovane.
              <span className="text-nexivo-blue block relative mt-2">
                Un approccio professionale.
                <div 
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 to-transparent"
                  style={{
                    width: '60%',
                    animation: 'expandWidth 2s ease-out forwards',
                  }}
                />
              </span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p className="transform hover:translate-x-2 transition-transform duration-300 hover:text-gray-900 relative group">
                <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Sono un web designer freelance. Aiuto piccole attività, negozi e professionisti 
                a presentarsi online con un sito chiaro, moderno e su misura.
              </p>
              
              <p className="transform hover:translate-x-2 transition-transform duration-300 hover:text-gray-900 relative group">
                <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Ogni progetto è personalizzato e viene consegnato in pochi giorni, 
                con supporto e trasparenza.
              </p>
              
              {/* Skills badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-3 sm:pt-4">
                {[
                  { icon: Code, label: 'Web Development', color: 'from-blue-500 to-cyan-500' },
                  { icon: Palette, label: 'UI/UX Design', color: 'from-purple-500 to-pink-500' },
                  { icon: Zap, label: 'Performance', color: 'from-yellow-500 to-orange-500' },
                ].map((skill, i) => (
                  <div
                    key={i}
                    className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${skill.color} rounded-full text-white text-xs sm:text-sm font-medium shadow-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both`,
                    }}
                  >
                    <skill.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
                    <span>{skill.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                <div 
                  className="relative w-12 h-12 sm:w-16 sm:h-16 nexivo-gradient rounded-full flex items-center justify-center group flex-shrink-0"
                  style={{
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                >
                  <span className="text-white font-bold text-lg sm:text-2xl relative z-10">N</span>
                  <div className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-20 group-hover:opacity-40" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                </div>
                <div className="transform hover:translate-x-2 transition-transform duration-300 min-w-0">
                  <p className="font-semibold text-nexivo-dark text-base sm:text-lg">Nexivo</p>
                  <p className="text-xs sm:text-sm text-gray-500">Web Designer Freelance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="animate-scale-in relative group"
            style={{
              transform: `translateX(${scrollY * 0.05}px) perspective(1000px) rotateY(${scrollY * 0.02}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
            
            {/* Immagine con effetto 3D avanzato */}
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="/lovable-uploads/a09c768e-c145-4d1f-aa92-f10525a22e3e.png"
                alt="Web development workspace"
                className="rounded-2xl shadow-2xl w-full hover-lift relative z-10 transition-all duration-700"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(30, 144, 255, 0.25)',
                  transform: isImageHovered ? 'scale(1.05) rotateZ(2deg)' : 'scale(1) rotateZ(0deg)',
                }}
              />
              
              {/* Overlay con effetto shimmer */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 pointer-events-none"
                style={{
                  animation: isImageHovered ? 'shimmer 2s ease-in-out infinite' : 'none',
                }}
              />

              {/* Border glow animato */}
              {isImageHovered && (
                <div className="absolute inset-0 border-4 border-blue-400/50 rounded-2xl animate-border-glow" />
              )}
            </div>
            
            {/* Floating elements POTENZIATI */}
            <div 
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl opacity-80 blur-sm shadow-2xl"
              style={{
                animation: 'float 3s ease-in-out infinite, rotate 10s linear infinite',
                animationDelay: '0s',
                transform: isImageHovered ? 'scale(1.3)' : 'scale(1)',
                transition: 'transform 0.5s ease',
              }}
            >
              <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-white m-auto mt-4 sm:mt-6 animate-pulse" />
            </div>
            <div 
              className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-70 blur-sm shadow-2xl"
              style={{
                animation: 'float 4s ease-in-out infinite, rotate 12s linear infinite reverse',
                animationDelay: '1s',
                transform: isImageHovered ? 'scale(1.3)' : 'scale(1)',
                transition: 'transform 0.5s ease',
              }}
            >
              <Sparkles className="w-10 h-10 sm:w-14 sm:h-14 text-white m-auto mt-5 sm:mt-7 animate-spin-slow" />
            </div>
            
            {/* Particelle animate attorno all'immagine */}
            {isImageHovered && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full animate-particle-orbit"
                    style={{
                      left: `${50 + Math.cos(i * 24 * Math.PI / 180) * 50}%`,
                      top: `${50 + Math.sin(i * 24 * Math.PI / 180) * 50}%`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '3s',
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes expandWidth {
          from { width: 0%; }
          to { width: 60%; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes border-glow {
          0%, 100% { opacity: 0.3; box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { opacity: 1; box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        @keyframes particle-orbit {
          0% {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
            opacity: 0;
          }
        }

        .animate-spin-slow {
          animation: rotate 3s linear infinite;
        }

        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
        }

        .animate-particle-orbit {
          animation: particle-orbit 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
