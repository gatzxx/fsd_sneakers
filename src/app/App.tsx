import { AppRouter } from '@/app/providers/router'
import { ThemeProvider } from '@/app/providers/theme'
import { StoreProvider } from '@/app/providers/store'
import { ErrorBoundary } from '@/app/ErrorBoundary'
import '@/shared/i18n/i18n.ts'
import './styles/index.css'

export const App = () => {
    return (
        <ErrorBoundary>
            <StoreProvider>
                <ThemeProvider>
                    <AppRouter />
                </ThemeProvider>
            </StoreProvider>
        </ErrorBoundary>
    )
}
