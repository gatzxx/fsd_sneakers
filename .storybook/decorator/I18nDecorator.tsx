import { Decorator } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import i18next from '@/shared/i18n/i18n'

export const I18nDecorator: Decorator = (Story) => (
    <I18nextProvider i18n={i18next}>
        <Story />
    </I18nextProvider>
)
