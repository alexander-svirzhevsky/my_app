import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleCommentsListIsLoading = (state: StateSchema) =>
  state.articleDetailsComments?.isLoading;
export const getArticleCommentsListError = (state: StateSchema) =>
  state.articleDetailsComments?.error;
