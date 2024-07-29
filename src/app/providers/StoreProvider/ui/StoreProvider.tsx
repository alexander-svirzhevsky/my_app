import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { configureReduxStore } from '../config/store';
import { StateSchema } from '../config/StoreSchema';

type StoreProviderProps = {
    children?: ReactNode;
    initialState?: StateSchema;
};

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const store = configureReduxStore(initialState);

    return <Provider store={store}>{children}</Provider>;
};
