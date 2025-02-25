import type { Preview } from '@storybook/react'
import { I18nDecorator } from './decorator/i18nDecorator'

const preview: Preview = {
    decorators: [I18nDecorator],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: { expanded: true },
    },
}

export default preview
