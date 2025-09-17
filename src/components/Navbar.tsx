
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="/lovable-uploads/70ed5a9c-150f-4727-bd4f-9dae66aacbce.png"
              alt="Nexivo Logo"
              className="h-16 md:h-20"
            />
          </div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'Servizi', id: 'servizi' },
              { label: 'Portfolio', id: 'portfolio' },
              { label: 'Prezzi', id: 'prezzi' },
              { label: 'Contatti', id: 'contatti' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-nexivo-dark hover:text-nexivo-blue transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-nexivo-dark">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
