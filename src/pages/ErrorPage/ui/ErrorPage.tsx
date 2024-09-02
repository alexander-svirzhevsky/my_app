import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ErrorPage.module.css';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { Page } from '@/shared/ui/Page';

type ErrorPageProps = {
  className?: string;
};

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation('main');

  const onReload = () => {
    location.reload();
  };

  return (
    <Page>
      <div className={classNames(cn['errorPage'], {}, [className])}>
        <span>{t('something_went_wrong')}</span>
        <Button onClick={onReload}>{t('reload_page')}</Button>
      </div>
    </Page>
  );
};
