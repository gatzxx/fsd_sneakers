import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Loader } from './Loader'
import styles from './Loader.module.css'

describe('Loader', () => {
    it('should display the loader', () => {
        render(<Loader />)
        expect(screen.getByTestId('loader-container')).toBeInTheDocument()
    })

    it('should have the correct CSS classes', () => {
        render(<Loader />)
        const container = screen.getByTestId('loader-container')
        const loader = screen.getByTestId('loader')

        expect(container).toHaveClass(styles.loaderContainer)
        expect(loader).toHaveClass(styles.loader)
    })
})
