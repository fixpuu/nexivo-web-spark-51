
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
import InfiniteSlider from '../components/ui/infinite-slider';

const LOGO_URLS = [
  'https://html.tailus.io/blocks/customers/openai.svg',
  'https://html.tailus.io/blocks/customers/nvidia.svg',
  'https://html.tailus.io/blocks/customers/column.svg',
  'https://html.tailus.io/blocks/customers/github.svg',
  'https://html.tailus.io/blocks/customers/nike.svg',
  'https://html.tailus.io/blocks/customers/laravel.svg',
  'https://html.tailus.io/blocks/customers/lilly.svg',
  'https://html.tailus.io/blocks/customers/lemonsqueezy.svg',
];

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
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

const LogoCloud = () => (
  <section className="relative z-30 bg-black/20 backdrop-blur-sm border-t border-white/5 py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Text */}
        <div className="flex-shrink-0 text-center md:text-left">
          <p className="text-sm text-gray-400 font-medium whitespace-nowrap">
            Scelto dai migliori team
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-white/10 flex-shrink-0" />

        {/* Logos Slider */}
        <div className="flex-1 w-full overflow-hidden">
          <InfiniteSlider speed={35} direction="left">
            {LOGO_URLS.map((url, i) => (
              <div key={i} className="flex-shrink-0 mx-6 sm:mx-8">
                <img
                  src={url}
                  alt=""
                  className="h-6 sm:h-7 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-[#010101] text-gray-100 overflow-hidden font-inter selection:bg-purple-500/30">
      <Preloader />
      <CustomCursor />
      <Navbar />
      <Hero />

      <LogoCloud />

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
