import { Meta, StoryObj } from '@storybook/react'
import { LangSwitcher } from './LangSwitcher'

export default {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
} satisfies Meta<typeof LangSwitcher>

export const Default: StoryObj<typeof LangSwitcher> = {}
