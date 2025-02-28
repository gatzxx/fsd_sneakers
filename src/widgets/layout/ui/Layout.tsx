import { Outlet, useLocation } from 'react-router-dom'
import { NavigationBar } from '@/features/navigation'
import { LangSwitcher } from '@/features/lang'
import { ThemeSwitcher } from '@/features/theme'
import styles from './Layout.module.css'

export const Layout = () => {
    const location = useLocation()

    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <h4>SNEAKERS</h4>
                <NavigationBar />
                <div className={styles.switchers}>
                    <LangSwitcher />
                    <ThemeSwitcher />
                </div>
            </header>
            <main className={styles.main}>
                <Outlet key={location.key} />
            </main>
            <footer className={styles.footer}>Footer</footer>
        </div>
    )
}
