import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SignUpPage from './SignUpPage'
import '../../../../__mocks__/react-i18next'

describe('SignUpPage', () => {
    it('should display translated text', () => {
        render(<SignUpPage />)
        expect(screen.getByText('Sign-Up.')).toBeInTheDocument()
    })
})
