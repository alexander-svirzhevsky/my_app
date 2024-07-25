import { Routes } from '@/shared/constant/routes';
import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Navbar.module.css';
import { AppLink } from '@/shared/ui/AppLink';
import { ReactNode, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { Portal } from '@/shared/ui/Portal';
import { Modal } from '@/shared/ui/Modal';
import { useTranslation } from 'react-i18next';

type NavbarProps = {
    className?: string;
    children?: ReactNode;
};

export const Navbar = ({ className, children }: NavbarProps) => {
    const [isOpened, setIsOpened] = useState(false);
    const { t } = useTranslation('main');

    return (
        <div className={classNames(cn['navbar'], {}, [className])}>
            {children}
            <div className={classNames(cn['links'])}>
                <AppLink to={Routes.News}>Go to news</AppLink>
                <AppLink to={Routes.Main}>Go to home</AppLink>
                <Button onClick={() => setIsOpened(true)}>{t('log_in')}</Button>
            </div>
            <Portal>
                <Modal
                    isOpened={isOpened}
                    onClose={() => setIsOpened(false)}
                >
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet soluta quo
                        harum quasi dolores architecto provident illum? In dolores corporis maxime
                        fugiat assumenda nostrum dolor labore velit alias tempora?
                    </span>
                </Modal>
            </Portal>
        </div>
    );
};
