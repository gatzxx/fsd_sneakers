import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import LangSwitcher from './LangSwitcher'
import { LANGUAGE_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage'

const changeLanguageMock = vi.fn().mockResolvedValue(null)
vi.spyOn(Storage.prototype, 'setItem')

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        i18n: { language: 'en', changeLanguage: changeLanguageMock },
    }),
}))

describe('LangSwitcher', () => {
    beforeEach(() => {
        localStorage.clear()
        vi.clearAllMocks()
    })

    it('should display the switch button', () => {
        render(<LangSwitcher />)
        expect(screen.getByText('SWITCH')).toBeInTheDocument()
    })

    it('should switch language and save to localStorage on click', async () => {
        render(<LangSwitcher />)
        fireEvent.click(screen.getByText('SWITCH'))

        await Promise.resolve()

        expect(changeLanguageMock).toHaveBeenCalledWith('ru')
        expect(localStorage.setItem).toHaveBeenCalledWith(LANGUAGE_LOCALSTORAGE_KEY, 'ru')
    })

    it('should load the saved language from localStorage on mount', () => {
        localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, 'ru')

        render(<LangSwitcher />)

        expect(changeLanguageMock).toHaveBeenCalledWith('ru')
    })
})
