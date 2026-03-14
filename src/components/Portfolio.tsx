import { ExternalLink, Terminal, Code, Cpu } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Giogioxii.com',
      description: 'Sito web per content creator gaming con design moderno e community digitale.',
      image: '/lovable-uploads/e48f6d34-36da-48df-937b-a7c72334c9d0.png',
      tags: ['React', 'Tailwind', 'Motion'],
      url: 'https://giogioxii.com',
      stats: [
        { label: 'Pages', value: '8+' },
        { label: 'Load', value: '<1s' },
        { label: 'Score', value: '98' }
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 sm:py-28 relative bg-[#0a0a0f]">

      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-pink-500/5 via-[#0a0a0f] to-[#0a0a0f] pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900 border border-gray-800 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 font-mono text-sm">/var/www/projects</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            I miei <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">lavori</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Progetti sviluppati con codice pulito, alte performance e design curato nel minimo dettaglio.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <div key={index} className="w-full max-w-4xl group">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">

                {/* Project Card */}
                <div className="bg-[#12121a] border border-gray-800 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-colors duration-500 shadow-2xl relative">

                  {/* Subtle top glare */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="grid md:grid-cols-2">

                    {/* Visual Side (Mockup/Image) */}
                    <div className="relative aspect-video md:aspect-auto overflow-hidden bg-gray-900 border-b md:border-b-0 md:border-r border-gray-800">
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />

                      {/* Floating terminal snippet */}
                      <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 mix-blend-luminosity">
                        <div className="px-3 py-1.5 bg-black/80 backdrop-blur border border-gray-800 rounded font-mono text-xs text-pink-400 flex items-center gap-2">
                          <Terminal className="w-3 h-3" /> Deployed successfully
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 sm:p-10 flex flex-col justify-center relative">
                      {/* Deco element */}
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full transition-colors group-hover:opacity-100 opacity-60" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)' }} />

                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="px-3 py-1 bg-gray-900 border border-gray-800 text-gray-300 text-xs font-mono rounded-md flex items-center gap-1.5"
                            >
                              <Code className="w-3 h-3 text-pink-500" /> {tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats & Action */}
                        <div className="flex items-end justify-between mt-auto">

                          <div className="flex gap-6">
                            {project.stats.map((stat, i) => (
                              <div key={i}>
                                <div className="text-xl font-bold text-white mb-0.5">{stat.value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                              </div>
                            ))}
                          </div>

                          <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
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
