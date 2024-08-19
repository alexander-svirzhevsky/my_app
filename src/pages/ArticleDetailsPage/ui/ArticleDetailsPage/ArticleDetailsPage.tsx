import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticleDetailsPage.module.css';

type ArticleDetailsPageProps = {
  className?: string;
};

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  return (
    <div className={classNames(cn['ArticleDetailsPage'], {}, [className])}>ArticleDetailsPage</div>
  );
};
