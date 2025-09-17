
import { Monitor, FileText, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Design su misura',
      description: 'Layout personalizzati e compatibili con ogni dispositivo. Design unico che rispecchia la tua identità aziendale.'
    },
    {
      icon: FileText,
      title: 'Contenuti inclusi',
      description: 'Inserisco testi, immagini, logo e tutto il necessario per rendere il tuo sito completo e professionale.'
    },
    {
      icon: Globe,
      title: 'Pubblicazione online',
      description: 'Ti aiuto a mettere online il sito con il tuo dominio. Supporto completo dalla creazione alla pubblicazione.'
    }
  ];

  return (
    <section id="servizi" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cosa offro
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Servizi completi per la tua presenza online, dalla progettazione alla pubblicazione
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover-lift animate-scale-in nexivo-shadow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="nexivo-gradient w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
