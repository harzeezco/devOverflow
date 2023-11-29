/* eslint-disable object-curly-newline */

'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface ThemeContextProp {
  theme: string;
  setTheme: (value: string) => void;
}
export const ThemeContext = createContext<ThemeContextProp | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('ThemeContext is undefined');
  }

  return context;
}

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('light');

  const themeState = useMemo(() => ({ theme, setTheme }), [theme]);

  const handleThemeChange = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('prefers-color-scheme: dark').matches)
    ) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [theme]);

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
}
