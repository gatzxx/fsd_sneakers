import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NotFoundPage from './NotFoundPage'
import '../../../../__mocks__/react-i18next'

describe('NotFoundPage', () => {
    it('should display translated text', () => {
        render(<NotFoundPage />)
        expect(screen.getByText('Page not found.')).toBeInTheDocument()
    })
})
