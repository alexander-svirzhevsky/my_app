import { ReduxStoreWithManager } from '@/app/providers/StoreProvider';
import { StateSchemaKeys } from '@/app/providers/StoreProvider/config/StoreSchema';
import { Reducer } from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer;
};

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
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKeys];
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKeys, reducer);
        dispath({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKeys);
          dispath({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
