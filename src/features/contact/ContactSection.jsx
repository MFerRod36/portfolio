import { useLang } from '../../shared/context/LangContext'
import { contactContent } from './contact.i18n'
import { useContact } from './useContact'
import ContactView from './components/ContactView'

function ContactSection() {
  const { lang } = useLang()
  const content = contactContent[lang]
  const form = useContact()

  return <ContactView content={content} {...form} />
}

export default ContactSection
