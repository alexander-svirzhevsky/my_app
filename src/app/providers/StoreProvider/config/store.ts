import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StoreSchema';
import { counterReducer } from '@/entities/Counter';

export const configureReduxStore = (initialState?: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
