import { useLang } from '../../shared/context/LangContext';
import { useNavbar } from './useNavbar';
import { NavbarView } from './Navbar';
import { NAV_ITEMS } from '../../shared/config/nav';
import { SOCIAL_LINKS } from '../../shared/config/socials';

export function Navbar() {
  const { lang, toggleLang } = useLang();
  const {
    scrolled,
    activeSection,
    isMenuOpen,
    navRefs,
    bubbleRef,
    firstMobileItemRef,
    toggleMenu,
    handleNavClick,
  } = useNavbar();

  return (
    <NavbarView
      scrolled={scrolled}
      activeSection={activeSection}
      navItems={NAV_ITEMS}
      socialLinks={SOCIAL_LINKS}
      navRefs={navRefs}
      bubbleRef={bubbleRef}
      firstMobileItemRef={firstMobileItemRef}
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
      onNavClick={handleNavClick}
      lang={lang}
      onToggle={toggleLang}
    />
  );
}

