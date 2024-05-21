// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';

const resources = {
    en: {
        translation: enTranslation
    },
    ar: {
        translation: arTranslation
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Set English as the default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
