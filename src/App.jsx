import { LangProvider } from './shared/context/LangContext';
import HeroSection from './features/hero/HeroSection';
import AboutSection from './features/about/AboutSection';
import ServicesSection from './features/services/ServicesSection';
import ContactSection from './features/contact/ContactSection';
import { Navbar } from './layout/navbar/NavbarContainer';
import { Footer } from './layout/footer/Footer';
import { BackgroundGrid } from './shared/components/BackgroundGrid';

function App() {
  return (
    <LangProvider>
      <Navbar />
      <main id="main-content">
        <div className="relative bg-page">
          <BackgroundGrid />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </LangProvider>
  );
}

export default App;
