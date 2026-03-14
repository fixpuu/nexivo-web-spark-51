import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import { useEffect, useState, useMemo, memo } from 'react';

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

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#050508] relative overflow-hidden pt-20 md:pt-0">

      {/* Abstract Gradient Orbs (NO BLUR FILTERS OR JS LOOPS - GPU ACCELERATED PURE CSS) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <div
          className="absolute w-64 h-64 sm:w-[600px] sm:h-[600px] rounded-full opacity-60 animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(30,144,255,0.15) 0%, transparent 60%)',
            top: '5%',
            left: '5%',
          }}
        />
        <div
          className="absolute w-48 h-48 sm:w-[500px] sm:h-[500px] rounded-full opacity-60 animate-float-delayed"
          style={{
            background: 'radial-gradient(circle, rgba(255,30,144,0.12) 0%, transparent 60%)',
            bottom: '10%',
            right: '10%',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative" style={{ zIndex: 10 }}>
        <div className="animate-fade-in">

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight px-4 drop-shadow-2xl"
          >
            <span className="inline-block">Siti web che</span> <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 block sm:inline-block sm:ml-4 relative mt-2 sm:mt-0">
              <AnimatedText
                texts={animatedTexts}
              />
            </span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in-delayed">
            Architetture Frontend moderne. Design mozzafiato. Costruisco la tua vetrina digitale con codice <span className="text-cyan-400 font-mono">pulito</span> e <span className="text-purple-400 font-mono">ottimizzato</span>.
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute left-1/2 -bottom-24 sm:-bottom-32 -translate-x-1/2 cursor-pointer animate-bounce opacity-50 hover:opacity-100 transition-opacity"
          onClick={scrollToServizi}
        >
          <ArrowDown className="w-6 h-6 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
