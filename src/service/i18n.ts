
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ko from '../../public/i18n/ko.json'
import en from '../../public/i18n/en.json'

const validLanguageList = ['en', 'ko'] as const;
export type ValidLanguage = typeof validLanguageList[number];

const getInitialLanguage = (): ValidLanguage => {
  if (typeof window !== 'undefined') {
    console.log(window.navigator);

    if (window.navigator.language.includes('ko')) {
      return 'ko';
    }
  }
  return 'en';
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      ko: {
        translation: ko,
      },
    },
    lng: getInitialLanguage(), // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

  export default i18n;
