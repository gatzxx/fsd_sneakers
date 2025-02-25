import { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'

export default {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>

export const Default: StoryObj<typeof ThemeSwitcher> = {}
