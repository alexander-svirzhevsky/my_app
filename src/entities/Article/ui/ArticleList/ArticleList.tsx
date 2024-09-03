import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticleList.module.css';
import { Article, ArticleView } from '../../model/types/arctilce';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { memo } from 'react';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text } from '@/shared/ui/Text';

type ArticleListProps = {
  className?: string;
  articles: Article[];
  view?: ArticleView;
  isLoading?: boolean;
};

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) => (
    <ArticleListItemSkeleton
      className={cn.card}
      key={index}
      view={view}
    />
  ));

export const ArticleList = memo(
  ({ className, articles, view = ArticleView.SMALL, isLoading }: ArticleListProps) => {
    const renderArticle = (article: Article) => {
      return (
        <ArticleListItem
          article={article}
          view={view}
          className={cn.card}
          key={article.id}
        />
      );
    };

    if (!articles.length && !isLoading) {
      return (
        <div className={classNames(cn['ArticleList'], {}, [className, cn[view]])}>
          <Text title='There is no articles' />
        </div>
      );
    }

    return (
      <div className={classNames(cn['ArticleList'], {}, [className, cn[view]])}>
        {articles.length > 0 && articles.map(renderArticle)}
        {isLoading && getSkeletons(view)}
      </div>
    );
  },
);
