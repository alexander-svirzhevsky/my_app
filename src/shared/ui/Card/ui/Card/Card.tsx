import { HTMLAttributes, memo, ReactNode } from 'react';
import cn from './Card.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = memo((props: CardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={classNames(cn.Card, {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
