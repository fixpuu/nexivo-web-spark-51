
import { Mail, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const copyEmailAndNotify = () => {
    const email = 'nexivowebs@hotmail.com';
    
    // Copia l'email negli appunti
    navigator.clipboard.writeText(email);
    
    toast({
      title: "Email copiata! 📧",
      description: "nexivowebs@hotmail.com copiata negli appunti. Ti aspetto!",
    });
  };

  return (
    <section id="contatti" className="py-20 bg-nexivo-dark">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hai un progetto?
            <span className="text-nexivo-blue block">Scrivimi.</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Parlami della tua attività, ti rispondo in giornata con un'idea su misura.
          </p>
          
          <button
            onClick={copyEmailAndNotify}
            className="inline-flex items-center gap-3 nexivo-gradient text-white px-8 py-4 rounded-full text-lg font-semibold nexivo-shadow hover-lift"
          >
            <Mail className="w-5 h-5" />
            Scrivimi
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="mt-12 pt-12 border-t border-gray-700">
            <p className="text-gray-400">
              © 2025 Nexivo. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
