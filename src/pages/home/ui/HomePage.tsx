import { useTranslation } from 'react-i18next'
import { LangSwitcher } from '@/features/lang'
import { ThemeSwitcher } from '@/features/theme'

const HomePage = () => {
    const { t } = useTranslation('home')

    return (
        <div>
            <LangSwitcher />
            <ThemeSwitcher />

            {t('Home Page')}
        </div>
    )
}

export default HomePage
