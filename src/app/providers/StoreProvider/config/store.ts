import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StoreSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { authReducer } from '@/features/AuthByUsername';

export const configureReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        auth: authReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};

export const store = configureReduxStore();
export type AppDispatch = typeof store.dispatch;
