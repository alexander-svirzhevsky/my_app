import { useTranslation } from 'react-i18next';

type HomeProps = {};

export const Home = ({}: HomeProps) => {
  const { t, i18n } = useTranslation('home');

  return <div>{t('home_page')}</div>;
};
