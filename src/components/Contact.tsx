import { Mail, ArrowRight, Send, Sparkles, Zap, Heart, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const copyEmailAndNotify = (e: React.MouseEvent<HTMLButtonElement>) => {
    const email = 'nexivowebs@hotmail.com';
    
    navigator.clipboard.writeText(email);
    
    // Crea effetto ripple
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1000);
    
    toast({
      title: "Email copiata! 📧",
      description: "nexivowebs@hotmail.com copiata negli appunti. Ti aspetto!",
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="contatti" 
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* Animated starfield background MIGLIORATO */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s, float-star ${20 + Math.random() * 10}s linear infinite`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Floating orbs POTENZIATI */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
            top: '-10%',
            left: '10%',
            animation: 'float 15s ease-in-out infinite, pulse-glow 3s ease-in-out infinite',
            filter: 'blur(60px)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%)',
            bottom: '-10%',
            right: '10%',
            animation: 'float 18s ease-in-out infinite reverse, pulse-glow 4s ease-in-out infinite',
            filter: 'blur(60px)',
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            animation: 'float 20s ease-in-out infinite, pulse-glow 5s ease-in-out infinite',
            filter: 'blur(70px)',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Interactive spotlight che segue il mouse */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent)`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Badge POTENZIATO */}
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-2xl animate-bounce-in">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-white font-semibold">Iniziamo insieme</span>
            <Zap className="w-5 h-5 text-blue-400 animate-ping" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 transform hover:scale-105 transition-transform duration-300">
            Hai un progetto?
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2 animate-gradient">
              Scrivimi.
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed transform hover:scale-105 transition-transform duration-300">
            Parlami della tua attività, ti rispondo in giornata con un'idea su misura.
          </p>
          
          {/* CTA Button ULTRA POTENZIATO */}
          <div className="relative inline-block group mb-12">
            <div 
              className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse-glow"
              style={{
                animation: isHovered ? 'rotate 2s linear infinite, pulse-glow 1.5s ease-in-out infinite' : 'pulse-glow 3s ease-in-out infinite',
              }}
            />
            <button
              onClick={copyEmailAndNotify}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-2xl overflow-hidden group transform hover:scale-110 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Ripple effects */}
              {ripples.map(ripple => (
                <span
                  key={ripple.id}
                  className="absolute w-0 h-0 rounded-full bg-white"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    animation: 'ripple 1s ease-out',
                  }}
                />
              ))}
              
              {/* Animated background particles MIGLIORATI */}
              {isHovered && (
                <>
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 8}%`,
                        animation: `particle ${1 + Math.random()}s ease-out infinite`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </>
              )}
              
              {/* Shimmer effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                style={{
                  animation: isHovered ? 'shimmer 2s ease-in-out infinite' : 'none',
                }}
              />
              
              <Mail className="w-6 h-6 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Scrivimi</span>
              <Send className="w-6 h-6 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Stats section MIGLIORATA */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            {[
              { value: '7', label: 'Giorni di consegna', icon: Zap, color: 'from-yellow-400 to-orange-500' },
              { value: '100%', label: 'Soddisfazione', icon: Star, color: 'from-blue-400 to-cyan-500' },
              { value: '24/7', label: 'Supporto', icon: Heart, color: 'from-pink-400 to-rose-500' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-4 hover:border-white/20 hover:shadow-2xl relative overflow-hidden"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Glow effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                />
                
                {/* Icon animato */}
                <div className="relative mb-3">
                  <stat.icon className="w-12 h-12 mx-auto text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                  <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-0 group-hover:opacity-50 animate-ping" />
                </div>
                
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>

                {/* Decorative corner */}
                <div 
                  className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-30 rounded-full blur-xl transition-all duration-500 group-hover:scale-150`}
                />
              </div>
            ))}
          </div>
          
          {/* Footer MIGLIORATO */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-bold text-2xl relative z-10">N</span>
                <div className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-20" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-50" />
              </div>
              <span className="text-white font-bold text-3xl transform hover:scale-110 transition-transform duration-300">Nexivo</span>
            </div>
            <p className="text-gray-400 text-sm transform hover:text-gray-300 transition-colors duration-300">
              © 2025 Nexivo. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @keyframes float-star {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(-100vh) translateX(20px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -30px); }
          66% { transform: translate(-20px, 20px); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes particle {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-50px) scale(0); opacity: 0; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes ripple {
          0% {
            width: 0;
            height: 0;
            opacity: 0.5;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
        }
      `}</style>
    </section>
  );
};

export default Contact;
