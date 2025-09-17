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
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-nexivo-light to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-nexivo-dark mb-6 leading-tight">
            Siti web che
            <span className="text-nexivo-blue block">
              <AnimatedText 
                texts={animatedTexts}
                className="inline-block"
              />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ogni azienda ha una storia. Io la trasformo in un sito semplice, bello e professionale.
          </p>
          
          <button
            onClick={scrollToServizi}
            className="inline-flex items-center gap-3 nexivo-gradient text-white px-8 py-4 rounded-full text-lg font-semibold nexivo-shadow hover-lift"
          >
            Scopri cosa offro
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="mt-12 animate-bounce">
            <ArrowDown 
              className="w-8 h-8 text-nexivo-blue mx-auto cursor-pointer hover:text-nexivo-dark transition-colors"
              onClick={scrollToServizi}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
