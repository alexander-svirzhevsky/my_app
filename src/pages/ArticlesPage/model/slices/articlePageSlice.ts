import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleView } from '@/entities/Article';
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getArticlesList } from '../services/getArticlesList/getArticlesList';
import { USER_VIEW_ARTICLES_LOCALSTORAGE_KEY } from '@/shared/constant/localstorage';

const articlePageAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id,
});

export const getArticles = articlePageAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage || articlePageAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
  name: 'articlePage',
  initialState: articlePageAdapter.getInitialState({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(USER_VIEW_ARTICLES_LOCALSTORAGE_KEY, action.payload);
    },
    initView: (state) => {
      state.view = localStorage.getItem(USER_VIEW_ARTICLES_LOCALSTORAGE_KEY) as ArticleView;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesList.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articlePageAdapter.setAll(state, action.payload);
      })
      .addCase(getArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlePageReducer } = articlePageSlice;
export const { actions: articlePageActions } = articlePageSlice;
