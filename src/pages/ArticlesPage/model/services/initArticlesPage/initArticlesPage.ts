import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticlePageInited } from '../../selectors/articlesPageSelectors';
import { getArticlesList } from '../getArticlesList/getArticlesList';
import { articlePageActions } from '../../slices/articlePageSlice';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const inited = getArticlePageInited(getState());

    if (!inited) {
      dispatch(articlePageActions.initState());
      dispatch(
        getArticlesList({
          page: 1,
        }),
      );
    }
  },
);
