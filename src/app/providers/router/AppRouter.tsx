import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routeConfig } from '@/pages/route-config'

const router = createBrowserRouter(routeConfig)

export const AppRouter = () => {
    return <RouterProvider router={router} />
}
