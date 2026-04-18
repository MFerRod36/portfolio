import { useCallback, useEffect, useRef, useState } from 'react';

const AUTO_ADVANCE_MS = 4000;

export function useCarousel(count) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);

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
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });
    setActiveIndex(index);
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

  // Auto-advance — only runs when carousel is visible (mobile/tablet)
  useEffect(() => {
    const interval = setInterval(() => {
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
