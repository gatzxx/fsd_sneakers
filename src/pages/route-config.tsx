import { RouteObject } from 'react-router-dom'
import { Suspense, lazy, JSX, LazyExoticComponent } from 'react'
import { AppRoutes } from '@/shared/config/routes/routes.types'
import { RoutePath } from '@/shared/config/routes/route-paths'
import { Loader } from '@/shared/ui/Loader'

const ErrorPage = lazy(() => import('@/pages/error'))

const withSuspense = (Component: LazyExoticComponent<() => JSX.Element>) => (
    <Suspense fallback={<Loader />}>
        <Component />
    </Suspense>
)

const routes: Record<AppRoutes, LazyExoticComponent<() => JSX.Element>> = {
    [AppRoutes.HOME]: lazy(() => import('@/pages/home')),
    [AppRoutes.PRODUCT]: lazy(() => import('@/pages/product')),
    [AppRoutes.CART]: lazy(() => import('@/pages/cart')),
    [AppRoutes.PROFILE]: lazy(() => import('@/pages/profile')),
    [AppRoutes.ABOUT]: lazy(() => import('@/pages/about')),
    [AppRoutes.LOGIN]: lazy(() => import('@/pages/login')),
    [AppRoutes.SIGN_UP]: lazy(() => import('@/pages/sign-up')),
    [AppRoutes.NOT_FOUND]: lazy(() => import('@/pages/not-found')),
}

export const routeConfig: RouteObject[] = Object.entries(routes).map(([key, Component]) => ({
    path: RoutePath[key as AppRoutes],
    element: withSuspense(Component),
    errorElement: withSuspense(ErrorPage),
}))
