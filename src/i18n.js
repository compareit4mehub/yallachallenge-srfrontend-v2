import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(initReactI18next).use(LanguageDetector).init({
    lng: window.localStorage.getItem('i18nextLng'),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources:{
        en: {
            translation: {
                title: 'Github Users',
                users: 'users',
                followers: 'followers',
                login : 'login',
                following: 'following',
                gists : 'gists',
                repo: 'repo',
                bio: 'bio',
                location : 'location',
                company : 'company',
                blog: 'blog',
                top: 'top',     
                email: 'email',
                loading: 'loading',
                back: 'back'           
            }
        },
        ar: {
            translation: {
                title: 'Github المستخدمين',
                users: 'المستخدمين',
                followers: 'متابعون',
                login : 'تسجيل الدخول',
                following: 'التالي',
                gists : 'جوهر',
                repo: 'الريبو',
                bio: 'السيرة الذاتية',
                location : 'موقع',
                company : 'شركة',
                blog: 'مدونة',
                top: 'قمة',
                email: 'بريد إلكتروني',
                loading: 'تحميل',
                back: 'خلف'
            }
        },
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
  });

export default i18n;