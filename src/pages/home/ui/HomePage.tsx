import { useTranslation } from 'react-i18next'

const HomePage = () => {
    const { t } = useTranslation('home')

    return <div>{t('Home Page.')}</div>
}

export default HomePage
