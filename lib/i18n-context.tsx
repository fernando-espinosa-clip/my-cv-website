"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { type Dictionary, en, es } from './dictionaries'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0]
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (browserLang === 'es') setLanguage('es')
    setMounted(true)
  }, [])

  const value = {
    language,
    setLanguage,
    t: language === 'es' ? es : en
  }

  // Even when not mounted (to prevent hydration mismatch), the children still need the context if they are rendered.
  if (!mounted) {
    return (
      <LanguageContext.Provider value={value}>
        <div className="invisible">{children}</div>
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
