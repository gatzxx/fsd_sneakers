import { Component, ErrorInfo, lazy, ReactNode, Suspense } from 'react'
import { Loader } from '@/shared/ui/Loader'

const ErrorPage = lazy(() => import('@/pages/error'))

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        console.error('Error caught by ErrorBoundary:', error)
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
        console.error('Error caught by ErrorBoundary:', error, info.componentStack)
    }

    render(): ReactNode {
        const { hasError } = this.state
        const { children } = this.props

        if (hasError) {
            return (
                <Suspense fallback={<Loader />}>
                    <ErrorPage />
                </Suspense>
            )
        }

        return children
    }
}
