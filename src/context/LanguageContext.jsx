import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../data/locales'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  // Load saved preference or default to English
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('balubal_gad_lang') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('balubal_gad_lang', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ceb' : 'en'))
  }

  const t = (key) => {
    const currentDict = translations[language] || translations.en
    return currentDict[key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
