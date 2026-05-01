import { ExternalLink, Terminal, Code, Cpu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const Portfolio = () => {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  const projects = [
    {
      title: 'Giogioxii',
      description: 'Homepage futuristica giallo/nero con hero fullscreen stile gaming. Interfaccia content creator per YouTube, punti community e call-to-action dinamiche.',
      image: '/lovable-uploads/image-1774371932253.png',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      url: 'https://giogioxii.com',
      stats: [
        { label: 'Pages', value: '8+' },
        { label: 'Load', value: '<1s' },
        { label: 'Score', value: '98' }
      ]
    },
    {
      title: 'Le Refuge de la Pomme',
      description: 'Landing page Airbnb per Le Refuge de la Pomme con gallerie fotografica, info alloggio, servizi e FAQ. Prenotazione disponibile esclusivamente su Airbnb.',
      image: '/lovable-uploads/image-1774371560423.png',
      tags: ['React', 'Tailwind', 'Next.js'],
      url: 'https://www.lerefugedelapomme.com',
      stats: [
        { label: 'Images', value: '20+' },
        { label: 'Sections', value: '7' },
        { label: 'Score', value: '96' }
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 sm:py-28 relative bg-[#010101]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#983AD6]/5 via-[#010101] to-[#010101] pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full pointer-events-none morph-blob" style={{ background: 'radial-gradient(circle, rgba(201,103,232,0.08) 0%, transparent 70%)' }} />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full mb-6 backdrop-blur-sm"
          >
            <Cpu className="w-4 h-4 text-[#FA93FA]" />
            <span className="text-[#FA93FA] font-mono text-sm">/var/www/projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight"
          >
            I miei <span className="text-shimmer">lavori</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Progetti sviluppati con codice pulito, alte performance e design curato nel minimo dettaglio.
          </motion.p>
        </div>

        {/* Projects */}
        <div className="flex flex-col items-center gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    url: string;
    stats: { label: string; value: string }[];
  };
  index: number;
  inView: boolean;
}

const ProjectCard = ({ project, index, inView }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
      className="w-full max-w-5xl will-change-transform"
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center group cursor-pointer p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 shadow-xl">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] sm:rounded-[1.5rem] border border-white/10">
          <motion.div className="absolute inset-0" style={{ y: imgY }}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
        </div>

        <div className="px-2 sm:px-0">
          <h3 className="text-3xl sm:text-4xl font-display italic text-white mb-4 sm:mb-6 group-hover:text-[#FA93FA] transition-colors tracking-tight italic">
            {project.title}
          </h3>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 font-light italic">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-4 py-1 bg-white/[0.03] border border-white/5 text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-widest rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-8 sm:gap-12 border-t border-white/5 pt-8">
            {project.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[10px] text-gray-600 uppercase tracking-widest font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default Portfolio;
