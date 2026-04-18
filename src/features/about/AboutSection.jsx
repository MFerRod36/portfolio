import { useLang } from '../../shared/context/LangContext'
import { aboutContent } from './about.i18n'
import AboutView from './components/AboutView'

function AboutSection() {
  const { lang } = useLang()
  const content = aboutContent[lang]

  return (
    <AboutView
      badge={content.badge}
      headingNeutral={content.headingNeutral}
      headingAccent={content.headingAccent}
      body={content.body}
    />
  )
}

export default AboutSection
