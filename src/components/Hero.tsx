import { useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Sparkles, Code2, Globe, Cpu } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import Hls from 'hls.js';

const HLS_URL = 'https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8';
const FALLBACK_MP4 = '/_videos/v1/f0c78f536d5f21a047fb7792723a36f9d647daa1';

/* ── Floating elements ── */
const FloatingElement = ({ children, delay = 0, x = 0, y = 0 }: { children: React.ReactNode; delay?: number; x?: number; y?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.1, 1],
      y: [y, y - 20, y],
      x: [x, x + 10, x]
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    {children}
  </motion.div>
);

/* ── Particles ── */
const Particles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    duration: Math.random() * 15 + 15,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.2 + 0.05,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white will-change-transform"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -150],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

/* ── Magnetic CTA Button ── */
const MagneticButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  }, [x, y]);

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative cursor-pointer"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full font-medium transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
        {children}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.button>
  );
};

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let hls: Hls | null = null;
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => { video.play().catch(() => { }); });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_URL;
      video.addEventListener('loadedmetadata', () => { video.play().catch(() => { }); });
    }
    return () => { hls?.destroy(); };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020202]">
      {/* Background Video */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover opacity-50 brightness-[0.6] transition-opacity duration-1000" autoPlay loop muted playsInline />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/10 via-transparent to-[#020202]" />
      </motion.div>

      <Particles />

      {/* Content */}
      <motion.div className="relative z-20 max-w-6xl mx-auto px-6 text-center" style={{ y: textY, opacity }}>
        <div className="mb-10 lg:mb-14">
          <motion.h1
            className="text-[11vw] sm:text-7xl md:text-8xl lg:text-[7rem] font-display italic leading-[1] tracking-tight"
          >
            <span className="block overflow-hidden py-2 sm:py-3 text-white">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="block bg-gradient-to-b from-[#C967E8] via-white/95 to-white/80 bg-clip-text text-transparent"
              >
                Visione Digitale,
              </motion.span>
            </span>
            <span className="block overflow-hidden py-2 sm:py-3">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                className="block text-white"
              >
                Senza Limiti.
              </motion.span>
            </span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="max-w-xl mx-auto"
        >
          <p className="text-gray-400 text-base md:text-xl mb-10 lg:mb-12 leading-relaxed font-light px-4">
            Siti web d'élite per business che puntano in alto. <br className="hidden md:block" />
            Trasformiamo la tua idea in un capolavoro tecnologico.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center"
          >
            <MagneticButton onClick={scrollToContact}>
              <span className="text-sm md:text-base">Inizia il tuo progetto</span>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Subtle side indicators */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6">
        {[0.1, 0.2, 0.3].map((delay, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ delay: 1 + delay, duration: 1 }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;