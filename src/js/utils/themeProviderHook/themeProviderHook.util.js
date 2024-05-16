import React, { createContext, useState } from "react";

const initialThemeState = {
    theme: `light`
}

export const THEME_CONTEXT = createContext(initialThemeState);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(initialThemeState.theme);

    const toggleTheme = () => {
        setTheme(theme => theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <THEME_CONTEXT.Provider value={{ theme, toggleTheme }} >
            <div className={`theme--${theme}`}>{children}</div>
        </THEME_CONTEXT.Provider>
    )
};