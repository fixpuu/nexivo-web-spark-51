
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
      className={`transition-all duration-1000 ease-out ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
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
