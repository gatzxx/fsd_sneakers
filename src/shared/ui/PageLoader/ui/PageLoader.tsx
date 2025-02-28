import { Loader } from '@/shared/ui/Loader'
import styles from './PageLoader.module.css'

export const PageLoader = () => {
    return (
        <div className={styles.pageLoader} data-testid='page-loader'>
            <Loader />
        </div>
    )
}
