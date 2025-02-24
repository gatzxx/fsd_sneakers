import {RouteObject} from "react-router-dom";
import {Suspense, lazy} from "react";
import {AppRoutes} from "@/shared/config/routes.types";
import {RoutePath} from "@/shared/config/route-paths";
import {Loader} from "@/shared/ui/Loader";

const HomePage = lazy(() => import("@/pages/home"));
const ProductPage = lazy(() => import("@/pages/product"));
const CartPage = lazy(() => import("@/pages/cart"));
const ProfilePage = lazy(() => import("@/pages/profile"));
const AboutPage = lazy(() => import("@/pages/about"));
const LoginPage = lazy(() => import("@/pages/login"));
const SignUpPage = lazy(() => import("@/pages/sign-up"));
const NotFoundPage = lazy(() => import("@/pages/not-found"));

export const routeConfig: RouteObject[] = [
    {path: RoutePath[AppRoutes.HOME], element: <Suspense fallback={<Loader/>}><HomePage/></Suspense>},
    {path: RoutePath[AppRoutes.PRODUCT], element: <Suspense fallback={<Loader/>}><ProductPage/></Suspense>},
    {path: RoutePath[AppRoutes.CART], element: <Suspense fallback={<Loader/>}><CartPage/></Suspense>},
    {path: RoutePath[AppRoutes.PROFILE], element: <Suspense fallback={<Loader/>}><ProfilePage/></Suspense>},
    {path: RoutePath[AppRoutes.ABOUT], element: <Suspense fallback={<Loader/>}><AboutPage/></Suspense>},
    {path: RoutePath[AppRoutes.LOGIN], element: <Suspense fallback={<Loader/>}><LoginPage/></Suspense>},
    {path: RoutePath[AppRoutes.SIGN_UP], element: <Suspense fallback={<Loader/>}><SignUpPage/></Suspense>},
    {path: "*", element: <Suspense fallback={<Loader/>}><NotFoundPage/></Suspense>},
];
