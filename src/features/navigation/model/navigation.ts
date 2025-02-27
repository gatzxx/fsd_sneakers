import { AppRoutes } from '@/shared/config/routes/routes.types'

export interface NavigationLink {
    label: string
    path: AppRoutes
}

export const navigationLinks: NavigationLink[] = [
    { label: 'Home', path: AppRoutes.HOME },
    { label: 'Product', path: AppRoutes.PRODUCT },
    { label: 'Cart', path: AppRoutes.CART },
    { label: 'Profile', path: AppRoutes.PROFILE },
    { label: 'About', path: AppRoutes.ABOUT },
    { label: 'Login', path: AppRoutes.LOGIN },
    { label: 'Sign Up', path: AppRoutes.SIGN_UP },
]
