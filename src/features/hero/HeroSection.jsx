import { useLang } from '../../shared/context/useLang'
import { heroContent } from './hero.i18n'
import HeroView from './components/HeroView'

function HeroSection() {
  const { lang } = useLang()
  const content = heroContent[lang]

  const viewModel = {
    badge: content.badge,
    headingLines: [
      { text: content.headingLines[0], style: 'grotesk' },
      { text: content.headingLines[1], style: 'mencken' },
    ],
    subtitle: content.subtitle,
    cta: { label: content.cta, href: '#contact' },
    portrait: { src: '/hero-portrait.webp', alt: content.portraitAlt },
  }

  return <HeroView {...viewModel} />
}

export default HeroSection
