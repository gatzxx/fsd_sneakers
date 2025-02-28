import { NavLink } from 'react-router-dom'
import { navigationLinks } from '../model/navigation'
import { RoutePath } from '@/shared/config/routes/route-paths'
import { useTranslation } from 'react-i18next'
import styles from './NavigationBar.module.css'

export const NavigationBar = () => {
    const { t } = useTranslation()

    return (
        <nav>
            <ul className={styles.list}>
                {navigationLinks.map(({ label, path }) => (
                    <li key={path} className={styles.item}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? `${styles.link} ${styles.active}` : styles.link
                            }
                            to={RoutePath[path]}
                        >
                            {t(label)}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
