import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getArticlePageLimit,
  getArticlePageNum,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageTabType,
} from '../../selectors/articlesPageSelectors';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

type GetArticlesListProps = {
  replace?: boolean;
};

export const getArticlesList = createAsyncThunk<
  Article[],
  GetArticlesListProps,
  ThunkConfig<string>
>('articlesPage/getArticlesList', async ({ replace }, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const page = getArticlePageNum(getState());
  const limit = getArticlePageLimit(getState());
  const order = getArticlePageOrder(getState());
  const sort = getArticlePageSort(getState());
  const search = getArticlePageSearch(getState());
  const type = getArticlePageTabType(getState());

  try {
    addQueryParams({
      order,
      sort,
      search,
      type,
    });
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sord: sort,
        _order: order,
        q: search,
        type: type === ArticleType.ALL ? undefined : type,
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
