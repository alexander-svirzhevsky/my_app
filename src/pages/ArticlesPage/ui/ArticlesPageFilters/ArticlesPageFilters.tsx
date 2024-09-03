import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticlesPageFilters.module.css';
import { ViewToggler } from '@/widgets/ViewToggler';
import { ArticleSortSelect, ArticlesSortField, ArticleType, ArticleView } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import { useSelector } from 'react-redux';
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageTabType,
  getArticlePageView,
} from '../../model/selectors/articlesPageSelectors';
import { Select } from '@/shared/ui/Select/ui/Select/Select';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { SortOrder } from '@/shared/types';
import { getArticlesList } from '../../model/services/getArticlesList/getArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { ArticlesTabs } from '../ArticlesTabs/ArticlesTabs';
import { TabItem } from '@/shared/ui/Tabs/Tabs';

type ArticlesPageFiltersProps = {
  className?: string;
};

export const ArticlesPageFilters = ({ className }: ArticlesPageFiltersProps) => {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlePageView);
  const order = useSelector(getArticlePageOrder);
  const sort = useSelector(getArticlePageSort);
  const search = useSelector(getArticlePageSearch);
  const type = useSelector(getArticlePageTabType);

  const fetchData = () => {
    dispatch(getArticlesList({ replace: true }));
  };

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onViewChange = (newView: ArticleView) => {
    dispatch(articlePageActions.setView(newView));
    dispatch(articlePageActions.setPage(1));
    debouncedFetchData();
  };
  const onChangeOrder = (newOrder: SortOrder) => {
    dispatch(articlePageActions.setOrder(newOrder));
    dispatch(articlePageActions.setPage(1));
    debouncedFetchData();
  };
  const onChangeSort = (newSort: ArticlesSortField) => {
    dispatch(articlePageActions.setSort(newSort));
    dispatch(articlePageActions.setPage(1));
    debouncedFetchData();
  };
  const onChangeSearch = (newSearch: string) => {
    dispatch(articlePageActions.setSearch(newSearch));
    dispatch(articlePageActions.setPage(1));
    debouncedFetchData();
  };
  const onChangeTabType = (tab: TabItem) => {
    dispatch(articlePageActions.setTabType(tab.value as ArticleType));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  };

  return (
    <div className={classNames(cn['ArticlesPageFilters'], {}, [className])}>
      <div className={cn.sortWrapper}>
        <ArticleSortSelect
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ViewToggler
          onViewChange={onViewChange}
          currentView={view}
        />
      </div>
      <Card>
        <Input
          label='Search'
          placeholder='Search'
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
      <ArticlesTabs
        value={type}
        onChangeTabType={onChangeTabType}
      />
    </div>
  );
};
