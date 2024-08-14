import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StoreSchema';
import { useNavigate } from 'react-router-dom';
import { configureReduxStore } from '../config/store';

type StoreProviderProps = {
  children?: ReactNode;
  initialState?: StateSchema;
};

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
  const store = configureReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
