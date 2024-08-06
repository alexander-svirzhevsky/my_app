import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';

export enum Theme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
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
        document.body.className = newTheme;
    };

    const defaultProps = useMemo(
        () => ({
            theme,
            toggleTheme,
        }),
        [theme],
    );

    useEffect(() => {
        document.body.className = defaultTheme;
    }, []);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return {
        theme,
        toggleTheme,
    };
};
