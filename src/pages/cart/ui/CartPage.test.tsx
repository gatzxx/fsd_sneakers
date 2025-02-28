import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CartPage from './CartPage'
import '../../../../__mocks__/react-i18next'

describe('CartPage', () => {
    it('should display translated cart text', () => {
        render(<CartPage />)
        expect(screen.getByText('Cart.')).toBeInTheDocument()
    })
})
