import { ArrowRight, ArrowDown } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const scrollToServizi = () => {
    const element = document.getElementById('servizi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const animatedTexts = [
    'parlano chiaro.',
    'stupiscono.',
    'convincono.',
    'conquistano.',
    'emozionano.'
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Siti web che
            <span className="text-primary block">
              <AnimatedText 
                texts={animatedTexts}
                className="inline-block"
              />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Ogni azienda ha una storia. Io la trasformo in un sito semplice, bello e professionale.
          </p>
          
          <button
            onClick={scrollToServizi}
            className="inline-flex items-center gap-3 nexivo-gradient text-white px-8 py-4 rounded-full text-lg font-semibold nexivo-shadow hover-lift relative overflow-hidden group"
          >
            <span className="relative z-10">Scopri cosa offro</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-12 animate-bounce">
            <ArrowDown 
              className="w-8 h-8 text-primary mx-auto cursor-pointer hover:text-accent transition-colors"
              onClick={scrollToServizi}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
