import { Check, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Pricing = () => {
  const { toast } = useToast();

  const copyEmailAndNotify = () => {
    const email = 'nexivowebs@hotmail.com';

    // Copia l'email negli appunti
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
      'Velocità di caricamento ottimizzata',
      'Hosting gratuito per 1 anno',
      'Supporto tecnico completo per 3 mesi',
      'Consegna garantita in 7 giorni lavorativi'
    ]
  };

  const extras = [
    'Aggiornamenti urgenti entro 5 giorni',
    'Traduzione multilingue (inglese, spagnolo, francese)',
    'Integrazione e-commerce avanzata',
    'Sistema di prenotazioni online',
    'Blog professionale con CMS'
  ];

  return (
    <section id="prezzi" className="py-12 sm:py-16 md:py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in text-white">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 px-2 drop-shadow-[0_0_15px_rgba(0,212,255,0.4)]">
            Servizi & Prezzi
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-2 font-light">
            Soluzioni web professionali con prezzi trasparenti e competitivi
          </p>
        </div>

        {/* Main Service Package */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-effect glass-effect-hover p-5 sm:p-6 md:p-8 rounded-3xl shadow-[0_0_50px_rgba(0,212,255,0.2)] animate-scale-in border border-cyan-500/30">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs sm:text-sm font-bold tracking-widest px-4 py-2 rounded-full inline-block mb-4 sm:mb-6 shadow-[0_0_15px_rgba(0,212,255,0.5)]">
              ✨ SERVIZIO PREMIUM
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow-md">
              {servicesInfo.name}
            </h3>

            <div className="mb-4 sm:mb-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 drop-shadow-[0_0_10px_rgba(0,212,255,0.3)]">
                Preventivo su misura
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Ogni progetto è unico, per questo preferisco creare un preventivo personalizzato
              </p>
            </div>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {servicesInfo.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <div className="bg-cyan-500/20 p-1.5 rounded-full mt-0.5">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                  </div>
                  <span className="text-gray-200 text-sm sm:text-base font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-cyan-900/40 border border-cyan-500/30 p-4 sm:p-5 rounded-xl mb-6 sm:mb-8 shadow-inner backdrop-blur-sm">
              <h4 className="font-semibold text-cyan-300 text-sm sm:text-base mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Nota sui domini:
              </h4>
              <p className="text-sm text-cyan-100/80 leading-relaxed">
                Il dominio personalizzato dovrà essere scelto e registrato dal cliente. Ti aiuto nella scelta e configurazione.
              </p>
            </div>

            <button
              onClick={copyEmailAndNotify}
              className="w-full py-3 sm:py-4 nexivo-gradient text-white font-bold text-base sm:text-lg rounded-xl nexivo-shadow hover-lift transition-all duration-500"
            >
              Richiedi preventivo gratuito
            </button>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 max-w-2xl mx-auto">
          <div className="glass-effect p-5 sm:p-6 md:p-8 rounded-3xl shadow-lg border-purple-500/30 animate-fade-in-delayed">
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6 drop-shadow-md">Servizi aggiuntivi disponibili:</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {extras.map((extra, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-purple-500/20 p-1.5 rounded-full">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                  </div>
                  <span className="text-gray-200 text-sm sm:text-base font-medium">{extra}</span>
                </li>
              ))}
            </ul>

            <div className="bg-purple-900/30 border border-purple-500/30 p-5 sm:p-6 rounded-2xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
              <p className="text-gray-200 font-medium text-center text-sm sm:text-base relative z-10 leading-relaxed">
                💬 Sono flessibile sui prezzi e sempre disponibile per trovare la soluzione migliore per ogni budget.
                Ogni progetto è importante, indipendentemente dalle dimensioni.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
