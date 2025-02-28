import { useContext } from 'react'
import { ThemeContext } from '@/shared/context/ThemeContext'
import { Theme } from '@/shared/config/theme/theme'
import { useTranslation } from 'react-i18next'

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { t } = useTranslation()

    const toggleTheme = () => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    return (
        <button onClick={toggleTheme} data-testid='theme-switcher'>
            {theme === Theme.LIGHT ? t('Light') : t('Dark')}
        </button>
    )
}
