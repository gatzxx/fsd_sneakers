import { useState, useEffect, ReactNode } from 'react'
import { ThemeContext } from '@/shared/context/ThemeContext'
import { THEME_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage'
import { Theme } from '@/shared/config/theme/theme'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const getStoredTheme = (): Theme => {
        const stored = localStorage.getItem(THEME_LOCALSTORAGE_KEY)
        return stored === Theme.LIGHT || stored === Theme.DARK ? stored : Theme.LIGHT
    }

    const [theme, setTheme] = useState<Theme>(() => getStoredTheme())

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, theme)
    }, [theme])

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
