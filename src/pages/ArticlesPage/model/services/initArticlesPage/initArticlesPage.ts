import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticlePageInited } from '../../selectors/articlesPageSelectors';
import { getArticlesList } from '../getArticlesList/getArticlesList';
import { articlePageActions } from '../../slices/articlePageSlice';
import { ArticlesSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const inited = getArticlePageInited(getState());

    if (!inited) {
      const orderFromUrl = searchParams.get('order') as SortOrder;
      const sortFromUrl = searchParams.get('sort') as ArticlesSortField;
      const searchFromUrl = searchParams.get('search');
      const type = searchParams.get('type') as ArticleType;

      if (orderFromUrl) {
        dispatch(articlePageActions.setOrder(orderFromUrl));
      }
      if (sortFromUrl) {
        dispatch(articlePageActions.setSort(sortFromUrl));
      }
      if (searchFromUrl) {
        dispatch(articlePageActions.setSearch(searchFromUrl));
      }
      if (type) {
        dispatch(articlePageActions.setTabType(type));
      }

      dispatch(articlePageActions.initState());
      dispatch(getArticlesList({}));
    }
  },
);
