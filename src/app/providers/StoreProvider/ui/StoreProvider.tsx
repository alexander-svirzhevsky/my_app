import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../config/store';
import { StateSchema } from '../config/StoreSchema';

type StoreProviderProps = {
    children?: ReactNode;
    initialState?: StateSchema;
};

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    return <Provider store={store}>{children}</Provider>;
};
