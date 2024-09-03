import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageNum,
} from '../../selectors/articlesPageSelectors';
import { getArticlesList } from '../getArticlesList/getArticlesList';
import { articlePageActions } from '../../slices/articlePageSlice';

export const getNexArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/getNexArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const hasMore = getArticlePageHasMore(getState());
    const page = getArticlePageNum(getState());
    const isLoading = getArticlePageIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlePageActions.setPage(page + 1));
      dispatch(getArticlesList({}));
    }
  },
);
