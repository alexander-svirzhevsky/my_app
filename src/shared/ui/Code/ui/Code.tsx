import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Code.module.css';
import { useCallback } from 'react';
import { Button, ButtonTheme } from '../../Button';

type CodeProps = {
  className?: string;
  text: string;
};

export const Code = ({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cn['Code'], {}, [className])}>
      <Button
        onClick={onCopy}
        theme={ButtonTheme.PRIMARY}
        className={cn.copyBtn}
      >
        Copy
      </Button>
      <code>{text}</code>;
    </pre>
  );
};
