import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Text.module.css';
import { memo } from 'react';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

type TextProps = {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  size?: TextSize;
};

export const Text = memo(
  ({ className, title, text, theme = TextTheme.PRIMARY, size = TextSize.M }: TextProps) => {
    return (
      <div className={classNames(cn['Text'], {}, [className, cn[theme], cn[size]])}>
        {title && <p className={cn['title']}>{title}</p>}
        {text && <p className={cn['text']}>{text}</p>}
      </div>
    );
  },
);
