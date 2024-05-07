import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arTranslation from './locales/ar.json';

const resources = {
    ar: {
        translation: arTranslation
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ar',
        fallbackLng: 'ar',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;