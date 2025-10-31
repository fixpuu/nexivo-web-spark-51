import { useState, useEffect } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="chi-sono" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #1E90FF 0%, transparent 70%)',
            top: '20%',
            right: '-10%',
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`,
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #FF1E90 0%, transparent 70%)',
            bottom: '10%',
            left: '-5%',
            transform: `translateY(${-scrollY * 0.2}px) rotate(${-scrollY * 0.15}deg)`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="animate-fade-in"
            style={{
              transform: `translateX(${-scrollY * 0.05}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-nexivo-dark mb-6">
              Una mente giovane.
              <span className="text-nexivo-blue block relative">
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
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="transform hover:translate-x-2 transition-transform duration-300">
                Sono un web designer freelance. Aiuto piccole attività, negozi e professionisti 
                a presentarsi online con un sito chiaro, moderno e su misura.
              </p>
              
              <p className="transform hover:translate-x-2 transition-transform duration-300">
                Ogni progetto è personalizzato e viene consegnato in pochi giorni, 
                con supporto e trasparenza.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div 
                  className="w-12 h-12 nexivo-gradient rounded-full flex items-center justify-center relative"
                  style={{
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                >
                  <span className="text-white font-bold text-xl">N</span>
                  <div className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-20" style={{ animationDuration: '3s' }} />
                </div>
                <div>
                  <p className="font-semibold text-nexivo-dark">Nexivo</p>
                  <p className="text-sm text-gray-500">Web Designer Freelance</p>
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
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <img 
              src="/lovable-uploads/a09c768e-c145-4d1f-aa92-f10525a22e3e.png"
              alt="Web development workspace"
              className="rounded-2xl shadow-2xl w-full hover-lift relative z-10"
              style={{
                boxShadow: '0 25px 50px -12px rgba(30, 144, 255, 0.25)',
              }}
            />
            {/* Floating elements */}
            <div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl opacity-80 blur-sm"
              style={{
                animation: 'float 3s ease-in-out infinite',
                animationDelay: '0s',
              }}
            />
            <div 
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-70 blur-sm"
              style={{
                animation: 'float 4s ease-in-out infinite',
                animationDelay: '1s',
              }}
            />
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
      `}</style>
    </section>
  );
};

export default About;
