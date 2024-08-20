import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '../../types/arctilce';

export const getArticleDetailsById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/getArticleDetailsById',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`);

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue('error');
    }
  },
);
