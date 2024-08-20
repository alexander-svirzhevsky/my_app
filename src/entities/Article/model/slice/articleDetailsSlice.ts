import { createSlice } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/arcticleDetailsSchema';
import { getArticleDetailsById } from '../services/getArticleDetailsById/getArticleDetailsById';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticleDetailsById.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getArticleDetailsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getArticleDetailsById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
