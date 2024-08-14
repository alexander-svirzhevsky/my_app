import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './LangToggler.module.css';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

type LangTogglerProps = {
  className?: string;
};

export const LangToggler = memo(({ className }: LangTogglerProps) => {
  const { t, i18n } = useTranslation();

  const onTogleHandler = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };
  return (
    <Button
      onClick={onTogleHandler}
      theme={ButtonTheme.CLEAR}
      className={classNames(cn['langToggler'], {}, [className])}
    >
      {t('lang_toggler')}
    </Button>
  );
});
