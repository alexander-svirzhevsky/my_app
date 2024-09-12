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
import { DropDown } from '@/shared/ui/DropDown/DropDown';
import { Avatar } from '@/shared/ui/Avatar';

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
    dispatch(userActions.logout());
  };

  if (authData) {
    return (
      <div className={classNames(cn['navbar'], {}, [className])}>
        <div className={classNames(cn['links'])}>
          <DropDown
            menuPosition='bottom end'
            trigger={<Avatar src={authData.avatar} />}
            dropDownItems={[
              {
                content: t('logout'),
                onClick: onLogout,
              },
              {
                content: 'Profile',
                to: `${Routes.Profile}/${authData.id}`,
              },
            ]}
          />
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
