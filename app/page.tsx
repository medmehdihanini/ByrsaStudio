import LenisProvider from "./components/LenisProvider";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Testimonials from "./components/sections/Testimonials";
import ContactCTA from "./components/sections/ContactCTA";

export default function Home() {
  return (
    <LenisProvider>
      <main className="relative">
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
