import { AppRoutes } from "@/shared/config/routes.types";

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.PRODUCT]: "/product/:id",
    [AppRoutes.CART]: "/cart",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.LOGIN]: "/login",
    [AppRoutes.SIGN_UP]: "/sign-up",
    [AppRoutes.NOT_FOUND]: "*",
};
