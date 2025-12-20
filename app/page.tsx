import LenisProvider from "./components/LenisProvider";
import UnifiedBackground from "./components/UnifiedBackground";
import IntroAnimation from "./components/IntroAnimation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Testimonials from "./components/sections/Testimonials";
import ContactCTA from "./components/sections/ContactCTA";

export default function Home() {
  return (
    <LenisProvider>
      <IntroAnimation />
      <UnifiedBackground />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <ContactCTA />
      </main>
    </LenisProvider>
  );
}
