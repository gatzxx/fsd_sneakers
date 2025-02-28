import { useTranslation } from 'react-i18next'

const ProductPage = () => {
    const { t } = useTranslation('product')

    return <div>{t('Products.')}</div>
}

export default ProductPage
