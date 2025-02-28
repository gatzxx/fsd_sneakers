import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from './HomePage'
import '../../../../__mocks__/react-i18next'

describe('HomePage', () => {
    it('should display translated text', () => {
        render(<HomePage />)
        expect(screen.getByText('Home Page.')).toBeInTheDocument()
    })
})
