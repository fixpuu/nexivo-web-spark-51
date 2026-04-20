import { ExternalLink, Terminal, Code, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';

const Portfolio = () => {
  const [giogioxiiVisible, setGiogioxiiVisible] = useState(true);

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
      description: 'Landing page Airbnb per Le Refuge de la Pomme con gallerie fotografica, info alloggio, servizi e FAQ. Prenotazione disponibile esclusivamente su Airbnb, senza booking interno.',
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

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#983AD6]/5 via-[#010101] to-[#010101] pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(201,103,232,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-[#FA93FA]" />
            <span className="text-[#FA93FA] font-mono text-sm">/var/www/projects</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            I miei <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FA93FA] to-[#983AD6]">lavori</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Progetti sviluppati con codice pulito, alte performance e design curato nel minimo dettaglio.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col items-center gap-8">
          {projects.map((project, index) => (
            <div key={index} className="w-full max-w-5xl group">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">

                <div className={`bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-[#C967E8]/50 shadow-2xl relative transition-all duration-700 backdrop-blur-sm ${project.title === 'Giogioxii' ? (giogioxiiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8') : 'opacity-100 translate-y-0'}`}>

                  {/* Top glare */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C967E8]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="grid md:grid-cols-2">

                    {/* Image Side */}
                    <div className="relative overflow-hidden bg-[#0d0d14] border-b md:border-b-0 md:border-r border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#FA93FA]/20 to-[#983AD6]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />

                      <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 mix-blend-luminosity">
                        <div className="px-3 py-1.5 bg-black/80 backdrop-blur border border-white/10 rounded font-mono text-xs text-[#FA93FA] flex items-center gap-2">
                          <Terminal className="w-3 h-3" /> Deployed successfully
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 sm:p-10 flex flex-col justify-center relative">
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full transition-colors group-hover:opacity-100 opacity-60" style={{ background: 'radial-gradient(circle, rgba(201,103,232,0.1) 0%, transparent 70%)' }} />

                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#C967E8] transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="px-3 py-1 bg-white/[0.03] border border-white/10 text-gray-300 text-xs font-mono rounded-md flex items-center gap-1.5"
                            >
                              <Code className="w-3 h-3 text-[#C967E8]" /> {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-end justify-between mt-auto">
                          <div className="flex gap-6">
                            {project.stats.map((stat, i) => (
                              <div key={i}>
                                <div className="text-xl font-bold text-white mb-0.5">{stat.value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                              </div>
                            ))}
                          </div>

                          <div className="w-12 h-12 rounded-full bg-[#C967E8]/10 flex items-center justify-center text-[#C967E8] group-hover:bg-gradient-to-br group-hover:from-[#FA93FA] group-hover:to-[#983AD6] group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
                            <ExternalLink className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
