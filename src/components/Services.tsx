import { Monitor, FileText, Globe, Server, Terminal } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Design su misura',
      description: 'Layout personalizzati, moderni e completamente responsivi. Design unico che rispecchia la tua identità e converte gli utenti.',
      color: 'text-cyan-400',
      bgFade: 'from-cyan-500/10 to-transparent',
      borderGlow: 'group-hover:border-cyan-500/50',
      features: ['UI/UX Professionale', 'Mobile First', 'Brand Identity']
    },
    {
      icon: FileText,
      title: 'Contenuti inclusi',
      description: 'Inserisco testi, immagini, logo e tutto il necessario per rendere il tuo sito completo, veloce e subito pronto al lancio.',
      color: 'text-purple-400',
      bgFade: 'from-purple-500/10 to-transparent',
      borderGlow: 'group-hover:border-purple-500/50',
      features: ['Copy basic', 'Ottimizzazione Assets', 'SEO Friendly']
    },
    {
      icon: Globe,
      title: 'Pubblicazione online',
      description: 'Ti aiuto a mettere online il sito sul tuo dominio. Gestione hosting, configurazione DNS e certificati di sicurezza.',
      color: 'text-emerald-400',
      bgFade: 'from-emerald-500/10 to-transparent',
      borderGlow: 'group-hover:border-emerald-500/50',
      features: ['Hosting Setup', 'SSL Certificate', 'Dominio personalizzato']
    }
  ];

  return (
    <section id="servizi" className="py-20 sm:py-28 relative bg-[#050508] border-y border-gray-900">

      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900/40 via-[#050508] to-[#050508] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900/80 border border-gray-800 rounded-full mb-6 text-sm text-gray-400 font-mono">
            <Server className="w-4 h-4 text-cyan-400" />
            <span>sys.services.load()</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            I miei <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">servizi</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Soluzioni complete, performanti e scalabili per la tua presenza online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-[#0a0a0f] border border-gray-800 rounded-2xl p-8 overflow-hidden transition-all duration-300 ${service.borderGlow} hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${service.bgFade} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center mb-6 border border-gray-800 ${service.color}`}>
                  <service.icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold text-gray-100 mb-4 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                      <Terminal className={`w-4 h-4 ${service.color}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative pseudo-terminal dots */}
              <div className="absolute top-4 right-4 flex gap-1.5 opacity-30">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
