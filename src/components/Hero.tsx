import { ArrowRight, ArrowDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// AnimatedText component inline
const AnimatedText = ({ texts, className = '' }: { texts: string[]; className?: string }) => {
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
          setTimeout(() => setIsDeleting(true), 2000);
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
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const scrollToServizi = () => {
    const element = document.getElementById('servizi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const animatedTexts = [
    'parlano chiaro.',
    'stupiscono.',
    'convincono.',
    'conquistano.',
    'emozionano.'
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 144, 255, ${p.opacity})`;
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(30, 144, 255, ${0.1 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Floating 3D shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'linear-gradient(135deg, #1E90FF 0%, #00BFFF 100%)',
            filter: 'blur(80px)',
            animation: 'float 20s ease-in-out infinite',
            top: '10%',
            left: '10%',
            transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-20"
          style={{
            background: 'linear-gradient(135deg, #FF1E90 0%, #FF00BF 100%)',
            filter: 'blur(60px)',
            animation: 'float 15s ease-in-out infinite reverse',
            top: '60%',
            right: '15%',
            transform: `translate(${-mousePos.x * 0.03}px, ${-mousePos.y * 0.03}px)`,
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            filter: 'blur(70px)',
            animation: 'float 18s ease-in-out infinite',
            bottom: '10%',
            left: '40%',
            transform: `translate(${mousePos.x * 0.015}px, ${mousePos.y * 0.015}px)`,
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative" style={{ zIndex: 10 }}>
        <div 
          className="animate-fade-in"
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y * 0.01}deg) rotateY(${mousePos.x * 0.01}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Siti web che
            <span className="text-blue-600 block relative">
              <AnimatedText 
                texts={animatedTexts}
                className="inline-block"
              />
              <div 
                className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
                style={{ zIndex: -1 }}
              />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ogni azienda ha una storia. Io la trasformo in un sito semplice, bello e professionale.
          </p>
          
          <button
            onClick={scrollToServizi}
            className="inline-flex items-center gap-3 nexivo-gradient text-white px-8 py-4 rounded-full text-lg font-semibold nexivo-shadow hover-lift relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Scopri cosa offro</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-12 animate-bounce">
            <ArrowDown 
              className="w-8 h-8 text-primary mx-auto cursor-pointer hover:text-accent transition-colors"
              onClick={scrollToServizi}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(30, 144, 255, 0.5))',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(5deg); }
          66% { transform: translateY(15px) rotate(-5deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
