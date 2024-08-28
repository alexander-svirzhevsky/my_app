import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlesPage/getArticlesList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<Article[]>(`/articles`, {
        params: {
          _expand: 'user',
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
  },
);
