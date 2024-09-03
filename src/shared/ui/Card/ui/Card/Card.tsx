import { HTMLAttributes, memo, ReactNode } from 'react';
import cn from './Card.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum CardTheme {
  STANDART = 'standart',
  OUTLINE = 'outline',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
  const { className, children, theme = CardTheme.STANDART, ...otherProps } = props;

  return (
    <div
      className={classNames(cn.Card, {}, [className, cn[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
