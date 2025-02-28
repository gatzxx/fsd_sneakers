import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProductPage from './ProductPage'
import '../../../../__mocks__/react-i18next'

describe('ProductPage', () => {
    it('should display translated text', () => {
        render(<ProductPage />)
        expect(screen.getByText('Products.')).toBeInTheDocument()
    })
})
