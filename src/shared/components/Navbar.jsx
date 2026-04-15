import logo from '../../assets/logo.png';

const NAV_ITEMS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar({
  scrolled,
  activeSection,
  bubbleStyle,
  navRefs,
  firstMobileItemRef,
  isMenuOpen,
  toggleMenu,
  onNavClick,
}) {
  return (
    <header
      className={[
        'fixed top-4 left-1/2 -translate-x-1/2 z-50',
        'rounded-2xl border transition-all duration-300',
        'backdrop-blur-2xl',
        scrolled
          ? 'bg-white/12 border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_8px_32px_rgba(0,0,0,0.28),0_2px_8px_rgba(0,0,0,0.12)]'
          : 'bg-white/7 border-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_16px_rgba(0,0,0,0.18)]',
      ].join(' ')}
    >
      <nav className="relative flex items-center gap-2 h-12 px-4">
        {/* Left — logo */}
        <a href="#home" onClick={(e) => onNavClick(e, '#home')} className="flex items-center pr-3 border-r border-white/12">
          <img src={logo} alt="Fernanda Rodriguez" className="h-7 object-contain" />
        </a>

        {/* Nav items */}
        <ul className="hidden md:flex items-center gap-1 relative">
          {/* Spring bubble — liquid glass drop
              Note: Uses CSS custom properties (--bubble-x, --bubble-w) for dynamic
              JavaScript-computed values. This is the Tailwind 4 standard pattern for
              motion-driven state. Arbitrary values for custom easing and multi-layer
              shadow are intentional for brand consistency. */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-1/2 h-8 rounded-lg pointer-events-none backdrop-blur-sm bg-white/8 border border-white/22 shadow-[inset_0_1px_1px_rgba(255,255,255,0.28),inset_0_-1px_1px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.15)] [transition:transform_350ms_cubic-bezier(0.34,1.56,0.64,1),width_250ms_ease-out] translate-x-[--bubble-x] -translate-y-1/2 w-[--bubble-w]"
            style={{
              '--bubble-x': `${bubbleStyle.x}px`,
              '--bubble-w': `${bubbleStyle.width}px`,
            }}
          />

          {NAV_ITEMS.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <li
                key={item.id}
                ref={(el) => (navRefs.current[index] = el)}
                className="relative"
              >
                <a
                  href={item.href}
                  onClick={(e) => onNavClick(e, item.href)}
                  className={[
                    'relative z-10 block py-2 px-5 font-display text-sm font-medium rounded-lg',
                    'transition-colors duration-200',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                    isActive
                      ? 'text-text'
                      : 'text-text/70 hover:text-text',
                  ].join(' ')}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right — hamburger (mobile only) */}
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span
            className={[
              'block h-0.5 w-6 bg-text origin-center transition-transform duration-200',
              isMenuOpen ? 'rotate-45 translate-y-2' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block h-0.5 w-6 bg-text origin-center transition-[transform,opacity] duration-200',
              isMenuOpen ? 'opacity-0 scale-x-0' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block h-0.5 w-6 bg-text origin-center transition-transform duration-200',
              isMenuOpen ? '-rotate-45 -translate-y-2' : '',
            ].join(' ')}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={[
          'md:hidden overflow-hidden transition-all duration-300',
          'backdrop-blur-xl bg-white/8',
          isMenuOpen ? 'max-h-96 border-b border-white/8' : 'max-h-0',
        ].join(' ')}
      >
        <ul className="px-6">
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeSection === item.id;
            const isLast = index === NAV_ITEMS.length - 1;
            return (
              <li
                key={item.id}
                className={isLast ? '' : 'border-b border-white/8'}
              >
                <a
                  ref={index === 0 ? firstMobileItemRef : undefined}
                  href={item.href}
                  onClick={(e) => onNavClick(e, item.href)}
                  className={[
                    'flex items-center gap-2 py-5 font-display text-sm font-medium',
                    'transition-colors duration-200',
                    isActive
                      ? 'text-accent'
                      : 'text-text/70',
                  ].join(' ')}
                >
                  {isActive && <span aria-hidden="true">&#9679;</span>}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
