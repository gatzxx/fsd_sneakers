import { useTranslation } from 'react-i18next'
import { LANGUAGE_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage'

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation()

    const toggleLanguage = async () => {
        const newLang = i18n.language === 'en' ? 'ru' : 'en'
        try {
            await i18n.changeLanguage(newLang)
            localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, newLang)
        } catch (error) {
            console.error('Error switching language:', error)
        }
    }

    return (
        <button onClick={toggleLanguage} data-testid='lang-switcher'>
            {t('EN')}
        </button>
    )
}
