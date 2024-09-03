import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticlesSortField, ArticleView } from '@/entities/Article';
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getArticlesList } from '../services/getArticlesList/getArticlesList';
import { USER_VIEW_ARTICLES_LOCALSTORAGE_KEY } from '@/shared/constant/localstorage';
import { SortOrder } from '@/shared/types';
import { ArticleType } from '@/entities/Article/model/types/arctilce';

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
    sort: ArticlesSortField.CREATED,
    order: 'asc',
    search: '',
    type: ArticleType.ALL,
    _inited: false,
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
      state._inited = true;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticlesSortField>) => {
      state.sort = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setTabType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesList.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;

        if (action.meta.arg.replace) {
          articlePageAdapter.removeAll(state);
        }
      })
      .addCase(getArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlePageAdapter.setAll(state, action.payload);
        } else {
          articlePageAdapter.addMany(state, action.payload);
        }
      })
      .addCase(getArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlePageReducer } = articlePageSlice;
export const { actions: articlePageActions } = articlePageSlice;
