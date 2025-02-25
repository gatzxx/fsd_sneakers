import i18next from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import { LANGUAGE_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage'

const savedLang = localStorage.getItem(LANGUAGE_LOCALSTORAGE_KEY) || 'en'

i18next
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: savedLang,
        fallbackLng: 'en',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        react: {
            useSuspense: true,
        },
    })

export default i18next
