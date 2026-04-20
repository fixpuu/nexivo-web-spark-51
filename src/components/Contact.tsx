import { Mail, Terminal, Send, GitMerge, Zap, Cpu } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const copyEmailAndNotify = () => {
    const email = 'nexivowebs@hotmail.com';
    navigator.clipboard.writeText(email);

    toast({
      title: "Email copiata! 📧",
      description: "nexivowebs@hotmail.com copiata negli appunti. Ti aspetto!",
    });
  };

  return (
    <section id="contatti" className="py-20 sm:py-28 relative bg-[#010101]">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#983AD6]/5 via-[#010101] to-[#010101] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full mb-6 backdrop-blur-sm">
            <GitMerge className="w-4 h-4 text-[#C967E8]" />
            <span className="text-[#C967E8] font-mono text-sm">git checkout contact</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Iniziamo il <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FA93FA] to-[#983AD6]">Progetto</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Parlami della tua attività, riceverai una risposta in giornata con una soluzione su misura.
          </p>
        </div>

        {/* Console / CTA Window */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">

          {/* Terminal Header */}
          <div className="bg-white/[0.03] border-b border-white/10 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FA93FA]" />
            <div className="w-3 h-3 rounded-full bg-[#C967E8]" />
            <div className="w-3 h-3 rounded-full bg-[#983AD6]" />
            <div className="ml-auto text-gray-500 font-mono text-xs">root@nexivo:~</div>
          </div>

          <div className="p-6 sm:p-10 text-left relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#983AD6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <form action="https://api.web3forms.com/submit" method="POST" className="relative z-10 flex flex-col gap-4">
              <input type="hidden" name="access_key" value="1d9f99da-d35d-4548-b8b6-9a723930f430" />

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Il tuo nome"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C967E8] focus:ring-1 focus:ring-[#C967E8] transition-all font-mono text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="La tua email (es: nexivowebs@hotmail.com)"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C967E8] focus:ring-1 focus:ring-[#C967E8] transition-all font-mono text-sm"
                />
              </div>

              <textarea
                name="message"
                placeholder="Parlami del tuo progetto..."
                required
                rows={4}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C967E8] focus:ring-1 focus:ring-[#C967E8] transition-all font-mono text-sm resize-none"
              ></textarea>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl text-lg font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(201,103,232,0.2)] transform hover:-translate-y-1 transition-all duration-300 mt-2"
              >
                <span>Invia Messaggio</span>
                <Send className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>

              <p className="mt-3 text-xs sm:text-sm text-center text-gray-400 font-mono leading-relaxed bg-white/[0.02] p-3 rounded-lg border border-white/5">
                <span className="text-[#C967E8]">⚡ Tempo di risposta: ~7 ore</span><br />
                Se non ricevi risposta entro 48h scrivimi a <a href="mailto:nexivowebs@hotmail.com" className="text-[#FA93FA] hover:underline">nexivowebs@hotmail.com</a> (limite del form: 250 messaggi/mese).
              </p>
            </form>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { value: '100%', label: 'Soddisfazione C.', icon: Terminal },
            { value: '24/72h', label: 'Consegna Media', icon: Zap },
            { value: '24/7', label: 'Supporto Tecnico', icon: Cpu },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/[0.02] border border-white/10 rounded-xl p-6 flex flex-col items-center text-center hover:bg-white/[0.04] hover:border-[#C967E8]/20 transition-colors backdrop-blur-sm">
              <stat.icon className="w-6 h-6 text-gray-400 mb-4" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-tr from-[#FA93FA] to-[#983AD6] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
              N
            </div>
            <span className="text-white font-bold text-2xl tracking-tight">Nexivo</span>
          </div>
          <p className="text-gray-600 text-sm font-mono">
            {`// © ${new Date().getFullYear()} Nexivo. All rights reserved.`}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
