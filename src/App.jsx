import HeroSection from './features/hero/HeroSection';
import { NavbarContainer } from './shared/components/NavbarContainer';

function App() {
  return (
    <>
      <NavbarContainer />
      <main id="main-content">
        <HeroSection />
      </main>
    </>
  );
}

export default App;
