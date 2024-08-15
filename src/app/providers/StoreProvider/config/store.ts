import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StoreSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';

export const configureReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    // @ts-ignore
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    // @ts-ignore
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

const store = configureReduxStore();
export type AppDispatch = typeof store.dispatch;

// export type AppDispatch = ReturnType<typeof configureReduxStore>['dispatch'];
