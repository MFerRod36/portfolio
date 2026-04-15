import { useCallback, useEffect, useRef, useState } from 'react';
import { Navbar } from './Navbar';

const NAV_IDS = ['home', 'about', 'contact'];

export function NavbarContainer() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bubbleStyle, setBubbleStyle] = useState({ x: 0, width: 0 });
  const navRefs = useRef([]);
  const firstMobileItemRef = useRef(null);

  const toggleMenu = useCallback(() => setIsMenuOpen((v) => !v), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMenu();
  }, [closeMenu]);

  // Focus first mobile item when menu opens
  useEffect(() => {
    if (!isMenuOpen) return;
    const t = setTimeout(() => {
      firstMobileItemRef.current?.focus();
    }, 100);
    return () => clearTimeout(t);
  }, [isMenuOpen]);

  // Scroll detection for glassmorphism
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (!isMenuOpen) return;
    const onScroll = () => closeMenu();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMenuOpen, closeMenu]);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen, closeMenu]);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const observers = NAV_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  // Update bubble position when active section changes
  useEffect(() => {
    const index = NAV_IDS.indexOf(activeSection);
    const el = navRefs.current[index];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setBubbleStyle({ x: offsetLeft, width: offsetWidth });
    }
  }, [activeSection]);

  // Recalculate bubble on resize (layout shifts change offsets)
  useEffect(() => {
    const onResize = () => {
      const index = NAV_IDS.indexOf(activeSection);
      const el = navRefs.current[index];
      if (el) {
        const { offsetLeft, offsetWidth } = el;
        setBubbleStyle({ x: offsetLeft, width: offsetWidth });
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [activeSection]);

  return (
    <Navbar
      scrolled={scrolled}
      activeSection={activeSection}
      bubbleStyle={bubbleStyle}
      navRefs={navRefs}
      firstMobileItemRef={firstMobileItemRef}
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
      onNavClick={handleNavClick}
    />
  );
}
