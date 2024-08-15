import { classNames, Mode } from '@/shared/lib/classNames/classNames';
import cn from './Button.module.css';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary',
}

type ButtonProps = {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = memo(
  ({
    className,
    children,
    theme = ButtonTheme.CLEAR,
    disabled = false,
    ...otherProps
  }: ButtonProps) => {
    const mods: Mode = {
      [cn[theme]]: true,
      [cn['disabled']]: disabled,
    };
    return (
      <button
        className={classNames(cn['button'], mods, [className])}
        {...otherProps}
        disabled={disabled}
      >
        {children}
      </button>
    );
  },
);
