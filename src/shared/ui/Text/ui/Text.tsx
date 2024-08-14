import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Text.module.css';
import { memo } from 'react';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

type TextProps = {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
};

export const Text = memo(({ className, title, text, theme = TextTheme.PRIMARY }: TextProps) => {
  return (
    <div className={classNames(cn['Text'], {}, [className, cn[theme]])}>
      {title && <p className={cn['title']}>{title}</p>}
      {text && <p className={cn['text']}>{text}</p>}
    </div>
  );
});
