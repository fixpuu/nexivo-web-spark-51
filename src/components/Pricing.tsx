import { Check } from 'lucide-react';
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
    <section id="prezzi" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Servizi & Prezzi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluzioni web professionali con prezzi trasparenti e competitivi
          </p>
        </div>
        
        {/* Main Service Package */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover-lift animate-scale-in ring-2 ring-primary/20 nexivo-shadow">
            <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
              ✨ SERVIZIO PREMIUM
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {servicesInfo.name}
            </h3>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                Preventivo su misura
              </div>
              <p className="text-gray-600">
                Ogni progetto è unico, per questo preferisco creare un preventivo personalizzato
              </p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {servicesInfo.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-800 mb-2">📝 Nota sui domini:</h4>
              <p className="text-sm text-blue-700">
                Il dominio personalizzato dovrà essere scelto e registrato dal cliente. Ti aiuto nella scelta e configurazione.
              </p>
            </div>
            
            <button 
              onClick={copyEmailAndNotify}
              className="w-full py-4 nexivo-gradient text-white font-bold text-lg rounded-xl nexivo-shadow hover-lift transition-all duration-500"
            >
              Richiedi preventivo gratuito
            </button>
          </div>
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in-delayed">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Servizi aggiuntivi disponibili:</h3>
            <ul className="space-y-3 mb-6">
              {extras.map((extra, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{extra}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="text-gray-900 font-medium text-center">
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
