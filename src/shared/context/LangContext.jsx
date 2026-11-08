import { useEffect, useState } from 'react';
import { LangContext } from './useLang';

export function LangProvider({ children }) {
  const [lang, setLang] = useState('es');
  const toggleLang = () => setLang(l => (l === 'es' ? 'en' : 'es'));

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <LangContext.Provider value={{ lang, toggleLang }}>{children}</LangContext.Provider>;
}
