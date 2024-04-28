import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light', // Default theme
  setTheme: () => {}
});

const themes = {
    light: 'light',
    dark: 'dark',
    solarized: 'solarized',
    monokai: 'monokai',
    dracula: 'dracula',
    cobalt: 'cobalt',
    nightOwl: 'nightOwl'
};


export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
