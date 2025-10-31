import { Mail, ArrowRight, Send, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);

  const copyEmailAndNotify = () => {
    const email = 'nexivowebs@hotmail.com';
    
    navigator.clipboard.writeText(email);
    
    toast({
      title: "Email copiata! 📧",
      description: "nexivowebs@hotmail.com copiata negli appunti. Ti aspetto!",
    });
  };

  return (
    <section id="contatti" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated starfield background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            top: '-10%',
            left: '10%',
            animation: 'float 15s ease-in-out infinite',
            filter: 'blur(60px)',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
            bottom: '-10%',
            right: '10%',
            animation: 'float 18s ease-in-out infinite reverse',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-white font-semibold text-sm">Iniziamo insieme</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hai un progetto?
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
              Scrivimi.
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Parlami della tua attività, ti rispondo in giornata con un'idea su misura.
          </p>
          
          {/* CTA Button with advanced effects */}
          <div className="relative inline-block group">
            <div 
              className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500"
              style={{
                animation: isHovered ? 'rotate 2s linear infinite' : 'none',
              }}
            />
            <button
              onClick={copyEmailAndNotify}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Animated background particles */}
              {isHovered && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        animation: `particle ${1 + Math.random()}s ease-out infinite`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </>
              )}
              
              <Mail className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">Scrivimi</span>
              <Send className="w-5 h-5 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            {[
              { value: '7', label: 'Giorni di consegna', icon: '⚡' },
              { value: '100%', label: 'Soddisfazione', icon: '🎯' },
              { value: '24/7', label: 'Supporto', icon: '💬' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:border-white/20"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Footer */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-white font-bold text-2xl">Nexivo</span>
            </div>
            <p className="text-gray-400 text-sm">
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
          100% { transform: translateY(-40px) scale(0); opacity: 0; }
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
      `}</style>
    </section>
  );
};

export default Contact;
