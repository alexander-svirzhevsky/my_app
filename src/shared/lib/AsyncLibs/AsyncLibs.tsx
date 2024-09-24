import {
  createContext,
  memo,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type LibType = typeof import('stream/promises'); // some lib

interface AsyncLibsPayload {
  SomeLib?: LibType;
  isLoaded?: boolean;
}

const AsyncLibsContext = createContext<AsyncLibsPayload>({});

const getAsyncLibsModules = async () => {
  return Promise.all([import('stream/promises')]);
};

export const AsyncLibsProvider = ({ children }: { children: ReactNode }) => {
  const SomeLibRef = useRef<LibType>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncLibsModules().then(([someLib]) => {
      SomeLibRef.current = someLib;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(
    () => ({
      SomeLib: SomeLibRef.current,
      isLoaded,
    }),
    [isLoaded],
  );

  return <AsyncLibsContext.Provider value={value}>{children}</AsyncLibsContext.Provider>;
};

export const useAsyncLibs = () => {
  return useContext(AsyncLibsContext) as Required<AsyncLibsPayload>;
};

// In component - wrap in ContextProvider and...

const DrawerComponent = memo(({}: {}) => {
  const { SomeLib } = useAsyncLibs();

  // using SomeLib.func(...)
  return '';
});

const DrawerAsync = memo((props) => {
  const { isLoaded } = useAsyncLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerComponent {...props} />;
});

export const Drawer = () => {
  return (
    <AsyncLibsProvider>
      <DrawerAsync />
    </AsyncLibsProvider>
  );
};
