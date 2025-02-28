import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PageLoader } from './PageLoader'
import styles from './PageLoader.module.css'

describe('PageLoader', () => {
    it('should display the Loader component', () => {
        render(<PageLoader />)
        expect(screen.getByTestId('page-loader')).toBeInTheDocument()
    })

    it('should have the correct CSS class', () => {
        render(<PageLoader />)
        const container = screen.getByTestId('page-loader')
        expect(container).toHaveClass(styles.pageLoader)
    })
})
