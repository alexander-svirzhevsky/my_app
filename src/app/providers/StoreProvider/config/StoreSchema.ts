import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { AuthSchema } from '@/features/AuthByUsername';
import { ProfileSchema } from '@/features/EditableProfileCard';
import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

export type StateSchema = {
  counter: CounterSchema;
  user: UserSchema;
  // async
  auth?: AuthSchema;
  profile?: ProfileSchema;
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
