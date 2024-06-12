import { useTranslation } from 'react-i18next';

type HomeProps = {};

export const Home = ({}: HomeProps) => {
    const { t } = useTranslation('home');

    return <div>{t('home_page')}</div>;
};
