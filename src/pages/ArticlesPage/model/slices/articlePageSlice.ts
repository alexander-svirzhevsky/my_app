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
    page: 1,
    hasMore: true,
    limit: undefined,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(USER_VIEW_ARTICLES_LOCALSTORAGE_KEY, action.payload);
    },
    initState: (state) => {
      const view = localStorage.getItem(USER_VIEW_ARTICLES_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.BIG ? 4 : 8;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
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
        articlePageAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
      })
      .addCase(getArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlePageReducer } = articlePageSlice;
export const { actions: articlePageActions } = articlePageSlice;
