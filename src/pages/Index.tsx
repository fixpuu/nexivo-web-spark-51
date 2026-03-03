
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-&lsqb;cubic-bezier(0.34,1.56,0.64,1)&rsqb; ${inView
        ? 'opacity-100 translate-y-0 scale-100 blur-none rotate-0'
        : 'opacity-0 translate-y-24 scale-95 blur-md -rotate-2'
        }`}
      style={{
        transitionDelay: `${delay}ms`,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 overflow-hidden font-sans selection:bg-pink-500/30">
      <Navbar />
      <Hero />

      <AnimatedSection delay={200}>
        <About />
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <Services />
      </AnimatedSection>

      <AnimatedSection delay={400}>
        <Portfolio />
      </AnimatedSection>

      <AnimatedSection delay={500}>
        <Pricing />
      </AnimatedSection>

      <AnimatedSection delay={600}>
        <Contact />
      </AnimatedSection>
    </div>
  );
};

export default Index;
