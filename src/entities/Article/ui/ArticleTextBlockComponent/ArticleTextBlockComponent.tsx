import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticleTextBlockComponent.module.css';

type ArticleTextBlockComponentProps = {
  className?: string;
};

export const ArticleTextBlockComponent = ({ className }: ArticleTextBlockComponentProps) => {
  return (
    <div className={classNames(cn['ArticleTextBlockComponent'], {}, [className])}>
      ArticleTextBlockComponent
    </div>
  );
};
