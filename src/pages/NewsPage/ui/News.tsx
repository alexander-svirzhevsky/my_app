import Sw2 from '@/shared/assets/sw2.svg';
import { useTranslation } from 'react-i18next';

export const News = () => {
    const { t } = useTranslation('news');

    return <span>{t('news_page')}</span>;
};
