import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Hls from 'hls.js';

const HLS_URL = 'https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8';
const FALLBACK_MP4 = '/_videos/v1/f0c78f536d5f21a047fb7792723a36f9d647daa1';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true });
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => { });
      });
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          video.src = FALLBACK_MP4;
          video.play().catch(() => { });
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_URL;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => { });
      });
    } else {
      video.src = FALLBACK_MP4;
      video.play().catch(() => { });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contatti');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#010101]">

      {/* Video background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ mixBlendMode: 'screen' }}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-[#010101]/85" />
      </div>

      {/* Abstract Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <div
          className="absolute w-64 h-64 sm:w-[600px] sm:h-[600px] rounded-full opacity-50 animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(201,103,232,0.15) 0%, transparent 60%)',
            top: '5%',
            left: '5%',
          }}
        />
        <div
          className="absolute w-48 h-48 sm:w-[500px] sm:h-[500px] rounded-full opacity-50 animate-float-delayed"
          style={{
            background: 'radial-gradient(circle, rgba(250,147,250,0.12) 0%, transparent 60%)',
            bottom: '10%',
            right: '10%',
          }}
        />
      </div>

      {/* Main Content — z-20 above video */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 sm:pt-32 md:pt-36">

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-[48px] sm:text-[56px] md:text-[68px] lg:text-[80px] font-black leading-[1.05] tracking-tight mb-6"
        >
          <span className="block gradient-text">La Tua Visione</span>
          <span className="block gradient-text">La Nostra Realtà Digitale.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Trasformiamo idee ambiziose in design moderni che non solo colpiscono, ma fanno crescere il tuo business velocemente.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="inline-block"
        >
          <button
            onClick={scrollToContact}
            className="group relative"
          >
            {/* Glass border wrapper */}
            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#FA93FA]/30 via-[#C967E8]/20 to-[#983AD6]/30 blur-sm" />
            <div className="relative flex items-center gap-3 bg-white text-black px-7 py-3.5 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03]">
              <span>Prenota una call di 15 min</span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FA93FA] via-[#C967E8] to-[#983AD6] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
