import { useTranslation } from 'react-i18next'

const NotFoundPage = () => {
    const { t } = useTranslation('not-found')

    return <div>{t('Page not found.')}</div>
}

export default NotFoundPage
