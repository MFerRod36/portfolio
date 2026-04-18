import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

const NAV_IDS = ['home', 'about', 'services', 'contact'];

export function useNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRefs = useRef([]);
  const bubbleRef = useRef(null);
  const firstMobileItemRef = useRef(null);
  const scrollLockRef = useRef(false);

  // Direct DOM update — bypasses the state→render→effect chain entirely.
  // Called from IntersectionObserver and resize handler so the bubble never lags.
  const moveBubble = useCallback((sectionId) => {
    const index = NAV_IDS.indexOf(sectionId);
    const el = navRefs.current[index];
    const bubble = bubbleRef.current;
    if (!el || !bubble) return;
    bubble.style.width = `${el.offsetWidth}px`;
    bubble.style.transform = `translateX(${el.offsetLeft}px) translateY(-50%)`;
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
    moveBubble(id);
    // Lock scroll spy while smooth scroll animates — prevents intermediate
    // sections from overriding the destination (critical for last section).
    scrollLockRef.current = true;
    setTimeout(() => { scrollLockRef.current = false; }, 1000);
    closeMenu();
  };

  // Scroll detection for navbar glassmorphism only
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section detection via scroll + getBoundingClientRect.
  // IntersectionObserver with rootMargin bands fails for short sections (About) and
  // the last section (Contact) which can't scroll far enough into the detection band.
  useEffect(() => {
    const onScroll = () => {
      if (scrollLockRef.current) return;
      const threshold = window.innerHeight * 0.45;
      let active = NAV_IDS[0];
      for (const id of NAV_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) active = id;
      }
      setActiveSection(active);
      moveBubble(active);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [moveBubble]);

  // Initial bubble position — after first paint when refs are ready
  useLayoutEffect(() => {
    moveBubble('home');
  }, [moveBubble]);

  // Recalculate bubble on resize
  useEffect(() => {
    const onResize = () => moveBubble(activeSection);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [activeSection, moveBubble]);

  // Focus first mobile item when menu opens
  useEffect(() => {
    if (!isMenuOpen) return;
    const t = setTimeout(() => firstMobileItemRef.current?.focus(), 100);
    return () => clearTimeout(t);
  }, [isMenuOpen]);

  // Close mobile menu on scroll
  useEffect(() => {
    if (!isMenuOpen) return;
    window.addEventListener('scroll', closeMenu, { passive: true });
    return () => window.removeEventListener('scroll', closeMenu);
  }, [isMenuOpen, closeMenu]);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e) => { if (e.key === 'Escape') closeMenu(); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen, closeMenu]);

  return {
    scrolled,
    activeSection,
    isMenuOpen,
    navRefs,
    bubbleRef,
    firstMobileItemRef,
    toggleMenu,
    handleNavClick,
  };
}
