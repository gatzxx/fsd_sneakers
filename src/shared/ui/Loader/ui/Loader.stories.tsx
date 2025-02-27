import { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'

export default {
    title: 'shared/Loader',
    component: Loader,
} satisfies Meta<typeof Loader>

export const Default: StoryObj<typeof Loader> = {}
