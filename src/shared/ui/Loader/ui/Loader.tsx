import styles from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={styles.loaderContainer} data-testid='loader-container'>
            <div className={styles.loader} data-testid='loader' />
        </div>
    )
}
