import { Routes } from '@/shared/constant/routes';
import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Navbar.module.css';
import { AppLink } from '@/shared/ui/AppLink';
import { ReactNode } from 'react';

type NavbarProps = {
  className?: string;
  children?: ReactNode;
};

export const Navbar = ({ className, children }: NavbarProps) => {
  return (
    <div className={classNames(cn['navbar'], {}, [className])}>
      {children}
      <div className={classNames(cn['links'])}>
        <AppLink to={Routes.News}>Go to news</AppLink>
        <AppLink to={Routes.Main}>Go to home</AppLink>
      </div>
    </div>
  );
};
