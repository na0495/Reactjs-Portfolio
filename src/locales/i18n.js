import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from './en.json';
import translationFR from './fr.json';
import translationDE from './de.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      de: {
        translation: translationDE
      },
      fr: {
        translation: translationFR
      }
    },
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: "en", // use en if detected lng is not available
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;