import { useLang } from '../../shared/context/useLang'
import { servicesContent } from './services.i18n'
import { useCarousel } from './useCarousel'
import ServicesView from './components/ServicesView'

function ServicesSection() {
  const { lang } = useLang()
  const content = servicesContent[lang]
  const carousel = useCarousel(content.services.length)

  return (
    <ServicesView
      badge={content.badge}
      headingNeutral={content.headingNeutral}
      slideLabel={content.slideLabel}
      services={content.services}
      {...carousel}
    />
  )
}

export default ServicesSection
