import { Terminal, Code, Cpu, Briefcase, Rocket } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const Timeline = () => {
    const lineRef = useRef<HTMLDivElement>(null);
    const rocketRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !rocketRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const startVisible = rect.top - viewportHeight / 2;
            const totalHeight = rect.height;

            let progress = 0;

            if (startVisible < 0) {
                progress = Math.abs(startVisible) / totalHeight;
            }

            progress = Math.max(0, Math.min(1, progress));

            const lineNode = lineRef.current;
            if (lineNode) {
                const moveDistance = lineNode.offsetHeight * progress;

                window.requestAnimationFrame(() => {
                    if (rocketRef.current) {
                        rocketRef.current.style.transform = `translate(-50%, ${moveDistance}px)`;
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const steps = [
        {
            id: 1,
            icon: Terminal,
            title: 'Hello World',
            description: 'I primi passi nel web. La scoperta di come il codice possa dar vita alle idee mi ha appassionato fin da subito.',
            color: 'text-[#FA93FA]',
            bgFade: 'bg-[#FA93FA]/10 border-[#FA93FA]/30'
        },
        {
            id: 2,
            icon: Code,
            title: 'Specializzazione UI/UX',
            description: 'Studio di React, Tailwind CSS e principi di design. Ho imparato a creare interfacce fluide, moderne e curate.',
            color: 'text-[#C967E8]',
            bgFade: 'bg-[#C967E8]/10 border-[#C967E8]/30'
        },
        {
            id: 3,
            icon: Cpu,
            title: 'Computer Science',
            description: 'Studio formale dell\'informatica per consolidare basi algoritmiche e architettura, rendendo il codice non solo bello ma efficiente.',
            color: 'text-[#983AD6]',
            bgFade: 'bg-[#983AD6]/10 border-[#983AD6]/30'
        },
        {
            id: 4,
            icon: Briefcase,
            title: 'Progetti Reali',
            description: 'Oggi collaboro con aziende per trasformare concetti astratti in siti web performanti, curati e pronti per il mercato.',
            color: 'text-[#FA93FA]',
            bgFade: 'bg-[#FA93FA]/10 border-[#FA93FA]/30'
        }
    ];

    return (
        <section className="py-24 sm:py-40 relative bg-[#010101] overflow-hidden">
            {/* Massive Background Accents */}
            <div className="absolute left-[-10%] top-1/4 w-[40vw] h-[40vw] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute right-[-10%] bottom-1/4 w-[35vw] h-[35vw] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
                <div className="text-center mb-24 sm:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 bg-white/[0.03] border border-white/10 rounded-full mb-8 backdrop-blur-md"
                    >
                        <span className="text-xs uppercase tracking-[0.3em] font-mono text-gray-500">The Journey</span>
                    </motion.div>
                    <h2 className="text-5xl sm:text-7xl md:text-8xl font-display italic text-white tracking-tight mb-8">
                        Il Mio <span className="bg-gradient-to-r from-[#FA93FA] via-[#C967E8] to-[#983AD6] bg-clip-text text-transparent">Percorso</span>
                    </h2>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Un'evoluzione costante guidata dalla curiosità e dalla ricerca della perfezione tecnica.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative" ref={containerRef}>
                    {/* Vertical Line */}
                    <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.03] sm:-translate-x-1/2">
                        <div
                            ref={lineRef}
                            className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-[#FA93FA] via-[#C967E8] to-[#983AD6] opacity-30 shadow-[0_0_15px_rgba(201,103,232,0.3)]"
                        />

                        {/* Rocket / Pointer */}
                        <div
                            ref={rocketRef}
                            className="absolute top-0 left-1/2 w-10 h-10 -ml-0 z-20 transition-transform duration-200 ease-out will-change-transform flex items-center justify-center"
                            style={{ transform: 'translate(-50%, 0)' }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#C967E8] blur-xl opacity-30 animate-pulse" />
                                <div className="p-2 bg-black border border-white/20 rounded-full shadow-2xl relative z-30">
                                    <Rocket className="w-4 h-4 text-[#FA93FA] rotate-180" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-24 sm:space-y-40 relative pl-12 sm:pl-0">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div key={step.id} className="relative flex flex-col sm:flex-row items-center w-full group">
                                    {/* Content Wrapper */}
                                    <div className={`w-full sm:w-[45%] ${isEven ? 'sm:text-right sm:pr-16' : 'sm:order-2 sm:text-left sm:pl-16'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            className="bg-white/[0.01] border border-white/5 rounded-[2rem] p-10 hover:bg-white/[0.03] hover:border-[#C967E8]/30 transition-all duration-700 backdrop-blur-xl group-hover:-translate-y-2 shadow-2xl"
                                        >
                                            <div className={`text-sm font-mono mb-4 opacity-50 ${isEven ? 'sm:justify-end' : ''} flex items-center gap-2`}>
                                                <span className={`w-2 h-2 rounded-full ${step.color.replace('text-', 'bg-')}`} />
                                                STEP 0{step.id}
                                            </div>
                                            <h3 className={`text-4xl font-display italic mb-6 tracking-tight ${step.color}`}>
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                                                {step.description}
                                            </p>
                                        </motion.div>
                                    </div>

                                    {/* Icon / Marker */}
                                    <div className="absolute left-[-26px] sm:left-1/2 top-10 sm:top-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2 w-12 h-12 rounded-full border border-white/10 bg-black z-10 flex items-center justify-center transform group-hover:scale-125 transition-all duration-500 shadow-2xl">
                                        <div className={`w-full h-full rounded-full border border-white/5 flex items-center justify-center group-hover:bg-[#C967E8]/10 transition-colors`}>
                                            <Icon className={`w-5 h-5 ${step.color}`} />
                                        </div>
                                    </div>

                                    {/* Spacer for sm+ */}
                                    <div className={`hidden sm:block sm:w-[45%] ${isEven ? 'sm:order-2' : ''}`} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
