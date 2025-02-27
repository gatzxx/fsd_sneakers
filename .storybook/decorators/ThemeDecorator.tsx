import { Decorator } from '@storybook/react'
import { ThemeProvider } from '../../src/app/providers/theme'
import '../../src/app/styles/index.css'

export const ThemeDecorator: Decorator = (Story) => (
    <ThemeProvider>
        <Story />
    </ThemeProvider>
)
