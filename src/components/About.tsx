
const About = () => {
  return (
    <section id="chi-sono" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-nexivo-dark mb-6">
              Una mente giovane.
              <span className="text-nexivo-blue block">Un approccio professionale.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Sono un web designer freelance. Aiuto piccole attività, negozi e professionisti 
                a presentarsi online con un sito chiaro, moderno e su misura.
              </p>
              
              <p>
                Ogni progetto è personalizzato e viene consegnato in pochi giorni, 
                con supporto e trasparenza.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 nexivo-gradient rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
                <div>
                  <p className="font-semibold text-nexivo-dark">Nexivo</p>
                  <p className="text-sm text-gray-500">Web Designer Freelance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <img 
              src="/lovable-uploads/a09c768e-c145-4d1f-aa92-f10525a22e3e.png"
              alt="Web development workspace"
              className="rounded-2xl shadow-2xl w-full hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
