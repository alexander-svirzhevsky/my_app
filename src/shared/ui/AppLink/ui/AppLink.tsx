import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './AppLink.module.css';

enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type AppLinkProps = {
  className?: string;
  children: ReactNode;
  theme?: AppLinkTheme;
} & LinkProps;

export const AppLink = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      to={to}
      className={classNames(cn['appLink'], {}, [className, cn[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
