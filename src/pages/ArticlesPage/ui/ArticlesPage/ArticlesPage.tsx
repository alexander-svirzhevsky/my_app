import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticlesPage.module.css';
import { ArticleList } from '@/entities/Article';
import { ArticleView } from '@/entities/Article/model/types/arctilce';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import {
  articlePageActions,
  articlePageReducer,
  getArticles,
} from '../../model/slices/articlePageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getArticlePageIsLoading,
  getArticlePageView,
} from '../../model/selectors/articlesPageSelectors';
import { ViewToggler } from '@/widgets/ViewToggler';
import { Page } from '@/widgets/Page';
import { getNexArticlesPage } from '../../model/services/getNexArticlesPage/getNexArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';

type ArticlesPageProps = {
  className?: string;
};

const reducers: ReducersList = {
  articlePage: articlePageReducer,
};

export const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getArticlePageView);
  const [searchParams] = useSearchParams();

  const onLoadNextPart = () => {
    dispatch(getNexArticlesPage());
  };

  useEffect(() => {
    dispatch(initArticlesPage(searchParams));
  }, []);

  return (
    <DynamicModuleLoader
      reducers={reducers}
      name='articlePage'
    >
      <Page onScrollEnd={onLoadNextPart}>
        <div className={classNames(cn['ArticlesPage'], {}, [className])}>
          <ArticlesPageFilters />
          <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
          />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};
