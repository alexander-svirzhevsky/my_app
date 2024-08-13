import { ReduxStoreWithManager } from '@/app/providers/StoreProvider';
import { StateSchemaKeys } from '@/app/providers/StoreProvider/config/StoreSchema';
import { Reducer } from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer;
};

type ReducerListEntry = [StateSchemaKeys, Reducer];

type DynamicModuleLoaderProps = {
  children: ReactNode;
  name: StateSchemaKeys;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
};

export const DynamicModuleLoader = ({
  children,
  name,
  reducers,
  removeAfterUnmount = false,
}: DynamicModuleLoaderProps) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispath = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispath({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
          store.reducerManager.remove(name);
          dispath({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
