import { Check, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';

const Pricing = () => {
  const { toast } = useToast();
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const copyEmailAndNotify = (buttonType: 'package' | 'contact') => {
    const email = 'nexivowebs@hotmail.com';
    
    // Copia l'email negli appunti
    navigator.clipboard.writeText(email);
    
    if (buttonType === 'package') {
      toast({
        title: "Email copiata! 📧",
        description: "nexivowebs@hotmail.com copiata, scrivimi per ordinare un sito o per informazioni aggiuntive.",
      });
    } else {
      toast({
        title: "Email copiata! 📧", 
        description: "nexivowebs@hotmail.com copiata negli appunti. Ti aspetto!",
      });
    }
  };

  const packageInfo = {
    name: 'Pacchetto Sito Web Professionale',
    originalPrice: '250€',
    price: '80€',
    features: [
      'Fino a 6 pagine web completamente personalizzate',
      'Design responsive per dispositivi mobili, tablet e desktop',
      'Inserimento completo di contenuti (testi, immagini, logo)',
      'Galleria fotografica e portfolio interattivo',
      'Integrazione Google Maps e social media',
      'Velocità di caricamento ottimizzata',
      'Hosting gratuito per 1 anno',
      'Supporto tecnico completo per 3 mesi',
      'Consegna garantita in 7 giorni lavorativi'
    ],
    note: 'Offerta limitata valida solo per i primi 10 clienti'
  };

  const extras = [
    'Aggiornamenti entro 5 giorni: +20€',
    'Traduzione inglese: +30€'
  ];

  return (
    <section id="prezzi" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-nexivo-dark mb-6">
            Offerta Esclusiva
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sito web professionale a prezzo speciale per tempo limitato
          </p>
        </div>

        {/* Timer Countdown */}
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8 animate-fade-in">
          <div className="text-center">
            <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center justify-center gap-2">
              <Clock className="w-6 h-6" />
              Offerta scade tra:
            </h3>
            <div className="flex justify-center gap-4">
              <div className="bg-red-600 text-white rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">{timeLeft.days}</div>
                <div className="text-sm">Giorni</div>
              </div>
              <div className="bg-red-600 text-white rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm">Ore</div>
              </div>
              <div className="bg-red-600 text-white rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm">Minuti</div>
              </div>
              <div className="bg-red-600 text-white rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm">Secondi</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Single Package */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover-lift animate-scale-in ring-2 ring-nexivo-blue nexivo-shadow">
            <div className="bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
              🔥 OFFERTA LIMITATA
            </div>
            
            <h3 className="text-3xl font-bold text-nexivo-dark mb-4">
              {packageInfo.name}
            </h3>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="text-2xl text-gray-400 line-through">
                {packageInfo.originalPrice}
              </div>
              <div className="text-5xl font-bold text-red-500">
                {packageInfo.price}
              </div>
              <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                -68%
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {packageInfo.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-nexivo-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
              <p className="text-sm text-red-800">
                <span className="font-medium">⚠️ Attenzione:</span> {packageInfo.note}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-800 mb-2">📝 Nota sul dominio:</h4>
              <p className="text-sm text-blue-700">
                Il dominio personalizzato dovrà essere scelto e pagato dal cliente (il prezzo del dominio può variare)
              </p>
            </div>
            
            <button 
              onClick={() => copyEmailAndNotify('package')}
              className="w-full py-4 nexivo-gradient text-white font-bold text-lg rounded-xl nexivo-shadow hover-lift transition-all duration-500"
            >
              Approfitta dell'offerta ora!
            </button>
          </div>
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in-delayed">
            <h3 className="text-xl font-bold text-nexivo-dark mb-4">Extra disponibili:</h3>
            <ul className="space-y-2 mb-6">
              {extras.map((extra, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-nexivo-blue" />
                  <span className="text-gray-600">{extra}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-nexivo-blue/10 p-6 rounded-xl">
              <p className="text-nexivo-dark font-medium text-center">
                💬 Tutti i prezzi sono negoziabili. Il mio obiettivo è collaborare con più persone possibile, 
                anche con chi ha budget ridotti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
