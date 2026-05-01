import { Check, Sparkles, Terminal, Code2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const Pricing = () => {
  const { toast } = useToast();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const copyEmailAndNotify = () => {
    const email = 'nexivowebs@hotmail.com';
    navigator.clipboard.writeText(email);
    toast({
      title: "Email copiata!",
      description: "nexivowebs@hotmail.com copiata negli appunti. Scrivimi per un preventivo personalizzato!",
    });
  };

  const servicesInfo = {
    name: 'Servizi Web Professionali',
    features: [
      'Fino a 6 pagine web completamente personalizzate',
      'Design responsive per dispositivi mobili, tablet e desktop',
      'Inserimento completo di contenuti (testi, immagini, logo)',
      'Galleria fotografica e portfolio interattivo',
      'Integrazione social media e contatti',
      'Velocita di caricamento ottimizzata (90+ Lighthouse)',
      'Hosting cloud gratuito per 1 anno',
      'Supporto tecnico completo per 3 mesi',
      'Consegna garantita in 7 giorni lavorativi'
    ]
  };

  const extras = [
    'Aggiornamenti urgenti entro 5 giorni',
    'Traduzione multilingue (EN, ES, FR)',
    'Blog / CMS Headless integrato'
  ];

  return (
    <section id="prezzi" className="py-20 sm:py-28 relative bg-[#010101]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none morph-blob" style={{ background: 'radial-gradient(circle, rgba(201,103,232,0.08) 0%, transparent 70%)' }} />

      <div ref={ref} className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full mb-6 backdrop-blur-sm"
          >
            <Code2 className="w-4 h-4 text-[#C967E8]" />
            <span className="text-[#C967E8] font-mono text-sm">npm run pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight"
          >
            Investimento <span className="text-shimmer">Trasparente</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Soluzioni studiate per massimizzare il ROI, senza costi nascosti.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Main Package */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative group hover:border-[#C967E8]/50 transition-all duration-500 backdrop-blur-sm"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FA93FA] via-[#C967E8] to-[#983AD6]" />

            <div className="p-8 sm:p-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{servicesInfo.name}</h3>
                  <p className="text-gray-400">Progettazione e Sviluppo Full-Stack</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#983AD6]/10 border border-[#983AD6]/30 rounded-full text-[#C967E8] text-xs font-bold tracking-wider">
                  <Sparkles className="w-3 h-3" /> PREMIUM
                </div>
              </div>

              <div className="mb-8 p-4 bg-white/[0.03] border border-white/10 rounded-xl">
                <div className="text-3xl sm:text-4xl font-black text-shimmer mb-2">
                  Preventivo su misura
                </div>
                <p className="text-gray-400 text-sm">
                  Tariffa calcolata in base alla complessita e ai requisiti tecnici del progetto.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {servicesInfo.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    className="flex items-start gap-4 group/item"
                  >
                    <div className="mt-1 bg-white/[0.05] border border-white/10 group-hover/item:border-[#C967E8]/50 rounded-md p-1 transition-colors">
                      <Check className="w-4 h-4 text-[#C967E8]" />
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mb-8 p-4 bg-white/[0.03] border-l-4 border-[#C967E8] rounded-r-lg">
                <div className="flex items-center gap-2 text-[#C967E8] font-medium mb-1.5">
                  <Terminal className="w-4 h-4" /> root@nexivo:~# Note sui domini
                </div>
                <p className="text-sm text-gray-400 leading-relaxed pl-6">
                  Il dominio personalizzato dovra essere scelto e registrato dal cliente. Offro supporto SSH/DNS setup incluso.
                </p>
              </div>

              <motion.button
                onClick={copyEmailAndNotify}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-white hover:bg-gray-100 text-black font-bold text-lg rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(201,103,232,0.2)] cursor-pointer"
              >
                Inizia il tuo progetto
              </motion.button>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#983AD6]/30 transition-colors duration-300 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#983AD6]" /> Moduli Aggiuntivi
              </h3>
              <div className="space-y-4">
                {extras.map((extra, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#983AD6] mt-1.5 flex-shrink-0" />
                    <span>{extra}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/[0.03] to-[#010101] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#C967E8]/30 transition-colors backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full" style={{ background: 'radial-gradient(circle, rgba(201,103,232,0.08) 0%, transparent 70%)' }} />
              <div className="relative z-10">
                <h4 className="text-white font-bold mb-2">Budget Flessibile</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  // Sono flessibile sui prezzi e sempre disponibile per trovare l'architettura migliore adatta ad ogni budget.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
