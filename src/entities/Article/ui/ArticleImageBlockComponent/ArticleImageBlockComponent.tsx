import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticleImageBlockComponent.module.css';

type ArticleImageBlockComponentProps = {
  className?: string;
};

export const ArticleImageBlockComponent = ({ className }: ArticleImageBlockComponentProps) => {
  return (
    <div className={classNames(cn['ArticleImageBlockComponent'], {}, [className])}>
      ArticleImageBlockComponent
    </div>
  );
};
