import { Monitor, FileText, Globe, Server, Terminal } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useRef, useCallback } from 'react';

/* 3D Tilt Card */
const TiltCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 300, damping: 30 });

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }, [x, y]);

  const onLeave = useCallback(() => { x.set(0.5); y.set(0.5); }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ServiceCardContent = ({ service, index }: { service: any; index: number }) => (
  <div
    className="group relative bg-[#0a0a0f] border border-white/5 rounded-[2rem] p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:border-[#C967E8]/30 hover:shadow-[0_20px_50px_rgba(152,58,214,0.1)] backdrop-blur-md h-full flex flex-col will-change-transform"
    style={{ '--card-color': service.color } as React.CSSProperties}
  >
    {/* Hover glow */}
    <div
      className="absolute -top-20 -right-20 w-64 h-64 opacity-0 group-hover:opacity-15 transition-opacity duration-700 blur-[100px]"
      style={{ background: service.color }}
    />

    <div className="relative z-10 flex-1">
      {/* Icon Container */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 8 }}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-6 sm:mb-8 border border-white/5 group-hover:border-[#C967E8]/50 transition-all duration-500"
        style={{ color: service.color }}
      >
        <service.icon className="w-7 h-7 sm:w-8 sm:h-8" />
      </motion.div>

      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 tracking-tight group-hover:text-white/90 transition-colors">
        {service.title}
      </h3>

      <p className="text-gray-400 mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg group-hover:text-gray-300 transition-colors">
        {service.description}
      </p>

      <div className="space-y-3 sm:space-y-4">
        {service.features.map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 group-hover:text-gray-300 transition-colors"
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: service.color }} />
            <span className="font-medium tracking-tight uppercase text-[9px] sm:text-[10px]">{feature}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Aesthetic corner number */}
    <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 text-[6rem] sm:text-[8rem] font-display italic text-white/[0.02] pointer-events-none group-hover:text-white/[0.04] transition-colors">
      0{index + 1}
    </div>
  </div>
);

const Services = () => {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      icon: Monitor,
      title: 'Design su misura',
      description: 'Layout moderni e responsivi. Un design unico che rispecchia la tua identità e converte i visitatori in clienti.',
      color: '#FA93FA',
      features: ['UI/UX Professionale', 'Mobile First', 'Brand Identity']
    },
    {
      icon: FileText,
      title: 'Contenuti inclusi',
      description: 'Gestione completa: testi, immagini e logo per un sito veloce e pronto al lancio immediato.',
      color: '#C967E8',
      features: ['Copy basic', 'Ottimizzazione Assets', 'SEO Friendly']
    },
    {
      icon: Globe,
      title: 'Pubblicazione online',
      description: 'Hosting, domini e certificati SSL. Mi occupo di tutta la parte tecnica per metterti online in sicurezza.',
      color: '#983AD6',
      features: ['Hosting Setup', 'SSL Certificate', 'Dominio personalizzato']
    }
  ];

  return (
    <section id="servizi" ref={sectionRef} className="py-24 sm:py-32 relative bg-[#010101] border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#983AD6]/5 via-[#010101] to-[#010101] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/[0.03] border border-white/10 rounded-full mb-8 text-xs text-gray-500 font-mono tracking-widest backdrop-blur-md"
          >
            <Server className="w-4 h-4 text-[#C967E8]" />
            <span>CORE_SERVICES_INT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-display italic text-white tracking-tight leading-[1.1]"
          >
            I miei <span className="bg-gradient-to-r from-[#FA93FA] via-[#C967E8] to-[#983AD6] bg-clip-text text-transparent">servizi</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <TiltCard className="h-full hidden md:block">
                <ServiceCardContent service={service} index={index} />
              </TiltCard>
              <div className="md:hidden h-full">
                <ServiceCardContent service={service} index={index} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

