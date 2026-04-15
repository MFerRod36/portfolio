import HeroView from './components/HeroView'

function HeroSection() {
  const viewModel = {
    badge: 'Portfolio / 2026',
    headingLine: 'Fernanda Rodriguez',
    subtitle: 'Diseño UX/UI & Desarrollo Web',
    cta: { label: 'Trabajemos Juntos', href: '#contact' },
  }

  return <HeroView {...viewModel} />
}

export default HeroSection
