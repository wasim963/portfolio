'use client';

import React, { createContext, useState } from "react";

export const THEME_COLORS = {
    dark: '#0d1117',
    light: '#e5e5e5'
};

const initialThemeState = {
    theme: `dark`
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