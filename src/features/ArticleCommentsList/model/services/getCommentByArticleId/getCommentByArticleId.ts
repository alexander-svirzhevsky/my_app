import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCommentByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>('articleDetailsComments/getCommentByArticleId', async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  if (!articleId) {
    return rejectWithValue('error');
  }

  try {
    const response = await extra.api.get<Comment[]>(`/comments`, {
      params: {
        articleId,
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
});
