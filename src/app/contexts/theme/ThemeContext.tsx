import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const LOCAL_STORAGE_THEME_KEY = 'theme';
const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

type ThemeContextProps = {
  theme?: Theme;
  toggleTheme?: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  const defaultProps = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return {
    theme,
    toggleTheme,
  };
};
