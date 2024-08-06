import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Input.module.css';
import { InputHTMLAttributes, useEffect, useRef } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

type InputProps = {
    className?: string;
    value?: string;
    label?: string;
    autofocus?: boolean;
    onChange?: (val: string) => void;
} & HTMLInputProps;

export const Input = ({
    className,
    value,
    label,
    placeholder,
    autofocus,
    onChange,
    type = 'text',
    ...otherProps
}: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus();
        }
    }, []);

    return (
        <div className={classNames(cn['Input'], {}, [className])}>
            {label && <label htmlFor={placeholder}>{`${label}:`}</label>}
            <input
                ref={inputRef}
                id={placeholder}
                className={cn.input}
                type={type}
                value={value}
                onChange={onValueChange}
                {...otherProps}
            />
        </div>
    );
};
