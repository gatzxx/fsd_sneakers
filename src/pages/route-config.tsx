import { RouteObject } from "react-router-dom";
import { FC, Suspense, lazy } from "react";
import { AppRoutes } from "@/shared/config/routes.types";
import { RoutePath } from "@/shared/config/route-paths";

const withSuspense = (Component: FC) => (
    <Suspense fallback={<div>Loading...</div>}>
        <Component />
    </Suspense>
);

export const routeConfig: RouteObject[] = [
    { path: RoutePath[AppRoutes.HOME], element: withSuspense(lazy(() => import("@/pages/home").then(m => ({ default: m.HomePage })))) },
    { path: RoutePath[AppRoutes.PRODUCT], element: withSuspense(lazy(() => import("@/pages/product").then(m => ({ default: m.ProductPage })))) },
    { path: RoutePath[AppRoutes.CART], element: withSuspense(lazy(() => import("@/pages/cart").then(m => ({ default: m.CartPage })))) },
    { path: RoutePath[AppRoutes.LOGIN], element: withSuspense(lazy(() => import("@/pages/login").then(m => ({ default: m.LoginPage })))) },
    { path: RoutePath[AppRoutes.SIGN_UP], element: withSuspense(lazy(() => import("@/pages/sign-up").then(m => ({ default: m.SignUpPage })))) },
    { path: RoutePath[AppRoutes.ABOUT], element: withSuspense(lazy(() => import("@/pages/about").then(m => ({ default: m.AboutPage })))) },
    { path: RoutePath[AppRoutes.PROFILE], element: withSuspense(lazy(() => import("@/pages/profile").then(m => ({ default: m.ProfilePage })))) },
    { path: "*", element: withSuspense(lazy(() => import("@/pages/not-found").then(m => ({ default: m.NotFoundPage })))) },
];
