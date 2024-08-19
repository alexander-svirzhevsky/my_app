import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticlesPage.module.css';

type ArticlesPageProps = {
  className?: string;
};

export const ArticlesPage = ({ className }: ArticlesPageProps) => {
  return <div className={classNames(cn['ArticlesPage'], {}, [className])}>ArticlesPage</div>;
};
