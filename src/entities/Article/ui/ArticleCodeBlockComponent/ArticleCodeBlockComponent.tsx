import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticleCodeBlockComponent.module.css';

type ArticleCodeBlockComponentProps = {
  className?: string;
};

export const ArticleCodeBlockComponent = ({ className }: ArticleCodeBlockComponentProps) => {
  return (
    <div className={classNames(cn['ArticleCodeBlockComponent'], {}, [className])}>
      ArticleCodeBlockComponent
    </div>
  );
};
