import { useLang } from '../../shared/context/LangContext'
import { heroContent } from './hero.i18n'
import HeroView from './components/HeroView'

function HeroSection() {
  const { lang } = useLang()
  const content = heroContent[lang]

  const viewModel = {
    badge: 'Portfolio / 2026',
    headingLines: [
      { text: 'Web Designer', style: 'grotesk' },
      { text: '& Developer.', style: 'mencken' },
    ],
    subtitle: content.subtitle,
    cta: { label: content.cta, href: '#contact' },
  }

  return <HeroView {...viewModel} />
}

export default HeroSection
