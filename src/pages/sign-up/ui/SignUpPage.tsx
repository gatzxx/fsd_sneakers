import { useTranslation } from 'react-i18next'

const SignUpPage = () => {
    const { t } = useTranslation('sign-up')

    return <div>{t('Sign-Up.')}</div>
}

export default SignUpPage
