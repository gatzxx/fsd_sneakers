import { RouteObject } from 'react-router-dom'
import { Suspense, lazy, JSX, LazyExoticComponent } from 'react'
import { Layout } from '@/widgets/layout'
import { AppRoutes } from '@/shared/config/routes/routes.types'
import { RoutePath } from '@/shared/config/routes/route-paths'
import { PageLoader } from '@/shared/ui/PageLoader'

const ErrorPage = lazy(() => import('@/pages/error'))
const HomePage = lazy(() => import('@/pages/home'))

const routes: Partial<Record<AppRoutes, LazyExoticComponent<() => JSX.Element>>> = {
    [AppRoutes.PRODUCT]: lazy(() => import('@/pages/product')),
    [AppRoutes.CART]: lazy(() => import('@/pages/cart')),
    [AppRoutes.PROFILE]: lazy(() => import('@/pages/profile')),
    [AppRoutes.ABOUT]: lazy(() => import('@/pages/about')),
    [AppRoutes.LOGIN]: lazy(() => import('@/pages/login')),
    [AppRoutes.SIGN_UP]: lazy(() => import('@/pages/sign-up')),
    [AppRoutes.NOT_FOUND]: lazy(() => import('@/pages/not-found')),
}

export const routeConfig: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <HomePage />
                    </Suspense>
                ),
                errorElement: (
                    <Suspense fallback={<PageLoader />}>
                        <ErrorPage />
                    </Suspense>
                ),
            },
            ...Object.entries(routes).map(([key, Component]) => ({
                path: RoutePath[key as AppRoutes],
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <Component />
                    </Suspense>
                ),
                errorElement: (
                    <Suspense fallback={<PageLoader />}>
                        <ErrorPage />
                    </Suspense>
                ),
            })),
        ],
    },
]
