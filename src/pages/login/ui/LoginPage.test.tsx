import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import LoginPage from './LoginPage'
import '../../../../__mocks__/react-i18next'

describe('LoginPage', () => {
    it('should display translated text', () => {
        render(<LoginPage />)
        expect(screen.getByText('Login.')).toBeInTheDocument()
    })
})
