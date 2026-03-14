import { Check, Sparkles, Terminal, Code2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Pricing = () => {
  const { toast } = useToast();

  const copyEmailAndNotify = () => {
    const email = 'nexivowebs@hotmail.com';
    navigator.clipboard.writeText(email);
    toast({
      title: "Email copiata! 📧",
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
      'Velocità di caricamento ottimizzata (90+ Lighthouse)',
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
    <section id="prezzi" className="py-20 sm:py-28 relative bg-[#050508]">

      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">

        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900 border border-gray-800 rounded-full mb-6">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-mono text-sm">npm run pricing</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Investimento <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Trasparente</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Soluzioni studiate per massimizzare il ROI, senza costi nascosti.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Main Package (takes 3 cols on desktop) */}
          <div className="lg:col-span-3 bg-[#0a0a0f] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl relative group hover:border-blue-500/50 transition-colors duration-500">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600" />

            <div className="p-8 sm:p-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{servicesInfo.name}</h3>
                  <p className="text-gray-400">Progettazione e Sviluppo Full-Stack</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold tracking-wider">
                  <Sparkles className="w-3 h-3" /> PREMIUM
                </div>
              </div>

              <div className="mb-8 p-4 bg-gray-900/50 border border-gray-800 rounded-xl">
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                  Preventivo su misura
                </div>
                <p className="text-gray-400 text-sm">
                  Tariffa calcolata in base alla complessità e ai requisiti tecnici del progetto.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {servicesInfo.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 group/item">
                    <div className="mt-1 bg-gray-900 border border-gray-800 group-hover/item:border-cyan-500/50 rounded-md p-1 transition-colors">
                      <Check className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mb-8 p-4 bg-gray-900/80 border-l-4 border-cyan-500 rounded-r-lg">
                <div className="flex items-center gap-2 text-cyan-400 font-medium mb-1.5">
                  <Terminal className="w-4 h-4" /> root@nexivo:~# Note sui domini
                </div>
                <p className="text-sm text-gray-400 leading-relaxed pl-6">
                  Il dominio personalizzato dovrà essere scelto e registrato dal cliente. Offro supporto SSH/DNS setup incluso.
                </p>
              </div>

              <button
                onClick={copyEmailAndNotify}
                className="w-full py-4 bg-white hover:bg-gray-100 text-black font-bold text-lg rounded-xl transition-all duration-300 transform active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Inizia il tuo progetto
              </button>
            </div>
          </div>

          {/* Add-ons sidebar (takes 2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-6">

            <div className="bg-[#0a0a0f] border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-purple-500/30 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-purple-400" /> Moduli Aggiuntivi
              </h3>
              <div className="space-y-4">
                {extras.map((extra, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                    <span>{extra}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-[#0a0a0f] border border-gray-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full transition-colors" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)' }} />
              <div className="relative z-10">
                <h4 className="text-white font-bold mb-2">Budget Flessibile</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  // Sono flessibile sui prezzi e sempre disponibile per trovare l'architettura migliore adatta ad ogni budget.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
