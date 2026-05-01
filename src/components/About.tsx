import { Code, Terminal, Layout, Layers, MonitorSmartphone } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useRef, useCallback } from 'react';

/* 3D Terminal Card */
const Terminal3D = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { stiffness: 200, damping: 25 });
  const glowX = useTransform(x, [0, 1], ['-20%', '120%']);
  const glowY = useTransform(y, [0, 1], ['-20%', '120%']);

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
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="relative group"
    >
      <div className="rounded-xl overflow-hidden bg-[#0d0d14] border border-white/10 shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#12121c] border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-auto text-xs text-gray-500 font-mono">App.tsx</div>
        </div>

        {/* Code */}
        <div className="relative h-[400px] sm:h-[500px] bg-[#0d0d14] p-6 sm:p-8 font-mono text-sm sm:text-base overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#983AD6]/5 to-transparent pointer-events-none" />
          {/* Mouse-following glow */}
          <motion.div
            className="absolute w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none blur-3xl"
            style={{ left: glowX, top: glowY, background: 'radial-gradient(circle, rgba(201,103,232,0.4), transparent)' }}
          />

          <div className="space-y-2 relative z-10 text-gray-400 select-none">
            <div><span className="text-[#C967E8]">import</span> {'{'} <span className="text-yellow-200">useState</span>, <span className="text-yellow-200">useEffect</span> {'}'} <span className="text-[#C967E8]">from</span> <span className="text-green-300">'react'</span>;</div>
            <div><span className="text-[#C967E8]">import</span> {'{'} <span className="text-yellow-200">Sparkles</span> {'}'} <span className="text-[#C967E8]">from</span> <span className="text-green-300">'lucide-react'</span>;</div>
            <br />
            <div><span className="text-[#FA93FA]">const</span> <span className="text-blue-400">NexivoProfile</span> <span className="text-[#FA93FA]">=</span> () <span className="text-[#FA93FA]">=&gt;</span> {'{'}</div>
            <div className="pl-4 border-l border-white/10 space-y-2 my-2">
              <div><span className="text-[#FA93FA]">const</span> [isAwesome, setIsAwesome] <span className="text-[#FA93FA]">=</span> <span className="text-yellow-200">useState</span>(<span className="text-orange-400">true</span>);</div>
              <br />
              <div><span className="text-[#C967E8]">return</span> (</div>
              <div className="pl-4">
                <div>&lt;<span className="text-green-400">div</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"flex flex-col items-center"</span>&gt;</div>
                <div className="pl-4">
                  <div>&lt;<span className="text-green-400">h1</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"text-transparent bg-clip-text"</span>&gt;</div>
                  <div className="pl-4 text-gray-200">Frontend Excellence</div>
                  <div>&lt;/<span className="text-green-400">h1</span>&gt;</div>
                  <div>&lt;<span className="text-yellow-200">Sparkles</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"animate-pulse text-purple-400"</span> /&gt;</div>
                </div>
                <div>&lt;/<span className="text-green-400">div</span>&gt;</div>
              </div>
              <div>);</div>
            </div>
            <div>{'}'};</div>
            <br />
            <div><span className="text-[#C967E8]">export default</span> <span className="text-blue-400">NexivoProfile</span>;</div>
          </div>
        </div>
      </div>

      {/* Glow behind */}
      <div className="absolute -inset-2 opacity-30 group-hover:opacity-60 transition-opacity duration-700 -z-10" style={{ background: 'radial-gradient(ellipse, rgba(201,103,232,0.15) 0%, rgba(152,58,214,0.1) 50%, transparent 80%)' }} />
    </motion.div>
  );
};

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const skills = [
    { icon: Code, label: 'Modern Stack', desc: 'React, Vue, TypeScript' },
    { icon: Layout, label: 'Styling & UI', desc: 'Tailwind CSS, Framer' },
    { icon: Layers, label: 'Architettura', desc: 'Componenti scalabili' },
    { icon: MonitorSmartphone, label: 'Responsive', desc: 'Mobile-first design' },
  ];

  return (
    <section id="chi-sono" className="py-20 sm:py-28 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -left-40 top-1/4 w-96 h-96 rounded-full pointer-events-none morph-blob" style={{ background: 'radial-gradient(circle, rgba(201,103,232,0.1) 0%, transparent 60%)' }} />

      <div ref={ref} className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-gray-900/50 border border-white/10 rounded-lg backdrop-blur-sm"
            >
              <Terminal className="w-4 h-4 text-[#C967E8]" />
              <span className="text-[#C967E8] font-mono text-sm">~/frontend_architect.sh</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
            >
              Pixel perfetti.<br />
              <span className="text-shimmer">Esperienze fluide.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-gray-400 text-lg leading-relaxed border-l-2 border-[#983AD6]/30 pl-6"
            >
              <p>
                Specializzato in sviluppo <strong className="text-white">Frontend</strong> e <strong className="text-white">Web Design</strong>.
                Trasformo idee in interfacce dinamiche, veloci e curate in ogni dettaglio.
              </p>
              <p>
                Il mio obiettivo: unire design mozzafiato a codice solido per offrire soluzioni premium che si distinguono.
              </p>
            </motion.div>

            {/* Skill cards with stagger */}
            <div className="pt-8 grid sm:grid-cols-2 gap-6 relative">
              <div className="absolute -top-10 -right-10 opacity-20 blur-2xl bg-purple-500 w-32 h-32 rounded-full pointer-events-none" />
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25, scale: 0.95 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C967E8]/40 transition-all duration-500 backdrop-blur-md cursor-pointer group shadow-xl"
                >
                  <div className="p-4 bg-white/[0.04] rounded-xl h-fit group-hover:bg-[#C967E8]/20 transition-all duration-300">
                    <skill.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{skill.label}</h4>
                    <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors uppercase tracking-tight font-medium">{skill.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3D Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <Terminal3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
