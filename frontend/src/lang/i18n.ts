import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import tranEn from './en.json'
import tranKo from './ko.json'

export const languages = {
  english: 'en',
  korean: 'ko',
} as const
export type Languages = typeof languages[keyof typeof languages] // 'en' | 'ko'

const resources = {
  en: { translation: tranEn },
  ko: { translation: tranKo },
}

// const userLanguage = window.navigator.language
// export const initLanguage = localStorage.getItem('language') || userLanguage || 'en'
export const initLanguage: Languages = languages.english

i18n.use(initReactI18next).init({
  resources,
  lng: initLanguage,
  fallbackLng: languages.english,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
