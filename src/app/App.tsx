import { AppRouter } from "@/app/providers/router";
import ErrorBoundary from "@/app/ErrorBoundary";

export const App = () => {
    return (
        <ErrorBoundary>
            <AppRouter />
        </ErrorBoundary>
    );
};
