import { useTranslation } from 'react-i18next'
import LangSwitcher from '@/features/lang'

const HomePage = () => {
    const { t } = useTranslation('home')

    return (
        <div>
            <LangSwitcher />

            {t('Home Page')}
        </div>
    )
}

export default HomePage
