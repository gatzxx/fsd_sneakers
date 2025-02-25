import type { Preview } from '@storybook/react'
import { I18nDecorator } from './decorator/I18nDecorator'
import { ThemeDecorator } from './decorator/ThemeDecorator'

const preview: Preview = {
    decorators: [I18nDecorator, ThemeDecorator],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: { expanded: true },
    },
}

export default preview
