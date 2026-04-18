import { SOCIAL_LINKS } from '../../shared/config/socials';
import { NAV_ITEMS } from '../../shared/config/nav';
import { FooterView } from './FooterView';

export function Footer() {
  return (
    <FooterView
      email={import.meta.env.VITE_CONTACT_EMAIL}
      socialLinks={SOCIAL_LINKS}
      navItems={NAV_ITEMS}
    />
  );
}
