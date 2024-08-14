import { Routes } from '@/shared/constant/routes';
import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Navbar.module.css';
import { AppLink } from '@/shared/ui/AppLink';
import { ReactNode, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { Portal } from '@/shared/ui/Portal';
import { Modal } from '@/shared/ui/Modal';
import { useTranslation } from 'react-i18next';
import { LoginModal } from '@/features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '@/entities/User';

type NavbarProps = {
  className?: string;
  children?: ReactNode;
};

export const Navbar = ({ className, children }: NavbarProps) => {
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);

  const [isOpened, setIsOpened] = useState(false);
  const { t } = useTranslation('main');

  const onLogout = () => {
    // setIsOpened(false);
    dispatch(userActions.logout());
  };

  if (authData) {
    return (
      <div className={classNames(cn['navbar'], {}, [className])}>
        <div className={classNames(cn['links'])}>
          <Button onClick={onLogout}>{t('logout')}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cn['navbar'], {}, [className])}>
      {children}
      <div className={classNames(cn['links'])}>
        <Button onClick={() => setIsOpened(true)}>{t('log_in')}</Button>
      </div>
      {isOpened && (
        <Portal>
          <LoginModal
            isOpened={isOpened}
            onClose={() => setIsOpened(false)}
          />
        </Portal>
      )}
    </div>
  );
};
