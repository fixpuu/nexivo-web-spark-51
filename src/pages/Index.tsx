
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Preloader from '../components/Preloader';
import CustomCursor from '../components/CustomCursor';

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-12'
        }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 overflow-hidden font-sans selection:bg-cyan-500/30">
      <Preloader />
      <CustomCursor />
      <Navbar />
      <Hero />

      <AnimatedSection delay={200}>
        <About />
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <Timeline />
      </AnimatedSection>

      <AnimatedSection delay={400}>
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
