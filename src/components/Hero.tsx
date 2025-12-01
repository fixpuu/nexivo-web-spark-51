import { ArrowRight, ArrowDown, Sparkles, Zap } from 'lucide-react';
import { useEffect, useRef, useState, useMemo, memo } from 'react';

// AnimatedText component OTTIMIZZATO con memo
const AnimatedText = memo(({ texts, className = '' }: { texts: string[]; className?: string }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const targetText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < targetText.length) {
          setCurrentText(targetText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(targetText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 30 : 60);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
});

AnimatedText.displayName = 'AnimatedText';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const animationFrameRef = useRef<number>();
  const titleRef = useRef<HTMLHeadingElement>(null);

  const scrollToServizi = () => {
    const element = document.getElementById('servizi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const animatedTexts = useMemo(() => [
    'parlano chiaro.',
    'stupiscono.',
    'convincono.',
    'conquistano.',
    'emozionano.'
  ], []);

  // Mouse tracking OTTIMIZZATO
  useEffect(() => {
    let ticking = false;
    let lastTime = 0;
    const throttleDelay = 50;
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (!ticking && now - lastTime > throttleDelay) {
        window.requestAnimationFrame(() => {
          setMousePos({ x: e.clientX, y: e.clientY });
          lastTime = now;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3D Parallax effect on title
  useEffect(() => {
    const handleParallax = () => {
      if (!titleRef.current) return;
      
      const rect = titleRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (mousePos.x - centerX) / 50;
      const deltaY = (mousePos.y - centerY) / 50;
      
      titleRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${-deltaY}deg) 
        rotateY(${deltaX}deg) 
        translateZ(20px)
      `;
    };

    handleParallax();
  }, [mousePos]);

  // Canvas MOLTO ottimizzato con effetti 3D
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      speedX: number;
      speedY: number;
      speedZ: number;
      opacity: number;
      color: string;
    }> = [];

    // Particelle 3D con profondità
    for (let i = 0; i < 40; i++) {
      const colors = ['#1E90FF', '#00BFFF', '#4169E1', '#6495ED', '#87CEEB'];
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        speedZ: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let lastFrameTime = 0;
    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastFrameTime;
      
      if (deltaTime < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastFrameTime = currentTime - (deltaTime % frameInterval);
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        // Movimento 3D
        p.z -= p.speedZ;
        if (p.z <= 0) {
          p.z = 1000;
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
        }

        // Proiezione 3D
        const scale = 1000 / (1000 + p.z);
        const x2d = (p.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (p.y - canvas.height / 2) * scale + canvas.height / 2;
        const size2d = p.size * scale;

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        // Particelle con glow 3D
        ctx.shadowBlur = 15 * scale;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * scale;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // Connessioni 3D
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dz = p.z - p2.z;
          const dist3d = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3d < 200) {
            const scale2 = 1000 / (1000 + p2.z);
            const x2d2 = (p2.x - canvas.width / 2) * scale2 + canvas.width / 2;
            const y2d2 = (p2.y - canvas.height / 2) * scale2 + canvas.height / 2;

            ctx.beginPath();
            ctx.moveTo(x2d, y2d);
            ctx.lineTo(x2d2, y2d2);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist3d / 200) * 0.3 * Math.min(scale, scale2);
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Floating 3D shapes con effetti migliorati */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 will-change-transform"
          style={{
            background: 'linear-gradient(135deg, #1E90FF 0%, #00BFFF 100%)',
            filter: 'blur(80px)',
            animation: 'float 20s ease-in-out infinite, pulse 3s ease-in-out infinite',
            top: '10%',
            left: '10%',
            transform: `translate3d(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px, 0) scale(${isHovered ? 1.2 : 1})`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-20 will-change-transform"
          style={{
            background: 'linear-gradient(135deg, #FF1E90 0%, #FF00BF 100%)',
            filter: 'blur(60px)',
            animation: 'float 15s ease-in-out infinite reverse, pulse 4s ease-in-out infinite',
            top: '60%',
            right: '15%',
            transform: `translate3d(${-mousePos.x * 0.025}px, ${-mousePos.y * 0.025}px, 0) scale(${isHovered ? 1.15 : 1})`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-15 will-change-transform"
          style={{
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            filter: 'blur(70px)',
            animation: 'float 18s ease-in-out infinite, pulse 5s ease-in-out infinite',
            bottom: '10%',
            left: '40%',
            transform: `translate3d(${mousePos.x * 0.015}px, ${mousePos.y * 0.015}px, 0) scale(${isHovered ? 1.1 : 1})`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative" style={{ zIndex: 10 }}>
        <div 
          className="animate-fade-in will-change-transform"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Badge animato */}
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-full border border-blue-300/30 shadow-lg animate-bounce-in">
            <Sparkles className="w-5 h-5 text-blue-600 animate-spin-slow" />
            <span className="text-blue-600 font-semibold text-sm">✨ Web Design Professionale</span>
            <Zap className="w-5 h-5 text-purple-600 animate-pulse" />
          </div>

          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.1s ease-out',
            }}
          >
            Siti web che
            <span className="text-blue-600 block relative">
              <AnimatedText 
                texts={animatedTexts}
                className="inline-block"
              />
              <div 
                className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl animate-pulse-glow"
                style={{ zIndex: -1 }}
              />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transform hover:scale-105 transition-transform duration-300">
            Ogni azienda ha una storia. Io la trasformo in un sito semplice, bello e professionale.
          </p>
          
          <button
            onClick={scrollToServizi}
            className="group inline-flex items-center gap-3 nexivo-gradient text-white px-10 py-5 rounded-full text-lg font-semibold nexivo-shadow hover-lift relative overflow-hidden transform hover:scale-110 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Particelle animate nel bottone */}
            <span className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-particle"
                  style={{
                    left: `${20 + i * 12}%`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </span>
            
            <span className="relative z-10 flex items-center gap-3">
              <Sparkles className="w-5 h-5 animate-spin-slow" />
              Scopri cosa offro
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300" />
            </span>
          </button>
          
          <div className="mt-16 animate-bounce cursor-pointer" onClick={scrollToServizi}>
            <div className="relative inline-block">
              <ArrowDown 
                className="w-10 h-10 text-primary mx-auto hover:text-accent transition-colors relative z-10"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(30, 144, 255, 0.5))',
                }}
              />
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-50 animate-ping" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(5deg); }
          66% { transform: translateY(15px) rotate(-5deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
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

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes particle {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-50px) scale(0); opacity: 0; }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
        }

        .animate-particle {
          animation: particle 1.5s ease-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
