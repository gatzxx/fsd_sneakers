import { useState, useEffect, ReactNode } from 'react'
import { ThemeContext } from '@/shared/context/ThemeContext'
import { THEME_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage'
import { Theme } from '@/shared/config/theme/theme'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const getStoredTheme = (): Theme => {
        return (localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme) || Theme.LIGHT
    }

    const setStoredTheme = (theme: Theme): void => {
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, theme)
    }

    const [theme, setTheme] = useState<Theme>(getStoredTheme())

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        setStoredTheme(theme)
    }, [theme])

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
