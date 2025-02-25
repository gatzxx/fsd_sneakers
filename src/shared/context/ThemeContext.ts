import { createContext } from 'react'
import { Theme } from '@/shared/config/theme/theme'

interface ThemeContextProps {
    theme: Theme
    setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.LIGHT,
    setTheme: () => {},
})
