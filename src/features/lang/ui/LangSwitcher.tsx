import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { LANGUAGE_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage'

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation()

    useEffect(() => {
        const savedLang = localStorage.getItem(LANGUAGE_LOCALSTORAGE_KEY)
        if (savedLang) {
            i18n.changeLanguage(savedLang).catch((error) => {
                console.error('Error setting language:', error)
            })
        }
    }, [i18n])

    const toggleLanguage = async () => {
        const newLang = i18n.language === 'en' ? 'ru' : 'en'
        try {
            await i18n.changeLanguage(newLang)
            localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, newLang)
        } catch (error) {
            console.error('Error switching language:', error)
        }
    }

    return <button onClick={toggleLanguage}>{t('Language')}</button>
}
