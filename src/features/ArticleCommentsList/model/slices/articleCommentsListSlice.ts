import { StateSchema } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCommentByArticleId } from '../services/getCommentByArticleId/getCommentByArticleId';

const articleCommentsListAdapter = createEntityAdapter({
  selectId: (comment: Comment) => comment.id,
});

export const getArticleComments = articleCommentsListAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || articleCommentsListAdapter.getInitialState(),
);

const articleCommentsListSlice = createSlice({
  name: 'articleCommentsList',
  initialState: articleCommentsListAdapter.getInitialState({
    isLoading: false,
    error: '',
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentByArticleId.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getCommentByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        articleCommentsListAdapter.setAll(state, action.payload);
      })
      .addCase(getCommentByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleCommentsListReducer } = articleCommentsListSlice;
