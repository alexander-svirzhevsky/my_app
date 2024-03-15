import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Button.module.css';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
}

type ButtonProps = {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  className,
  children,
  theme = ButtonTheme.CLEAR,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={classNames(cn['button'], {}, [className, cn[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
