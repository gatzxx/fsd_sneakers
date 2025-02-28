import { useTranslation } from 'react-i18next'

const LoginPage = () => {
    const { t } = useTranslation('login')

    return <div>{t('Login.')}</div>
}

export default LoginPage
