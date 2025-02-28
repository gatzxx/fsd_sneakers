import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProfilePage from './ProfilePage'
import '../../../../__mocks__/react-i18next'

describe('ProfilePage', () => {
    it('should display translated text', () => {
        render(<ProfilePage />)
        expect(screen.getByText('Profile.')).toBeInTheDocument()
    })
})
