import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AboutPage from './AboutPage'
import '../../../../__mocks__/react-i18next'

describe('AboutPage', () => {
    it('should display translated about text', () => {
        render(<AboutPage />)
        expect(screen.getByText('About.')).toBeInTheDocument()
    })
})
