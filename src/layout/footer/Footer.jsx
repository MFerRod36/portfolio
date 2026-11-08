import { useLang } from '../../shared/context/useLang';
import { SOCIAL_LINKS } from '../../shared/config/socials';
import { NAV_ITEMS } from '../../shared/config/nav';
import { CONTACT_EMAIL } from '../../shared/config/contact';
import { layoutContent } from '../layout.i18n';
import { FooterView } from './FooterView';

export function Footer() {
  const { lang } = useLang();
  const content = layoutContent[lang];
  const navItems = NAV_ITEMS.map((item) => ({ ...item, label: content.nav[item.id] }));

  return (
    <FooterView
      email={CONTACT_EMAIL}
      socialLinks={SOCIAL_LINKS}
      navItems={navItems}
      labels={content.footer}
      year={new Date().getFullYear()}
    />
  );
}
