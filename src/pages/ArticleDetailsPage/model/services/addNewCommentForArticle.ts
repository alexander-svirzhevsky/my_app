import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { getCommentByArticleId } from '@/features/ArticleCommentsList/model/services/getCommentByArticleId/getCommentByArticleId';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addNewCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'addNewComment/addNewCommentForArticle',
  async (text, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !article || !text) {
      return rejectWithValue('Error');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(getCommentByArticleId(article.id));

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error');
    }
  },
);
