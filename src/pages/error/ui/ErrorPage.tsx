import { useTranslation } from 'react-i18next'

const ErrorPage = () => {
    const { t } = useTranslation('error')

    return <div>{t('Something went wrong. Please try again later.')}</div>
}

export default ErrorPage
