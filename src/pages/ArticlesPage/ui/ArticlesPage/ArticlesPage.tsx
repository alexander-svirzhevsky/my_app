import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticlesPage.module.css';
import { ArticleList } from '@/entities/Article';
import { Article, ArticleView } from '@/entities/Article/model/types/arctilce';
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
import { getArticlesList } from '../../model/services/getArticlesList/getArticlesList';
import { useSelector } from 'react-redux';
import {
  getArticlePageError,
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageNum,
  getArticlePageView,
} from '../../model/selectors/articlesPageSelectors';
import { ViewToggler } from '@/widgets/ViewToggler';
import { Page } from '@/shared/ui/Page';
import { getNexArticlesPage } from '../../model/services/getNexArticlesPage/getNexArticlesPage';

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
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);
  const page = useSelector(getArticlePageNum);
  const hasMore = useSelector(getArticlePageHasMore);

  const onViewChange = (newView: ArticleView) => {
    dispatch(articlePageActions.setView(newView));
  };

  const onLoadNextPart = () => {
    dispatch(getNexArticlesPage());
  };

  useEffect(() => {
    dispatch(articlePageActions.initState());
    dispatch(
      getArticlesList({
        page: 1,
      }),
    );
  }, []);

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
      name='articlePage'
    >
      <Page onScrollEnd={onLoadNextPart}>
        <div className={classNames(cn['ArticlesPage'], {}, [className])}>
          <ViewToggler
            onViewChange={onViewChange}
            currentView={view}
          />
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
