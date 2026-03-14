import { Code, Terminal, Layout, Layers, MonitorSmartphone } from 'lucide-react';

const About = () => {
  return (
    <section id="chi-sono" className="py-20 sm:py-28 relative overflow-hidden bg-transparent">
      {/* Minimalistic grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Subtle glow on the side */}
      <div className="absolute -left-40 top-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm">~/frontend_architect.sh</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Pixel perfetti.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Esperienze fluide.
              </span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed border-l-2 border-gray-800 pl-6">
              <p>
                Sono specializzato nello sviluppo <strong>Frontend</strong> e nel <strong>Web Design</strong>.
                Trasformo idee in interfacce utente dinamiche, accessibili e incredibilmente veloci, curando ogni singolo dettaglio visivo.
              </p>
              <p>
                Il mio obiettivo è unire design mozzafiato a codice strutturato e manutenibile, offrendo soluzioni digitali premium per chi vuole distinguersi online.
              </p>
            </div>

            <div className="pt-4 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Code, label: 'Modern Stack', desc: 'React, Vue, TypeScript' },
                { icon: Layout, label: 'Styling & UI', desc: 'Tailwind CSS, Framer' },
                { icon: Layers, label: 'Architettura', desc: 'Componenti scalabili' },
                { icon: MonitorSmartphone, label: 'Responsive', desc: 'Mobile-first design' },
              ].map((skill, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-gray-900/40 border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="p-3 bg-gray-800/80 rounded-lg h-fit">
                    <skill.icon className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{skill.label}</h4>
                    <span className="text-sm text-gray-500">{skill.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Image Terminal Window - Abstract Code Concept */}
          <div className="relative group perspective-1000 hidden lg:block">
            {/* Window frame */}
            <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl relative transform transition-transform duration-700 ease-out group-hover:rotate-y-2 group-hover:-rotate-x-2">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-auto text-xs text-gray-500 font-mono">App.tsx</div>
              </div>

              {/* Content / Abstract Code */}
              <div className="relative h-[400px] sm:h-[500px] bg-[#0d1117] p-6 sm:p-8 font-mono text-sm sm:text-base overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />

                <div className="space-y-2 relative z-10 text-gray-400 select-none">
                  <div><span className="text-purple-400">import</span> {'{'} <span className="text-yellow-200">useState</span>, <span className="text-yellow-200">useEffect</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span>;</div>
                  <div><span className="text-purple-400">import</span> {'{'} <span className="text-yellow-200">Sparkles</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-300">'lucide-react'</span>;</div>
                  <br />
                  <div><span className="text-pink-400">const</span> <span className="text-blue-400">NexivoProfile</span> <span className="text-pink-400">=</span> () <span className="text-pink-400">=&gt;</span> {'{'}</div>

                  <div className="pl-4 border-l border-gray-800 space-y-2 my-2">
                    <div><span className="text-pink-400">const</span> [isAwesome, setIsAwesome] <span className="text-pink-400">=</span> <span className="text-yellow-200">useState</span>(<span className="text-orange-400">true</span>);</div>
                    <br />
                    <div><span className="text-purple-400">return</span> (</div>
                    <div className="pl-4">
                      <div>&lt;<span className="text-green-400">div</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"flex flex-col items-center"</span>&gt;</div>
                      <div className="pl-4">
                        <div>&lt;<span className="text-green-400">h1</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"text-transparent bg-clip-text"</span>&gt;</div>
                        <div className="pl-4 text-gray-200">Frontend Excellence</div>
                        <div>&lt;/<span className="text-green-400">h1</span>&gt;</div>
                        <div>&lt;<span className="text-yellow-200">Sparkles</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"animate-pulse text-cyan-400"</span> /&gt;</div>
                      </div>
                      <div>&lt;/<span className="text-green-400">div</span>&gt;</div>
                    </div>
                    <div>);</div>
                  </div>
                  <div>{'}'};</div>
                  <br />
                  <div><span className="text-purple-400">export default</span> <span className="text-blue-400">NexivoProfile</span>;</div>
                </div>
              </div>
            </div>

            {/* Subtle glow behind the window */}
            <div className="absolute -inset-2 opacity-50 group-hover:opacity-100 transition-opacity duration-700 -z-10" style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.15) 0%, rgba(16,185,129,0.15) 50%, transparent 80%)' }} />

            <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)' }} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
