import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationsFR from './locales/fr.json';
import translationsEN from './locales/en.json';

const resources = {
  fr: {
    translation: translationsFR
  },
  en: {
    translation: translationsEN
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // Default language
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;