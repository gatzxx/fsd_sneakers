import type { Preview } from '@storybook/react'
import { I18nDecorator } from './decorators/I18nDecorator'
import { ThemeDecorator } from './decorators/ThemeDecorator'

const preview: Preview = {
    decorators: [I18nDecorator, ThemeDecorator],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: { expanded: true },
    },
}

export default preview
