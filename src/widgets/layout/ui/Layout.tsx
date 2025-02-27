import { Outlet, useLocation } from 'react-router-dom'
import { NavigationBar } from '@/features/navigation'

export const Layout = () => {
    const location = useLocation()

    return (
        <div>
            <header>
                <NavigationBar />
            </header>
            <main>
                <Outlet key={location.key} />
            </main>
            <footer>Footer</footer>
        </div>
    )
}
