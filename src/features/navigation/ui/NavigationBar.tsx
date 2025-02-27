import { NavLink } from 'react-router-dom'
import { navigationLinks } from '../model/navigation'
import { RoutePath } from '@/shared/config/routes/route-paths'

export const NavigationBar = () => (
    <nav>
        <ul>
            {navigationLinks.map(({ label, path }) => (
                <li key={path}>
                    <NavLink to={RoutePath[path]}>{label}</NavLink>
                </li>
            ))}
        </ul>
    </nav>
)
