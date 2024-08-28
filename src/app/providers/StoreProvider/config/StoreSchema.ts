import { ArticleDetailsSchema } from '@/entities/Article';
import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { AddNewCommentSchema } from '@/features/AddNewComment';
import { ArticleCommentsListSchema } from '@/features/ArticleCommentsList';
import { AuthSchema } from '@/features/AuthByUsername';
import { ProfileSchema } from '@/features/EditableProfileCard';
import { ArticlePageSchema } from '@/pages/ArticlesPage/model/types/articlePageSchema';
import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

export type StateSchema = {
  counter: CounterSchema;
  user: UserSchema;
  // async
  auth?: AuthSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleCommentsListSchema;
  addNewComment?: AddNewCommentSchema;
  articlePage?: ArticlePageSchema;
};

export type StateSchemaKeys = keyof StateSchema;

export type ReduxStoreWithManager = {
  reducerManager: ReducerManager;
} & EnhancedStore<StateSchema>;

export type ReducerManager = {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => StateSchema;
  add: (key: StateSchemaKeys, reducer: Reducer) => void;
  remove: (key: StateSchemaKeys) => void;
};

export type ThunkExtraArg = {
  api: AxiosInstance;
};

export type ThunkConfig<T> = {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
};
