import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticlePageLimit } from '../../selectors/articlesPageSelectors';

type GetArticlesListProps = {
  page: number;
};

export const getArticlesList = createAsyncThunk<
  Article[],
  GetArticlesListProps,
  ThunkConfig<string>
>('articlesPage/getArticlesList', async (args, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const { page = 1 } = args;
  const limit = getArticlePageLimit(getState());

  try {
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
      },
    });

    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    console.log(error);

    return rejectWithValue('error');
  }
});
