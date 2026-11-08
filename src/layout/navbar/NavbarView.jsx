import { LanguageSwitch } from '../../shared/components/LanguageSwitch';

export function NavbarView({
  scrolled,
  activeSection,
  navItems,
  labels,
  socialLinks,
  navRefs,
  bubbleRef,
  firstMobileItemRef,
  isMenuOpen,
  toggleMenu,
  onNavClick,
  lang,
  onToggle,
}) {
  return (
    <header
      className={[
        'fixed top-4 left-1/2 -translate-x-1/2 z-50',
        'rounded-2xl border transition-all duration-300',
        'backdrop-blur-2xl',
        scrolled
          ? 'bg-forest/95 border-paper/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_8px_32px_rgba(0,0,0,0.28),0_2px_8px_rgba(0,0,0,0.12)]'
          : 'bg-forest/85 border-paper/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_16px_rgba(0,0,0,0.18)]',
      ].join(' ')}
    >
      <nav className="relative flex items-center gap-2 h-12 px-4">
        {/* Left — logo */}
        <a href="#home" onClick={(e) => onNavClick(e, '#home')} className="flex items-center pr-3 border-r border-paper/15">
          <img src="/logo.png" alt="Fernanda Rodriguez" className="h-7 object-contain" />
        </a>

        {/* Nav items */}
        <div className="hidden md:flex items-center gap-1 relative">
          <span
            ref={bubbleRef}
            aria-hidden="true"
            className="absolute left-0 top-1/2 h-8 rounded-lg pointer-events-none backdrop-blur-sm bg-paper/10 border border-paper/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_1px_4px_rgba(0,0,0,0.18)] [transition:transform_350ms_var(--ease-spring),width_250ms_ease-out]"
          />
          <ul className="flex items-center gap-1">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <li
                key={item.id}
                ref={(el) => { navRefs.current[index] = el; }}
              >
                <a
                  href={item.href}
                  onClick={(e) => onNavClick(e, item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'relative z-10 block py-2 px-5 font-display text-sm font-medium rounded-lg',
                    'transition-colors duration-200',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                    isActive
                      ? 'text-paper'
                      : 'text-paper/70 hover:text-paper',
                  ].join(' ')}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          </ul>
        </div>

        {/* Right — language switch (desktop only) */}
        <div className="hidden md:flex items-center ml-auto pl-3 border-l border-paper/15">
          <LanguageSwitch lang={lang} onToggle={onToggle} />
        </div>

        {/* Right — hamburger (mobile only) */}
        <button
          type="button"
          aria-label={isMenuOpen ? labels.closeMenu : labels.openMenu}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="md:hidden ml-auto relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span
            className={[
              'block h-0.5 w-6 bg-paper origin-center transition-transform duration-200',
              isMenuOpen ? 'rotate-45 translate-y-2' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block h-0.5 w-6 bg-paper origin-center transition-[transform,opacity] duration-200',
              isMenuOpen ? 'opacity-0 scale-x-0' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block h-0.5 w-6 bg-paper origin-center transition-transform duration-200',
              isMenuOpen ? '-rotate-45 -translate-y-2' : '',
            ].join(' ')}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={[
          'md:hidden overflow-hidden transition-all duration-300',
          'bg-paper/5',
          isMenuOpen ? 'max-h-96 border-b border-paper/15' : 'max-h-0',
        ].join(' ')}
      >
        <div className="px-6 pt-4 border-b border-paper/15 pb-4">
          <LanguageSwitch lang={lang} onToggle={onToggle} />
        </div>
        <nav aria-label={labels.mobileNav}>
        <ul className="px-6">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            const isLast = index === navItems.length - 1;
            return (
              <li
                key={item.id}
                className={isLast ? '' : 'border-b border-paper/15'}
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
                      : 'text-paper/70',
                  ].join(' ')}
                >
                  {isActive && <span aria-hidden="true">&#9679;</span>}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        </nav>
        <div className="border-t border-paper/15 px-6 py-4 flex items-center gap-4">
          {socialLinks.map(({ name, href, path }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-paper/70 hover:text-paper transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
