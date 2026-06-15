import { useMemo, useState } from 'react'
import * as content from '../assets/content.json'
import LanguageContext from './useLanguage'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const locale = content[language]

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))

  const yearsOfExperience = useMemo(() => {
    const startDate = Temporal.PlainDate.from('2022-08-01')
    const today = Temporal.Now.plainDateISO()
    const duration = startDate.until(today, { largestUnit: 'month' })
    return Math.floor(duration.months / 12)
  }, [])

  const value = useMemo(
    () => ({ language, toggleLanguage, locale, yearsOfExperience }),
    [language, locale, yearsOfExperience],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
