import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ErrorPage from './ErrorPage'
import '../../../../__mocks__/react-i18next'

describe('ErrorPage', () => {
    it('should display translated error message', () => {
        render(<ErrorPage />)
        expect(
            screen.getByText('Something went wrong. Please try again later.'),
        ).toBeInTheDocument()
    })
})
