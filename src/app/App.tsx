import { AppRouter } from '@/app/providers/router'
import ErrorBoundary from '@/app/ErrorBoundary'
import '@/shared/i18n/i18n.ts'

export const App = () => {
    return (
        <ErrorBoundary>
            <AppRouter />
        </ErrorBoundary>
    )
}
