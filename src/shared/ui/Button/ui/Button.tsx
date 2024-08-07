import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Button.module.css';
import { ButtonHTMLAttributes, ReactNode } from 'react';

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

export const Button = ({
    className,
    children,
    theme = ButtonTheme.CLEAR,
    disabled,
    ...otherProps
}: ButtonProps) => {
    const mods: Record<string, boolean> = {
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
};
