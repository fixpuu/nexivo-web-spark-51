import { Terminal, Code, Cpu, Briefcase, Rocket } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Timeline = () => {
    const lineRef = useRef<HTMLDivElement>(null);
    const rocketRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Performant Scroll tracking for the Rocket
        const handleScroll = () => {
            if (!containerRef.current || !rocketRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate how much of the timeline container is scrolled past
            // Normalize it between 0 and 1
            const startVisible = rect.top - viewportHeight / 2;
            const endVisible = rect.bottom - viewportHeight / 2;
            const totalHeight = rect.height;

            let progress = 0;

            if (startVisible < 0) {
                progress = Math.abs(startVisible) / totalHeight;
            }

            // Clamp between 0 and 1
            progress = Math.max(0, Math.min(1, progress));

            // Get the timeline line height to translate the rocket accurately
            const lineNode = lineRef.current;
            if (lineNode) {
                const moveDistance = lineNode.offsetHeight * progress;

                // update through requestAnimationFrame for smooth 60fps
                window.requestAnimationFrame(() => {
                    if (rocketRef.current) {
                        rocketRef.current.style.transform = `translate(-50%, ${moveDistance}px)`;
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const steps = [
        {
            id: 1,
            icon: Terminal,
            title: 'La Scintilla: Hello World',
            description: 'I miei primi passi nel mondo del web. Scoprire come poche righe di codice potessero prendere vita mi ha appassionato fin da subito, portandomi a divorare guide e tutorial.',
            color: 'text-blue-400',
            bgFade: 'bg-blue-400/10 border-blue-400/30'
        },
        {
            id: 2,
            icon: Code,
            title: 'Specializzazione Frontend & UI/UX',
            description: 'Ho approfondito la cura maniacale per i dettagli visivi. Studio di React, Tailwind CSS e principi di base del design, imparando a creare interfacce fluide e moderne.',
            color: 'text-purple-400',
            bgFade: 'bg-purple-400/10 border-purple-400/30'
        },
        {
            id: 3,
            icon: Cpu,
            title: 'Fondamenti e Computer Science',
            description: 'Attualmente mi dedico agli studi formali di informatica per consolidare le mie basi algoritmiche, teoriche e di architettura software, rendendo il mio codice non solo bello ma efficiente.',
            color: 'text-emerald-400',
            bgFade: 'bg-emerald-400/10 border-emerald-400/30'
        },
        {
            id: 4,
            icon: Briefcase,
            title: 'Freelancing & Progetti Reali',
            description: 'Oggi applico le mie competenze collaborando con clienti e piccole imprese, trasformando concetti astratti in siti web performanti e curati, pronti per il mercato.',
            color: 'text-pink-400',
            bgFade: 'bg-pink-400/10 border-pink-400/30'
        }
    ];

    return (
        <section className="py-20 sm:py-32 relative bg-[#050508] border-t border-gray-900 overflow-hidden">

            {/* Background Glows */}
            <div className="absolute left-0 top-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)' }} />
            <div className="absolute right-0 bottom-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)' }} />

            <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">

                <div className="text-center mb-20 sm:mb-28">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
                        Il Mio <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Percorso</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Dalla prima riga di codice allo sviluppo professionale di soluzioni web complete.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative" ref={containerRef}>

                    {/* Vertical Line Container */}
                    <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-1 bg-gray-900 rounded-full sm:-translate-x-1/2">
                        <div
                            ref={lineRef}
                            className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-blue-500/80 via-purple-500/80 to-pink-500/80 opacity-50"
                        />

                        {/* The Animating Spaceship */}
                        <div
                            ref={rocketRef}
                            className="absolute top-0 left-1/2 w-8 h-8 -mt-2 -ml-0 z-20 transition-transform duration-100 ease-out will-change-transform flex items-center justify-center filter drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                            style={{ transform: 'translate(-50%, 0)' }}
                        >
                            <div className="relative">
                                {/* Fire Trail */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-gradient-to-t from-transparent via-orange-500 to-yellow-300 rounded-full blur-sm opacity-80" />

                                <Rocket className="w-5 h-5 text-white rotate-180" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-16 sm:space-y-24 relative pl-4 sm:pl-0">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div key={step.id} className="relative flex items-center justify-between flex-col sm:flex-row w-full group">

                                    {/* Left Content (Desktop) */}
                                    <div className={`sm:w-[45%] ml-10 sm:ml-0 mb-4 sm:mb-0 ${isEven ? 'sm:text-right sm:pr-8' : 'sm:order-3 sm:text-left sm:pl-8'} w-full`}>
                                        <div className="bg-[#0a0a0f] border border-gray-800 rounded-2xl p-6 shadow-2xl hover:border-gray-700 transition-colors duration-300">
                                            <h3 className={`text-xl font-bold mb-3 ${step.color}`}>{step.title}</h3>
                                            <p className="text-gray-400 leading-relaxed text-sm">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Marker (Nodes) */}
                                    <div className="absolute left-1 sm:left-1/2 top-6 sm:top-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2 w-10 h-10 rounded-full border border-gray-800 bg-[#050508] z-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <div className={`w-full h-full rounded-full border ${step.bgFade} flex items-center justify-center`}>
                                            <Icon className={`w-4 h-4 ${step.color}`} />
                                        </div>
                                    </div>

                                    {/* Empty space for alternating layout */}
                                    <div className={`sm:w-[45%] ${isEven ? 'sm:order-3' : 'sm:order-1'}`} />

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
