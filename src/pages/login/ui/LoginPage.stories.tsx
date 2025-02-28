import { Meta, StoryObj } from '@storybook/react'
import LoginPage from './LoginPage'

export default {
    title: 'pages/LoginPage',
    component: LoginPage,
} satisfies Meta<typeof LoginPage>

export const Default: StoryObj<typeof LoginPage> = {}
