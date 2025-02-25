import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeContext } from '@/shared/context/ThemeContext'
import { Theme } from '@/shared/config/theme/theme'

describe('ThemeSwitcher', () => {
    let setThemeMock: Mock

    beforeEach(() => {
        setThemeMock = vi.fn()
        vi.clearAllMocks()
    })

    const renderWithThemeContext = (theme: Theme) => {
        render(
            <ThemeContext.Provider value={{ theme, setTheme: setThemeMock }}>
                <ThemeSwitcher />
            </ThemeContext.Provider>,
        )
    }

    it('should display the theme switch button', () => {
        renderWithThemeContext(Theme.LIGHT)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should toggle theme and call setTheme on click', () => {
        renderWithThemeContext(Theme.LIGHT)

        const button = screen.getByRole('button')

        fireEvent.click(button)

        expect(setThemeMock).toHaveBeenCalledWith(Theme.DARK)
    })

    it('should toggle back to light theme when clicked again', () => {
        renderWithThemeContext(Theme.DARK)

        const button = screen.getByRole('button')

        fireEvent.click(button)

        expect(setThemeMock).toHaveBeenCalledWith(Theme.LIGHT)
    })
})
