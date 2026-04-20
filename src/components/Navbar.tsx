import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/nexivologo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Servizi', id: 'servizi' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Prezzi', id: 'prezzi' },
    { label: 'Contatti', id: 'contatti' }
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] sm:h-1 z-[100] bg-gray-900/50">
        <div
          className="h-full bg-gradient-to-r from-[#FA93FA] via-[#C967E8] to-[#983AD6] rounded-r-full shadow-[0_0_10px_rgba(201,103,232,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#010101]/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/10' : 'bg-transparent'
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 mt-1">
          <div className="flex items-center justify-between">
            <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
              <img
                src={logo}
                alt="Nexivo Logo"
                className="h-16 sm:h-20 md:h-28 drop-shadow-[0_0_15px_rgba(201,103,232,0.3)] transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-[#C967E8] hover:scale-110 transition-all duration-300 font-medium text-sm lg:text-base"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 p-2 hover:text-[#C967E8] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-56 sm:w-64 bg-[#010101]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 md:hidden transform transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col p-4 sm:p-6 pt-16 sm:pt-20">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-[#C967E8] hover:pl-2 transition-all duration-300 font-medium py-3 sm:py-4 text-base sm:text-lg border-b border-white/5 text-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
