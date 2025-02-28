import { Meta, StoryObj } from '@storybook/react'
import ProductPage from './ProductPage'

export default {
    title: 'pages/ProductPage',
    component: ProductPage,
} satisfies Meta<typeof ProductPage>

export const Default: StoryObj<typeof ProductPage> = {}
