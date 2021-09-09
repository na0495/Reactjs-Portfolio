import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';
import translationDE from './locales/de.json';


// the translations
const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(detector)
  .use(initReactI18next)// passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: "en", // use en if detected lng is not available
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;