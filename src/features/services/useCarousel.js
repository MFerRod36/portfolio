import { useCallback, useEffect, useRef, useState } from 'react';

const AUTO_ADVANCE_MS = 4000;

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const scrollBehavior = () => (prefersReducedMotion() ? 'auto' : 'smooth');

export function useCarousel(count) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const isPausedRef = useRef(false);
  const lastInteractionRef = useRef(0);

  const isCarouselActive = () => {
    const el = carouselRef.current;
    return el && el.scrollWidth > el.clientWidth;
  };

  const isCarouselVisible = () => {
    const el = carouselRef.current;
    if (!el) return false;
    const { top, bottom } = el.getBoundingClientRect();
    return top < window.innerHeight && bottom > 0;
  };

  const goTo = useCallback((index) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: scrollBehavior(),
      inline: 'start',
      block: 'nearest',
    });
    setActiveIndex(index);
  }, []);

  // Pause auto-advance while the user touches, hovers or focuses the carousel (WCAG 2.2.2)
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const pause = () => { isPausedRef.current = true; };
    const resume = () => {
      isPausedRef.current = false;
      lastInteractionRef.current = Date.now();
    };
    const onFocusOut = (e) => {
      if (!container.contains(e.relatedTarget)) resume();
    };

    container.addEventListener('touchstart', pause, { passive: true });
    container.addEventListener('touchend', resume);
    container.addEventListener('touchcancel', resume);
    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);
    container.addEventListener('focusin', pause);
    container.addEventListener('focusout', onFocusOut);
    return () => {
      container.removeEventListener('touchstart', pause);
      container.removeEventListener('touchend', resume);
      container.removeEventListener('touchcancel', resume);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
      container.removeEventListener('focusin', pause);
      container.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  // Sync dot with scroll position (handles manual swipe)
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const onScroll = () => {
      let closest = 0;
      let minDist = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const dist = Math.abs(card.offsetLeft - container.scrollLeft);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-advance — only runs when carousel is visible (mobile/tablet), not paused,
  // and the user has not asked the OS to reduce motion
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current || prefersReducedMotion()) return;
      // Give a full interval after the user lets go before moving again
      if (Date.now() - lastInteractionRef.current < AUTO_ADVANCE_MS) return;
      if (!isCarouselActive() || !isCarouselVisible()) return;
      setActiveIndex((prev) => {
        const next = (prev + 1) % count;
        cardRefs.current[next]?.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest',
        });
        return next;
      });
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(interval);
  }, [count]);

  return { activeIndex, goTo, carouselRef, cardRefs };
}
